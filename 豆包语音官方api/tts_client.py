"""
火山引擎 TTS 2.0 双向流式WebSocket V3客户端
基于官方文档: https://www.volcengine.com/docs/6561/1329505
"""

import asyncio
import json
import uuid
import struct
from enum import IntEnum
from typing import Optional, Callable
import websockets


class Event(IntEnum):
    """事件类型"""
    # 上行 - Connection
    StartConnection = 1
    FinishConnection = 2
    # 下行 - Connection
    ConnectionStarted = 50
    ConnectionFailed = 51
    ConnectionFinished = 52
    # 上行 - Session
    StartSession = 100
    CancelSession = 101
    FinishSession = 102
    # 下行 - Session
    SessionStarted = 150
    SessionCanceled = 151
    SessionFinished = 152
    SessionFailed = 153
    # 数据
    TaskRequest = 200
    TTSSentenceStart = 350
    TTSSentenceEnd = 351
    TTSResponse = 352


class TTSClient:
    """TTS 2.0 WebSocket客户端"""

    WS_URL = "wss://openspeech.bytedance.com/api/v3/tts/bidirection"

    def __init__(self, appid: str, access_token: str, resource_id: str = "seed-tts-2.0"):
        """
        初始化客户端

        Args:
            appid: 应用ID
            access_token: 访问令牌
            resource_id: 资源ID
                - seed-tts-2.0: 豆包语音合成模型2.0
                - seed-tts-1.0: 豆包语音合成模型1.0
                - seed-icl-2.0: 声音复刻2.0
        """
        self.appid = appid
        self.access_token = access_token
        self.resource_id = resource_id
        self.ws: Optional[websockets.WebSocketClientProtocol] = None

    def _build_header(self, msg_type: int, msg_flags: int, serial: int = 1, compress: int = 0) -> bytes:
        """构建4字节header"""
        header = bytearray(4)
        header[0] = 0x11  # version=1, header_size=1 (4 bytes)
        header[1] = (msg_type << 4) | msg_flags
        header[2] = (serial << 4) | compress
        header[3] = 0x00
        return bytes(header)

    def _build_event_frame(self, event: int, session_id: str = "", payload: dict = None) -> bytes:
        """构建带event的帧"""
        # Header: Full-client request (0x1) with event (0x4), JSON (0x1), no compression
        header = self._build_header(0x1, 0x4, 0x1, 0x0)

        # Event number (4 bytes, big-endian)
        event_bytes = struct.pack('>I', event)

        # Session ID (如果有)
        if session_id:
            session_bytes = session_id.encode('utf-8')
            session_len = struct.pack('>I', len(session_bytes))
        else:
            session_bytes = b''
            session_len = b''

        # Payload
        payload_json = json.dumps(payload or {}).encode('utf-8')
        payload_len = struct.pack('>I', len(payload_json))

        if session_id:
            return header + event_bytes + session_len + session_bytes + payload_len + payload_json
        else:
            return header + event_bytes + payload_len + payload_json

    def _parse_response(self, data: bytes) -> dict:
        """解析服务端响应"""
        if len(data) < 4:
            return {"error": "数据太短"}

        # 解析header
        version = (data[0] >> 4) & 0x0f
        header_size = data[0] & 0x0f
        msg_type = (data[1] >> 4) & 0x0f
        msg_flags = data[1] & 0x0f
        serial = (data[2] >> 4) & 0x0f
        compress = data[2] & 0x0f

        result = {
            "version": version,
            "msg_type": msg_type,
            "msg_flags": msg_flags,
            "serial": serial,
            "compress": compress,
        }

        offset = header_size * 4

        # 错误帧
        if msg_type == 0xf:
            if offset + 4 <= len(data):
                error_code = struct.unpack('>I', data[offset:offset+4])[0]
                offset += 4
                result["error_code"] = error_code

                if offset + 4 <= len(data):
                    payload_len = struct.unpack('>I', data[offset:offset+4])[0]
                    offset += 4
                    if offset + payload_len <= len(data):
                        try:
                            result["error_payload"] = json.loads(data[offset:offset+payload_len].decode('utf-8'))
                        except:
                            result["error_payload"] = data[offset:offset+payload_len].decode('utf-8', errors='ignore')
            return result

        # 带event的帧
        if msg_flags & 0x4:
            if offset + 4 <= len(data):
                event = struct.unpack('>I', data[offset:offset+4])[0]
                offset += 4
                result["event"] = event

                # 某些event有session_id
                if event in (Event.SessionStarted, Event.SessionFinished, Event.SessionFailed,
                             Event.SessionCanceled, Event.TTSSentenceStart, Event.TTSSentenceEnd,
                             Event.TTSResponse):
                    if offset + 4 <= len(data):
                        session_len = struct.unpack('>I', data[offset:offset+4])[0]
                        offset += 4
                        if offset + session_len <= len(data):
                            result["session_id"] = data[offset:offset+session_len].decode('utf-8')
                            offset += session_len

                # ConnectionStarted 有 connection_id
                if event == Event.ConnectionStarted:
                    if offset + 4 <= len(data):
                        conn_len = struct.unpack('>I', data[offset:offset+4])[0]
                        offset += 4
                        if offset + conn_len <= len(data):
                            result["connection_id"] = data[offset:offset+conn_len].decode('utf-8')
                            offset += conn_len

        # Payload
        if offset + 4 <= len(data):
            payload_len = struct.unpack('>I', data[offset:offset+4])[0]
            offset += 4

            if offset + payload_len <= len(data):
                payload_data = data[offset:offset+payload_len]

                # 音频数据 (serial=0, raw)
                if serial == 0:
                    result["audio"] = payload_data
                else:
                    # JSON数据
                    try:
                        result["payload"] = json.loads(payload_data.decode('utf-8'))
                    except:
                        result["payload"] = payload_data

        return result

    async def connect(self) -> bool:
        """建立WebSocket连接"""
        connect_id = str(uuid.uuid4())

        headers = {
            "X-Api-App-Key": self.appid,
            "X-Api-Access-Key": self.access_token,
            "X-Api-Resource-Id": self.resource_id,
            "X-Api-Connect-Id": connect_id,
        }

        try:
            self.ws = await websockets.connect(
                self.WS_URL,
                additional_headers=headers,
                ping_interval=20,
                ping_timeout=10,
            )

            # 发送 StartConnection
            frame = self._build_event_frame(Event.StartConnection)
            await self.ws.send(frame)

            # 等待 ConnectionStarted
            response = await self.ws.recv()
            result = self._parse_response(response)

            if result.get("event") == Event.ConnectionStarted:
                print(f"连接成功, connection_id: {result.get('connection_id', 'N/A')}")
                return True
            elif result.get("event") == Event.ConnectionFailed:
                print(f"连接失败: {result}")
                return False
            else:
                print(f"未知响应: {result}")
                return False

        except Exception as e:
            print(f"连接错误: {e}")
            return False

    async def synthesize(
        self,
        text: str,
        speaker: str,
        audio_format: str = "mp3",
        sample_rate: int = 24000,
        speech_rate: int = 0,
        on_audio: Optional[Callable[[bytes], None]] = None,
    ) -> bytes:
        """
        合成语音

        Args:
            text: 要合成的文本
            speaker: 音色ID
            audio_format: 音频格式 (mp3/wav/pcm/ogg_opus)
            sample_rate: 采样率
            speech_rate: 语速 [-50, 100]
            on_audio: 音频回调函数（流式）

        Returns:
            完整的音频数据
        """
        if not self.ws:
            raise RuntimeError("未连接，请先调用 connect()")

        session_id = str(uuid.uuid4())
        audio_chunks = []

        # 构建 StartSession payload
        session_payload = {
            "user": {"uid": "test_user"},
            "event": Event.StartSession,
            "namespace": "BidirectionalTTS",
            "req_params": {
                "speaker": speaker,
                "audio_params": {
                    "format": audio_format,
                    "sample_rate": sample_rate,
                    "speech_rate": speech_rate,
                },
            }
        }

        # 发送 StartSession
        frame = self._build_event_frame(Event.StartSession, session_id, session_payload)
        await self.ws.send(frame)

        # 等待 SessionStarted
        response = await self.ws.recv()
        result = self._parse_response(response)

        if result.get("event") != Event.SessionStarted:
            raise RuntimeError(f"Session启动失败: {result}")

        print(f"Session已启动: {session_id[:8]}...")

        # 发送文本 TaskRequest
        task_payload = {
            "event": Event.TaskRequest,
            "req_params": {
                "text": text,
            }
        }
        frame = self._build_event_frame(Event.TaskRequest, session_id, task_payload)
        await self.ws.send(frame)

        # 发送 FinishSession (表示没有更多文本)
        frame = self._build_event_frame(Event.FinishSession, session_id)
        await self.ws.send(frame)

        # 接收音频响应
        while True:
            try:
                response = await asyncio.wait_for(self.ws.recv(), timeout=30)
                result = self._parse_response(response)

                event = result.get("event")

                if event == Event.TTSResponse:
                    audio_data = result.get("audio")
                    if audio_data:
                        audio_chunks.append(audio_data)
                        if on_audio:
                            on_audio(audio_data)

                elif event == Event.TTSSentenceStart:
                    payload = result.get("payload", {})
                    text_segment = payload.get("res_params", {}).get("text", "")
                    if text_segment:
                        print(f"  正在合成: {text_segment[:30]}...")

                elif event == Event.SessionFinished:
                    print("合成完成")
                    break

                elif event == Event.SessionFailed:
                    payload = result.get("payload", {})
                    raise RuntimeError(f"合成失败: {payload}")

                elif result.get("error_code"):
                    raise RuntimeError(f"错误: code={result.get('error_code')}, {result.get('error_payload')}")

            except asyncio.TimeoutError:
                print("接收超时")
                break

        return b''.join(audio_chunks)

    async def close(self):
        """关闭连接"""
        if self.ws:
            try:
                # 发送 FinishConnection
                frame = self._build_event_frame(Event.FinishConnection)
                await self.ws.send(frame)
                await self.ws.close()
            except:
                pass
            self.ws = None


