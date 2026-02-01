"""
火山引擎 TTS 2.0 Web界面
基于双向流式WebSocket V3协议
"""

import asyncio
import json
import uuid
import struct
import base64
from flask import Flask, render_template_string, request, jsonify
import websockets
from config import APPID, ACCESS_TOKEN, VOICES

app = Flask(__name__)

# 保存最近的session_id用于上下文关联
last_session_id = None


class Event:
    StartConnection = 1
    FinishConnection = 2
    ConnectionStarted = 50
    ConnectionFailed = 51
    StartSession = 100
    FinishSession = 102
    SessionStarted = 150
    SessionFinished = 152
    SessionFailed = 153
    TaskRequest = 200
    TTSResponse = 352


class TTSClient:
    WS_URL = "wss://openspeech.bytedance.com/api/v3/tts/bidirection"

    def __init__(self, appid, access_token, resource_id="seed-tts-2.0"):
        self.appid = appid
        self.access_token = access_token
        self.resource_id = resource_id
        self.session_id = None

    def _build_event_frame(self, event, session_id="", payload=None):
        header = bytes([0x11, 0x14, 0x10, 0x00])
        event_bytes = struct.pack('>I', event)

        if session_id:
            session_bytes = session_id.encode('utf-8')
            session_len = struct.pack('>I', len(session_bytes))
        else:
            session_bytes = b''
            session_len = b''

        payload_json = json.dumps(payload or {}).encode('utf-8')
        payload_len = struct.pack('>I', len(payload_json))

        if session_id:
            return header + event_bytes + session_len + session_bytes + payload_len + payload_json
        return header + event_bytes + payload_len + payload_json

    def _parse_response(self, data):
        if len(data) < 4:
            return {"error": "数据太短"}

        msg_type = (data[1] >> 4) & 0x0f
        msg_flags = data[1] & 0x0f
        serial = (data[2] >> 4) & 0x0f
        offset = 4

        result = {"msg_type": msg_type}

        if msg_type == 0xf:
            if offset + 4 <= len(data):
                result["error_code"] = struct.unpack('>I', data[offset:offset+4])[0]
                offset += 4
                if offset + 4 <= len(data):
                    plen = struct.unpack('>I', data[offset:offset+4])[0]
                    offset += 4
                    if offset + plen <= len(data):
                        try:
                            result["error_msg"] = json.loads(data[offset:offset+plen])
                        except:
                            result["error_msg"] = data[offset:offset+plen].decode('utf-8', errors='ignore')
            return result

        if msg_flags & 0x4:
            if offset + 4 <= len(data):
                result["event"] = struct.unpack('>I', data[offset:offset+4])[0]
                offset += 4

                if result["event"] in (Event.SessionStarted, Event.SessionFinished, Event.SessionFailed, Event.TTSResponse, 350, 351):
                    if offset + 4 <= len(data):
                        slen = struct.unpack('>I', data[offset:offset+4])[0]
                        offset += 4 + slen

                if result["event"] == Event.ConnectionStarted:
                    if offset + 4 <= len(data):
                        clen = struct.unpack('>I', data[offset:offset+4])[0]
                        offset += 4
                        if offset + clen <= len(data):
                            result["connection_id"] = data[offset:offset+clen].decode('utf-8')
                            offset += clen

        if offset + 4 <= len(data):
            plen = struct.unpack('>I', data[offset:offset+4])[0]
            offset += 4
            if offset + plen <= len(data):
                payload_data = data[offset:offset+plen]
                if serial == 0:
                    result["audio"] = payload_data
                else:
                    try:
                        result["payload"] = json.loads(payload_data)
                    except:
                        result["payload"] = payload_data

        return result

    async def synthesize(self, text, speaker, audio_format="mp3", sample_rate=24000,
                         speech_rate=0, loudness_rate=0,
                         context_texts=None, section_id=None, use_tag_parser=False):
        """
        合成语音

        Args:
            text: 要合成的文本
            speaker: 音色ID
            audio_format: 音频格式
            sample_rate: 采样率
            speech_rate: 语速 [-50, 100]
            loudness_rate: 音量 [-50, 100]
            context_texts: 语音指令列表，如 ["用悲伤的语气说"]
            section_id: 上一次的session_id，用于上下文关联
            use_tag_parser: 是否启用COT标签解析
        """
        headers = {
            "X-Api-App-Key": self.appid,
            "X-Api-Access-Key": self.access_token,
            "X-Api-Resource-Id": self.resource_id,
            "X-Api-Connect-Id": str(uuid.uuid4()),
        }

        audio_chunks = []
        self.session_id = str(uuid.uuid4())

        async with websockets.connect(self.WS_URL, additional_headers=headers) as ws:
            # StartConnection
            await ws.send(self._build_event_frame(Event.StartConnection))
            resp = self._parse_response(await ws.recv())
            if resp.get("event") != Event.ConnectionStarted:
                raise RuntimeError(f"连接失败: {resp}")

            # 构建additions
            additions = {}
            if context_texts:
                additions["context_texts"] = context_texts
            if section_id:
                additions["section_id"] = section_id
            if use_tag_parser:
                additions["use_tag_parser"] = True

            # StartSession
            req_params = {
                "speaker": speaker,
                "audio_params": {
                    "format": audio_format,
                    "sample_rate": sample_rate,
                    "speech_rate": speech_rate,
                    "loudness_rate": loudness_rate,
                },
            }
            if additions:
                req_params["additions"] = json.dumps(additions)

            session_payload = {
                "user": {"uid": "web_user"},
                "event": Event.StartSession,
                "namespace": "BidirectionalTTS",
                "req_params": req_params,
            }
            await ws.send(self._build_event_frame(Event.StartSession, self.session_id, session_payload))

            resp = self._parse_response(await ws.recv())
            if resp.get("event") != Event.SessionStarted:
                raise RuntimeError(f"Session失败: {resp}")

            # TaskRequest
            task_payload = {"event": Event.TaskRequest, "req_params": {"text": text}}
            await ws.send(self._build_event_frame(Event.TaskRequest, self.session_id, task_payload))

            # FinishSession
            await ws.send(self._build_event_frame(Event.FinishSession, self.session_id))

            # 接收音频
            while True:
                try:
                    resp = self._parse_response(await asyncio.wait_for(ws.recv(), timeout=60))
                    event = resp.get("event")

                    if resp.get("audio"):
                        audio_chunks.append(resp["audio"])
                    elif event == Event.SessionFinished:
                        break
                    elif event == Event.SessionFailed or resp.get("error_code"):
                        raise RuntimeError(f"合成失败: {resp}")
                except asyncio.TimeoutError:
                    break

            # FinishConnection
            await ws.send(self._build_event_frame(Event.FinishConnection))

        return b''.join(audio_chunks), self.session_id


HTML_TEMPLATE = """
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>火山引擎 TTS 2.0</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            min-height: 100vh;
            padding: 30px 20px;
            color: #fff;
        }
        .container { max-width: 900px; margin: 0 auto; }
        h1 {
            text-align: center;
            margin-bottom: 30px;
            font-size: 2.2rem;
            background: linear-gradient(90deg, #00d2ff, #3a7bd5);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .card {
            background: rgba(255,255,255,0.08);
            backdrop-filter: blur(10px);
            border-radius: 16px;
            padding: 25px;
            margin-bottom: 20px;
            border: 1px solid rgba(255,255,255,0.1);
        }
        .card-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 20px;
            color: #00d2ff;
        }
        .form-group { margin-bottom: 20px; }
        label { display: block; margin-bottom: 8px; color: #a0aec0; font-size: 0.9rem; }
        select, textarea, input[type="text"] {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid rgba(255,255,255,0.1);
            border-radius: 10px;
            background: rgba(0,0,0,0.3);
            color: #fff;
            font-size: 0.95rem;
        }
        select:focus, textarea:focus, input:focus { outline: none; border-color: #3a7bd5; }
        select option { background: #1a1a2e; }
        textarea { min-height: 120px; resize: vertical; font-family: inherit; }
        .voice-info {
            margin-top: 8px;
            padding: 10px 12px;
            background: rgba(58,123,213,0.15);
            border-radius: 8px;
            font-size: 0.85rem;
            color: #a0aec0;
        }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
        .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
        .param-group { text-align: center; }
        .param-value { font-size: 1.1rem; font-weight: 600; color: #3a7bd5; margin-bottom: 5px; }
        input[type="range"] {
            width: 100%;
            height: 6px;
            -webkit-appearance: none;
            background: rgba(255,255,255,0.2);
            border-radius: 3px;
        }
        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 18px; height: 18px;
            background: linear-gradient(135deg, #00d2ff, #3a7bd5);
            border-radius: 50%;
            cursor: pointer;
        }
        .btn {
            width: 100%;
            padding: 15px;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            background: linear-gradient(135deg, #00d2ff, #3a7bd5);
            color: #fff;
            transition: all 0.3s;
        }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(58,123,213,0.4); }
        .btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        .result { margin-top: 20px; display: none; }
        .result.show { display: block; }
        .status { text-align: center; padding: 12px; border-radius: 8px; margin-bottom: 15px; }
        .status.loading { background: rgba(255,193,7,0.2); color: #ffc107; }
        .status.success { background: rgba(40,167,69,0.2); color: #28a745; }
        .status.error { background: rgba(220,53,69,0.2); color: #dc3545; }
        .audio-player { width: 100%; margin: 15px 0; }
        .download-btn {
            display: inline-block;
            padding: 10px 20px;
            background: rgba(255,255,255,0.1);
            color: #fff;
            text-decoration: none;
            border-radius: 8px;
        }
        .spinner {
            display: inline-block;
            width: 18px; height: 18px;
            border: 2px solid rgba(255,255,255,0.3);
            border-top-color: #fff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-right: 8px;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .help-text { font-size: 0.8rem; color: #718096; margin-top: 6px; line-height: 1.5; }
        .insert-btn {
            padding: 6px 12px;
            background: rgba(58,123,213,0.3);
            border: none;
            color: #fff;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.8rem;
            margin: 3px;
        }
        .insert-btn:hover { background: rgba(58,123,213,0.5); }
        .quick-inserts { margin-top: 10px; display: flex; flex-wrap: wrap; gap: 5px; }
        .example-box { background: rgba(0,0,0,0.2); border-radius: 8px; padding: 12px; margin-top: 10px; font-size: 0.85rem; }
        .example-box code { color: #00d2ff; background: rgba(0,210,255,0.1); padding: 2px 6px; border-radius: 4px; }
        .toggle-item {
            display: flex; align-items: center; gap: 8px;
            background: rgba(0,0,0,0.2); padding: 8px 12px; border-radius: 8px; font-size: 0.85rem;
        }
        .toggle-item input[type="checkbox"] { width: 18px; height: 18px; accent-color: #3a7bd5; }
        .session-info { font-size: 0.8rem; color: #718096; margin-top: 10px; padding: 8px; background: rgba(0,0,0,0.2); border-radius: 6px; }
        @media (max-width: 600px) { .grid-3, .grid-2 { grid-template-columns: 1fr; } }
    </style>
</head>
<body>
    <div class="container">
        <h1>火山引擎 TTS 2.0</h1>

        <div class="card">
            <div class="card-title">🎙️ 音色选择</div>
            <div class="form-group">
                <select id="voice">
                    {% for scene, voices in voices_by_scene.items() %}
                    <optgroup label="{{ scene }}">
                        {% for name, info in voices %}
                        <option value="{{ name }}" data-lang="{{ info.language }}" data-features="{{ info.features }}" data-voice-type="{{ info.voice_type }}">{{ name }}</option>
                        {% endfor %}
                    </optgroup>
                    {% endfor %}
                </select>
                <div class="voice-info" id="voiceInfo"></div>
            </div>
        </div>

        <div class="card">
            <div class="card-title">📝 合成文本</div>
            <div class="form-group">
                <textarea id="text" placeholder="请输入要合成的文本...">你好，欢迎使用火山引擎豆包语音合成2.0。这是一段测试文本。</textarea>
                <div class="help-text">建议小于300字符效果更佳</div>
            </div>
        </div>

        <div class="card">
            <div class="card-title">🎯 语音指令 (context_texts)</div>
            <div class="form-group">
                <label>输入语音指令来控制情绪/语气/语速等</label>
                <input type="text" id="contextText" placeholder="例如：你可以用特别特别痛心的语气说话吗？">
                <div class="example-box">
                    <div>快速插入:</div>
                    <div class="quick-inserts">
                        <button class="insert-btn" onclick="setContextText('你可以用悲伤的语气说话吗？')">悲伤</button>
                        <button class="insert-btn" onclick="setContextText('你可以用生气的语气说话吗？')">生气</button>
                        <button class="insert-btn" onclick="setContextText('你可以用开心的语气说话吗？')">开心</button>
                        <button class="insert-btn" onclick="setContextText('你可以用撒娇的语气说话吗？')">撒娇</button>
                        <button class="insert-btn" onclick="setContextText('你可以用暧昧的语气说话吗？')">暧昧</button>
                        <button class="insert-btn" onclick="setContextText('你可以用骄傲的语气说话吗？')">骄傲</button>
                        <button class="insert-btn" onclick="setContextText('你可以说慢一点吗？')">说慢点</button>
                        <button class="insert-btn" onclick="setContextText('你可以说快一点吗？')">说快点</button>
                        <button class="insert-btn" onclick="setContextText('你嗓门再小点。')">小声点</button>
                        <button class="insert-btn" onclick="setContextText('你嗓门再大点。')">大声点</button>
                        <button class="insert-btn" onclick="setContextText('嗯，你的语气再欢乐一点')">欢乐</button>
                        <button class="insert-btn" onclick="setContextText('用低沉沙哑的语气说话')">低沉沙哑</button>
                    </div>
                </div>
                <div class="help-text">此字段不参与计费，仅用于调整语音风格</div>
            </div>
        </div>

        <div class="card">
            <div class="card-title">📖 上下文关联 (section_id)</div>
            <div class="form-group">
                <label class="toggle-item">
                    <input type="checkbox" id="useLastSession">
                    使用上一次合成的session作为上下文
                </label>
                <div class="session-info" id="sessionInfo">上一次session: 无</div>
                <div class="help-text">开启后，模型会参考上一次合成的语音风格，实现连续对话效果。有效期10分钟内最长30轮。</div>
            </div>
        </div>

        <div class="card">
            <div class="card-title">🏷️ COT语音标签 (仅声音复刻2.0音色)</div>
            <div class="form-group">
                <label class="toggle-item">
                    <input type="checkbox" id="useTagParser">
                    启用COT标签解析
                </label>
                <div class="example-box">
                    <div>标签格式: <code>&lt;cot text=描述&gt;文本内容&lt;/cot&gt;</code></div>
                    <div style="margin-top:8px">示例:</div>
                    <div class="quick-inserts">
                        <button class="insert-btn" onclick="insertCotTag('急促难耐')">急促难耐</button>
                        <button class="insert-btn" onclick="insertCotTag('语速缓慢')">语速缓慢</button>
                        <button class="insert-btn" onclick="insertCotTag('轻声细语')">轻声细语</button>
                        <button class="insert-btn" onclick="insertCotTag('大声怒吼')">大声怒吼</button>
                        <button class="insert-btn" onclick="insertCotTag('惊恐')">惊恐</button>
                        <button class="insert-btn" onclick="insertCotTag('开心地笑')">开心地笑</button>
                    </div>
                </div>
                <div class="help-text">注意: 仅限声音复刻2.0复刻的音色(saturn_前缀)，单句text最好小于64字符</div>
            </div>
        </div>

        <div class="card">
            <div class="card-title">⚙️ 音频参数</div>
            <div class="grid-3" style="margin-bottom:20px">
                <div class="param-group">
                    <label>语速</label>
                    <div class="param-value" id="speedValue">0</div>
                    <input type="range" id="speed" min="-50" max="100" step="10" value="0">
                    <div class="help-text">-50~100</div>
                </div>
                <div class="param-group">
                    <label>音量</label>
                    <div class="param-value" id="volumeValue">0</div>
                    <input type="range" id="volume" min="-50" max="100" step="10" value="0">
                    <div class="help-text">-50~100</div>
                </div>
                <div class="param-group">
                    <label>采样率</label>
                    <select id="sampleRate" style="margin-top:5px">
                        <option value="24000" selected>24000 Hz</option>
                        <option value="16000">16000 Hz</option>
                        <option value="48000">48000 Hz</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label>音频格式</label>
                <select id="encoding">
                    <option value="mp3" selected>MP3</option>
                    <option value="pcm">PCM</option>
                    <option value="ogg_opus">OGG Opus</option>
                </select>
            </div>
        </div>

        <button class="btn" id="synthesizeBtn" onclick="synthesize()">开始合成</button>

        <div class="card result" id="result">
            <div class="status" id="status"></div>
            <audio id="audioPlayer" class="audio-player" controls></audio>
            <a id="downloadLink" class="download-btn" download="tts_output.mp3">📥 下载音频</a>
        </div>
    </div>

    <script>
        let lastSessionId = null;

        function updateVoiceInfo() {
            const select = document.getElementById('voice');
            const option = select.options[select.selectedIndex];
            document.getElementById('voiceInfo').innerHTML =
                `<strong>语种:</strong> ${option.dataset.lang} | <strong>特性:</strong> ${option.dataset.features}<br>` +
                `<small style="color:#718096">voice_type: ${option.dataset.voiceType}</small>`;
        }
        document.getElementById('voice').addEventListener('change', updateVoiceInfo);
        updateVoiceInfo();

        ['speed', 'volume'].forEach(p => {
            const slider = document.getElementById(p);
            const display = document.getElementById(p + 'Value');
            slider.addEventListener('input', () => display.textContent = slider.value);
        });

        function setContextText(text) {
            document.getElementById('contextText').value = text;
        }

        function insertCotTag(desc) {
            const ta = document.getElementById('text');
            const start = ta.selectionStart;
            const end = ta.selectionEnd;
            const selectedText = ta.value.substring(start, end) || '文本内容';
            const tag = '<cot text=' + desc + '>' + selectedText + '</cot>';
            ta.value = ta.value.substring(0, start) + tag + ta.value.substring(end);
            ta.focus();
        }

        function updateSessionInfo() {
            const info = document.getElementById('sessionInfo');
            if (lastSessionId) {
                info.textContent = '上一次session: ' + lastSessionId.substring(0, 8) + '...';
            } else {
                info.textContent = '上一次session: 无';
            }
        }

        async function synthesize() {
            const btn = document.getElementById('synthesizeBtn');
            const result = document.getElementById('result');
            const status = document.getElementById('status');
            const audio = document.getElementById('audioPlayer');
            const downloadLink = document.getElementById('downloadLink');

            const text = document.getElementById('text').value.trim();
            if (!text) { alert('请输入文本'); return; }

            const contextText = document.getElementById('contextText').value.trim();
            const useLastSession = document.getElementById('useLastSession').checked;
            const useTagParser = document.getElementById('useTagParser').checked;

            btn.disabled = true;
            btn.innerHTML = '<span class="spinner"></span>合成中...';
            result.classList.add('show');
            status.className = 'status loading';
            status.textContent = '正在合成，请稍候...';

            try {
                const response = await fetch('/synthesize', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        voice: document.getElementById('voice').value,
                        text: text,
                        speed: parseInt(document.getElementById('speed').value),
                        volume: parseInt(document.getElementById('volume').value),
                        encoding: document.getElementById('encoding').value,
                        sample_rate: parseInt(document.getElementById('sampleRate').value),
                        context_text: contextText,
                        section_id: useLastSession ? lastSessionId : null,
                        use_tag_parser: useTagParser,
                    })
                });
                const data = await response.json();

                if (data.success) {
                    status.className = 'status success';
                    status.textContent = '合成成功！';
                    const mimeType = {'mp3':'audio/mpeg','pcm':'audio/pcm','ogg_opus':'audio/ogg'}[data.encoding] || 'audio/mpeg';
                    const audioData = 'data:' + mimeType + ';base64,' + data.audio;
                    audio.src = audioData;
                    downloadLink.href = audioData;
                    downloadLink.download = data.filename;

                    // 保存session_id用于下次上下文关联
                    if (data.session_id) {
                        lastSessionId = data.session_id;
                        updateSessionInfo();
                    }
                } else {
                    status.className = 'status error';
                    status.textContent = '合成失败: ' + data.error;
                }
            } catch (e) {
                status.className = 'status error';
                status.textContent = '请求失败: ' + e.message;
            }

            btn.disabled = false;
            btn.textContent = '开始合成';
        }

        updateSessionInfo();
    </script>
</body>
</html>
"""