async def test_tts():
    """测试TTS"""
    from config import APPID, ACCESS_TOKEN, VOICES

    print("=" * 50)
    print("火山引擎 TTS 2.0 测试")
    print("=" * 50)

    # 创建客户端
    client = TTSClient(
        appid=APPID,
        access_token=ACCESS_TOKEN,
        resource_id="seed-tts-2.0"  # TTS 2.0
    )

    try:
        # 连接
        if not await client.connect():
            print("连接失败!")
            return

        # 选择音色
        voice_name = "Vivi 2.0"
        voice_info = VOICES[voice_name]
        speaker = voice_info["voice_type"]

        text = "你好，欢迎使用火山引擎豆包语音合成2.0。这是一段测试文本。"

        print(f"\n音色: {voice_name} ({speaker})")
        print(f"文本: {text}")
        print()

        # 合成
        audio_data = await client.synthesize(
            text=text,
            speaker=speaker,
            audio_format="mp3",
            sample_rate=24000,
        )

        # 保存
        output_file = "test_output.mp3"
        with open(output_file, 'wb') as f:
            f.write(audio_data)

        print(f"\n音频已保存: {output_file}")
        print(f"文件大小: {len(audio_data):,} 字节")

    except Exception as e:
        print(f"错误: {type(e).__name__}: {e}")

    finally:
        await client.close()


if __name__ == "__main__":
    asyncio.run(test_tts())