@app.route('/')
def index():
    voices_by_scene = {}
    for name, info in VOICES.items():
        scene = info["scene"]
        if scene not in voices_by_scene:
            voices_by_scene[scene] = []
        voices_by_scene[scene].append((name, info))
    return render_template_string(HTML_TEMPLATE, voices_by_scene=voices_by_scene)


@app.route('/synthesize', methods=['POST'])
def synthesize():
    global last_session_id

    data = request.json
    voice_name = data.get('voice')
    text = data.get('text', '')
    speed = data.get('speed', 0)
    volume = data.get('volume', 0)
    encoding = data.get('encoding', 'mp3')
    sample_rate = data.get('sample_rate', 24000)
    context_text = data.get('context_text', '')
    section_id = data.get('section_id')
    use_tag_parser = data.get('use_tag_parser', False)

    if not text:
        return jsonify({'success': False, 'error': '文本不能为空'})

    voice_info = VOICES.get(voice_name)
    if not voice_info:
        return jsonify({'success': False, 'error': '未知音色'})

    speaker = voice_info["voice_type"]

    # 构建context_texts
    context_texts = None
    if context_text:
        context_texts = [context_text]

    try:
        client = TTSClient(APPID, ACCESS_TOKEN, "seed-tts-2.0")
        audio_data, session_id = asyncio.run(client.synthesize(
            text=text,
            speaker=speaker,
            audio_format=encoding,
            sample_rate=sample_rate,
            speech_rate=speed,
            loudness_rate=volume,
            context_texts=context_texts,
            section_id=section_id,
            use_tag_parser=use_tag_parser,
        ))

        # 保存session_id
        last_session_id = session_id

        return jsonify({
            'success': True,
            'audio': base64.b64encode(audio_data).decode('utf-8'),
            'filename': f'tts_{voice_name}.{encoding}',
            'encoding': encoding,
            'session_id': session_id,
        })

    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})


if __name__ == '__main__':
    print("\n" + "=" * 50)
    print("火山引擎 TTS 2.0 Web界面")
    print("=" * 50)
    print("\n打开浏览器访问: http://127.0.0.1:5000")
    print("\n按 Ctrl+C 停止服务\n")
    app.run(debug=True, port=5000)
