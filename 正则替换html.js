```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://npm.elemecdn.com/lxgw-wenkai-screen-webfont/style.css" media="print" onload="this.media='all'">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&display=swap" media="print" onload="this.media='all'">

<style>
    @import url("https://fontsapi.zeoseven.com/309/main/result.css");
    @import url("https://fontsapi.zeoseven.com/217/main/result.css");

    :root {
        --bg-color: #1a1a1a;
        --chat-bg: #000000;
        --primary: #ff0055;
        --secondary: #bd00ff;
        --text-color: #ffffff;
        --text-sub: #aaa;
        --bubble-other: #2b2b2b;
        --bubble-self: #8b1a55;
        --input-bg: #111;
        --input-border: #444;
        --border-color: #333;
        --header-bg: linear-gradient(90deg, #2a0014, #1a002a);
        --modal-bg: #1a1a1a;
        --modal-border: #ff0055;
        --base-font-size: 14px;
        --font-family: "Microsoft YaHei", sans-serif;
        --list-item-bg: #1f1f1f;
        --list-item-hover: #2a2a2a;
        --phone-width: 400px;
        --avatar-size: 40px;
        --sender-name-size: 12px;
        --sender-title-size: 11px;
        --card-padding: 12px 15px;
        --card-min-width: 180px;
        --card-border-radius: 8px;
        --card-icon-size: 24px;
        --card-title-size: 14px;
        --card-message-size: 13px;
        --card-small-size: 11px;
        --music-cover-size: 45px;
        --music-play-size: 32px;
        --image-placeholder-height: 100px;
        --image-placeholder-width: 150px;
        --image-icon-size: 2em;
        --moment-avatar-size: 40px;
        --moment-image-height: 120px;
        --moment-content-size: 14px;
        --moment-time-size: 11px;
        --moment-stat-size: 12px;
        --moment-people-size: 13px;
        --comment-size: 13px;
        --private-header-bg: linear-gradient(90deg, #1a0030, #300030);
        --modal-text-color: #e0e0e0;
        --modal-text-sub: #999999;
        --moment-text-color: var(--text-color);
        --moment-text-sub: var(--text-sub);
        --input-text-color: var(--text-color);
        --system-msg-color: #aaaaaa;
    }

    [data-theme="light"] {
        --bg-color: #f5f5f5;
        --chat-bg: #ededed;
        --primary: #07c160;
        --secondary: #1aad19;
        --text-color: #333333;
        --text-sub: #666666;
        --bubble-other: #ffffff;
        --bubble-self: #4aaf38;
        --input-bg: #f7f7f7;
        --input-border: #ddd;
        --border-color: #dcdcdc;
        --header-bg: #ededed;
        --modal-bg: #ffffff;
        --modal-border: #07c160;
        --list-item-bg: #ffffff;
        --list-item-hover: #f0f0f0;
        --private-header-bg: linear-gradient(90deg, #e8e0f0, #f0e0f0);
        --modal-text-color: #333333;
        --modal-text-sub: #666666;
        --moment-text-color: #333333;
        --moment-text-sub: #666666;
        --input-text-color: #333333;
        --system-msg-color: #666666;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
        background: transparent;
        color: var(--text-color);
        font-family: var(--font-family);
        font-size: var(--base-font-size);
        padding: 5px;
    }

    .font-lxgw { font-family: "LXGW WenKai Screen", sans-serif !important; }
    .font-song { font-family: "Noto Serif SC", serif !important; }
    .font-jinghua { font-family: "KingHwaOldSong", serif !important; }
    .font-culiu { font-family: "CLFN 24x CN", cursive !important; }

    .phone-container {
        max-width: var(--phone-width);
        margin: 0 auto;
        background: var(--chat-bg);
        border-radius: 24px;
        overflow: hidden;
        border: 3px solid var(--border-color);
        box-shadow: 0 10px 40px rgba(0,0,0,0.4);
        min-height: 600px;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .page { display: none; flex-direction: column; flex: 1; min-height: 0; position: relative; }
    .page.active { display: flex; }

    .chat-header {
        background: var(--header-bg);
        padding: 12px 15px;
        border-bottom: 1px solid var(--border-color);
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .chat-header-info { flex: 1; }
    .header-title { font-size: 1.1em; font-weight: bold; color: var(--primary); }
    .header-status { font-size: 0.75em; color: var(--text-sub); }

    .lurker-chat-bubbles {
        display: flex; gap: 6px; align-items: center;
    }
    .lurker-chat-bubble {
        position: relative; width: 28px; height: 28px; border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex; align-items: center; justify-content: center;
        color: #fff; font-size: 12px; font-weight: bold;
        cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;
        box-shadow: 0 2px 6px rgba(102, 126, 234, 0.4);
    }
    .lurker-chat-bubble:hover {
        transform: scale(1.15); box-shadow: 0 4px 12px rgba(102, 126, 234, 0.6);
    }
    .lurker-chat-bubble .lurker-unread-dot {
        position: absolute; top: -2px; right: -2px;
        width: 8px; height: 8px; background: #ff3b30;
        border-radius: 50%; border: 2px solid var(--header-bg);
        animation: pulse 1.5s infinite;
    }
    .active-chat-bubble {
        background: transparent !important; padding: 0;
    }
    .header-chat-avatar {
        width: 100%; height: 100%; border-radius: 50%; object-fit: cover;
    }

    .header-btn {
        width: 32px; height: 32px; border-radius: 50%; border: none;
        background: rgba(255,255,255,0.1); color: var(--text-color);
        font-size: 16px; cursor: pointer; display: flex;
        align-items: center; justify-content: center; transition: 0.2s;
    }
    .header-btn:hover { background: var(--primary); color: white; }

    .header-back {
        width: 32px; height: 32px; border-radius: 50%; border: none;
        background: transparent; color: var(--text-color);
        font-size: 20px; cursor: pointer; display: flex;
        align-items: center; justify-content: center; transition: 0.2s;
    }
    .header-back:hover { color: var(--primary); }

    .chat-container {
        flex: 1; display: flex; flex-direction: column;
        position: relative; background-size: cover; background-position: center;
        min-height: 0;
    }

    .chat-bg-overlay {
        position: absolute; top: 0; left: 0; right: 0; bottom: 0;
        background: var(--chat-bg); opacity: 0.85; z-index: 0; pointer-events: none;
    }

    .message-list {
        flex: 1; padding: 15px; display: flex; flex-direction: column;
        gap: 12px; overflow-y: auto; position: relative; z-index: 1;
    }

    .message-row {
        display: flex; align-items: flex-start; max-width: 85%;
        animation: fadeIn 0.3s ease;
    }
    .message-row.self { align-self: flex-end; flex-direction: row-reverse; }

    .avatar-container { flex-shrink: 0; margin-right: 10px; cursor: pointer; transition: transform 0.2s; position: relative; }
    .avatar-container:hover { transform: scale(1.08); }
    .message-row.self .avatar-container { margin-right: 0; margin-left: 10px; }
    .private-unread-dot {
        position: absolute; top: -2px; right: -2px;
        width: calc(var(--avatar-size) * 0.25); height: calc(var(--avatar-size) * 0.25);
        background: #ff3b30; border-radius: 50%; 
        border: 2px solid var(--chat-bg);
        animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.2); opacity: 0.8; }
    }

    .avatar-img {
        width: var(--avatar-size); height: var(--avatar-size); border-radius: 6px;
        object-fit: cover; border: none;
    }

    .avatar-placeholder {
        width: var(--avatar-size); height: var(--avatar-size); border-radius: 6px;
        display: flex; align-items: center; justify-content: center;
        background: var(--list-item-bg); border: 1px solid var(--border-color);
        font-size: 20px;
    }

    .message-content-wrapper {
        display: flex;
        flex-direction: column;
        min-width: 0;
    }

    .sender-info {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 4px;
        font-size: var(--sender-name-size);
    }

    .sender-name-text { font-weight: bold; color: var(--primary); }
    .sender-divider { color: var(--text-sub); opacity: 0.6; }
    .sender-title-text { font-weight: normal; font-size: var(--sender-title-size); }

    .bubble {
        background: var(--bubble-other); padding: 10px 14px;
        border-radius: 4px 12px 12px 12px; line-height: 1.5;
        border: 1px solid var(--border-color); word-wrap: break-word;
        color: var(--bubble-text-color, #000000);
    }

    .bubble-self {
        background: var(--bubble-self); padding: 10px 14px;
        border-radius: 12px 4px 12px 12px; line-height: 1.5;
        color: #ffffff; word-wrap: break-word;
    }
    .self-card-wrapper {
        display: flex; justify-content: flex-end;
    }

    .at-target {
        color: var(--secondary); font-weight: bold;
        text-shadow: -1px -1px 0 rgba(0,0,0,0.5), 1px -1px 0 rgba(0,0,0,0.5),
                     -1px 1px 0 rgba(0,0,0,0.5), 1px 1px 0 rgba(0,0,0,0.5);
        padding: 0 2px;
    }

    .voice-msg {
        background: linear-gradient(90deg, var(--primary) 0%, var(--chat-bg) 150%);
        color: white; cursor: pointer; display: flex; align-items: center;
        gap: 8px; min-width: 100px; padding: 5px 10px; border-radius: 4px;
    }
    .voice-text { display: none; margin-top: 8px; padding-top: 8px;
        border-top: 1px solid rgba(255,255,255,0.3); font-size: 0.85em; font-style: italic; }

    .image-msg { cursor: pointer; }
    .image-placeholder {
        background: rgba(0,0,0,0.1);
        height: var(--image-placeholder-height);
        width: var(--image-placeholder-width);
        display: flex; flex-direction: column; align-items: center;
        justify-content: center; color: var(--primary);
        border: 2px dashed var(--border-color); border-radius: var(--card-border-radius);
    }
    .image-placeholder span { font-size: var(--image-icon-size); }
    .image-filename { font-size: var(--card-small-size); color: var(--text-sub); margin-top: 5px; word-break: break-all; text-align: center; }
    .image-desc { display: none; margin-top: 8px; font-size: 0.85em;
        color: var(--text-sub); background: rgba(0,0,0,0.05);
        padding: 8px; border-radius: 4px; border-left: 3px solid var(--primary); line-height: 1.6; }

    .redpacket-card {
        background: linear-gradient(135deg, #fa9d3b 0%, #e6463f 100%);
        border-radius: var(--card-border-radius);
        padding: var(--card-padding);
        min-width: var(--card-min-width);
        cursor: pointer; color: #fff; position: relative; overflow: hidden;
    }
    .redpacket-card::before {
        content: ''; position: absolute; top: -20px; right: -20px;
        width: 80px; height: 80px; background: rgba(255,255,255,0.1); border-radius: 50%;
    }
    .redpacket-header { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
    .redpacket-icon { font-size: var(--card-icon-size); }
    .redpacket-title { font-size: var(--card-title-size); font-weight: bold; }
    .redpacket-message { font-size: var(--card-message-size); opacity: 0.9; margin-bottom: 6px; }
    .redpacket-amount { font-size: var(--card-small-size); opacity: 0.7; }
    .redpacket-target { font-size: var(--card-small-size); margin-top: 4px; padding-top: 4px;
        border-top: 1px solid rgba(255,255,255,0.2); opacity: 0.8; }
    .redpacket-card.exclusive { background: linear-gradient(135deg, #ff8c00 0%, #ff5500 100%); }
    .redpacket-card.claimed { 
        background: linear-gradient(135deg, #888 0%, #666 100%); 
        cursor: default; 
    }
    .redpacket-card.claimed .redpacket-icon { opacity: 0.6; }
    .redpacket-claimed-badge {
        position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
        background: rgba(0,0,0,0.5); color: #fff; padding: 4px 12px;
        border-radius: 12px; font-size: 12px; font-weight: bold;
    }

    .music-card {
        background: linear-gradient(135deg, #1db954 0%, #191414 100%);
        border-radius: var(--card-border-radius);
        padding: var(--card-padding);
        min-width: calc(var(--card-min-width) + 20px);
        cursor: pointer; color: #fff; display: flex; align-items: center; gap: 12px;
    }
    .music-cover {
        width: var(--music-cover-size); height: var(--music-cover-size);
        background: rgba(255,255,255,0.1); border-radius: 6px;
        display: flex; align-items: center; justify-content: center;
        font-size: calc(var(--music-cover-size) * 0.45); flex-shrink: 0;
    }
    .music-info { flex: 1; min-width: 0; }
    .music-name { font-size: var(--card-title-size); font-weight: bold;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .music-artist { font-size: var(--card-message-size); opacity: 0.8;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .music-reason { font-size: var(--card-small-size); opacity: 0.6; margin-top: 4px;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .music-play {
        width: var(--music-play-size); height: var(--music-play-size);
        background: #1db954; border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-size: calc(var(--music-play-size) * 0.45); flex-shrink: 0;
    }

    .system-msg {
        align-self: center; font-size: 0.8em; color: var(--system-msg-color);
        background: rgba(0,0,0,0.2); padding: 3px 10px; border-radius: 10px;
        max-width: 100%; text-align: center;
    }

    .revealed .voice-text { display: block; }
    .revealed .image-desc { display: block; }
    .revealed .image-placeholder { border-color: var(--primary); }

    .action-bar {
        padding: 8px 10px; background: var(--input-bg);
        border-top: 1px solid var(--border-color);
        display: flex; gap: 8px; overflow-x: auto; z-index: 1;
    }
    .action-btn {
        background: transparent; border: 1px solid var(--primary);
        color: var(--primary); padding: 5px 12px; border-radius: 15px;
        font-size: 0.85em; cursor: pointer; white-space: nowrap; transition: 0.2s;
    }
    .action-btn:hover { background: var(--primary); color: white; }

    .at-member-bar {
        display: none; padding: 8px 10px; background: var(--input-bg);
        border-top: 1px solid var(--border-color);
        gap: 8px; overflow-x: auto; z-index: 1; flex-wrap: nowrap;
    }
    .at-member-bar.show { display: flex; }

    .at-member-chip {
        background: var(--list-item-bg); border: 1px solid var(--border-color);
        color: var(--primary); padding: 5px 12px; border-radius: 15px;
        font-size: 0.85em; cursor: pointer; white-space: nowrap; transition: 0.2s;
        display: flex; align-items: center; gap: 5px;
    }
    .at-member-chip:hover { background: var(--primary); color: white; border-color: var(--primary); }
    .at-member-chip img { width: 20px; height: 20px; border-radius: 4px; object-fit: cover; }

    .input-area {
        padding: 10px; background: var(--input-bg);
        border-top: 1px solid var(--border-color);
        display: flex; align-items: center; gap: 8px; z-index: 1; position: relative;
    }

    .add-btn-container { position: relative; }

    .add-btn {
        width: 30px; height: 30px; border-radius: 50%;
        border: 1px solid var(--input-border); background: transparent;
        color: var(--text-sub); font-size: 20px; cursor: pointer;
        display: flex; align-items: center; justify-content: center; transition: 0.2s;
    }
    .add-btn:hover { border-color: var(--primary); color: var(--primary); }
    .add-btn.active { background: var(--primary); color: white; border-color: var(--primary); }

    .add-menu {
        position: absolute; bottom: 40px; left: 0;
        background: var(--modal-bg); border: 1px solid var(--border-color);
        border-radius: 12px; padding: 8px 0; min-width: 140px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3); display: none; z-index: 10;
    }
    .add-menu.show { display: block; }

    .add-menu-item {
        padding: 10px 16px; display: flex; align-items: center;
        gap: 10px; cursor: pointer; transition: 0.2s; font-size: 14px;
    }
    .add-menu-item:hover { background: rgba(255, 0, 85, 0.1); color: var(--primary); }
    .add-menu-item .icon { font-size: 18px; }

    .chat-input {
        flex: 1; background: var(--bg-color); border: 1px solid var(--input-border);
        border-radius: 4px; padding: 8px 10px; color: var(--input-text-color);
        font-size: 1em; outline: none;
    }
    .chat-input:focus { border-color: var(--primary); }

    .send-btn {
        display: none; background: var(--primary); color: white; border: none;
        padding: 6px 12px; border-radius: 4px; font-size: 0.9em;
        cursor: pointer; font-weight: bold;
    }

    .bottom-nav {
        display: flex; background: var(--input-bg);
        border-top: 1px solid var(--border-color); padding: 8px 0;
    }
    .nav-item {
        flex: 1; display: flex; flex-direction: column; align-items: center;
        padding: 5px; cursor: pointer; color: var(--text-sub); transition: 0.2s;
        position: relative;
    }
    .nav-item:hover, .nav-item.active { color: var(--primary); }
    .nav-item-icon { font-size: var(--nav-icon-size, 20px); margin-bottom: 2px; }
    .nav-item-text { font-size: var(--nav-text-size, 11px); }

    .nav-command { position: relative; }
    .nav-command.has-commands { color: var(--primary); }
    .nav-command.has-commands .nav-item-icon { animation: pulse 1.5s infinite; }
    .nav-command-badge {
        position: absolute; top: 0; right: 50%; transform: translateX(100%);
        background: #ff3333; color: white; font-size: 10px; font-weight: bold;
        min-width: 16px; height: 16px; border-radius: 8px;
        display: none; align-items: center; justify-content: center; padding: 0 4px;
    }
    .nav-command-badge.show { display: flex; }
    @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }

    /* 私聊页面样式 */
    .private-header {
        background: var(--private-header-bg);
        padding: 12px 15px;
        border-bottom: 1px solid var(--border-color);
        display: flex; align-items: center; gap: 12px;
    }
    .private-header-avatar {
        width: 36px; height: 36px; border-radius: 6px;
        object-fit: cover; border: 2px solid var(--secondary);
    }
    .private-header-info { flex: 1; }
    .private-header-name { font-size: 1em; font-weight: bold; color: var(--secondary); }
    .private-header-hint { font-size: 0.7em; color: var(--text-sub); }
    .private-tag {
        background: var(--secondary); color: white;
        padding: 2px 8px; border-radius: 10px; font-size: 0.7em;
    }

    .private-message-list {
        flex: 1; padding: 15px; display: flex; flex-direction: column;
        gap: 12px; overflow-y: auto; position: relative; z-index: 1;
        background: var(--chat-bg);
    }

    .private-input-area {
        padding: 10px; background: var(--input-bg);
        border-top: 1px solid var(--border-color);
        display: flex; align-items: center; gap: 8px;
        position: relative;
    }

    .private-hint {
        text-align: center; color: var(--text-sub); padding: 40px 20px;
        font-size: 13px; line-height: 1.6;
    }
    .private-hint-icon { font-size: 48px; margin-bottom: 15px; }

    /* 成员类型选择 */
    .member-type-options { display: flex; gap: 10px; margin-bottom: 15px; }
    .member-type-btn {
        flex: 1; padding: 12px; border: 1px solid var(--border-color);
        border-radius: 8px; cursor: pointer; text-align: center;
        background: var(--input-bg); color: var(--text-color); transition: 0.2s;
    }
    .member-type-btn.active { border-color: var(--primary); color: var(--primary); }
    .member-type-btn.disabled {
        opacity: 0.5; cursor: not-allowed; border-color: var(--border-color);
    }
    .member-type-hint { font-size: 10px; color: var(--text-sub); margin-top: 4px; }

    /* 成员列表样式 */
    .member-section { margin-bottom: 20px; }
    .member-section-title {
        font-size: 12px; color: var(--text-sub); margin-bottom: 10px;
        padding-bottom: 5px; border-bottom: 1px solid var(--border-color);
        display: flex; justify-content: space-between; align-items: center;
    }
    .member-count { color: var(--primary); font-weight: bold; }

    .member-grid {
        display: grid; grid-template-columns: repeat(4, 1fr);
        gap: 10px;
    }
    .member-grid-item {
        display: flex; flex-direction: column; align-items: center;
        padding: 10px 5px; background: var(--list-item-bg);
        border-radius: 8px; border: 1px solid var(--border-color);
        cursor: pointer; transition: 0.2s;
    }
    .member-grid-item:hover { border-color: var(--primary); }
    .member-grid-avatar {
        width: 40px; height: 40px; border-radius: 6px;
        object-fit: cover; margin-bottom: 5px;
    }
    .member-grid-avatar-placeholder {
        width: 40px; height: 40px; border-radius: 6px;
        display: flex; align-items: center; justify-content: center;
        background: var(--input-bg); font-size: 20px; margin-bottom: 5px;
    }
    .member-grid-name {
        font-size: 11px; text-align: center;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        max-width: 100%;
    }
    .member-grid-badge {
        font-size: 9px; padding: 1px 4px; border-radius: 3px;
        background: var(--primary); color: white; margin-top: 3px;
    }

    .lurker-search-box {
        display: flex; gap: 8px; margin-bottom: 15px;
    }
    .lurker-search-input {
        flex: 1; background: var(--input-bg); border: 1px solid var(--input-border);
        color: var(--text-color); padding: 8px 12px; border-radius: 6px; font-size: 13px;
    }
    .lurker-search-btn {
        background: var(--primary); color: white; border: none;
        padding: 8px 15px; border-radius: 6px; font-size: 13px; cursor: pointer;
    }

    .lurker-hint {
        text-align: center; color: var(--text-sub); padding: 20px;
        font-size: 12px; line-height: 1.6;
        background: rgba(0,0,0,0.2); border-radius: 8px;
    }

    .lurker-promote-box {
        display: flex; gap: 8px; margin-top: 15px; padding: 12px;
        background: rgba(189, 0, 255, 0.1); border: 1px solid var(--secondary);
        border-radius: 8px;
    }
    .lurker-promote-input {
        flex: 1; background: var(--input-bg); border: 1px solid var(--input-border);
        color: var(--text-color); padding: 8px 12px; border-radius: 6px; font-size: 13px;
    }
    .lurker-promote-btn {
        background: var(--secondary); color: white; border: none;
        padding: 8px 15px; border-radius: 6px; font-size: 13px; cursor: pointer;
    }
    .lurker-kick-btn {
        background: #ff4757; color: white; border: none;
        padding: 8px 15px; border-radius: 6px; font-size: 13px; cursor: pointer;
    }
    .lurker-kick-btn:hover { background: #ff6b7a; }
    .lurker-promote-hint {
        font-size: 11px; color: var(--text-sub); margin-top: 8px; text-align: center;
    }

    /* 直播页面样式 */
    .live-header {
        background: var(--header-bg); padding: 15px 20px;
        display: flex; justify-content: space-between; align-items: center;
        border-bottom: 1px solid var(--border-color);
    }
    .live-title { font-size: 1.2em; font-weight: bold; color: var(--primary); }

    .live-list { flex: 1; overflow-y: auto; padding: 15px; padding-bottom: 80px; }

    .live-section { margin-bottom: 20px; }
    .live-section-title {
        font-size: 14px; font-weight: bold; color: var(--text-color);
        margin-bottom: 12px; display: flex; align-items: center; gap: 8px;
    }
    .live-section-title .live-dot {
        width: 8px; height: 8px; border-radius: 50%; background: #4ade80;
        animation: pulse 1.5s infinite;
    }
    .live-section-title .live-dot.offline { background: #666; animation: none; }

    .live-grid {
        display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;
    }

    .live-card {
        background: var(--list-item-bg); border-radius: 12px;
        overflow: hidden; border: 1px solid var(--border-color);
        cursor: pointer; transition: all 0.3s;
    }
    .live-card:hover { border-color: var(--primary); transform: translateY(-2px); }
    .live-card.offline { opacity: 0.5; filter: grayscale(0.8); }
    .live-card.offline:hover { opacity: 0.7; filter: grayscale(0.5); }

    .live-card-preview {
        height: 80px; background: linear-gradient(135deg, #2a0a1a, #1a0a2a);
        display: flex; align-items: center; justify-content: center;
        position: relative; overflow: hidden;
    }
    .live-card-preview .preview-avatar {
        width: 50px; height: 50px; border-radius: 50%;
        border: 2px solid var(--primary); object-fit: cover;
    }
    .live-card-preview .preview-placeholder {
        width: 50px; height: 50px; border-radius: 50%;
        border: 2px solid var(--border-color); background: rgba(255,255,255,0.1);
        display: flex; align-items: center; justify-content: center; font-size: 24px;
    }
    .live-card-preview .live-badge {
        position: absolute; top: 6px; left: 6px;
        background: #ff2d55; color: white; font-size: 10px;
        padding: 2px 6px; border-radius: 4px; font-weight: bold;
    }
    .live-card-preview .offline-badge {
        position: absolute; top: 6px; left: 6px;
        background: #666; color: #aaa; font-size: 10px;
        padding: 2px 6px; border-radius: 4px;
    }
    .live-card-preview .viewers-badge {
        position: absolute; top: 6px; right: 6px;
        background: rgba(0,0,0,0.6); color: white; font-size: 10px;
        padding: 2px 6px; border-radius: 4px; display: flex; align-items: center; gap: 4px;
    }

    .live-card-info { padding: 10px; }
    .live-card-name { font-size: 13px; font-weight: bold; color: var(--text-color); margin-bottom: 4px; }
    .live-card-title { font-size: 11px; color: var(--text-sub); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

    .live-card-actions {
        display: flex; justify-content: space-between; align-items: center;
        padding: 8px 10px; border-top: 1px solid var(--border-color);
    }
    .live-card-btn {
        font-size: 11px; padding: 4px 10px; border-radius: 12px;
        border: none; cursor: pointer; transition: 0.2s;
    }
    .live-card-btn.enter { background: var(--primary); color: white; }
    .live-card-btn.enter:hover { background: #ff4466; }
    .live-card-btn.close { background: rgba(255,255,255,0.1); color: var(--text-sub); }
    .live-card-btn.close:hover { background: #ff4757; color: white; }
    .live-card-btn.start { background: linear-gradient(135deg, #667eea, #764ba2); color: white; }
    .live-card-btn.start:hover { background: linear-gradient(135deg, #764ba2, #f093fb); }

    .my-live-section {
        background: linear-gradient(135deg, rgba(255,45,85,0.1), rgba(189,0,255,0.1));
        border: 1px solid rgba(255,45,85,0.3); border-radius: 12px;
        padding: 15px; flex: 1;
    }
    .my-live-section-wrapper { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 20px; }
    .my-live-reset-btn {
        width: 32px; height: 32px; border-radius: 50%;
        background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
        color: var(--text-sub); font-size: 14px; cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        transition: all 0.3s; flex-shrink: 0; margin-top: 2px;
    }
    .my-live-reset-btn:hover { background: rgba(255,0,85,0.2); border-color: var(--primary); color: var(--primary); }
    .my-live-reset-btn:active { transform: scale(0.95); }
    .my-live-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
    .my-live-avatar {
        width: 50px; height: 50px; border-radius: 50%;
        border: 2px solid var(--primary); object-fit: cover;
        background: var(--list-item-bg);
    }
    .my-live-info { flex: 1; }
    .my-live-name { font-size: 14px; font-weight: bold; color: var(--text-color); }
    .my-live-status { font-size: 12px; color: var(--text-sub); }
    .my-live-btn {
        background: var(--primary); color: white; border: none;
        padding: 10px 20px; border-radius: 20px; font-size: 14px;
        font-weight: bold; cursor: pointer; transition: 0.3s;
    }
    .my-live-btn:hover { background: #ff4466; transform: scale(1.05); }
    .my-live-btn.streaming { background: #ff4757; }
    .my-live-btn.pending-start { background: linear-gradient(135deg, #f39c12, #e67e22); cursor: default; }
    .my-live-btn.pending-end { background: linear-gradient(135deg, #9b59b6, #8e44ad); cursor: default; }
    .my-live-status.pending { color: #f39c12; animation: pulse-text 1.5s infinite; }
    @keyframes pulse-text { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }

    /* 成员直播卡片过渡状态 */
    .live-card.pending-start { border-color: #f39c12; }
    .live-card.pending-end { border-color: #9b59b6; }
    .live-card-btn.pending { background: linear-gradient(135deg, #f39c12, #e67e22); color: white; cursor: default; }
    .live-card-preview .pending-badge {
        position: absolute; top: 6px; left: 6px;
        background: linear-gradient(135deg, #f39c12, #e67e22); color: white; font-size: 10px;
        padding: 2px 6px; border-radius: 4px; font-weight: bold; animation: pulse-text 1.5s infinite;
    }
    .live-card-preview .pending-end-badge {
        position: absolute; top: 6px; left: 6px;
        background: linear-gradient(135deg, #9b59b6, #8e44ad); color: white; font-size: 10px;
        padding: 2px 6px; border-radius: 4px; font-weight: bold; animation: pulse-text 1.5s infinite;
    }

    /* 开播设置弹窗 */
    .broadcast-type-options { display: flex; gap: 10px; margin-bottom: 15px; }
    .broadcast-type-btn {
        flex: 1; padding: 12px; border-radius: 8px; text-align: center;
        background: var(--list-item-bg); border: 2px solid var(--border-color);
        cursor: pointer; transition: 0.2s;
    }
    .broadcast-type-btn:hover { border-color: var(--primary); }
    .broadcast-type-btn.active { border-color: var(--primary); background: rgba(255,45,85,0.1); }
    .broadcast-type-btn .type-icon { font-size: 24px; margin-bottom: 5px; }
    .broadcast-type-btn .type-name { font-size: 13px; font-weight: bold; color: var(--text-color); }
    .broadcast-type-btn .type-desc { font-size: 11px; color: var(--text-sub); }

    .invite-member-list {
        display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;
        max-height: 150px; overflow-y: auto; padding: 10px;
        background: var(--input-bg); border-radius: 8px;
    }
    .invite-member-item {
        display: flex; flex-direction: column; align-items: center;
        padding: 8px; border-radius: 8px; cursor: pointer;
        border: 2px solid transparent; transition: 0.2s;
    }
    .invite-member-item:hover { background: rgba(255,255,255,0.05); }
    .invite-member-item.selected { border-color: var(--primary); background: rgba(255,45,85,0.1); }
    .invite-member-avatar {
        width: 36px; height: 36px; border-radius: 50%;
        object-fit: cover; margin-bottom: 4px;
    }
    .invite-member-name { font-size: 11px; color: var(--text-color); text-align: center; }

    /* 朋友圈样式 */
    .moments-header {
        background: var(--header-bg); padding: 15px 20px;
        display: flex; justify-content: space-between; align-items: center;
        border-bottom: 1px solid var(--border-color);
    }
    .moments-title { font-size: 1.2em; font-weight: bold; color: var(--primary); }

    .moments-list { flex: 1; overflow-y: auto; padding: 15px; padding-bottom: 80px; }

    .moment-item {
        background: var(--list-item-bg); border-radius: 12px;
        padding: 15px; margin-bottom: 15px; border: 1px solid var(--border-color);
    }
    .moment-header { display: flex; align-items: center; margin-bottom: 12px; }
    .moment-avatar {
        width: var(--moment-avatar-size); height: var(--moment-avatar-size); border-radius: 8px;
        object-fit: cover; margin-right: 10px; border: 1px solid var(--border-color);
        cursor: pointer; transition: transform 0.2s;
    }
    .moment-avatar:hover { transform: scale(1.08); }
    .moment-user-name { font-weight: bold; color: var(--primary); font-size: var(--moment-content-size); }
    .moment-time { font-size: var(--moment-time-size); color: var(--moment-text-sub); }
    .moment-content { color: var(--moment-text-color); line-height: 1.6; margin-bottom: 12px; font-size: var(--moment-content-size); }

    .moment-image { cursor: pointer; margin-bottom: 12px; }
    .moment-image-placeholder {
        background: rgba(0,0,0,0.1); height: var(--moment-image-height); width: 100%; max-width: 200px;
        display: flex; flex-direction: column; align-items: center;
        justify-content: center; color: var(--primary);
        border: 2px dashed var(--border-color); border-radius: var(--card-border-radius);
    }
    .moment-image-placeholder span { font-size: var(--image-icon-size); }
    .moment-image-filename { font-size: var(--card-small-size); color: var(--text-sub); margin-top: 5px; }
    .moment-image-desc {
        display: none; margin-top: 8px; font-size: 0.85em;
        color: var(--text-sub); background: rgba(0,0,0,0.05);
        padding: 10px; border-radius: 4px; border-left: 3px solid var(--primary); line-height: 1.6;
    }
    .moment-image.revealed .moment-image-desc { display: block; }
    .moment-image.revealed .moment-image-placeholder { border-color: var(--primary); }

    .moment-stats { display: flex; gap: 15px; font-size: var(--moment-stat-size); color: var(--moment-text-sub); margin-bottom: 8px; flex-wrap: wrap; }
    .moment-stat { display: flex; align-items: center; gap: 5px; cursor: pointer; padding: 4px 8px; border-radius: 15px; transition: 0.2s; }
    .moment-stat:hover { background: rgba(255,255,255,0.1); }
    .moment-stat.active { color: var(--primary); background: rgba(255, 0, 85, 0.15); }
    .moment-stat.dislike-active { color: #ff6666; background: rgba(255, 102, 102, 0.15); }

    .moment-people-list {
        font-size: var(--moment-people-size); color: var(--moment-text-sub);
        margin-bottom: 10px; padding: 8px 10px;
        background: rgba(0,0,0,0.1); border-radius: 6px; line-height: 1.6;
    }
    .moment-people-list .likers { color: var(--primary); }
    .moment-people-list .dislikers { color: #ff6666; }

    .moment-comments { border-top: 1px solid var(--border-color); padding-top: 10px; }
    .comment-item { padding: 6px 0; font-size: var(--comment-size); }
    .comment-author { color: var(--primary); font-weight: bold; }
    .comment-text { color: var(--moment-text-color); }

    .comment-input-row { display: flex; gap: 8px; margin-top: 10px; }
    .comment-input {
        flex: 1; background: var(--input-bg); border: 1px solid var(--input-border);
        border-radius: 15px; padding: 6px 12px; color: var(--text-color);
        font-size: var(--comment-size); outline: none;
    }
    .comment-send {
        background: transparent; color: var(--primary); border: 1px solid var(--primary);
        padding: 6px 12px; border-radius: 15px; font-size: var(--card-small-size); cursor: pointer;
        transition: 0.2s;
    }
    .comment-send:hover { background: var(--primary); color: white; }

    .no-moments { text-align: center; color: var(--text-sub); padding: 60px 20px; }

    /* 指令列表样式 */
    .command-list-item {
        display: flex; align-items: center; gap: 10px;
        padding: 10px 12px; background: var(--list-item-bg);
        border-radius: 8px; margin-bottom: 8px; border: 1px solid var(--border-color);
    }
    .command-list-item .cmd-icon { font-size: 20px; }
    .command-list-item .cmd-text { flex: 1; font-size: 13px; color: var(--text-color); }
    .command-list-item .cmd-remove {
        width: 24px; height: 24px; border-radius: 50%;
        background: rgba(255, 0, 0, 0.1); color: #ff3333;
        border: none; cursor: pointer; display: flex;
        align-items: center; justify-content: center; font-size: 14px;
    }
    .command-list-item .cmd-remove:hover { background: #ff3333; color: white; }
    .command-list-item.irrevocable { 
        background: rgba(250, 157, 59, 0.15); 
        border-color: rgba(250, 157, 59, 0.3);
    }
    .command-list-item.irrevocable .cmd-text::after {
        content: ' (不可撤回)'; color: #fa9d3b; font-size: 11px;
    }

    .command-list-section { margin-bottom: 15px; }
    .command-list-section-title {
        font-size: 12px; color: var(--text-sub); margin-bottom: 8px;
        padding-bottom: 5px; border-bottom: 1px solid var(--border-color);
    }

    .no-commands { text-align: center; color: var(--text-sub); padding: 30px 20px; font-size: 14px; }

    /* 模态框样式 */
    .modal-overlay {
        position: absolute; top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.6); z-index: 100;
        display: flex; align-items: flex-start; justify-content: center;
        padding-top: 20px; overflow-y: auto;
    }

    .modal-overlay.bottom-modal { align-items: flex-end; padding-top: 0; padding-bottom: 80px; }

    .modal-content {
        background: var(--modal-bg); border: 1px solid var(--modal-border);
        border-radius: 12px; width: 90%; max-width: 360px;
        box-shadow: 0 5px 25px rgba(0,0,0,0.3); overflow: hidden;
        color: var(--modal-text-color); max-height: calc(100% - 40px); display: flex; flex-direction: column;
        position: relative;
    }

    .modal-overlay.inline-modal { position: absolute; align-items: flex-start; padding-top: 0; }
    .modal-overlay.inline-modal .modal-content { margin-top: var(--inline-modal-top, 100px); max-width: 320px; }

    .modal-header {
        padding: 15px 20px; border-bottom: 1px solid var(--border-color);
        display: flex; justify-content: space-between; align-items: center; flex-shrink: 0;
    }
    .modal-title { font-size: 1.1em; font-weight: bold; color: var(--primary); }
    .modal-header-actions { display: flex; gap: 8px; align-items: center; }
    .modal-close {
        width: 28px; height: 28px; border: none; background: transparent;
        color: var(--text-sub); font-size: 20px; cursor: pointer; border-radius: 50%;
    }
    .modal-close:hover { background: rgba(255,255,255,0.1); color: var(--primary); }

    .report-btn {
        width: 28px; height: 28px; border: none; background: transparent;
        color: var(--text-sub); font-size: 16px; cursor: pointer; border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
    }
    .report-btn:hover { background: rgba(255,0,0,0.1); color: #dc3545; }

    .modal-body { padding: 20px; overflow-y: auto; flex: 1; }
    .modal-actions {
        display: flex; justify-content: flex-end; gap: 10px;
        padding: 15px 20px; border-top: 1px solid var(--border-color); flex-shrink: 0;
    }
    .modal-btn { padding: 8px 18px; border-radius: 6px; cursor: pointer; border: none; font-size: 14px; }
    .btn-cancel { background: #555; color: #fff; }
    .btn-confirm { background: var(--primary); color: white; }
    .btn-danger { background: #dc3545; color: white; }
    .btn-secondary { background: var(--secondary); color: white; }

    .form-group { margin-bottom: 15px; }
    .form-label { display: block; font-size: 13px; color: var(--text-sub); margin-bottom: 6px; }
    .form-input {
        width: 100%; background: var(--input-bg); border: 1px solid var(--input-border);
        color: var(--text-color); padding: 10px; border-radius: 6px; font-size: 14px;
    }
    .form-input:focus { border-color: var(--primary); outline: none; }
    .form-textarea { min-height: 60px; resize: vertical; }

    .avatar-upload-box {
        width: 80px; height: 80px; border: 2px dashed var(--border-color);
        border-radius: 10px; display: flex; flex-direction: column;
        align-items: center; justify-content: center; cursor: pointer;
        overflow: hidden; margin: 0 auto;
    }
    .avatar-upload-box:hover { border-color: var(--primary); }
    .avatar-upload-box img { width: 100%; height: 100%; object-fit: cover; }
    .avatar-upload-box.disabled { opacity: 0.5; cursor: not-allowed; }
    .avatar-upload-box.disabled:hover { border-color: var(--border-color); }

    .gender-options { display: flex; gap: 10px; }
    .gender-btn {
        flex: 1; padding: 10px; border: 1px solid var(--border-color);
        border-radius: 8px; cursor: pointer; text-align: center;
        background: var(--input-bg); color: var(--text-color); transition: 0.2s;
    }
    .gender-btn.active { border-color: var(--primary); color: var(--primary); }

    .member-list-manage { display: flex; flex-direction: column; gap: 8px; margin-top: 10px; }
    .member-manage-item {
        display: flex; align-items: center; gap: 10px;
        background: var(--list-item-bg); padding: 10px;
        border-radius: 8px; border: 1px solid var(--border-color);
    }
    .member-manage-item img { width: 36px; height: 36px; border-radius: 6px; object-fit: cover; }
    .member-manage-info { flex: 1; }
    .member-manage-name { font-size: 14px; font-weight: bold; }
    .member-manage-desc { font-size: 11px; color: var(--text-sub); }
    .member-manage-actions { display: flex; gap: 5px; }
    .member-manage-btn {
        padding: 4px 8px; border-radius: 4px; font-size: 11px;
        cursor: pointer; border: 1px solid var(--border-color);
        background: transparent; color: var(--text-color);
    }
    .member-manage-btn:hover { border-color: var(--primary); color: var(--primary); }
    .member-manage-btn.danger:hover { border-color: #dc3545; color: #dc3545; }

    .title-pool {
        display: flex; flex-wrap: wrap; gap: 8px; padding: 10px;
        background: var(--input-bg); border-radius: 8px;
        border: 1px solid var(--border-color); margin-bottom: 10px;
    }

    .title-chip {
        display: inline-flex; align-items: center; gap: 4px;
        padding: 5px 10px; border-radius: 15px; font-size: 12px;
        cursor: pointer; border: 2px solid transparent; transition: 0.2s;
    }
    .title-chip.selected { border-color: var(--primary); box-shadow: 0 0 8px rgba(255, 0, 85, 0.3); }

    .title-chip-delete {
        width: 16px; height: 16px; border-radius: 50%;
        background: rgba(0,0,0,0.3); color: white; font-size: 10px;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer; margin-left: 4px;
    }
    .title-chip-delete:hover { background: #dc3545; }

    .add-title-btn {
        display: inline-flex; align-items: center; gap: 4px;
        padding: 5px 12px; border-radius: 15px; font-size: 12px;
        cursor: pointer; border: 2px dashed var(--border-color);
        background: transparent; color: var(--text-sub); transition: 0.2s;
    }
    .add-title-btn:hover { border-color: var(--primary); color: var(--primary); }

    .add-title-form {
        display: none; padding: 10px; background: var(--list-item-bg);
        border-radius: 8px; margin-top: 10px; border: 1px solid var(--border-color);
    }
    .add-title-form.show { display: block; }

    .add-title-row { display: flex; gap: 8px; align-items: center; }

    .add-title-row input[type="text"] {
        flex: 1; padding: 6px 10px; border-radius: 6px;
        border: 1px solid var(--input-border); background: var(--input-bg);
        color: var(--text-color); font-size: 13px;
    }

    .add-title-row input[type="color"] {
        width: 36px; height: 30px; border: none; border-radius: 4px;
        cursor: pointer; background: transparent;
    }

    .section-divider { border-top: 1px solid var(--border-color); margin: 15px 0; padding-top: 15px; }
    .section-title-small { font-size: 13px; font-weight: bold; color: var(--primary); margin-bottom: 10px; }

    .color-picker-row {
        display: flex; align-items: center; gap: 10px; padding: 10px;
        background: var(--list-item-bg); border-radius: 8px; margin-bottom: 10px;
        border: 1px solid var(--border-color);
    }
    .color-picker-avatar { width: 36px; height: 36px; border-radius: 6px; object-fit: cover; }
    .color-picker-name { flex: 1; font-size: 14px; font-weight: bold; }
    .color-picker-inputs { display: flex; gap: 8px; }
    .color-picker-inputs label { font-size: 11px; color: var(--text-sub); display: flex; flex-direction: column; align-items: center; gap: 4px; }
    .color-picker-inputs input[type="color"] { width: 30px; height: 30px; border: none; border-radius: 4px; cursor: pointer; background: transparent; }

    .preset-title { color: var(--text-sub); font-size: 12px; margin-bottom: 5px; text-align: center; }
    .preset-grid { display: flex; flex-direction: column; gap: 8px; padding: 5px; }
    .avatar-grid-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
    .preset-item { width: 100%; aspect-ratio: 1; border-radius: 4px; cursor: pointer; object-fit: cover; border: 2px solid transparent; transition: 0.2s; }
    .preset-item:hover { border-color: var(--primary); transform: scale(1.05); }
    .preset-item.selected { border-color: var(--primary); }
    .upload-label { color: var(--primary); font-size: 13px; text-align: center; text-decoration: underline; cursor: pointer; display: block; margin-top: 10px; }

    .theme-options { display: flex; gap: 10px; justify-content: center; }
    .theme-btn { flex: 1; padding: 10px; border: 1px solid var(--border-color); border-radius: 8px; cursor: pointer; text-align: center; background: var(--input-bg); }
    .theme-btn.active { border-color: var(--primary); color: var(--primary); }

    .width-options { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
    .width-btn {
        padding: 8px 12px; border: 1px solid var(--border-color); border-radius: 6px;
        cursor: pointer; text-align: center; background: var(--input-bg); font-size: 12px; transition: 0.2s;
    }
    .width-btn.active { border-color: var(--primary); color: var(--primary); background: rgba(255, 0, 85, 0.1); }

    .bg-preview { width: 100%; height: 60px; border-radius: 6px; margin-top: 10px; display: flex; align-items: center; justify-content: center; color: #999; font-size: 12px; background-size: cover; border: 1px solid var(--border-color); position: relative; overflow: hidden; }
    .bg-preview-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: var(--chat-bg); opacity: 0.85; pointer-events: none; }

    .font-size-slider { width: 100%; margin: 8px 0; }
    .font-preview { padding: 10px; border: 1px solid var(--border-color); border-radius: 6px; background: var(--input-bg); margin-top: 8px; line-height: 1.5; font-size: 13px; }
    .font-option { padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; cursor: pointer; margin-bottom: 5px; display: flex; justify-content: space-between; font-size: 13px; }
    .font-option.active { border-color: var(--primary); color: var(--primary); }

    .tab-content { display: none; flex-direction: column; gap: 15px; padding: 15px 0; }
    .tab-content.active { display: flex; }
    .modal-tabs { display: flex; border-bottom: 1px solid var(--border-color); flex-shrink: 0; }
    .tab-item { flex: 1; padding: 12px 0; text-align: center; cursor: pointer; font-size: 13px; color: var(--text-sub); border-bottom: 2px solid transparent; }
    .tab-item.active { color: var(--primary); border-bottom-color: var(--primary); font-weight: bold; }

    .user-avatar-section { display: flex; align-items: center; gap: 15px; padding: 15px; background: var(--list-item-bg); border-radius: 8px; margin-bottom: 15px; }
    .user-avatar-preview { width: 60px; height: 60px; border-radius: 8px; object-fit: cover; border: 2px solid var(--primary); background: var(--input-bg); display: flex; align-items: center; justify-content: center; color: var(--text-sub); font-size: 24px; }
    .user-avatar-info { flex: 1; }
    .user-avatar-label { font-size: 14px; font-weight: bold; color: var(--text-color); margin-bottom: 5px; }
    .user-avatar-hint { font-size: 12px; color: var(--text-sub); }

    .member-detail-header {
        display: flex; align-items: center; gap: 15px; padding: 20px;
        background: var(--list-item-bg); border-radius: 12px; margin-bottom: 20px;
    }
    .member-detail-avatar-box {
        width: 80px; height: 80px; border-radius: 10px; overflow: hidden;
        border: 2px solid var(--primary); cursor: pointer; position: relative;
    }
    .member-detail-avatar-box img { width: 100%; height: 100%; object-fit: cover; }
    .member-detail-avatar-edit {
        position: absolute; bottom: 0; left: 0; right: 0;
        background: rgba(0,0,0,0.7); color: white; text-align: center;
        font-size: 11px; padding: 3px 0;
    }
    .member-detail-info { flex: 1; }
    .member-detail-name { font-size: 18px; font-weight: bold; color: var(--primary); margin-bottom: 5px; }
    .member-detail-gender { font-size: 13px; color: var(--text-sub); margin-bottom: 5px; }
    .member-detail-desc { font-size: 13px; color: var(--text-color); line-height: 1.5; }

    .member-detail-actions {
        display: flex; gap: 10px; margin-top: 15px;
    }
    .member-detail-action-btn {
        flex: 1; padding: 10px; border: 1px solid var(--border-color);
        border-radius: 8px; cursor: pointer; text-align: center;
        background: var(--input-bg); color: var(--text-color); transition: 0.2s;
        font-size: 13px;
    }
    .member-detail-action-btn:hover { border-color: var(--primary); color: var(--primary); }
    .member-detail-action-btn.primary { background: var(--secondary); color: white; border-color: var(--secondary); }
    .member-detail-action-btn.primary:hover { filter: brightness(1.1); }

    .redpacket-type-options { display: flex; gap: 10px; margin-bottom: 15px; }
    .redpacket-type-btn {
        flex: 1; padding: 12px; border: 1px solid var(--border-color);
        border-radius: 8px; cursor: pointer; text-align: center;
        background: var(--input-bg); color: var(--text-color); transition: 0.2s;
    }
    .redpacket-type-btn.active { border-color: #f99b1d; color: #f99b1d; background: rgba(249, 155, 29, 0.1); }

    .member-select-list { display: flex; flex-direction: column; gap: 8px; max-height: 150px; overflow-y: auto; }
    .member-select-item {
        display: flex; align-items: center; gap: 10px; padding: 8px;
        background: var(--list-item-bg); border-radius: 8px;
        border: 1px solid var(--border-color); cursor: pointer; transition: 0.2s;
    }
    .member-select-item:hover { border-color: var(--primary); }
    .member-select-item.selected { border-color: var(--primary); background: rgba(255, 0, 85, 0.1); }
    .member-select-item img { width: 30px; height: 30px; border-radius: 6px; object-fit: cover; }

    .report-warning {
        background: rgba(220, 53, 69, 0.1);
        border: 1px solid rgba(220, 53, 69, 0.3);
        border-radius: 8px; padding: 12px; margin-bottom: 15px;
        color: #dc3545; font-size: 13px; line-height: 1.5;
    }

    .toggle-switch {
        display: flex; align-items: center; justify-content: space-between;
        padding: 12px 15px; background: var(--list-item-bg);
        border-radius: 8px; margin-bottom: 10px; border: 1px solid var(--border-color);
    }
    .toggle-switch-label { font-size: 14px; color: var(--text-color); }
    .toggle-switch-hint { font-size: 11px; color: var(--text-sub); margin-top: 3px; }

    .toggle-btn {
        width: 50px; height: 26px; border-radius: 13px;
        background: #555; border: none; cursor: pointer;
        position: relative; transition: 0.3s;
    }
    .toggle-btn.active { background: var(--primary); }
    .toggle-btn::after {
        content: ''; position: absolute;
        width: 22px; height: 22px; background: white;
        border-radius: 50%; top: 2px; left: 2px; transition: 0.3s;
    }
    .toggle-btn.active::after { left: 26px; }

    .cache-item {
        display: flex; align-items: center; gap: 12px;
        padding: 12px 15px; background: var(--list-item-bg);
        border-radius: 8px; margin-bottom: 8px;
        border: 1px solid var(--border-color); cursor: pointer; transition: 0.2s;
    }
    .cache-item:hover { border-color: var(--primary); }
    .cache-item.checked { border-color: var(--primary); background: rgba(255, 0, 85, 0.1); }
    .cache-checkbox {
        width: 20px; height: 20px; border: 2px solid var(--border-color);
        border-radius: 4px; display: flex; align-items: center; justify-content: center;
        flex-shrink: 0; transition: 0.2s;
    }
    .cache-item.checked .cache-checkbox { background: var(--primary); border-color: var(--primary); }
    .cache-checkbox-icon { color: white; font-size: 12px; display: none; }
    .cache-item.checked .cache-checkbox-icon { display: block; }
    .cache-info { flex: 1; }
    .cache-name { font-size: 14px; color: var(--text-color); margin-bottom: 2px; }
    .cache-desc { font-size: 11px; color: var(--text-sub); }

    .clear-selected-btn {
        width: 100%; padding: 12px; background: transparent;
        border: 2px solid #dc3545; color: #dc3545;
        border-radius: 8px; font-size: 14px; cursor: pointer;
        transition: 0.2s; margin-top: 15px;
    }
    .clear-selected-btn:hover { background: #dc3545; color: white; }
    .clear-selected-btn:disabled { opacity: 0.5; cursor: not-allowed; }

    .select-all-row {
        display: flex; justify-content: space-between; align-items: center;
        margin-bottom: 15px; padding-bottom: 10px;
        border-bottom: 1px solid var(--border-color);
    }
    .select-all-btn {
        background: transparent; border: 1px solid var(--border-color);
        color: var(--text-sub); padding: 6px 12px; border-radius: 6px;
        font-size: 12px; cursor: pointer; transition: 0.2s;
    }
    .select-all-btn:hover { border-color: var(--primary); color: var(--primary); }

    @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }

    .crop-modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 3000; justify-content: center; align-items: center; }
    .crop-modal.active { display: flex; }
    .crop-container { background: var(--modal-bg); border-radius: 15px; padding: 20px; max-width: 400px; width: 90%; border: 1px solid var(--border-color); }
    .crop-title { font-size: 1.1em; color: var(--primary); margin-bottom: 15px; text-align: center; }
    .crop-area { position: relative; width: 100%; height: 280px; background: #000; border-radius: 10px; overflow: hidden; margin-bottom: 15px; }
    .crop-image { position: absolute; max-width: none; max-height: none; user-select: none; -webkit-user-drag: none; }
    .crop-box { position: absolute; border: 2px dashed #fff; box-shadow: 0 0 0 9999px rgba(0,0,0,0.6); cursor: move; touch-action: none; }
    .crop-box-corner { position: absolute; width: 20px; height: 20px; background: var(--primary); border-radius: 50%; }
    .crop-box-corner.tl { top: -10px; left: -10px; cursor: nwse-resize; }
    .crop-box-corner.tr { top: -10px; right: -10px; cursor: nesw-resize; }
    .crop-box-corner.bl { bottom: -10px; left: -10px; cursor: nesw-resize; }
    .crop-box-corner.br { bottom: -10px; right: -10px; cursor: nwse-resize; }
    .crop-buttons { display: flex; gap: 10px; }
    .crop-btn { flex: 1; padding: 12px; border-radius: 8px; font-size: 0.9em; cursor: pointer; border: none; }
    .crop-btn-confirm { background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%); color: #fff; }
    .crop-btn-cancel { background: rgba(100,100,100,0.3); color: var(--text-color); border: 1px solid var(--border-color); }

    /* 自动裁切开关样式 */
    .auto-crop-toggle {
        display: flex; align-items: center; justify-content: center;
        gap: 8px; margin-top: 8px; font-size: 12px; color: var(--text-sub);
    }
    .auto-crop-switch {
        width: 36px; height: 18px; border-radius: 9px;
        background: #555; border: none; cursor: pointer;
        position: relative; transition: 0.3s;
    }
    .auto-crop-switch.active { background: var(--primary); }
    .auto-crop-switch::after {
        content: ''; position: absolute;
        width: 14px; height: 14px; background: white;
        border-radius: 50%; top: 2px; left: 2px; transition: 0.3s;
    }
    .auto-crop-switch.active::after { left: 20px; }
</style>
</head>
<body>

<div class="phone-container" id="phone-root">
    <!-- 群聊页面 -->
    <div class="page active" id="page-chat">
        <div class="chat-header">
            <div class="chat-header-info">
                <div class="header-title" id="chat-title">文媛小屋❤️</div>
            </div>
            <div class="lurker-chat-bubbles" id="lurker-chat-bubbles"></div>
            <button class="header-btn" onclick="openManageModal()" title="管理群聊">⚙️</button>
            <button class="header-btn" onclick="openSettingsModal()" title="设置">🎨</button>
        </div>

        <div class="chat-container" id="chat-container">
            <div class="chat-bg-overlay"></div>
            <div class="message-list" id="message-list"></div>
            <div class="action-bar" id="action-bar" style="display:none"></div>
            <div class="at-member-bar" id="at-member-bar"></div>
            <div class="input-area">
                <div class="add-btn-container">
                    <button class="add-btn" id="add-btn" onclick="toggleAddMenu()">+</button>
                    <div class="add-menu" id="add-menu">
                        <div class="add-menu-item" onclick="showMediaModal()">
                            <span class="icon">📷</span>
                            <span>发图片/视频</span>
                        </div>
                        <div class="add-menu-item" onclick="showRedpacketModal()">
                            <span class="icon">🧧</span>
                            <span>发红包</span>
                        </div>
                        <div class="add-menu-item" onclick="showVoiceModal()">
                            <span class="icon">🎤</span>
                            <span>发语音</span>
                        </div>
                        <div class="add-menu-item" onclick="showMusicModal()">
                            <span class="icon">🎵</span>
                            <span>分享音乐</span>
                        </div>
                    </div>
                </div>
                <input type="text" id="chat-input" class="chat-input" placeholder="输入消息...（点击头像上方@）" oninput="checkInput()" onfocus="showAtMemberBar()" onblur="hideAtMemberBarDelay()">
                <button id="send-btn" class="send-btn" onclick="submitText()">发送</button>
            </div>
        </div>

        <div class="bottom-nav">
            <div class="nav-item active" onclick="switchPage('chat')">
                <span class="nav-item-icon">💬</span>
                <span class="nav-item-text">群聊</span>
            </div>
            <div class="nav-item nav-command" id="nav-command-btn" onclick="openCommandMenu()">
                <span class="nav-item-icon">📤</span>
                <span class="nav-item-text">发送</span>
                <span class="nav-command-badge" id="nav-command-badge-chat">0</span>
            </div>
            <div class="nav-item" onclick="switchPage('live')">
                <span class="nav-item-icon">📺</span>
                <span class="nav-item-text">直播</span>
            </div>
            <div class="nav-item" onclick="switchPage('moments')">
                <span class="nav-item-icon">📷</span>
                <span class="nav-item-text">朋友圈</span>
            </div>
        </div>
    </div>

    <!-- 私聊悬浮窗 -->
    <div id="private-chat-modal" class="modal-overlay inline-modal" style="display:none">
        <div class="modal-content" style="max-height:80vh">
            <div class="private-header">
                <button class="header-back" onclick="closePrivateChat()">←</button>
                <img id="private-avatar" class="private-header-avatar" src="">
                <div class="private-header-info">
                    <div class="private-header-name" id="private-name">角色名</div>
                    <div class="private-header-hint">私密对话・不会出现在群聊中</div>
                </div>
                <span class="private-tag">私聊</span>
            </div>

            <div class="private-message-list" id="private-message-list" style="flex:1;overflow-y:auto">
                <div class="private-hint">
                    <div class="private-hint-icon">🤫</div>
                    <div>这是你和 <span id="private-target-name">角色</span> 的私密对话</div>
                    <div style="margin-top:10px;font-size:12px;opacity:0.8">
                        在这里可以密谋计划、交换秘密<br>
                        这些内容不会出现在群聊中
                    </div>
                </div>
            </div>

            <div class="private-input-area">
                <button class="add-btn" onclick="togglePrivateAddMenu()" title="更多功能">+</button>
                <input type="text" id="private-input" class="chat-input" placeholder="私密消息..." oninput="checkPrivateInput()">
                <button id="private-send-btn" class="send-btn" onclick="submitPrivateText()">发送</button>
            </div>
            <!-- 私聊添加菜单 -->
            <div class="add-menu" id="private-add-menu">
                <div class="add-menu-item" onclick="showPrivateMediaModal()">
                    <span class="add-menu-icon">📷</span>
                    <span>发媒体</span>
                </div>
                <div class="add-menu-item" onclick="showPrivateVoiceModal()">
                    <span class="add-menu-icon">🎤</span>
                    <span>发语音</span>
                </div>
                <div class="add-menu-item" onclick="showPrivateRedpacketModal()">
                    <span class="add-menu-icon">🧧</span>
                    <span>发红包</span>
                </div>
                <div class="add-menu-item" onclick="showPrivateMusicModal()">
                    <span class="add-menu-icon">🎵</span>
                    <span>分享音乐</span>
                </div>
            </div>
        </div>
    </div>

    <!-- 私聊页面 -->
    <div class="page" id="page-private" style="display:none">
        <div class="private-header">
            <button class="header-back" onclick="exitPrivateChat()">←</button>
            <img id="private-avatar" class="private-header-avatar" src="">
            <div class="private-header-info">
                <div class="private-header-name" id="private-name">角色名</div>
                <div class="private-header-hint">私密对话・不会出现在群聊中</div>
            </div>
            <span class="private-tag">私聊</span>
        </div>

        <div class="private-message-list" id="private-message-list">
            <div class="private-hint">
                <div class="private-hint-icon">🤫</div>
                <div>这是你和 <span id="private-target-name">角色</span> 的私密对话</div>
                <div style="margin-top:10px;font-size:12px;opacity:0.8">
                    在这里可以密谋计划、交换秘密<br>
                    这些内容不会出现在群聊中
                </div>
            </div>
        </div>

        <div class="private-input-area">
            <button class="add-btn" onclick="togglePrivateAddMenu()" title="更多功能">+</button>
            <input type="text" id="private-input-page" class="chat-input" placeholder="私密消息..." oninput="checkPrivateInput()">
            <button id="private-send-btn-page" class="send-btn" onclick="submitPrivateText()">发送</button>
        </div>
        <!-- 私聊添加菜单 -->
        <div class="add-menu" id="private-add-menu-page">
            <div class="add-menu-item" onclick="showPrivateMediaModal()">
                <span class="add-menu-icon">📷</span>
                <span>发媒体</span>
            </div>
            <div class="add-menu-item" onclick="showPrivateVoiceModal()">
                <span class="add-menu-icon">🎤</span>
                <span>发语音</span>
            </div>
            <div class="add-menu-item" onclick="showPrivateRedpacketModal()">
                <span class="add-menu-icon">🧧</span>
                <span>发红包</span>
            </div>
            <div class="add-menu-item" onclick="showPrivateMusicModal()">
                <span class="add-menu-icon">🎵</span>
                <span>分享音乐</span>
            </div>
        </div>

        <div class="bottom-nav">
            <div class="nav-item" onclick="switchPage('chat')">
                <span class="nav-item-icon">💬</span>
                <span class="nav-item-text">群聊</span>
            </div>
            <div class="nav-item nav-command" id="nav-command-btn-private" onclick="openCommandMenu()">
                <span class="nav-item-icon">📤</span>
                <span class="nav-item-text">发送</span>
                <span class="nav-command-badge" id="nav-command-badge-private">0</span>
            </div>
            <div class="nav-item" onclick="switchPage('live')">
                <span class="nav-item-icon">📺</span>
                <span class="nav-item-text">直播</span>
            </div>
            <div class="nav-item" onclick="switchPage('moments')">
                <span class="nav-item-icon">📷</span>
                <span class="nav-item-text">朋友圈</span>
            </div>
        </div>
    </div>

    <!-- 朋友圈页面 -->
    <div class="page" id="page-moments">
        <div class="moments-header">
            <span class="moments-title">📷 朋友圈</span>
            <button class="header-btn" onclick="openPostMomentModal()" title="发布动态">✏️</button>
        </div>
        <div class="moments-list" id="moments-list"></div>

        <div class="bottom-nav">
            <div class="nav-item" onclick="switchPage('chat')">
                <span class="nav-item-icon">💬</span>
                <span class="nav-item-text">群聊</span>
            </div>
            <div class="nav-item nav-command" id="nav-command-btn-moments" onclick="openCommandMenu()">
                <span class="nav-item-icon">📤</span>
                <span class="nav-item-text">发送</span>
                <span class="nav-command-badge" id="nav-command-badge-moments">0</span>
            </div>
            <div class="nav-item" onclick="switchPage('live')">
                <span class="nav-item-icon">📺</span>
                <span class="nav-item-text">直播</span>
            </div>
            <div class="nav-item active" onclick="switchPage('moments')">
                <span class="nav-item-icon">📷</span>
                <span class="nav-item-text">朋友圈</span>
            </div>
        </div>
    </div>

    <!-- 直播页面 -->
    <div class="page" id="page-live">
        <div class="live-header">
            <span class="live-title">📺 直播广场</span>
        </div>
        <div class="live-list" id="live-list">
            <!-- 我的直播间 -->
            <div class="my-live-section-wrapper">
                <div class="my-live-section">
                    <div class="my-live-header">
                        <img class="my-live-avatar" id="my-live-avatar" src="">
                        <div class="my-live-info">
                            <div class="my-live-name">我的直播间</div>
                            <div class="my-live-status" id="my-live-status">未开播</div>
                        </div>
                    </div>
                    <button class="my-live-btn" id="my-live-btn" onclick="openBroadcastModal()">开始直播</button>
                </div>
                <button class="my-live-reset-btn" onclick="resetMyLiveStatus()" title="重置直播状态">🔄</button>
            </div>

            <!-- 正在直播 -->
            <div class="live-section" id="live-section-online">
                <div class="live-section-title">
                    <span class="live-dot"></span>
                    正在直播
                </div>
                <div class="live-grid" id="live-grid-online"></div>
            </div>

            <!-- 未开播 -->
            <div class="live-section" id="live-section-offline">
                <div class="live-section-title">
                    <span class="live-dot offline"></span>
                    未开播
                </div>
                <div class="live-grid" id="live-grid-offline"></div>
            </div>
        </div>

        <div class="bottom-nav">
            <div class="nav-item" onclick="switchPage('chat')">
                <span class="nav-item-icon">💬</span>
                <span class="nav-item-text">群聊</span>
            </div>
            <div class="nav-item nav-command" id="nav-command-btn-live" onclick="openCommandMenu()">
                <span class="nav-item-icon">📤</span>
                <span class="nav-item-text">发送</span>
                <span class="nav-command-badge" id="nav-command-badge-live">0</span>
            </div>
            <div class="nav-item active" onclick="switchPage('live')">
                <span class="nav-item-icon">📺</span>
                <span class="nav-item-text">直播</span>
            </div>
            <div class="nav-item" onclick="switchPage('moments')">
                <span class="nav-item-icon">📷</span>
                <span class="nav-item-text">朋友圈</span>
            </div>
        </div>
    </div>

    <!-- 开播设置弹窗 -->
    <div id="broadcast-modal" class="modal-overlay bottom-modal" style="display:none">
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-title">📺 开播设置</span>
                <button class="modal-close" onclick="closeModal('broadcast-modal')">✕</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">直播标题 *</label>
                    <input type="text" id="broadcast-title" class="form-input" placeholder="输入直播标题" maxlength="30">
                </div>
                <div class="form-group">
                    <label class="form-label">直播类型</label>
                    <div class="broadcast-type-options">
                        <div class="broadcast-type-btn active" data-type="public" onclick="selectBroadcastType(this)">
                            <div class="type-icon">🌐</div>
                            <div class="type-name">公开直播</div>
                            <div class="type-desc">所有群成员可观看</div>
                        </div>
                        <div class="broadcast-type-btn" data-type="private" onclick="selectBroadcastType(this)">
                            <div class="type-icon">🔒</div>
                            <div class="type-name">私密直播</div>
                            <div class="type-desc">仅邀请的人可观看</div>
                        </div>
                    </div>
                </div>
                <div class="form-group" id="invite-section" style="display:none">
                    <label class="form-label">邀请观众（可选）</label>
                    <div class="invite-member-list" id="invite-member-list"></div>
                </div>
            </div>
            <div class="modal-actions">
                <button class="modal-btn btn-cancel" onclick="closeModal('broadcast-modal')">取消</button>
                <button class="modal-btn btn-confirm" onclick="startBroadcast()">开始直播</button>
            </div>
        </div>
    </div>

    <!-- 成员开播设置弹窗 -->
    <div id="member-broadcast-modal" class="modal-overlay bottom-modal" style="display:none">
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-title">🎬 让 <span id="member-broadcast-name"></span> 开播</span>
                <button class="modal-close" onclick="closeModal('member-broadcast-modal')">✕</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">直播标题 *</label>
                    <input type="text" id="member-broadcast-title" class="form-input" placeholder="输入直播标题" maxlength="30">
                </div>
                <div class="form-group">
                    <label class="form-label">直播类型</label>
                    <div class="broadcast-type-options">
                        <div class="broadcast-type-btn active" data-type="public" onclick="selectMemberBroadcastType(this)">
                            <div class="type-icon">🌐</div>
                            <div class="type-name">公开直播</div>
                            <div class="type-desc">所有群成员可观看</div>
                        </div>
                        <div class="broadcast-type-btn" data-type="private" onclick="selectMemberBroadcastType(this)">
                            <div class="type-icon">🔒</div>
                            <div class="type-name">私密直播</div>
                            <div class="type-desc">仅邀请的人可观看</div>
                        </div>
                    </div>
                </div>
                <div class="form-group" id="member-invite-section" style="display:none">
                    <label class="form-label">邀请观众（可选）</label>
                    <div class="invite-member-list" id="member-invite-list"></div>
                </div>
            </div>
            <div class="modal-actions">
                <button class="modal-btn btn-cancel" onclick="closeModal('member-broadcast-modal')">取消</button>
                <button class="modal-btn btn-confirm" onclick="confirmMemberBroadcast()">开始直播</button>
            </div>
        </div>
    </div>

    <!-- 所有模态框 -->
    <!-- 指令菜单弹窗 -->
    <div id="command-menu-modal" class="modal-overlay bottom-modal" style="display:none">
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-title">📤 待发送的操作</span>
                <button class="modal-close" onclick="closeModal('command-menu-modal')">✕</button>
            </div>
            <div class="modal-body" id="command-list"></div>
            <div class="modal-actions">
                <button class="modal-btn btn-cancel" onclick="clearAllCommands()">清空</button>
                <button class="modal-btn btn-confirm" onclick="submitAllCommands()">确认发送</button>
            </div>
        </div>
    </div>

    <!-- 群聊管理弹窗 -->
    <div id="manage-modal" class="modal-overlay" style="display:none">
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-title">⚙️ 群聊管理</span>
                <button class="modal-close" onclick="closeModal('manage-modal')">✕</button>
            </div>
            <div class="modal-tabs">
                <div class="tab-item active" onclick="switchManageTab(0)">角色池</div>
                <div class="tab-item" onclick="switchManageTab(1)">创建角色</div>
                <div class="tab-item" onclick="switchManageTab(2)">成员列表</div>
            </div>
            <div class="modal-body">
                <!-- 角色池标签页 -->
                <div class="tab-content active" id="manage-tab-0">
                    <div class="form-group">
                        <label class="form-label">群名称</label>
                        <div style="display:flex;gap:8px">
                            <input type="text" id="group-name-input" class="form-input" placeholder="输入群名称" style="flex:1">
                            <button class="modal-btn btn-confirm" onclick="changeGroupName()">修改</button>
                        </div>
                    </div>

                    <div class="section-divider"></div>

                    <div class="section-title-small">📦 我的角色池 <span id="pool-count-hint" style="font-weight:normal;color:var(--text-sub)">(0/30)</span></div>
                    <div class="pool-hint-text" style="font-size:11px;color:var(--text-sub);margin-bottom:10px">点击角色卡片可将其添加到当前群聊，与开局前端共享同一角色池</div>
                    
                    <div class="character-pool-grid" id="chat-character-pool-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:15px"></div>
                    
                    <div style="display:flex;gap:8px;margin-bottom:15px">
                        <button class="modal-btn btn-confirm" style="flex:1;font-size:12px" onclick="prevPoolPage()">◀ 上页</button>
                        <span id="pool-page-info" style="display:flex;align-items:center;font-size:12px;color:var(--text-sub)">1/1</span>
                        <button class="modal-btn btn-confirm" style="flex:1;font-size:12px" onclick="nextPoolPage()">下页 ▶</button>
                    </div>

                    <div class="section-divider"></div>

                    <div class="section-title-small">👥 批量邀请潜水成员</div>
                    <div class="form-group">
                        <label class="form-label">邀请人数（10-200人）</label>
                        <input type="number" id="batch-lurker-count" class="form-input" placeholder="输入人数" min="10" max="200" value="50">
                    </div>
                    <div class="form-group">
                        <label class="form-label">身份背景描述 *</label>
                        <textarea id="batch-lurker-desc" class="form-input form-textarea" placeholder="例：你购买的来帮你说话的水军、同班同学、游戏公会成员..." maxlength="100"></textarea>
                    </div>
                    <button class="modal-btn btn-confirm" style="width:100%;background:linear-gradient(135deg,#666,#888)" onclick="batchInviteLurkers()">批量邀请潜水成员</button>
                </div>

                <!-- 创建角色标签页 -->
                <div class="tab-content" id="manage-tab-1">
                    <div class="section-title-small">⭐ 创建新角色 <span id="active-count-hint" style="font-weight:normal;color:var(--text-sub)">(0/8)</span></div>
                    <div class="pool-hint-text" style="font-size:11px;color:var(--text-sub);margin-bottom:10px">创建的角色将保存到角色池，可在开局前端中复用</div>

                    <div class="form-group">
                        <label class="form-label">角色名称 *</label>
                        <input type="text" id="new-member-name" class="form-input" placeholder="输入角色名称" maxlength="20">
                    </div>
                    <div class="form-group">
                        <label class="form-label">性别 *</label>
                        <div class="gender-options">
                            <div class="gender-btn active" data-gender="女" onclick="selectGender(this)">👩 女</div>
                            <div class="gender-btn" data-gender="男" onclick="selectGender(this)">👨 男</div>
                        </div>
                    </div>
                    <div class="form-group" id="avatar-upload-group">
                        <label class="form-label">头像 *</label>
                        <div class="avatar-upload-box" id="new-member-avatar-box" onclick="handleAvatarBoxClick()">
                            <span style="font-size:24px;color:var(--text-sub)">📷</span>
                            <span style="font-size:11px;color:var(--text-sub)">上传</span>
                        </div>
                        <input type="file" id="new-member-avatar-input" style="display:none" accept="image/*" onchange="handleNewMemberAvatar(this)">
                    </div>
                    <div class="form-group">
                        <label class="form-label" id="preset-title-label">或选择预设头像</label>
                        <div class="preset-grid" id="new-member-preset-grid"></div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">角色背景</label>
                        <textarea id="new-member-desc" class="form-input form-textarea" placeholder="例：高冷女王、温柔学姐..." maxlength="50"></textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-label">选择头衔</label>
                        <div class="title-pool" id="new-member-title-pool"></div>
                        <button class="add-title-btn" onclick="toggleAddTitleForm('new')">➕ 添加新头衔</button>
                        <div class="add-title-form" id="add-title-form-new">
                            <div class="add-title-row">
                                <input type="text" id="new-title-name" placeholder="输入头衔名称" maxlength="10">
                                <input type="color" id="new-title-color" value="#ff0055">
                                <button class="modal-btn btn-confirm" style="padding:6px 10px;font-size:12px" onclick="addNewTitle('new')">添加</button>
                            </div>
                        </div>
                    </div>
                    <button class="modal-btn btn-confirm" style="width:100%" onclick="addNewMember()">创建并添加到群聊</button>
                </div>

                <!-- 成员列表标签页 -->
                <div class="tab-content" id="manage-tab-2">
                    <div class="member-section">
                        <div class="member-section-title">
                            <span>⭐ 活跃成员</span>
                            <span class="member-count" id="active-member-count">0/8</span>
                        </div>
                        <div class="member-grid" id="active-member-grid"></div>
                    </div>

                    <div class="member-section">
                        <div class="member-section-title">
                            <span>👤 潜水成员</span>
                            <span class="member-count" id="lurker-member-count">0人</span>
                        </div>
                        <div class="lurker-hint">
                            💡 潜水成员头衔固定为"成员"，数量较多暂不显示列表
                        </div>
                        <div id="lurker-member-grid" class="member-grid" style="margin-top:15px"></div>
                        <div class="lurker-promote-box">
                            <input type="text" class="lurker-promote-input" id="lurker-promote-input" placeholder="输入潜水成员网名升级为活跃成员">
                            <button class="lurker-promote-btn" onclick="promoteLurkerMember()">升级</button>
                        </div>
                        <div class="lurker-promote-hint">输入潜水成员的网名，将其升级为活跃成员（不会在群内显示系统消息）</div>
                        <div class="lurker-promote-box" style="margin-top:10px">
                            <input type="text" class="lurker-promote-input" id="lurker-kick-input" placeholder="输入潜水成员网名踢出群聊">
                            <button class="lurker-kick-btn" onclick="kickLurkerMember()">🚫</button>
                        </div>
                        <div class="lurker-promote-hint">输入潜水成员的网名，将踢出指令发送到指令清单</div>
                    </div>
                </div>
            </div>
            <div class="modal-actions">
                <button class="modal-btn btn-cancel" onclick="closeModal('manage-modal')">关闭</button>
            </div>
        </div>
    </div>

    <!-- 角色池预览弹窗 -->
    <div id="pool-char-preview-modal" class="modal-overlay inline-modal" style="display:none">
        <div class="modal-content" style="max-width:340px">
            <div class="modal-header">
                <span class="modal-title">👤 角色信息</span>
                <button class="modal-close" onclick="closeModal('pool-char-preview-modal')">✕</button>
            </div>
            <div style="padding:15px">
                <div style="display:flex;gap:15px;align-items:flex-start">
                    <div id="pool-preview-avatar" style="width:70px;height:70px;border-radius:10px;background:rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;font-size:36px;overflow:hidden;flex-shrink:0"></div>
                    <div style="flex:1;min-width:0">
                        <div id="pool-preview-name" style="font-size:16px;font-weight:bold;color:#fff;margin-bottom:4px"></div>
                        <div style="display:flex;gap:8px;margin-bottom:8px">
                            <span id="pool-preview-gender" style="font-size:12px;padding:2px 8px;background:rgba(255,255,255,0.1);border-radius:10px;color:var(--text-sub)"></span>
                            <span id="pool-preview-title" style="font-size:12px;padding:2px 8px;background:rgba(255,255,255,0.1);border-radius:10px;color:var(--text-sub)"></span>
                        </div>
                    </div>
                </div>
                <div style="margin-top:12px">
                    <div style="font-size:11px;color:var(--text-sub);margin-bottom:4px">📝 背景介绍</div>
                    <div id="pool-preview-bg" style="font-size:13px;color:#ccc;background:rgba(0,0,0,0.2);padding:10px;border-radius:8px;max-height:100px;overflow-y:auto;line-height:1.5"></div>
                </div>
                <div id="pool-preview-in-group" style="margin-top:10px;padding:8px;background:rgba(74,222,128,0.1);border:1px solid rgba(74,222,128,0.3);border-radius:6px;color:#4ade80;font-size:12px;text-align:center;display:none">
                    ✅ 该角色已在群聊中
                </div>
            </div>
            <div class="modal-footer" style="display:flex;gap:10px">
                <button class="modal-btn btn-cancel" style="flex:1" onclick="closeModal('pool-char-preview-modal')">取消</button>
                <button id="pool-preview-add-btn" class="modal-btn btn-confirm" style="flex:1" onclick="confirmAddPoolChar()">添加到群聊</button>
            </div>
        </div>
    </div>

    <!-- 角色详情弹窗 -->
    <div id="member-detail-modal" class="modal-overlay inline-modal" style="display:none">
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-title">👤 角色详情</span>
                <div class="modal-header-actions">
                    <button class="report-btn" onclick="showReportModal()" title="举报">⚠️</button>
                    <button class="modal-close" onclick="closeModal('member-detail-modal')">✕</button>
                </div>
            </div>
            <div class="modal-body">
                <div class="member-detail-header">
                    <div class="member-detail-avatar-box" id="member-detail-avatar-box" onclick="handleMemberAvatarClick()">
                        <img id="member-detail-avatar" src="">
                        <div class="member-detail-avatar-edit" id="member-detail-avatar-edit">点击更换</div>
                    </div>
                    <input type="file" id="member-avatar-input" style="display:none" accept="image/*" onchange="handleMemberAvatarChange(this)">
                    <div class="member-detail-info">
                        <div class="member-detail-name" id="member-detail-name">角色名</div>
                        <div class="member-detail-gender" id="member-detail-gender">性别：女</div>
                        <div class="member-detail-desc" id="member-detail-desc">角色背景描述</div>
                    </div>
                </div>
                <div class="member-detail-actions">
                    <div class="member-detail-action-btn primary" onclick="startPrivateChat()">
                        💬 私聊
                    </div>
                    <div class="member-detail-action-btn" onclick="kickCurrentMember()">
                        🚪 踢出
                    </div>
                </div>
                <div class="form-group" id="preset-avatar-section">
                    <label class="form-label">选择预设头像</label>
                    <div class="preset-grid" id="member-preset-grid"></div>
                </div>
                <div class="form-group" id="member-title-section">
                    <label class="form-label">修改头衔</label>
                    <div class="title-pool" id="member-title-pool"></div>
                </div>
            </div>
            <div class="modal-actions">
                <button class="modal-btn btn-cancel" onclick="closeModal('member-detail-modal')">关闭</button>
                <button class="modal-btn btn-confirm" onclick="saveMemberDetail()">保存</button>
            </div>
        </div>
    </div>

    <!-- 举报弹窗 -->
    <div id="report-modal" class="modal-overlay inline-modal" style="display:none">
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-title">⚠️ 举报用户</span>
                <button class="modal-close" onclick="closeModal('report-modal')">✕</button>
            </div>
            <div class="modal-body">
                <div class="report-warning">
                    ⚠️ 警告：举报存在风险！<br>
                    • 举报成功：该角色将被移出群聊<br>
                    • 举报失败：该角色会知道是你举报的，并可能反击
                </div>
                <div class="form-group">
                    <label class="form-label">被举报人</label>
                    <input type="text" id="report-target" class="form-input" readonly>
                </div>
                <div class="form-group">
                    <label class="form-label">举报原因 *</label>
                    <textarea id="report-reason" class="form-input form-textarea" placeholder="请详细描述举报原因..." style="min-height:100px"></textarea>
                </div>
            </div>
            <div class="modal-actions">
                <button class="modal-btn btn-cancel" onclick="closeModal('report-modal')">取消</button>
                <button class="modal-btn btn-danger" onclick="submitReport()">确认举报</button>
            </div>
        </div>
    </div>

    <!-- 发送图片弹窗 -->
    <div id="media-modal" class="modal-overlay bottom-modal" style="display:none">
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-title">📷 发送图片/视频</span>
                <button class="modal-close" onclick="closeModal('media-modal')">✕</button>
            </div>
            <div class="modal-body">
                <textarea id="media-desc" class="form-input form-textarea" placeholder="描述你要发送的图片或视频内容..." style="min-height:80px"></textarea>
            </div>
            <div class="modal-actions">
                <button class="modal-btn btn-cancel" onclick="closeModal('media-modal')">取消</button>
                <button class="modal-btn btn-confirm" onclick="queueMedia()">添加到队列</button>
            </div>
        </div>
    </div>

    <!-- 发红包弹窗 -->
    <div id="redpacket-modal" class="modal-overlay bottom-modal" style="display:none">
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-title">🧧 发红包</span>
                <button class="modal-close" onclick="closeModal('redpacket-modal')">✕</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">红包类型</label>
                    <div class="redpacket-type-options">
                        <div class="redpacket-type-btn active" data-type="拼手气" onclick="selectRedpacketType(this)">🎲 拼手气</div>
                        <div class="redpacket-type-btn" data-type="专属" onclick="selectRedpacketType(this)">👤 专属红包</div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">金额</label>
                    <input type="number" id="redpacket-amount" class="form-input" placeholder="输入红包金额" min="1">
                </div>
                <div class="form-group" id="redpacket-target-group" style="display:none">
                    <label class="form-label">发给谁</label>
                    <div class="member-select-list" id="redpacket-member-list"></div>
                </div>
                <div class="form-group">
                    <label class="form-label">祝福语（可选）</label>
                    <input type="text" id="redpacket-message" class="form-input" placeholder="恭喜发财，大吉大利" maxlength="30">
                </div>
            </div>
            <div class="modal-actions">
                <button class="modal-btn btn-cancel" onclick="closeModal('redpacket-modal')">取消</button>
                <button class="modal-btn btn-confirm" style="background:#f99b1d" onclick="queueRedpacket()">添加到队列</button>
            </div>
        </div>
    </div>

    <!-- 发语音弹窗 -->
    <div id="voice-modal" class="modal-overlay bottom-modal" style="display:none">
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-title">🎤 发送语音</span>
                <button class="modal-close" onclick="closeModal('voice-modal')">✕</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">语音内容（描述你要说的话）</label>
                    <textarea id="voice-content" class="form-input form-textarea" placeholder="输入你想说的话..." style="min-height:100px"></textarea>
                </div>
            </div>
            <div class="modal-actions">
                <button class="modal-btn btn-cancel" onclick="closeModal('voice-modal')">取消</button>
                <button class="modal-btn btn-confirm" onclick="queueVoice()">添加到队列</button>
            </div>
        </div>
    </div>

    <!-- 分享音乐弹窗 -->
    <div id="music-modal" class="modal-overlay bottom-modal" style="display:none">
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-title">🎵 分享音乐</span>
                <button class="modal-close" onclick="closeModal('music-modal')">✕</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">歌曲名称 *</label>
                    <input type="text" id="music-name" class="form-input" placeholder="输入歌曲名称">
                </div>
                <div class="form-group">
                    <label class="form-label">歌手/作者 *</label>
                    <input type="text" id="music-artist" class="form-input" placeholder="输入歌手或作者名">
                </div>
                <div class="form-group">
                    <label class="form-label">分享理由（可选）</label>
                    <input type="text" id="music-reason" class="form-input" placeholder="例：超好听！单曲循环中~">
                </div>
            </div>
            <div class="modal-actions">
                <button class="modal-btn btn-cancel" onclick="closeModal('music-modal')">取消</button>
                <button class="modal-btn btn-confirm" onclick="queueMusic()">添加到队列</button>
            </div>
        </div>
    </div>

    <!-- 私聊发媒体弹窗 -->
    <div id="private-media-modal" class="modal-overlay bottom-modal" style="display:none">
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-title">📷 私聊发送媒体</span>
                <button class="modal-close" onclick="closeModal('private-media-modal')">✕</button>
            </div>
            <div class="modal-body">
                <textarea id="private-media-desc" class="form-input form-textarea" placeholder="描述你要发送的图片或视频内容..." style="min-height:80px"></textarea>
            </div>
            <div class="modal-actions">
                <button class="modal-btn btn-cancel" onclick="closeModal('private-media-modal')">取消</button>
                <button class="modal-btn btn-confirm" onclick="queuePrivateMedia()">添加到队列</button>
            </div>
        </div>
    </div>

    <!-- 私聊发语音弹窗 -->
    <div id="private-voice-modal" class="modal-overlay bottom-modal" style="display:none">
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-title">🎤 私聊发送语音</span>
                <button class="modal-close" onclick="closeModal('private-voice-modal')">✕</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">语音内容（描述你要说的话）</label>
                    <textarea id="private-voice-content" class="form-input form-textarea" placeholder="输入你想说的话..." style="min-height:100px"></textarea>
                </div>
            </div>
            <div class="modal-actions">
                <button class="modal-btn btn-cancel" onclick="closeModal('private-voice-modal')">取消</button>
                <button class="modal-btn btn-confirm" onclick="queuePrivateVoice()">添加到队列</button>
            </div>
        </div>
    </div>

    <!-- 私聊发红包弹窗 -->
    <div id="private-redpacket-modal" class="modal-overlay bottom-modal" style="display:none">
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-title">🧧 私聊发红包</span>
                <button class="modal-close" onclick="closeModal('private-redpacket-modal')">✕</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">金额</label>
                    <input type="number" id="private-redpacket-amount" class="form-input" placeholder="输入红包金额" min="1">
                </div>
                <div class="form-group">
                    <label class="form-label">祝福语（可选）</label>
                    <input type="text" id="private-redpacket-message" class="form-input" placeholder="恭喜发财，大吉大利" maxlength="30">
                </div>
            </div>
            <div class="modal-actions">
                <button class="modal-btn btn-cancel" onclick="closeModal('private-redpacket-modal')">取消</button>
                <button class="modal-btn btn-confirm" style="background:#f99b1d" onclick="queuePrivateRedpacket()">添加到队列</button>
            </div>
        </div>
    </div>

    <!-- 私聊分享音乐弹窗 -->
    <div id="private-music-modal" class="modal-overlay bottom-modal" style="display:none">
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-title">🎵 私聊分享音乐</span>
                <button class="modal-close" onclick="closeModal('private-music-modal')">✕</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">歌曲名称 *</label>
                    <input type="text" id="private-music-name" class="form-input" placeholder="输入歌曲名称">
                </div>
                <div class="form-group">
                    <label class="form-label">歌手/作者 *</label>
                    <input type="text" id="private-music-artist" class="form-input" placeholder="输入歌手或作者名">
                </div>
                <div class="form-group">
                    <label class="form-label">分享理由（可选）</label>
                    <input type="text" id="private-music-reason" class="form-input" placeholder="例：超好听！单曲循环中~">
                </div>
            </div>
            <div class="modal-actions">
                <button class="modal-btn btn-cancel" onclick="closeModal('private-music-modal')">取消</button>
                <button class="modal-btn btn-confirm" onclick="queuePrivateMusic()">添加到队列</button>
            </div>
        </div>
    </div>

    <!-- 发布朋友圈弹窗 -->
    <div id="post-moment-modal" class="modal-overlay" style="display:none">
        <div class="modal-content">
            <div class="modal-header">
                <span class="modal-title">✏️ 发布动态</span>
                <button class="modal-close" onclick="closeModal('post-moment-modal')">✕</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="form-label">说点什么...</label>
                    <textarea id="moment-text" class="form-input form-textarea" placeholder="分享你的想法..." style="min-height:100px"></textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">配图描述（必填）</label>
                    <input type="text" id="moment-image" class="form-input" placeholder="描述你要发的图片内容">
                </div>
            </div>
            <div class="modal-actions">
                <button class="modal-btn btn-cancel" onclick="closeModal('post-moment-modal')">取消</button>
                <button class="modal-btn btn-confirm" onclick="queuePostMoment()">添加到队列</button>
            </div>
        </div>
    </div>

    <!-- 设置弹窗 -->
    <div id="settings-modal" class="modal-overlay" style="display:none">
        <div class="modal-content">
            <div class="modal-tabs">
                <div class="tab-item active" onclick="switchSettingsTab(0)">头像</div>
                <div class="tab-item" onclick="switchSettingsTab(1)">显示</div>
                <div class="tab-item" onclick="switchSettingsTab(2)">颜色</div>
                <div class="tab-item" onclick="switchSettingsTab(3)">缓存</div>
            </div>
            <div class="modal-body">
                <div class="tab-content active" id="settings-tab-0">
                    <div class="user-avatar-section">
                        <div id="user-avatar-preview" class="user-avatar-preview">
                            <span>📷</span>
                        </div>
                        <div class="user-avatar-info">
                            <div class="user-avatar-label">我的头像</div>
                            <div class="user-avatar-hint">点击右侧按钮上传你的头像</div>
                        </div>
                        <button class="modal-btn btn-confirm" onclick="document.getElementById('user-avatar-input').click()">上传</button>
                        <input type="file" id="user-avatar-input" style="display:none" accept="image/*" onchange="handleUserAvatarUpload(this)">
                    </div>
                    <div class="auto-crop-toggle">
                        <span>自动裁切（居中最大）</span>
                        <button class="auto-crop-switch active" id="auto-crop-switch" onclick="toggleAutoCrop()"></button>
                    </div>
                    <div class="form-group" style="margin-top:15px">
                        <label class="form-label">或选择预设头像</label>
                        <div class="preset-grid" id="user-avatar-preset-grid"></div>
                    </div>
                    <div class="form-group" style="margin-top:15px">
                        <label class="form-label">我扮演的角色名</label>
                        <input type="text" class="form-input" id="player-character-name" placeholder="填写后该角色不会出现在直播列表中" oninput="tempConfig.playerCharacterName=this.value">
                        <div style="font-size:11px;color:var(--text-sub);margin-top:5px">用于在直播模块中区分玩家角色，避免重复显示</div>
                    </div>
                </div>

                <div class="tab-content" id="settings-tab-1">
                    <div class="toggle-switch">
                        <div>
                            <div class="toggle-switch-label">显示姓名和头衔</div>
                            <div class="toggle-switch-hint">关闭后气泡上方不显示发送者信息</div>
                        </div>
                        <button class="toggle-btn active" id="toggle-sender-info" onclick="toggleSenderInfo()"></button>
                    </div>

                    <div class="toggle-switch">
                        <div>
                            <div class="toggle-switch-label">活跃成员头像描边</div>
                            <div class="toggle-switch-hint">开启后头像会显示名字颜色的描边和发光效果</div>
                        </div>
                        <button class="toggle-btn" id="toggle-avatar-border" onclick="toggleAvatarBorder()"></button>
                    </div>

                    <div class="toggle-switch">
                        <div>
                            <div class="toggle-switch-label">姓名阴影效果</div>
                            <div class="toggle-switch-hint">开启后成员姓名会显示发光阴影效果</div>
                        </div>
                        <button class="toggle-btn active" id="toggle-name-shadow" onclick="toggleNameShadow()"></button>
                    </div>

                    <div class="preset-title" style="margin-top:15px">气泡文字颜色</div>
                    <div class="theme-options">
                        <div class="theme-btn active" id="bubble-text-white" onclick="selectBubbleTextColor('white')">⚪ 白色</div>
                        <div class="theme-btn" id="bubble-text-black" onclick="selectBubbleTextColor('black')">⚫ 黑色</div>
                    </div>

                    <div class="preset-title" style="margin-top:15px">主题配色</div>
                    <div class="theme-options">
                        <div class="theme-btn active" id="theme-dark" onclick="selectTheme('dark')">🌙 霓虹黑</div>
                        <div class="theme-btn" id="theme-light" onclick="selectTheme('light')">☀️ 纯欲白</div>
                    </div>

                    <div style="border-top:1px solid var(--border-color);margin-top:15px;padding-top:15px">
                        <div class="preset-title">页面宽度</div>
                        <div class="width-options">
                            <div class="width-btn active" data-width="400" onclick="selectWidth(this)">窄</div>
                            <div class="width-btn" data-width="500" onclick="selectWidth(this)">中等</div>
                            <div class="width-btn" data-width="600" onclick="selectWidth(this)">较宽</div>
                            <div class="width-btn" data-width="720" onclick="selectWidth(this)">宽</div>
                            <div class="width-btn" data-width="900" onclick="selectWidth(this)">特宽</div>
                        </div>
                    </div>

                    <div style="border-top:1px solid var(--border-color);margin-top:15px;padding-top:15px">
                        <div class="preset-title">聊天背景</div>
                        <div class="bg-preview" id="bg-preview">
                            <div class="bg-preview-overlay" id="bg-preview-overlay"></div>
                            <span style="position:relative;z-index:1">无背景图</span>
                        </div>
                        <div style="display:flex;gap:10px;margin-top:10px">
                            <button class="modal-btn btn-cancel" style="flex:1" onclick="clearBg()">清除</button>
                            <button class="modal-btn btn-confirm" style="flex:1" onclick="document.getElementById('bg-input').click()">上传</button>
                        </div>
                        <input type="file" id="bg-input" style="display:none" accept="image/*" onchange="handleBgUpload(this)">
                        <div style="margin-top:15px">
                            <div class="preset-title">遮罩浓度: <span id="bg-mask-val">70%</span></div>
                            <input type="range" min="0" max="100" step="5" value="70" class="font-size-slider" id="bg-mask-slider" oninput="previewBgMask(this.value)">
                        </div>
                    </div>
                    <div style="border-top:1px solid var(--border-color);margin-top:15px;padding-top:15px">
                        <div class="preset-title">字体大小: <span id="font-size-val">小</span></div>
                        <input type="range" min="14" max="20" step="2" value="14" class="font-size-slider" id="font-size-slider" oninput="previewFontSize(this.value)">
                        <div class="preset-title" style="margin-top:15px">字体样式</div>
                        <div class="font-option active" id="font-default" onclick="selectFont('default')"><span>系统默认</span><span style="font-size:11px;color:var(--text-sub)">Microsoft YaHei</span></div>
                        <div class="font-option font-lxgw" id="font-lxgw" onclick="selectFont('lxgw')"><span>霞鹜文楷</span><span style="font-size:11px;color:var(--text-sub)">LXGW WenKai</span></div>
                        <div class="font-option font-song" id="font-song" onclick="selectFont('song')"><span>思源宋体</span><span style="font-size:11px;color:var(--text-sub)">Noto Serif SC</span></div>
                        <div class="font-option font-jinghua" id="font-jinghua" onclick="selectFont('jinghua')"><span>京华老宋体</span><span style="font-size:11px;color:var(--text-sub)">KingHwaOldSong</span></div>
                        <div class="font-option font-culiu" id="font-culiu" onclick="selectFont('culiu')"><span>粗柳坊新</span><span style="font-size:11px;color:var(--text-sub)">CLFN 24x CN</span></div>
                    </div>
                </div>

                <div class="tab-content" id="settings-tab-2">
                    <div class="preset-title">潜水成员气泡颜色</div>
                    <div class="color-setting-item" style="margin-bottom:15px">
                        <span class="color-setting-name">所有潜水成员</span>
                        <input type="color" class="color-picker" id="lurker-bubble-color" value="#4a4a4a" onchange="updateLurkerBubbleColor(this.value)">
                    </div>
                    <div class="preset-title">活跃成员颜色设置</div>
                    <div id="color-settings-list"></div>
                </div>

                <div class="tab-content" id="settings-tab-3">
                    <div class="report-warning">
                        ⚠️ 选择要清除的缓存项，清除后对应数据将被重置为默认值。
                    </div>
                    <div class="select-all-row">
                        <span style="font-size:13px;color:var(--text-sub)">勾选要清除的项目</span>
                        <button class="select-all-btn" onclick="toggleSelectAllCache()">全选/取消</button>
                    </div>
                    <div id="cache-list">
                        <div class="cache-item" data-key="wenyuan_members" onclick="toggleCacheItem(this)">
                            <div class="cache-checkbox"><span class="cache-checkbox-icon">✓</span></div>
                            <div class="cache-info">
                                <div class="cache-name">群成员列表</div>
                                <div class="cache-desc">所有添加的群成员信息</div>
                            </div>
                        </div>
                        <div class="cache-item" data-key="wenyuan_member_colors" onclick="toggleCacheItem(this)">
                            <div class="cache-checkbox"><span class="cache-checkbox-icon">✓</span></div>
                            <div class="cache-info">
                                <div class="cache-name">成员颜色设置</div>
                                <div class="cache-desc">每个成员的姓名和气泡颜色</div>
                            </div>
                        </div>
                        <div class="cache-item" data-key="wenyuan_group_name" onclick="toggleCacheItem(this)">
                            <div class="cache-checkbox"><span class="cache-checkbox-icon">✓</span></div>
                            <div class="cache-info">
                                <div class="cache-name">群名称</div>
                                <div class="cache-desc">当前群聊名称</div>
                            </div>
                        </div>
                        <div class="cache-item" data-key="wenyuan_title_pool" onclick="toggleCacheItem(this)">
                            <div class="cache-checkbox"><span class="cache-checkbox-icon">✓</span></div>
                            <div class="cache-info">
                                <div class="cache-name">头衔池</div>
                                <div class="cache-desc">自定义添加的头衔</div>
                            </div>
                        </div>
                        <div class="cache-item" data-key="wenyuan_user_avatar" onclick="toggleCacheItem(this)">
                            <div class="cache-checkbox"><span class="cache-checkbox-icon">✓</span></div>
                            <div class="cache-info">
                                <div class="cache-name">我的头像</div>
                                <div class="cache-desc">上传的用户头像</div>
                            </div>
                        </div>
                        <div class="cache-item" data-key="wenyuan_bg" onclick="toggleCacheItem(this)">
                            <div class="cache-checkbox"><span class="cache-checkbox-icon">✓</span></div>
                            <div class="cache-info">
                                <div class="cache-name">聊天背景</div>
                                <div class="cache-desc">上传的背景图片</div>
                            </div>
                        </div>
                        <div class="cache-item" data-key="wenyuan_config" onclick="toggleCacheItem(this)">
                            <div class="cache-checkbox"><span class="cache-checkbox-icon">✓</span></div>
                            <div class="cache-info">
                                <div class="cache-name">显示设置</div>
                                <div class="cache-desc">主题、字体、宽度等设置</div>
                            </div>
                        </div>
                        <div class="cache-item" data-key="wenyuan_live_status,wenyuan_my_live_status" onclick="toggleCacheItem(this)">
                            <div class="cache-checkbox"><span class="cache-checkbox-icon">✓</span></div>
                            <div class="cache-info">
                                <div class="cache-name">直播状态</div>
                                <div class="cache-desc">我的直播和成员直播的开播状态</div>
                            </div>
                        </div>
                    </div>
                    <button class="clear-selected-btn" id="clear-selected-btn" onclick="clearSelectedCache()" disabled>🗑️ 清除选中项</button>
                </div>
            </div>
                <button class="modal-btn btn-cancel" onclick="closeModal('settings-modal')">取消</button>
                <button class="modal-btn btn-confirm" onclick="saveSettings()">保存</button>
            </div>
        </div>
    </div>
</div>

<!-- 裁切弹窗 -->
<div class="crop-modal" id="crop-modal">
    <div class="crop-container">
        <div class="crop-title">✂️ 裁剪头像 - 拖动选区框选择区域</div>
        <div class="crop-area" id="crop-area">
            <img class="crop-image" id="crop-image">
            <div class="crop-box" id="crop-box">
                <div class="crop-box-corner tl" data-corner="tl"></div>
                <div class="crop-box-corner tr" data-corner="tr"></div>
                <div class="crop-box-corner bl" data-corner="bl"></div>
                <div class="crop-box-corner br" data-corner="br"></div>
            </div>
        </div>
        <div class="crop-buttons">
            <button class="crop-btn crop-btn-cancel" onclick="closeCropModal()">取消</button>
            <button class="crop-btn crop-btn-confirm" onclick="confirmCrop()">确认裁剪</button>
        </div>
    </div>
</div>

<script>
    // ==================== IndexedDB 存储模块 ====================
    const DB_NAME = 'wenyuan_chat_db';
    const DB_VERSION = 1;
    const STORE_NAME = 'chat_data';

    function openDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    db.createObjectStore(STORE_NAME);
                }
            };
        });
    }

    async function dbSet(key, value) {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const request = store.put(value, key);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
            tx.oncomplete = () => db.close();
        });
    }

    async function dbGet(key) {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const request = store.get(key);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
            tx.oncomplete = () => db.close();
        });
    }

    async function dbDelete(key) {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const request = store.delete(key);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
            tx.oncomplete = () => db.close();
        });
    }

    // ==================== 常量 ====================
    const DEFAULT_AVATAR = "https://catbox.pengcyril.dpdns.org/creejo.jpg";
    const DEFAULT_MALE_AVATAR = "👨";
    const DEFAULT_FEMALE_AVATAR = "👩";
    const MAX_ACTIVE_MEMBERS = 8;

    // 预设头像池 - 分为女性、男性、通用三类（每类9个，九宫格显示）
    const PRESET_AVATARS_FEMALE = [
        "https://sns-webpic-qc.xhscdn.com/202601302226/c718c66a847d09ca2bb30e5a670d81d9/notes_pre_post/1040g3k031pe351vlic205p49c2g43i8rfkv59g8!nd_dft_wlteh_webp_3",
        "https://sns-webpic-qc.xhscdn.com/202601302229/13ef6e812b377ac1bc3a8143fbc63fef/notes_pre_post/1040g3k031rca5ii77g005q10s6o3jte0ftn1290!nd_dft_wlteh_webp_3",
        "https://sns-webpic-qc.xhscdn.com/202601302213/46f83aaff3d6b1837a47933f5451a397/notes_pre_post/1040g3k031jni5fkqiuhg5pn985h7e8nuo0pfvko!nd_dft_wlteh_webp_3",
        "https://sns-webpic-qc.xhscdn.com/202601302215/16761c29b386a63de188f5d63fe3b0eb/notes_pre_post/1040g3k831o0rjbrml87g5pvkpuc3id0l5ctsau0!nd_dft_wlteh_webp_3",
        "https://sns-webpic-qc.xhscdn.com/202601302216/761ae2a0c64939b989f08eedc4f2df69/notes_pre_post/1040g3k831mmsnh2h5i905oqbsmambluk6p975fg!nd_dft_wlteh_webp_3",
        "https://sns-webpic-qc.xhscdn.com/202601302217/1625235c8f7cac00193d75774ca18daf/notes_pre_post/1040g3k831r73101d723g5pc0hns6dipa9nltqt0!nd_dft_wlteh_webp_3",
        "https://catbox.pengcyril.dpdns.org/3m1xv1.jpg",
        "https://catbox.pengcyril.dpdns.org/a005ms.jpg",
        "https://catbox.pengcyril.dpdns.org/creejo.jpg"
    ];

    const PRESET_AVATARS_MALE = [
        "https://catbox.pengcyril.dpdns.org/3kgn23.jpg",
        "https://catbox.pengcyril.dpdns.org/b2ydr2.jpg",
        "https://catbox.pengcyril.dpdns.org/u7dkq2.jpg",
        "https://sns-webpic-qc.xhscdn.com/202601302218/43f33106efd29385125cfd6e6161959c/1040g008314fn4f6r6k005pj6bg9jcu1s3b99k9g!nd_dft_wgth_webp_3",
        "https://catbox.pengcyril.dpdns.org/s0hbqc.jpg",
        "https://sns-webpic-qc.xhscdn.com/202601302219/375c37504d5e63a7d1be571db53c3b95/1040g00831lbr57ckl86g5pigjesjckneccv61lo!nd_dft_wlteh_webp_3",
        "https://sns-webpic-qc.xhscdn.com/202601302218/707a1ebe14506d9f2953e71b6925941b/1040g008317lakchtk66g5ojkpqd8cs52bmmmlb0!nd_dft_wgth_webp_3",
        "https://catbox.pengcyril.dpdns.org/xxpx09.jpg",
        "https://catbox.pengcyril.dpdns.org/vzzhoy.jpg"
    ];

    const PRESET_AVATARS_GENERAL = [
        "https://sns-webpic-qc.xhscdn.com/202601302219/a7c586d777a41e6c3738777b2274c725/notes_pre_post/1040g3k831kab4lovig405q32f5n796te7p19i5o!nd_dft_wlteh_webp_3",
        "https://catbox.pengcyril.dpdns.org/er130i.jpg",
        "https://catbox.pengcyril.dpdns.org/twmaq7.jpg",
        "https://catbox.pengcyril.dpdns.org/uzwk3i.jpg",
        "https://catbox.pengcyril.dpdns.org/ki4lpz.jpg",
        "https://catbox.pengcyril.dpdns.org/h9w3qq.jpg",
        "https://catbox.pengcyril.dpdns.org/3hbjwx.jpg",
        "https://catbox.pengcyril.dpdns.org/6mkvpd.jpg",
        "https://catbox.pengcyril.dpdns.org/0atz2y.jpg"
    ];

    // 当前选中的头像标签页
    let currentAvatarTab = 'female';

    // 世界书名称
    const WORLD_BOOK_NAME = "-群聊模拟器1.1";

    const COLOR_POOL = [
        { nameColor: '#ff0055', bubbleColor: '#3a1a2a' },
        { nameColor: '#00ccff', bubbleColor: '#1a2a3a' },
        { nameColor: '#ff9900', bubbleColor: '#3a2a1a' },
        { nameColor: '#00ff88', bubbleColor: '#1a3a2a' },
        { nameColor: '#ff66cc', bubbleColor: '#3a1a3a' },
        { nameColor: '#ffcc00', bubbleColor: '#3a3a1a' },
        { nameColor: '#66ffcc', bubbleColor: '#1a3a3a' },
        { nameColor: '#cc66ff', bubbleColor: '#2a1a3a' },
        { nameColor: '#ff6666', bubbleColor: '#3a1a1a' },
        { nameColor: '#66ccff', bubbleColor: '#1a2a3a' }
    ];

    const DEFAULT_TITLES = [
        { name: '群主', color: '#ff0055' },
        { name: '管理员', color: '#ff9900' },
        { name: '普通成员', color: '#888888' },
        { name: '高冷女王', color: '#9966ff' },
        { name: '可爱猫猫', color: '#ff66cc' },
        { name: '美少女', color: '#ff6699' }
    ];

    // ==================== 状态变量 ====================
    let members = [];
    let lurkerMembers = [];
    let memberColors = {};
    let groupName = '文媛小屋❤️';
    let titlePool = [...DEFAULT_TITLES];
    let tempNewMemberAvatar = '';
    let selectedGender = '女';
    let selectedMemberType = 'active';
    let selectedNewMemberTitle = DEFAULT_TITLES[2];
    let momentsData = [];
    let currentEditingMember = null;
    let tempMemberAvatar = '';
    let selectedRedpacketType = '拼手气';
    let selectedRedpacketTarget = null;
    let atMemberBarTimeout = null;
    let currentModalTop = '100px';
    let currentPrivateTarget = null;
    let pendingCommands = [];
    let privateChatHistory = {};
    let privateReadCount = {}; // 记录每个角色已读的私聊消息数量
    let claimedRedpackets = new Set(); // 已领取的红包（不可撤回）
    let tempMemberTitle = null;
    let currentCropTarget = ''; // 'new-member' 或 'member-detail' 或 'user-avatar'
    let autoCropEnabled = true; // 自动裁切开关，默认开启
    
    // 角色池相关变量
    let characterPool = [];
    const MAX_POOL_SIZE = 30;
    const POOL_PAGE_SIZE = 6;
    let currentPoolPage = 1;

    // 裁切状态
    let cropState = {
        originalImage: null,
        imageWidth: 0,
        imageHeight: 0,
        displayScale: 1,
        imgOffsetX: 0,
        imgOffsetY: 0,
        cropX: 0,
        cropY: 0,
        cropSize: 100,
        isDragging: false,
        isResizing: false,
        startX: 0,
        startY: 0,
        startCropX: 0,
        startCropY: 0,
        startCropSize: 0
    };

    let config = {
        theme: 'dark',
        bgImage: '',
        bgMask: '0.7',
        fontSize: '14',
        fontFamily: 'jinghua',
        userAvatar: '',
        playerCharacterName: '',
        phoneWidth: '430',
        showSenderInfo: true,
        avatarBorder: false,
        bubbleTextColor: 'white',
        lurkerBubbleColor: '#4a4a4a',
        nameShadow: true
    };
    let tempConfig = { ...config };
    let tempMemberColors = {};

    const rawXML = `<chat_room>$1</chat_room>`;

    // ==================== 数据加载 ====================
    async function loadAllData() {
        try {
            const savedMembers = await dbGet('wenyuan_members');
            members = savedMembers || [];

            const savedLurkers = await dbGet('wenyuan_lurker_members');
            lurkerMembers = savedLurkers || [];

            const savedColors = await dbGet('wenyuan_member_colors');
            memberColors = savedColors || {};

            const savedGroupName = await dbGet('wenyuan_group_name');
            groupName = savedGroupName || '文媛小屋❤️';

            const savedTitles = await dbGet('wenyuan_title_pool');
            titlePool = savedTitles || [...DEFAULT_TITLES];

            const savedConfig = await dbGet('wenyuan_config');
            if (savedConfig) {
                config = { ...config, ...savedConfig };
            }
        } catch (e) {
            console.error('加载数据失败:', e);
        }
    }

    async function saveMembers() {
        await dbSet('wenyuan_members', members);
    }

    async function saveLurkerMembers() {
        await dbSet('wenyuan_lurker_members', lurkerMembers);
    }

    async function saveMemberColors() {
        await dbSet('wenyuan_member_colors', memberColors);
    }

    async function saveGroupName() {
        await dbSet('wenyuan_group_name', groupName);
    }

    async function saveTitlePool() {
        await dbSet('wenyuan_title_pool', titlePool);
    }

    async function saveConfig() {
        await dbSet('wenyuan_config', config);
    }

    // ==================== 工具函数 ====================
    function getNextColor() {
        const usedCount = Object.keys(memberColors).length;
        return COLOR_POOL[usedCount % COLOR_POOL.length];
    }

    function assignColorToMember(name) {
        if (!memberColors[name]) {
            memberColors[name] = getNextColor();
            saveMemberColors();
        }
        return memberColors[name];
    }

    function getActiveMembers() {
        return members.filter(m => m.isActive !== false);
    }

    function getActiveMemberCount() {
        return getActiveMembers().length;
    }

    function getMemberAvatar(member) {
        if (member.isActive === false) {
            return member.gender === '男' ? DEFAULT_MALE_AVATAR : DEFAULT_FEMALE_AVATAR;
        }
        return member.avatar || DEFAULT_AVATAR;
    }

    function renderAvatarHtml(member, borderColor) {
        if (member.isActive === false) {
            const emoji = member.gender === '男' ? '👨' : '👩';
            return `<div class="avatar-placeholder">${emoji}</div>`;
        }
        // 只有开启头像描边设置时才显示描边
        const borderStyle = (config.avatarBorder && borderColor) ? `border: 2px solid ${borderColor}; box-shadow: 0 0 6px ${borderColor}40;` : '';
        return `<img src="${member.avatar || DEFAULT_AVATAR}" class="avatar-img" style="${borderStyle}">`;
    }

    // 检查某个角色是否有未读私聊消息
    function hasUnreadPrivateChat(memberName) {
        const messages = privateChatHistory[memberName] || [];
        const readCount = privateReadCount[memberName] || 0;
        // 只统计对方发送的消息（不是"我"发送的）
        const otherMessages = messages.filter(m => m.sender !== '我');
        return otherMessages.length > readCount;
    }

    // 标记某个角色的私聊为已读
    function markPrivateChatAsRead(memberName) {
        const messages = privateChatHistory[memberName] || [];
        const otherMessages = messages.filter(m => m.sender !== '我');
        privateReadCount[memberName] = otherMessages.length;
    }

    // ==================== 初始化 ====================
    async function init() {
        console.log("========== 文媛聊天室初始化 ==========");
        await loadAllData();
        await loadCharacterPool();
        await loadLiveStatus();
        applyConfig(config);

        const data = parseXML(rawXML);
        momentsData = data.moments || [];

        // 解析直播状态（从待开播/待结束转为实际状态）
        parseLiveStatus(rawXML);

        if (data.privateChatHistory) {
            privateChatHistory = data.privateChatHistory;
        }

        if (data.header && data.header.name) {
            groupName = data.header.name;
            saveGroupName();
        }

        if (data.members && data.members.length > 0) {
            data.members.forEach(m => {
                const existing = members.find(x => x.name === m.name);
                if (!existing) {
                    m.isActive = true;
                    members.push(m);
                } else {
                    // 更新现有成员的字段（始终更新，即使是空字符串也覆盖）
                    if (m.desc !== undefined) existing.desc = m.desc;
                    if (m.gender) existing.gender = m.gender;
                    if (m.title) existing.title = m.title;
                    if (m.avatar && m.avatar !== DEFAULT_AVATAR) existing.avatar = m.avatar;
                }
                assignColorToMember(m.name);
            });
            saveMembers();
        }

        members.forEach(m => assignColorToMember(m.name));

        updateHeaderInfo();
        renderMessages(data);
        renderMoments();
        renderAtMemberBar();
        updateCommandFab();

        document.addEventListener('click', function(e) {
            if (!e.target.closest('.add-btn-container')) {
                closeAddMenu();
            }
        });
    }

    function parseXML(xml) {
        const result = { header: {}, members: [], messages: [], actions: [], moments: [], privateMessages: [], privateTarget: null };
        try {
            const hMatch = xml.match(/<header>([\s\S]*?)<\/header>/i);
            if (hMatch) {
                const t = hMatch[1];
                const nameM = t.match(/\[群名\|(.+?)\](?=\s*$|\s*\[)/m);
                if (nameM) result.header.name = nameM[1];
            }

            // 解析活跃成员 - 支持<members>、<active_members>标签和[活跃成员|...]、[成员|...]格式
            const activeMemberMatch = xml.match(/<(?:members|active_members)>([\s\S]*?)<\/(?:members|active_members)>/i);
            if (activeMemberMatch) {
                const activeRegex = /\[(?:活跃成员|成员)\|(.+?)\](?=\s*$|\s*\[)/gm;
                let m;
                while ((m = activeRegex.exec(activeMemberMatch[1])) !== null) {
                    const p = m[1].split('|');
                    const memberName = p[0] || '';
                    // 过滤掉"系统"作为成员名
                    if (memberName === '系统') continue;
                    // 格式：[活跃成员|名称|性别|背景|头衔]，头像由前端管理不在格式中
                    result.members.push({
                        id: 'member_' + Date.now() + Math.random(),
                        name: memberName,
                        gender: p[1] || '女',
                        desc: p[2] || '',
                        title: p[3] || '成员',
                        isActive: true
                    });
                }
            }

            // 解析潜水成员 - 支持<lurker_members>标签和[潜水成员|...]格式
            const lurkerMatch = xml.match(/<lurker_members>([\s\S]*?)<\/lurker_members>/i);
            if (lurkerMatch) {
                const lurkerRegex = /\[潜水成员\|(.+?)\](?=\s*$|\s*\[)/gm;
                let lm;
                while ((lm = lurkerRegex.exec(lurkerMatch[1])) !== null) {
                    const p = lm[1].split('|');
                    const lurkerName = p[0] || '';
                    // 过滤掉"系统"作为成员名，检查是否已存在于lurkerMembers中
                    if (lurkerName === '系统') continue;
                    if (!lurkerMembers.find(m => m.name === lurkerName)) {
                        lurkerMembers.push({
                            id: 'lurker_' + Date.now() + Math.random(),
                            name: lurkerName,
                            gender: p[1] || '女',
                            desc: p[2] || '',
                            title: '成员',
                            isActive: false
                        });
                    }
                }
            }

            const msgMatch = xml.match(/<messages>([\s\S]*?)<\/messages>/i);
            if (msgMatch) {
                const t = msgMatch[1];
                const allMsgs = [];

                // 修复：使用贪婪匹配到行末，避免内容中的]截断消息
                const sysRegex = /\[消息\|系统\|(.+?)\](?=\s*$|\s*\[)/gm;
                let sm;
                while ((sm = sysRegex.exec(t)) !== null) {
                    allMsgs.push({ index: sm.index, type: '系统', content: sm[1] });
                }

                const gRegex = /\[群消息\|(.+?)\](?=\s*$|\s*\[)/gm;
                let gm;
                while ((gm = gRegex.exec(t)) !== null) {
                    const p = gm[1].split('|');
                    const msgType = p[1];
                    if (msgType === '红包') {
                        allMsgs.push({
                            index: gm.index, sender: p[0], type: '红包',
                            redpacketType: p[2] || '拼手气', amount: p[3] || '',
                            message: p[4] || '恭喜发财', target: p[5] || '', isSelf: false
                        });
                    } else if (msgType === '音乐') {
                        allMsgs.push({
                            index: gm.index, sender: p[0], type: '音乐',
                            songName: p[2] || '', artist: p[3] || '', reason: p[4] || '', isSelf: false
                        });
                    } else {
                        allMsgs.push({
                            index: gm.index, sender: p[0], type: p[1],
                            content: p[2], extra: p[3] || '', isSelf: false
                        });
                    }
                }

                const myRegex = /\[我的消息\|(.+?)\](?=\s*$|\s*\[)/gm;
                let mm;
                while ((mm = myRegex.exec(t)) !== null) {
                    const p = mm[1].split('|');
                    if (p[0] === '@') {
                        allMsgs.push({ index: mm.index, type: '@', target: p[1], content: p[2], isSelf: true });
                    } else if (p[0] === '红包') {
                        allMsgs.push({
                            index: mm.index, type: '红包', redpacketType: p[1] || '拼手气',
                            amount: p[2] || '', message: p[3] || '恭喜发财', target: p[4] || '', isSelf: true
                        });
                    } else if (p[0] === '音乐') {
                        allMsgs.push({
                            index: mm.index, type: '音乐', songName: p[1] || '',
                            artist: p[2] || '', reason: p[3] || '', isSelf: true
                        });
                    } else {
                        allMsgs.push({ index: mm.index, type: p[0], content: p[1], extra: p[2] || '', isSelf: true });
                    }
                }

                allMsgs.sort((a, b) => a.index - b.index);
                result.messages = allMsgs;
            }

            const actMatch = xml.match(/<actions>([\s\S]*?)<\/actions>/i);
            if (actMatch) {
                const regex = /\[按钮\|(.+?)\](?=\s*$|\s*\[)/gm;
                let am;
                while ((am = regex.exec(actMatch[1])) !== null) {
                    const p = am[1].split('|');
                    result.actions.push({ label: p[0], send: p[1] || p[0] });
                }
            }

            const privateMatch = xml.match(/<private_chat>([\s\S]*?)<\/private_chat>/i);
            if (privateMatch) {
                const t = privateMatch[1];
                const allPrivateChats = {};
                let currentTarget = null;
                
                const allLines = t.split(/\r?\n/);
                
                allLines.forEach(line => {
                    const targetMatch = line.match(/\[私聊对象\|(.+)\]$/);
                    if (targetMatch) {
                        const target = targetMatch[1];
                        // 过滤掉"系统"作为私聊对象
                        if (target === '系统') return;
                        currentTarget = target;
                        if (!allPrivateChats[currentTarget]) {
                            allPrivateChats[currentTarget] = [];
                        }
                        return;
                    }
                    
                    if (currentTarget) {
                        const msgMatch = line.match(/\[私聊\|([^\|]+)\|(.+)\]$/);
                        if (msgMatch) {
                            allPrivateChats[currentTarget].push({
                                sender: msgMatch[1],
                                content: msgMatch[2]
                            });
                        }
                    }
                });
                
                result.privateChatHistory = allPrivateChats;
            }

const momMatch = xml.match(/<moments>([\s\S]*?)<\/moments>/i);
            if (momMatch) {
                const t = momMatch[1];
                const dRegex = /\[动态\|(.+?)\](?=\s*$|\s*\[)/gm;
                let dm;
                let momentIndex = 0;
                while ((dm = dRegex.exec(t)) !== null) {
                    const p = dm[1].split('|');
                    momentIndex++;
                    result.moments.push({
                        id: momentIndex,
                        author: p[0] || '',
                        time: p[1] || '',
                        content: p[2] || '',
                        imageFile: p[3] || '',
                        imageDesc: p[4] || '',
                        likers: p[5] ? p[5].split(',').map(x => x.trim()).filter(x => x) : [],
                        dislikers: p[6] ? p[6].split(',').map(x => x.trim()).filter(x => x) : [],
                        comments: []
                    });
                }

                const cRegex = /\[评论\|(.+?)\](?=\s*$|\s*\[)/gm;
                let cm;
                while ((cm = cRegex.exec(t)) !== null) {
                    const p = cm[1].split('|');
                    const momentId = parseInt(p[0]) || 1;
                    const moment = result.moments.find(x => x.id === momentId);
                    if (moment) {
                        moment.comments.push({ author: p[1] || '', text: p[2] || '' });
                    }
                }
            }
        } catch (e) { console.error("解析错误:", e); }
        return result;
    }

    // ==================== 消息渲染 ====================
    function renderRedpacketCard(msg, canGrab = false) {
        const isExclusive = msg.redpacketType === '专属';
        const redpacketId = `rp_${msg.sender}_${msg.redpacketType}_${msg.amount}_${(msg.message || '').slice(0,10)}`.replace(/[^a-zA-Z0-9_\u4e00-\u9fa5]/g, '');
        const isClaimed = claimedRedpackets.has(redpacketId);
        let cardClass = isExclusive ? 'redpacket-card exclusive' : 'redpacket-card';
        if (isClaimed) cardClass += ' claimed';
        const title = isExclusive ? '专属红包' : '拼手气红包';
        const targetHtml = isExclusive && msg.target ? `<div class="redpacket-target">🎁 指定：${msg.target}</div>` : '';
        const claimedBadge = isClaimed ? '<div class="redpacket-claimed-badge">已领取</div>' : '';
        const clickHandler = (canGrab && !isClaimed) ? `onclick="grabRedpacket(this, '${redpacketId}', '${msg.sender}', '${msg.redpacketType}', '${msg.amount}', '${(msg.message || '').replace(/'/g, "\\'")}')"` : '';
        return `<div class="${cardClass}" id="${redpacketId}" ${clickHandler}>
            <div class="redpacket-header"><span class="redpacket-icon">🧧</span><span class="redpacket-title">${title}</span></div>
            <div class="redpacket-message">${msg.message || '恭喜发财，大吉大利'}</div>
            <div class="redpacket-amount">💰 ${msg.amount}元</div>
            ${targetHtml}
            ${claimedBadge}
        </div>`;
    }

    function renderMusicCard(msg) {
        const reasonHtml = msg.reason ? `<div class="music-reason">${msg.reason}</div>` : '';
        return `<div class="music-card">
            <div class="music-cover">🎵</div>
            <div class="music-info">
                <div class="music-name">${msg.songName}</div>
                <div class="music-artist">${msg.artist}</div>
                ${reasonHtml}
            </div>
            <div class="music-play">▶</div>
        </div>`;
    }

    function renderMessages(data) {
        const container = document.getElementById('message-list');
        let html = '';
        const showSender = config.showSenderInfo;

        data.messages.forEach(msg => {
            if (msg.type === '系统') {
                html += `<div class="system-msg">${msg.content || ''}</div>`;
            } else if (msg.sender === '系统') {
                // 当sender是"系统"时，内容可能在content或type字段中
                const sysContent = msg.content || msg.type || '';
                if (!sysContent) return; // 跳过空内容
                html += `<div class="system-msg">${sysContent}</div>`;
            } else if (msg.isSelf) {
                const userAvatar = config.userAvatar || '';
                const avatarHtml = userAvatar
                    ? `<img src="${userAvatar}" class="avatar-img">`
                    : `<div class="avatar-img" style="display:flex;align-items:center;justify-content:center;background:var(--bubble-self);color:#fff;font-size:16px">我</div>`;

                html += `<div class="message-row self">
                    <div class="avatar-container">${avatarHtml}</div>
                    <div class="message-content-wrapper">`;

                if (msg.type === '@') {
                    html += `<div class="bubble-self"><div><span class="at-target">@${msg.target}</span> ${msg.content}</div></div>`;
                } else if (msg.type === '图片' || msg.type === '视频' || msg.type === '媒体') {
                    html += `<div class="bubble-self"><div class="image-msg" onclick="this.classList.toggle('revealed')">
                        <div class="image-placeholder" style="border-color:rgba(255,255,255,0.3)"><span>📷</span><div class="image-filename" style="color:rgba(255,255,255,0.8)">${msg.content || '图片'}</div></div>
                        <div class="image-desc" style="color:#fff">${msg.extra || '暂无描述'}</div></div></div>`;
                } else if (msg.type === '红包') {
                    html += `<div class="self-card-wrapper">${renderRedpacketCard(msg)}</div>`;
                } else if (msg.type === '音乐') {
                    html += `<div class="self-card-wrapper">${renderMusicCard(msg)}</div>`;
                } else {
                    html += `<div class="bubble-self"><div>${msg.content}</div></div>`;
                }
                html += `</div></div>`;
            } else {
                const member = members.find(m => m.name === msg.sender) || lurkerMembers.find(m => m.name === msg.sender) || { avatar: null, title: '成员', titleColor: '#888', isActive: false, gender: '女' };
                const colors = memberColors[msg.sender] || COLOR_POOL[0];
                // 潜水成员使用配置的潜水成员气泡颜色，活跃成员使用个人颜色设置
                const isLurker = member.isActive === false;
                const bubbleColor = isLurker ? (config.lurkerBubbleColor || '#4a4a4a') : colors.bubbleColor;
                const bubbleStyle = bubbleColor ? `background-color: ${bubbleColor};` : '';

                const titleColor = member.titleColor || '#888';
                const nameShadowStyle = config.nameShadow !== false ? `text-shadow: 0 0 8px ${colors.nameColor}80, 0 0 3px ${colors.nameColor}60;` : '';
                const senderInfoHtml = showSender ? `
                    <div class="sender-info">
                        <span class="sender-name-text" style="color: ${colors.nameColor}; ${nameShadowStyle}">${msg.sender}</span>
                        ${member.title ? `<span class="sender-divider">|</span><span class="sender-title-text" style="color: ${titleColor}">${member.title}</span>` : ''}
                    </div>` : '';

                const hasUnread = hasUnreadPrivateChat(msg.sender);
                const avatarBorderColor = member.isActive !== false ? colors.nameColor : null;
                html += `<div class="message-row">
                    <div class="avatar-container" onclick="openMemberDetailAt('${msg.sender}', event)">
                        ${renderAvatarHtml(member, avatarBorderColor)}
                        ${hasUnread ? '<div class="private-unread-dot"></div>' : ''}
                    </div>
                    <div class="message-content-wrapper">
                        ${senderInfoHtml}`;

                if (msg.type === '语音') {
                    html += `<div class="bubble" style="${bubbleStyle}"><div class="voice-msg" onclick="event.stopPropagation();this.classList.toggle('revealed')">
                        <span>🔊</span><span>${msg.content}</span>
                        <div class="voice-text">"${msg.extra}"</div></div></div>`;
                } else if (msg.type === '图片' || msg.type === '视频' || msg.type === '媒体') {
                    html += `<div class="bubble" style="${bubbleStyle}"><div class="image-msg" onclick="event.stopPropagation();this.classList.toggle('revealed')">
                        <div class="image-placeholder"><span>📷</span><div class="image-filename">${msg.content || '图片'}</div></div>
                        <div class="image-desc">${msg.extra || '暂无描述'}</div></div></div>`;
                } else if (msg.type === '红包') {
                    html += renderRedpacketCard(msg, true);
                } else if (msg.type === '音乐') {
                    html += renderMusicCard(msg);
                } else {
                    html += `<div class="bubble" style="${bubbleStyle}"><div>${msg.content}</div></div>`;
                }
                html += `</div></div>`;
            }
        });

        container.innerHTML = html || '<div style="text-align:center;color:var(--text-sub);padding:40px">暂无消息</div>';
        container.scrollTop = container.scrollHeight;

        const actionBar = document.getElementById('action-bar');
        if (data.actions.length > 0) {
            actionBar.innerHTML = data.actions.map(b => `<button class="action-btn" onclick="queueAction('${b.send.replace(/'/g, "\\'")}')">${b.label}</button>`).join('');
            actionBar.style.display = 'flex';
        } else {
            actionBar.style.display = 'none';
        }
    }

    function renderAtMemberBar() {
        const bar = document.getElementById('at-member-bar');
        const activeMembers = getActiveMembers();
        let html = '';
        activeMembers.forEach(m => {
            html += `<div class="at-member-chip" onclick="insertAtMember('${m.name}')">
                <img src="${m.avatar || DEFAULT_AVATAR}">
                <span>@${m.name}</span>
            </div>`;
        });
        bar.innerHTML = html;
    }

    window.showAtMemberBar = function() {
        if (atMemberBarTimeout) { clearTimeout(atMemberBarTimeout); atMemberBarTimeout = null; }
        document.getElementById('at-member-bar').classList.add('show');
    };

    window.hideAtMemberBarDelay = function() {
        atMemberBarTimeout = setTimeout(() => {
            document.getElementById('at-member-bar').classList.remove('show');
        }, 200);
    };

    window.insertAtMember = function(name) {
        const input = document.getElementById('chat-input');
        input.value = input.value + `@${name}：`;
        input.focus();
        checkInput();
    };

    // ==================== 页面切换 ====================
    window.switchPage = function(page) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('page-' + page).classList.add('active');
        
        // 切换到直播页面时渲染直播列表
        if (page === 'live') {
            renderLivePage();
        }
    };

    function updateHeaderInfo() {
        document.getElementById('chat-title').textContent = groupName;
        renderLurkerChatBubbles();
    }

    // 渲染顶部私聊气泡（活跃成员显示头像，潜水成员显示姓氏）
    function renderLurkerChatBubbles() {
        const container = document.getElementById('lurker-chat-bubbles');
        if (!container) return;
        
        // 获取有私聊历史的所有成员
        const allChats = [];
        for (const name in privateChatHistory) {
            if (privateChatHistory[name].length === 0) continue;
            
            const activeMember = members.find(m => m.name === name && m.isActive !== false);
            const lurker = lurkerMembers.find(m => m.name === name);
            
            allChats.push({
                name: name,
                surname: name.charAt(0),
                hasUnread: hasUnreadPrivateChat(name),
                isActive: !!activeMember,
                avatar: activeMember ? (activeMember.avatar || DEFAULT_AVATAR) : null,
                gender: activeMember ? activeMember.gender : (lurker ? lurker.gender : '女')
            });
        }
        
        if (allChats.length === 0) {
            container.innerHTML = '';
            return;
        }
        
        let html = '';
        allChats.forEach(chat => {
            if (chat.isActive) {
                // 活跃成员显示头像气泡
                html += `<div class="lurker-chat-bubble active-chat-bubble" onclick="openLurkerPrivateChat('${chat.name}')" title="私聊 ${chat.name}">
                    <img src="${chat.avatar}" class="header-chat-avatar">
                    ${chat.hasUnread ? '<div class="lurker-unread-dot"></div>' : ''}
                </div>`;
            } else {
                // 潜水成员显示姓氏气泡
                const bgColor = chat.gender === '男' 
                    ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' 
                    : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
                html += `<div class="lurker-chat-bubble" onclick="openLurkerPrivateChat('${chat.name}')" title="私聊 ${chat.name}" style="background: ${bgColor}">
                    ${chat.surname}
                    ${chat.hasUnread ? '<div class="lurker-unread-dot"></div>' : ''}
                </div>`;
            }
        });
        
        container.innerHTML = html;
    }

    // 打开私聊窗口（支持活跃成员和潜水成员）
    window.openLurkerPrivateChat = function(name) {
        // 先查找活跃成员，再查找潜水成员
        let member = members.find(m => m.name === name && m.isActive !== false);
        if (!member) {
            member = lurkerMembers.find(m => m.name === name);
        }
        
        // 如果都找不到，创建一个临时成员对象
        if (!member) {
            member = {
                name: name,
                gender: '女',
                isActive: false,
                title: '成员'
            };
        }
        
        currentEditingMember = name;
        currentPrivateTarget = member;
        
        document.getElementById('private-name').textContent = member.name;
        document.getElementById('private-target-name').textContent = member.name;
        // 活跃成员显示头像，潜水成员显示默认头像
        const avatarSrc = (member.isActive !== false && member.avatar) ? member.avatar : DEFAULT_AVATAR;
        document.getElementById('private-avatar').src = avatarSrc;
        
        if (!privateChatHistory[member.name]) {
            privateChatHistory[member.name] = [];
        }
        
        // 标记私聊为已读
        markPrivateChatAsRead(member.name);
        
        // 设置弹窗位置
        document.getElementById('private-chat-modal').style.setProperty('--inline-modal-top', '100px');
        
        showModal('private-chat-modal');
        renderPrivateMessages();
        
        // 更新顶部气泡红点状态
        renderLurkerChatBubbles();
    };

    // ==================== 私聊功能 ====================
    window.startPrivateChat = function() {
        if (!currentEditingMember) return;
        const member = members.find(m => m.name === currentEditingMember) || lurkerMembers.find(m => m.name === currentEditingMember);
        if (!member) return;

        currentPrivateTarget = { ...member };

        document.getElementById('private-name').textContent = member.name;
        document.getElementById('private-target-name').textContent = member.name;

        if (member.isActive !== false && member.avatar) {
            document.getElementById('private-avatar').src = member.avatar;
        } else {
            document.getElementById('private-avatar').src = DEFAULT_AVATAR;
        }

        if (!privateChatHistory[member.name]) {
            privateChatHistory[member.name] = [];
        }

        // 标记私聊为已读
        markPrivateChatAsRead(member.name);

        // 使用与角色详情相同的位置（currentModalTop已在openMemberDetailAt中设置）
        document.getElementById('private-chat-modal').style.setProperty('--inline-modal-top', currentModalTop);

        closeModal('member-detail-modal');
        showModal('private-chat-modal');
        renderPrivateMessages();
        
        // 重新渲染消息列表以更新红点状态
        const data = parseXML(rawXML);
        renderMessages(data);
    };

    window.checkPrivateInput = function() {
        const val = document.getElementById('private-input').value;
        document.getElementById('private-send-btn').style.display = val.trim() ? 'block' : 'none';
    };

    function renderPrivateMessages() {
        const container = document.getElementById('private-message-list');
        if (!currentPrivateTarget) return;
        
        const targetName = currentPrivateTarget.name;
        const messages = privateChatHistory[targetName] || [];
        
        if (messages.length === 0) {
            container.innerHTML = `<div class="private-hint">
                <div class="private-hint-icon">🤫</div>
                <div>这是你和 <span>${targetName}</span> 的私密对话</div>
                <div style="margin-top:10px;font-size:12px;opacity:0.8">
                    在这里可以密谋计划、交换秘密<br>
                    这些内容不会出现在群聊中
                </div>
            </div>`;
            return;
        }

        let html = '';
        messages.forEach(msg => {
            const isSelf = msg.sender === '我' || msg.sender === 'user' || msg.sender === '{{user}}';
            
            if (isSelf) {
                const userAvatar = config.userAvatar || '';
                const avatarHtml = userAvatar
                    ? `<img src="${userAvatar}" class="avatar-img">`
                    : `<div class="avatar-img" style="display:flex;align-items:center;justify-content:center;background:var(--bubble-self);color:#fff;font-size:16px">我</div>`;

                html += `<div class="message-row self">
                    <div class="avatar-container">${avatarHtml}</div>
                    <div class="message-content-wrapper">
                        <div class="bubble-self"><div>${msg.content}</div></div>
                    </div>
                </div>`;
            } else {
                const member = members.find(m => m.name === msg.sender) || currentPrivateTarget;
                const colors = memberColors[msg.sender] || COLOR_POOL[0];
                const bubbleStyle = colors.bubbleColor ? `background-color: ${colors.bubbleColor};` : '';

                html += `<div class="message-row">
                    <div class="avatar-container">
                        ${renderAvatarHtml(member)}
                    </div>
                    <div class="message-content-wrapper">
                        <div class="bubble" style="${bubbleStyle}"><div>${msg.content}</div></div>
                    </div>
                </div>`;
            }
        });

        container.innerHTML = html;
        container.scrollTop = container.scrollHeight;
    }

    // 私聊添加菜单开关
    window.togglePrivateAddMenu = function() {
        const menu = document.getElementById('private-add-menu');
        const menuPage = document.getElementById('private-add-menu-page');
        if (menu) menu.classList.toggle('show');
        if (menuPage) menuPage.classList.toggle('show');
    };

    // 私聊发送媒体 - 浏览器弹窗
    window.showPrivateMediaModal = function() {
        togglePrivateAddMenu();
        if (!currentPrivateTarget) return;
        const desc = prompt('请输入要发送的图片/视频描述：');
        if (desc && desc.trim()) {
            pendingCommands.push({
                category: 'private',
                type: 'media',
                target: currentPrivateTarget.name,
                content: desc.trim()
            });
            updateCommandFab();
            if (!privateChatHistory[currentPrivateTarget.name]) {
                privateChatHistory[currentPrivateTarget.name] = [];
            }
            privateChatHistory[currentPrivateTarget.name].push({
                sender: '我',
                content: '[媒体] ' + desc.trim()
            });
            renderPrivateMessages();
        }
    };

    // 私聊发送语音 - 浏览器弹窗
    window.showPrivateVoiceModal = function() {
        togglePrivateAddMenu();
        if (!currentPrivateTarget) return;
        const content = prompt('请输入语音内容（会转为文字显示）：');
        if (content && content.trim()) {
            const duration = Math.min(60, Math.max(1, Math.ceil(content.trim().length / 5)));
            pendingCommands.push({
                category: 'private',
                type: 'voice',
                target: currentPrivateTarget.name,
                content: content.trim(),
                duration: duration
            });
            updateCommandFab();
            if (!privateChatHistory[currentPrivateTarget.name]) {
                privateChatHistory[currentPrivateTarget.name] = [];
            }
            privateChatHistory[currentPrivateTarget.name].push({
                sender: '我',
                content: '[语音 ' + duration + '秒] ' + content.trim()
            });
            renderPrivateMessages();
        }
    };

    // 私聊发送红包 - 浏览器弹窗
    window.showPrivateRedpacketModal = function() {
        togglePrivateAddMenu();
        if (!currentPrivateTarget) return;
        const amount = prompt('请输入红包金额：');
        if (amount && !isNaN(amount) && parseFloat(amount) > 0) {
            const message = prompt('请输入祝福语（可留空）：') || '恭喜发财';
            pendingCommands.push({
                category: 'private',
                type: 'redpacket',
                target: currentPrivateTarget.name,
                amount: parseFloat(amount),
                message: message
            });
            updateCommandFab();
            if (!privateChatHistory[currentPrivateTarget.name]) {
                privateChatHistory[currentPrivateTarget.name] = [];
            }
            privateChatHistory[currentPrivateTarget.name].push({
                sender: '我',
                content: '[红包 ' + amount + '元] ' + message
            });
            renderPrivateMessages();
        }
    };

    // 私聊分享音乐 - 浏览器弹窗
    window.showPrivateMusicModal = function() {
        togglePrivateAddMenu();
        if (!currentPrivateTarget) return;
        const songName = prompt('请输入歌曲名称：');
        if (songName && songName.trim()) {
            const artist = prompt('请输入歌手名称：') || '未知歌手';
            const reason = prompt('请输入分享语（可留空）：') || '';
            pendingCommands.push({
                category: 'private',
                type: 'music',
                target: currentPrivateTarget.name,
                songName: songName.trim(),
                artist: artist,
                reason: reason
            });
            updateCommandFab();
            if (!privateChatHistory[currentPrivateTarget.name]) {
                privateChatHistory[currentPrivateTarget.name] = [];
            }
            privateChatHistory[currentPrivateTarget.name].push({
                sender: '我',
                content: '[音乐] ' + songName.trim() + ' - ' + artist
            });
            renderPrivateMessages();
        }
    };

    window.submitPrivateText = function() {
        const input = document.getElementById('private-input');
        const val = input.value.trim();
        if (!val || !currentPrivateTarget) return;

        const targetName = currentPrivateTarget.name;

        pendingCommands.push({
            category: 'private',
            type: 'text',
            target: targetName,
            content: val
        });

        input.value = '';
        checkPrivateInput();
        updateCommandFab();

        if (!privateChatHistory[targetName]) {
            privateChatHistory[targetName] = [];
        }
        privateChatHistory[targetName].push({
            sender: '我',
            content: val
        });
        renderPrivateMessages();
    };

    window.exitPrivateChat = function() {
        currentPrivateTarget = null;
        switchPage('chat');
    };

    window.closePrivateChat = function() {
        closeModal('private-chat-modal');
    };

    // ==================== 指令队列 ====================
    window.toggleAddMenu = function() {
        const menu = document.getElementById('add-menu');
        const btn = document.getElementById('add-btn');
        if (menu.classList.contains('show')) { closeAddMenu(); }
        else { menu.classList.add('show'); btn.classList.add('active'); }
    };

    function closeAddMenu() {
        document.getElementById('add-menu').classList.remove('show');
        document.getElementById('add-btn').classList.remove('active');
    }

    window.showMediaModal = function() { closeAddMenu(); showModal('media-modal'); };
    window.showRedpacketModal = function() {
        closeAddMenu();
        selectedRedpacketType = '拼手气';
        selectedRedpacketTarget = null;
        document.getElementById('redpacket-target-group').style.display = 'none';
        document.querySelectorAll('.redpacket-type-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
        renderRedpacketMemberList();
        showModal('redpacket-modal');
    };
    window.showVoiceModal = function() { closeAddMenu(); showModal('voice-modal'); };
    window.showMusicModal = function() { closeAddMenu(); showModal('music-modal'); };

    window.queueMedia = function() {
        const val = document.getElementById('media-desc').value.trim();
        if (!val) { alert('请输入图片/视频描述'); return; }
        pendingCommands.push({ category: 'chat', type: 'media', content: val });
        closeModal('media-modal');
        document.getElementById('media-desc').value = '';
        updateCommandFab();
    };

    window.selectRedpacketType = function(el) {
        document.querySelectorAll('.redpacket-type-btn').forEach(b => b.classList.remove('active'));
        el.classList.add('active');
        selectedRedpacketType = el.dataset.type;
        document.getElementById('redpacket-target-group').style.display = selectedRedpacketType === '专属' ? 'block' : 'none';
    };

    function renderRedpacketMemberList() {
        const container = document.getElementById('redpacket-member-list');
        let html = '';
        members.forEach(m => {
            html += `<div class="member-select-item ${selectedRedpacketTarget === m.name ? 'selected' : ''}" onclick="selectRedpacketTarget('${m.name}', this)">
                ${m.isActive !== false ? `<img src="${m.avatar || DEFAULT_AVATAR}">` : `<div style="width:30px;height:30px;display:flex;align-items:center;justify-content:center">${m.gender === '男' ? '👨' : '👩'}</div>`}
                <span>${m.name}</span>
            </div>`;
        });
        container.innerHTML = html;
    }

    window.selectRedpacketTarget = function(name, el) {
        selectedRedpacketTarget = name;
        document.querySelectorAll('#redpacket-member-list .member-select-item').forEach(i => i.classList.remove('selected'));
        el.classList.add('selected');
    };

    
    // 抢红包功能
    window.grabRedpacket = function(el, redpacketId, sender, redpacketType, amount, message) {
        // 检查是否已领取（不可重复领取）
        if (claimedRedpackets.has(redpacketId)) return;
        
        // 标记为已领取（不可撤回）
        claimedRedpackets.add(redpacketId);
        
        // 更新卡片样式
        el.classList.add('claimed');
        el.removeAttribute('onclick');
        el.style.cursor = 'default';
        
        // 添加已领取徽章
        if (!el.querySelector('.redpacket-claimed-badge')) {
            const badge = document.createElement('div');
            badge.className = 'redpacket-claimed-badge';
            badge.textContent = '已领取';
            el.appendChild(badge);
        }
        
        // 添加隐性指令（标记为不可撤回）
        pendingCommands.push({
            category: 'chat',
            type: 'grab_redpacket',
            sender: sender,
            redpacketType: redpacketType,
            amount: amount,
            message: message,
            hidden: true,        // 隐性指令
            irrevocable: true    // 不可撤回
        });
        updateCommandFab();
    };

    window.queueRedpacket = function() {
        const amount = document.getElementById('redpacket-amount').value;
        const message = document.getElementById('redpacket-message').value.trim() || '恭喜发财，大吉大利';
        if (!amount || amount <= 0) { alert('请输入红包金额'); return; }
        if (selectedRedpacketType === '专属' && !selectedRedpacketTarget) { alert('请选择红包接收人'); return; }
        pendingCommands.push({ category: 'chat', type: 'redpacket', redpacketType: selectedRedpacketType, amount, message, target: selectedRedpacketTarget || '' });
        closeModal('redpacket-modal');
        document.getElementById('redpacket-amount').value = '';
        document.getElementById('redpacket-message').value = '';
        updateCommandFab();
    };

    window.queueVoice = function() {
        const content = document.getElementById('voice-content').value.trim();
        if (!content) { alert('请输入语音内容'); return; }
        pendingCommands.push({ category: 'chat', type: 'voice', content });
        closeModal('voice-modal');
        document.getElementById('voice-content').value = '';
        updateCommandFab();
    };

    window.queueMusic = function() {
        const name = document.getElementById('music-name').value.trim();
        const artist = document.getElementById('music-artist').value.trim();
        const reason = document.getElementById('music-reason').value.trim();
        if (!name) { alert('请输入歌曲名称'); return; }
        if (!artist) { alert('请输入歌手/作者'); return; }
        pendingCommands.push({ category: 'chat', type: 'music', songName: name, artist, reason });
        closeModal('music-modal');
        document.getElementById('music-name').value = '';
        document.getElementById('music-artist').value = '';
        document.getElementById('music-reason').value = '';
        updateCommandFab();
    };

    window.queueAction = function(text) {
        pendingCommands.push({ category: 'chat', type: 'action', content: text });
        updateCommandFab();
    };

    window.checkInput = function() {
        const val = document.getElementById('chat-input').value;
        document.getElementById('send-btn').style.display = val.trim() ? 'block' : 'none';
    };

    window.submitText = function() {
        const input = document.getElementById('chat-input');
        const val = input.value.trim();
        if (!val) return;
        const atMatch = val.match(/^@(\S+)[：:]\s*(.+)$/);
        if (atMatch) {
            pendingCommands.push({ category: 'chat', type: 'at', target: atMatch[1], content: atMatch[2] });
        } else {
            pendingCommands.push({ category: 'chat', type: 'text', content: val });
        }
        input.value = '';
        checkInput();
        updateCommandFab();
    };

    

    // ==================== 朋友圈 ====================
    function renderMoments() {
        const container = document.getElementById('moments-list');
        if (momentsData.length === 0) {
            container.innerHTML = `<div class="no-moments"><div style="font-size:48px;margin-bottom:15px">📷</div><div>暂无动态</div></div>`;
            return;
        }
        // 简化版渲染，保持原有逻辑
        let html = '';
        momentsData.forEach((m, idx) => {
            const isUser = m.author === '我' || m.author === 'user' || m.author === '{{user}}';
            const member = members.find(x => x.name === m.author);
            const avatarSrc = isUser ? (config.userAvatar || '') : (member?.avatar || DEFAULT_AVATAR);
            const displayName = isUser ? '我' : m.author;

            const safeAuthor = m.author.replace(/'/g, "\\'");
            const avatarClickHandler = isUser ? '' : `onclick="openMemberDetailAt('${safeAuthor}', event)"`;
            const avatarCursor = isUser ? '' : 'cursor:pointer;';
            const avatarHtml = avatarSrc
                ? `<img src="${avatarSrc}" class="moment-avatar" style="${avatarCursor}" ${avatarClickHandler}>`
                : `<div class="moment-avatar" style="display:flex;align-items:center;justify-content:center;background:var(--bubble-self);color:#fff;font-size:16px">我</div>`;

            html += `<div class="moment-item">
                <div class="moment-header">
                    ${avatarHtml}
                    <div><div class="moment-user-name">${displayName}</div><div class="moment-time">${m.time}</div></div>
                </div>
                <div class="moment-content">${m.content}</div>
                ${(m.imageFile && m.imageFile !== '无' && m.imageFile.trim()) || (m.imageDesc && m.imageDesc !== '无' && m.imageDesc.trim()) ? `<div class="moment-image" onclick="this.classList.toggle('revealed')">
                    <div class="moment-image-placeholder"><span>📷</span><div class="moment-image-filename">${m.imageFile && m.imageFile !== '无' ? m.imageFile : '图片'}</div></div>
                    <div class="moment-image-desc">${m.imageDesc && m.imageDesc !== '无' ? m.imageDesc : '暂无描述'}</div>
                </div>` : ''}
                <div class="moment-stats">
                    <div class="moment-stat ${m.likers.includes('我') ? 'active' : ''}" onclick="toggleLikeMoment(${idx})"><span>❤️</span><span>${m.likers.length}</span></div>
                    <div class="moment-stat ${m.dislikers && m.dislikers.includes('我') ? 'dislike-active' : ''}" onclick="toggleDislikeMoment(${idx})"><span>👎</span><span>${(m.dislikers || []).length}</span></div>
                    <div class="moment-stat"><span>💬</span><span>${m.comments.length}</span></div>
                </div>
                ${(m.likers.length > 0 || (m.dislikers && m.dislikers.length > 0)) ? `<div class="moment-people-list">
                    ${m.likers.length > 0 ? `<div class="likers">❤️ ${m.likers.join('、')}</div>` : ''}
                    ${m.dislikers && m.dislikers.length > 0 ? `<div class="dislikers">👎 ${m.dislikers.join('、')}</div>` : ''}
                </div>` : ''}
                ${m.comments && m.comments.length > 0 ? `<div class="moment-comments">
                    ${m.comments.map(c => `<div class="comment-item"><span class="comment-author">${c.author}：</span><span class="comment-text">${c.text}</span></div>`).join('')}
                </div>` : ''}
                <div class="comment-input-row">
                    <input type="text" class="comment-input" id="comment-input-${idx}" placeholder="评论...">
                    <button class="comment-send" onclick="queueComment(${idx})">添加</button>
                </div>
            </div>`;
        });
        container.innerHTML = html;
    }

    window.toggleLikeMoment = function(idx) {
        const m = momentsData[idx];
        const alreadyLiked = m.likers.includes('我');
        
        if (alreadyLiked) {
            // 取消点赞：从likers中移除"我"，并移除对应的指令
            m.likers = m.likers.filter(l => l !== '我');
            pendingCommands = pendingCommands.filter(c => !(c.category === 'moment' && c.type === 'like' && c.momentIdx === idx));
        } else {
            // 点赞：添加"我"到likers，并添加指令
            m.likers.push('我');
            pendingCommands.push({ category: 'moment', type: 'like', momentIdx: idx, moment: m });
        }
        
        renderMoments();
        updateCommandFab();
    };

    window.toggleDislikeMoment = function(idx) {
        const m = momentsData[idx];
        if (!m.dislikers) m.dislikers = [];
        const alreadyDisliked = m.dislikers.includes('我');
        
        if (alreadyDisliked) {
            // 取消点踩：从dislikers中移除"我"，并移除对应的指令
            m.dislikers = m.dislikers.filter(d => d !== '我');
            pendingCommands = pendingCommands.filter(c => !(c.category === 'moment' && c.type === 'dislike' && c.momentIdx === idx));
        } else {
            // 点踩：添加"我"到dislikers，并添加指令
            m.dislikers.push('我');
            pendingCommands.push({ category: 'moment', type: 'dislike', momentIdx: idx, moment: m });
        }
        
        renderMoments();
        updateCommandFab();
    };

    window.queueComment = function(idx) {
        const input = document.getElementById('comment-input-' + idx);
        const text = input.value.trim();
        if (!text) return;
        const m = momentsData[idx];
        pendingCommands.push({ category: 'moment', type: 'comment', momentIdx: idx, moment: m, extra: text });
        input.value = '';
        updateCommandFab();
    };

    window.openPostMomentModal = function() { showModal('post-moment-modal'); };
    window.queuePostMoment = function() {
        const text = document.getElementById('moment-text').value.trim();
        const image = document.getElementById('moment-image').value.trim();
        if (!text) { alert('请输入内容'); return; }
        if (!image) { alert('请填写配图描述'); return; }
        pendingCommands.push({ category: 'moment', type: 'post', content: text, image });
        closeModal('post-moment-modal');
        document.getElementById('moment-text').value = '';
        document.getElementById('moment-image').value = '';
        updateCommandFab();
    };

    // ==================== 指令菜单 ====================
    function updateCommandFab() {
        const badges = ['nav-command-badge-chat', 'nav-command-badge-moments', 'nav-command-badge-live', 'nav-command-badge-private'];
        const btns = ['nav-command-btn', 'nav-command-btn-moments', 'nav-command-btn-live', 'nav-command-btn-private'];

        badges.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                if (pendingCommands.length > 0) {
                    el.classList.add('show');
                    el.textContent = pendingCommands.length;
                } else {
                    el.classList.remove('show');
                }
            }
        });

        btns.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.classList.toggle('has-commands', pendingCommands.length > 0);
            }
        });
    }

    window.openCommandMenu = function() {
        renderCommandList();
        showModal('command-menu-modal');
    };

    function renderCommandList() {
        const container = document.getElementById('command-list');
        if (pendingCommands.length === 0) {
            container.innerHTML = '<div class="no-commands">暂无待发送的操作</div>';
            return;
        }

        let html = '';
        pendingCommands.forEach((cmd, idx) => {
            let icon = '📌', text = '';

            if (cmd.category === 'chat') {
                switch(cmd.type) {
                    case 'text': icon = '💬'; text = `发送消息：${cmd.content.slice(0, 20)}...`; break;
                    case 'at': icon = '@'; text = `@${cmd.target}：${cmd.content.slice(0, 15)}...`; break;
                    case 'action': icon = '🔘'; text = `快捷回复：${cmd.content}`; break;
                    case 'media': icon = '📷'; text = `发送图片/视频：${cmd.content.slice(0, 20)}...`; break;
                    case 'redpacket': icon = '🧧'; text = cmd.redpacketType === '拼手气' ? `发拼手气红包 ${cmd.amount}元` : `发专属红包给${cmd.target} ${cmd.amount}元`; break;
                    case 'voice': icon = '🎤'; text = `发语音：${cmd.content.slice(0, 20)}...`; break;
                    case 'music': icon = '🎵'; text = `分享音乐：${cmd.songName} - ${cmd.artist}`; break;
                    case 'system': icon = '📢'; text = `系统操作：${cmd.content.slice(0, 25)}...`; break;
                    case 'report': icon = '⚠️'; text = `举报 ${cmd.target}`; break;
                    case 'grab_redpacket': icon = '🧧'; text = `抢${cmd.sender}的${cmd.redpacketType}红包`; break;
                }
            } else if (cmd.category === 'private') {
                switch(cmd.type) {
                    case 'text': icon = '🤫'; text = `私聊 ${cmd.target}：${cmd.content.slice(0, 20)}...`; break;
                    case 'media': icon = '📷'; text = `私聊 ${cmd.target}：[媒体] ${cmd.content.slice(0, 15)}...`; break;
                    case 'voice': icon = '🎤'; text = `私聊 ${cmd.target}：[语音] ${cmd.content.slice(0, 15)}...`; break;
                    case 'redpacket': icon = '🧧'; text = `私聊 ${cmd.target}：[红包 ${cmd.amount}元]`; break;
                    case 'music': icon = '🎵'; text = `私聊 ${cmd.target}：[音乐] ${cmd.songName}`; break;
                    default: icon = '🤫'; text = `私聊 ${cmd.target}：${cmd.content ? cmd.content.slice(0, 20) : ''}...`; break;
                }
            } else if (cmd.category === 'moment') {
                switch(cmd.type) {
                    case 'like': icon = '❤️'; text = `给 ${cmd.moment.author} 的动态点赞`; break;
                    case 'dislike': icon = '👎'; text = `给 ${cmd.moment.author} 的动态点踩`; break;
                    case 'comment': icon = '💬'; text = `评论 ${cmd.moment.author}：${cmd.extra}`; break;
                    case 'post': icon = '✏️'; text = `发布动态：${cmd.content.slice(0, 15)}...`; break;
                }
            } else if (cmd.category === 'script') {
                switch(cmd.type) {
                    case 'worldbook': 
                        icon = '📖'; 
                        text = `[脚本] 创建世界书条目：${cmd.memberName}（${cmd.memberGender}，${cmd.memberTitle}）`; 
                        break;
                    case 'promote': 
                        icon = '⬆️'; 
                        text = `[隐性] 升级成员：${cmd.memberName} → 活跃成员`; 
                        break;
                    case 'summary':
                        icon = '📝';
                        text = `[脚本] 更新世界书总结条目`;
                        break;
                }
            } else if (cmd.category === 'live') {
                switch(cmd.type) {
                    case 'start_my_broadcast':
                        icon = '📺';
                        const typeStr = cmd.broadcastType === 'private' ? '私密' : '公开';
                        text = `我开始${typeStr}直播：${cmd.title}`;
                        if (cmd.invitedMembers && cmd.invitedMembers.length > 0) {
                            text += `（邀请：${cmd.invitedMembers.join('、')}）`;
                        }
                        break;
                    case 'end_my_broadcast':
                        icon = '🔴';
                        text = `我结束直播：${cmd.title}`;
                        break;
                    case 'enter_room':
                        icon = '👁';
                        text = `进入 ${cmd.targetName} 的直播间`;
                        break;
                    case 'start_member_broadcast':
                        icon = '🎬';
                        const memberTypeStr = cmd.broadcastType === 'private' ? '私密' : '公开';
                        text = `让 ${cmd.targetName} 开始${memberTypeStr}直播：${cmd.title}`;
                        if (cmd.invitedMembers && cmd.invitedMembers.length > 0) {
                            text += `（邀请：${cmd.invitedMembers.join('、')}）`;
                        }
                        break;
                    case 'switch_room':
                        icon = '🔄';
                        text = `切换到 ${cmd.targetName} 的直播间`;
                        break;
                    case 'close_member_live':
                        icon = '🚫';
                        text = `关闭 ${cmd.targetName} 的直播间`;
                        break;
                }
            }

            const removeBtn = cmd.irrevocable ? '' : `<button class="cmd-remove" onclick="removeCommand(${idx})">✕</button>`;
            const itemClass = cmd.irrevocable ? 'command-list-item irrevocable' : 'command-list-item';
            html += `<div class="${itemClass}">
                <span class="cmd-icon">${icon}</span>
                <span class="cmd-text">${text}</span>
                ${removeBtn}
            </div>`;
        });

        container.innerHTML = html;
    }

    window.removeCommand = function(idx) {
        const cmd = pendingCommands[idx];
        // 不可撤回的指令无法删除
        if (cmd && cmd.irrevocable) return;
        // 如果是点赞/点踩指令，需要同步更新momentsData
        if (cmd && cmd.category === 'moment') {
            const m = momentsData[cmd.momentIdx];
            if (m) {
                if (cmd.type === 'like') {
                    m.likers = m.likers.filter(l => l !== '我');
                } else if (cmd.type === 'dislike') {
                    if (m.dislikers) m.dislikers = m.dislikers.filter(d => d !== '我');
                }
                renderMoments();
            }
        }
        // 如果是直播相关指令，需要同步撤回过渡状态
        if (cmd && cmd.category === 'live') {
            if (cmd.type === 'start_my_broadcast') {
                // 撤回我的开播指令 -> 恢复为未开播
                myLiveStatus = { isLive: false, title: '', type: 'public', invitedMembers: [] };
                saveMyLiveStatus();
                renderLivePage();
            } else if (cmd.type === 'end_my_broadcast') {
                // 撤回我的结束直播指令 -> 恢复为直播中
                myLiveStatus = { 
                    isLive: true, 
                    pendingEnd: false,
                    title: cmd.title || myLiveStatus.title, 
                    type: myLiveStatus.type, 
                    invitedMembers: myLiveStatus.invitedMembers 
                };
                saveMyLiveStatus();
                renderLivePage();
            } else if (cmd.type === 'start_member_broadcast') {
                // 撤回成员开播指令 -> 删除该成员的直播状态
                if (liveStatus[cmd.targetName]) {
                    delete liveStatus[cmd.targetName];
                    saveLiveStatus();
                    renderLivePage();
                }
            } else if (cmd.type === 'close_member_live') {
                // 撤回关闭成员直播指令 -> 恢复为直播中
                if (liveStatus[cmd.targetName]) {
                    liveStatus[cmd.targetName] = {
                        ...liveStatus[cmd.targetName],
                        isLive: true,
                        pendingEnd: false
                    };
                    saveLiveStatus();
                    renderLivePage();
                }
            }
        }
        pendingCommands.splice(idx, 1);
        updateCommandFab();
        renderCommandList();
    };

    window.clearAllCommands = function() {
        // 清空所有点赞/点踩状态（排除不可撤回的指令）
        pendingCommands.forEach(cmd => {
            if (cmd.irrevocable) return; // 跳过不可撤回的指令
            if (cmd.category === 'moment') {
                const m = momentsData[cmd.momentIdx];
                if (m) {
                    if (cmd.type === 'like') {
                        m.likers = m.likers.filter(l => l !== '我');
                    } else if (cmd.type === 'dislike') {
                        if (m.dislikers) m.dislikers = m.dislikers.filter(d => d !== '我');
                    }
                }
            }
            // 撤回直播相关的过渡状态
            if (cmd.category === 'live') {
                if (cmd.type === 'start_my_broadcast') {
                    myLiveStatus = { isLive: false, title: '', type: 'public', invitedMembers: [] };
                    saveMyLiveStatus();
                } else if (cmd.type === 'end_my_broadcast') {
                    myLiveStatus = { 
                        isLive: true, 
                        pendingEnd: false,
                        title: cmd.title || myLiveStatus.title, 
                        type: myLiveStatus.type, 
                        invitedMembers: myLiveStatus.invitedMembers 
                    };
                    saveMyLiveStatus();
                } else if (cmd.type === 'start_member_broadcast') {
                    if (liveStatus[cmd.targetName]) {
                        delete liveStatus[cmd.targetName];
                        saveLiveStatus();
                    }
                } else if (cmd.type === 'close_member_live') {
                    if (liveStatus[cmd.targetName]) {
                        liveStatus[cmd.targetName] = {
                            ...liveStatus[cmd.targetName],
                            isLive: true,
                            pendingEnd: false
                        };
                        saveLiveStatus();
                    }
                }
            }
        });
        // 保留不可撤回的指令
        pendingCommands = pendingCommands.filter(cmd => cmd.irrevocable);
        updateCommandFab();
        renderMoments();
        renderLivePage();
        closeModal('command-menu-modal');
    };

    window.submitAllCommands = function() {
        if (pendingCommands.length === 0) { closeModal('command-menu-modal'); return; }

        let commandParts = [];
        pendingCommands.forEach(cmd => {
            if (cmd.category === 'chat') {
                switch(cmd.type) {
                    case 'text': commandParts.push(`[群聊] ${cmd.content}`); break;
                    case 'at': commandParts.push(`[群聊] @${cmd.target}：${cmd.content}`); break;
                    case 'action': commandParts.push(`[群聊] ${cmd.content}`); break;
                    case 'media': commandParts.push(`[群聊] 我发送了图片/视频：${cmd.content}`); break;
                    case 'redpacket':
                        if (cmd.redpacketType === '拼手气') commandParts.push(`[群聊] 我发了${cmd.amount}元的拼手气红包，祝福语：${cmd.message}`);
                        else commandParts.push(`[群聊] 我给${cmd.target}发了${cmd.amount}元的专属红包，祝福语：${cmd.message}`);
                        break;
                    case 'voice': commandParts.push(`[群聊] 我发送了语音消息：${cmd.content}`); break;
                    case 'grab_redpacket': commandParts.push(`[群聊] 我抢了${cmd.sender}的${cmd.redpacketType}红包`); break;
                    case 'music': commandParts.push(`[群聊] 我分享了音乐：${cmd.songName} - ${cmd.artist}${cmd.reason ? '，分享语：' + cmd.reason : ''}`); break;
                    case 'system': commandParts.push(`[群聊] [系统操作] ${cmd.content}`); break;
                    case 'report': commandParts.push(`[群聊] 我举报了${cmd.target}，原因：${cmd.reason}`); break;
                }
            } else if (cmd.category === 'private') {
                switch(cmd.type) {
                    case 'text': commandParts.push(`[私聊 ${cmd.target}] ${cmd.content}`); break;
                    case 'media': commandParts.push(`[私聊 ${cmd.target}] 我发送了媒体：${cmd.content}`); break;
                    case 'voice': commandParts.push(`[私聊 ${cmd.target}] 我发送了语音(${cmd.duration}秒)：${cmd.content}`); break;
                    case 'redpacket': commandParts.push(`[私聊 ${cmd.target}] 我发了${cmd.amount}元的红包，祝福语：${cmd.message}`); break;
                    case 'music': commandParts.push(`[私聊 ${cmd.target}] 我分享了音乐：${cmd.songName} - ${cmd.artist}${cmd.reason ? '，分享语：' + cmd.reason : ''}`); break;
                    default: commandParts.push(`[私聊 ${cmd.target}] ${cmd.content || ''}`); break;
                }
            } else if (cmd.category === 'moment') {
                switch(cmd.type) {
                    case 'like': commandParts.push(`[朋友圈] 我给${cmd.moment.author}的动态点了赞`); break;
                    case 'dislike': commandParts.push(`[朋友圈] 我给${cmd.moment.author}的动态点了踩`); break;
                    case 'comment': commandParts.push(`[朋友圈] 我在${cmd.moment.author}的动态下评论：${cmd.extra}`); break;
                    case 'post': commandParts.push(`[朋友圈] 我发布了动态，内容：${cmd.content}，配图：${cmd.image}`); break;
                }
            } else if (cmd.category === 'live') {
                switch(cmd.type) {
                    case 'start_my_broadcast':
                        const typeStr = cmd.broadcastType === 'private' ? '私密' : '公开';
                        let broadcastCmd = `[直播] 我开始了${typeStr}直播，标题：${cmd.title}`;
                        if (cmd.invitedMembers && cmd.invitedMembers.length > 0) {
                            broadcastCmd += `，邀请了${cmd.invitedMembers.join('、')}观看`;
                        }
                        commandParts.push(broadcastCmd);
                        break;
                    case 'end_my_broadcast':
                        commandParts.push(`[直播] 我结束了直播`);
                        break;
                    case 'enter_room':
                        commandParts.push(`[直播] 我进入了${cmd.targetName}的直播间`);
                        break;
                    case 'start_member_broadcast':
                        const memberTypeStr = cmd.broadcastType === 'private' ? '私密' : '公开';
                        let memberBroadcastCmd = `[直播] ${cmd.targetName}开始了${memberTypeStr}直播，标题：${cmd.title}`;
                        if (cmd.invitedMembers && cmd.invitedMembers.length > 0) {
                            memberBroadcastCmd += `，邀请了${cmd.invitedMembers.join('、')}观看`;
                        }
                        commandParts.push(memberBroadcastCmd);
                        break;
                    case 'switch_room':
                        commandParts.push(`[直播] 我切换到${cmd.targetName}的直播间`);
                        break;
                    case 'close_member_live':
                        commandParts.push(`[直播] 我关闭了${cmd.targetName}的直播间`);
                        break;
                }
            }
        });

        // 处理脚本类型指令（在标签外执行）
        let scriptCommands = [];
        pendingCommands.forEach(cmd => {
            if (cmd.category === 'script') {
                switch(cmd.type) {
                    case 'worldbook':
                        scriptCommands.push(`/createentry file="${WORLD_BOOK_NAME}" key="${cmd.memberName}" ${cmd.memberName}|性别：${cmd.memberGender}|头衔：${cmd.memberTitle}|背景：${cmd.memberDesc}`);
                        break;
                    case 'promote':
                        scriptCommands.push(`/createentry file="${WORLD_BOOK_NAME}" key="${cmd.memberName}" ${cmd.memberName}|性别：${cmd.memberGender}|头衔：成员|背景：${cmd.memberDesc}|备注：从潜水成员升级`);
                        break;
                    case 'summary':
                        scriptCommands.push(`/setentry file="${WORLD_BOOK_NAME}" key="群聊总结" ${cmd.summaryContent}`);
                        break;
                }
            }
        });

        // 构建完整命令：先执行脚本，再发送用户回复
        let fullCommand = '';
        if (scriptCommands.length > 0) {
            fullCommand = scriptCommands.join('|') + '|';
        }
        fullCommand += `/send <user_reply>${commandParts.join('；')}</user_reply>|/trigger`;

        const command = fullCommand;
        if (typeof triggerSlash === 'function') triggerSlash(command);
        else console.log(command);

        pendingCommands = [];
        updateCommandFab();
        closeModal('command-menu-modal');
    };

    // ==================== 角色详情 ====================
    window.openMemberDetailAt = function(name, event) {
        currentEditingMember = name;
        
        const member = members.find(m => m.name === name) || lurkerMembers.find(m => m.name === name);
        if (!member) return;
        tempMemberAvatar = member.avatar || '';

        if (member.isActive !== false && member.avatar) {
            document.getElementById('member-detail-avatar').src = member.avatar;
        } else {
            document.getElementById('member-detail-avatar').src = DEFAULT_AVATAR;
        }

        document.getElementById('member-detail-name').textContent = member.name;
        document.getElementById('member-detail-gender').textContent = '性别：' + member.gender;
        document.getElementById('member-detail-desc').textContent = member.desc || '暂无背景介绍';

        // 潜水成员不能更换头像和头衔
        const isActive = member.isActive !== false;
        document.getElementById('member-detail-avatar-edit').style.display = isActive ? 'block' : 'none';
        document.getElementById('preset-avatar-section').style.display = isActive ? 'block' : 'none';
        document.getElementById('member-title-section').style.display = isActive ? 'block' : 'none';

        // 初始化临时头衔
        tempMemberTitle = member.title ? titlePool.find(t => t.name === member.title) : null;

        if (isActive) {
            renderMemberPresetGrid();
            renderMemberTitlePool();
        }

        const phoneRect = document.getElementById('phone-root').getBoundingClientRect();
        const clickY = event.clientY - phoneRect.top;
        currentModalTop = Math.max(10, clickY - 50) + 'px';
        document.getElementById('member-detail-modal').style.setProperty('--inline-modal-top', currentModalTop);

        showModal('member-detail-modal');
    };

    window.handleMemberAvatarClick = function() {
        const member = members.find(m => m.name === currentEditingMember);
        if (member && member.isActive !== false) {
            document.getElementById('member-avatar-input').click();
        }
    };

    window.selectMemberPresetAvatar = function(url) {
        tempMemberAvatar = url;
        document.getElementById('member-detail-avatar').src = url;
        document.querySelectorAll('#member-preset-grid .preset-item').forEach(el => {
            el.classList.toggle('selected', el.src === url);
        });
    };

    function renderMemberTitlePool() {
        const container = document.getElementById('member-title-pool');
        let html = '';
        titlePool.forEach((t, idx) => {
            const isSelected = tempMemberTitle && tempMemberTitle.name === t.name;
            html += `<div class="title-chip ${isSelected ? 'selected' : ''}"
                style="background-color: ${t.color}20; color: ${t.color}; border-color: ${isSelected ? t.color : 'transparent'}"
                onclick="selectMemberTitle(${idx})">
                ${t.name}
            </div>`;
        });
        container.innerHTML = html;
    }

    window.selectMemberTitle = function(idx) {
        tempMemberTitle = titlePool[idx];
        renderMemberTitlePool();
    };

    window.handleMemberAvatarChange = function(input) {
        if (!input.files || !input.files[0]) return;
        const file = input.files[0];
        if (!file.type.startsWith('image/')) { alert('请选择图片文件'); return; }
        const reader = new FileReader();
        reader.onload = function(e) {
            currentCropTarget = 'member-detail';
            cropState.originalImage = new Image();
            cropState.originalImage.onload = function() { if (autoCropEnabled) { performAutoCrop(cropState.originalImage, currentCropTarget); } else { openCropModal(); } };
            cropState.originalImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    };

    window.saveMemberDetail = function() {
        if (!currentEditingMember) return;
        const member = members.find(m => m.name === currentEditingMember);
        if (member && member.isActive !== false) {
            member.avatar = tempMemberAvatar;
            // 保存头衔修改
            if (tempMemberTitle) {
                member.title = tempMemberTitle.name;
                member.titleColor = tempMemberTitle.color;
            }
            saveMembers();
            const data = parseXML(rawXML);
            renderMessages(data);
            renderMoments();
            renderAtMemberBar();
        }
        closeModal('member-detail-modal');
    };

    window.kickCurrentMember = function() {
        if (!currentEditingMember) return;
        if (!confirm(`确定要将 ${currentEditingMember} 踢出群聊吗？`)) return;

        members = members.filter(m => m.name !== currentEditingMember);
        lurkerMembers = lurkerMembers.filter(m => m.name !== currentEditingMember);
        saveMembers();
        saveLurkerMembers();
        delete memberColors[currentEditingMember];
        saveMemberColors();

        pendingCommands.push({ category: 'chat', type: 'system', content: `${currentEditingMember} 已被移出群聊` });
        updateCommandFab();

        closeModal('member-detail-modal');
        updateHeaderInfo();
        const data = parseXML(rawXML);
        renderMessages(data);
        renderAtMemberBar();
    };

    window.showReportModal = function() {
        if (!currentEditingMember) return;
        document.getElementById('report-target').value = currentEditingMember;
        document.getElementById('report-reason').value = '';
        document.getElementById('report-modal').style.setProperty('--inline-modal-top', currentModalTop);
        closeModal('member-detail-modal');
        showModal('report-modal');
    };

    window.submitReport = function() {
        const target = document.getElementById('report-target').value;
        const reason = document.getElementById('report-reason').value.trim();
        if (!reason) { alert('请填写举报原因'); return; }
        pendingCommands.push({ category: 'chat', type: 'report', target, reason });
        updateCommandFab();
        closeModal('report-modal');
    };

    // ==================== 群聊管理 ====================
    window.openManageModal = function() {
        document.getElementById('group-name-input').value = groupName;
        selectedNewMemberTitle = titlePool[2];
        selectedMemberType = 'active';
        updateMemberTypeUI();
        renderTitlePool('new-member-title-pool', selectedNewMemberTitle);
        renderNewMemberPresets();
        renderMemberListTab();
        renderChatCharacterPool();
        showModal('manage-modal');
    };

    window.switchManageTab = function(idx) {
        document.querySelectorAll('#manage-modal .modal-tabs .tab-item').forEach((t, i) => t.classList.toggle('active', i === idx));
        document.querySelectorAll('#manage-modal .tab-content').forEach((c, i) => c.classList.toggle('active', i === idx));
        if (idx === 0) renderChatCharacterPool();
        if (idx === 2) renderMemberListTab();
    };

    function updateMemberTypeUI() {
        const activeCount = getActiveMemberCount();
        const countHint = document.getElementById('active-count-hint');
        if (countHint) countHint.textContent = `${activeCount}/${MAX_ACTIVE_MEMBERS}`;
    }

    window.selectMemberType = function(type) {
        if (type === 'active' && getActiveMemberCount() >= MAX_ACTIVE_MEMBERS) {
            alert(`活跃成员已达上限（${MAX_ACTIVE_MEMBERS}人），请添加为潜水成员或踢出现有活跃成员`);
            return;
        }
        selectedMemberType = type;
        updateMemberTypeUI();
    };

    window.handleAvatarBoxClick = function() {
        if (selectedMemberType === 'lurker') return;
        document.getElementById('new-member-avatar-input').click();
    };

    function renderMemberListTab() {
        // 活跃成员
        const activeGrid = document.getElementById('active-member-grid');
        const activeMembers = getActiveMembers();
        document.getElementById('active-member-count').textContent = `${activeMembers.length}/${MAX_ACTIVE_MEMBERS}`;

        if (activeMembers.length === 0) {
            activeGrid.innerHTML = '<div style="grid-column:span 4;text-align:center;color:var(--text-sub);padding:20px">暂无活跃成员</div>';
        } else {
            activeGrid.innerHTML = activeMembers.map(m => `
                <div class="member-grid-item" onclick="openMemberDetailFromList('${m.name}')">
                    <img src="${m.avatar || DEFAULT_AVATAR}" class="member-grid-avatar">
                    <div class="member-grid-name">${m.name}</div>
                    ${m.title ? `<div class="member-grid-badge">${m.title}</div>` : ''}
                </div>
            `).join('');
        }

        // 潜水成员
        document.getElementById('lurker-member-count').textContent = `${lurkerMembers.length}人`;
        document.getElementById('lurker-member-grid').innerHTML = '';
    }

    

    window.openMemberDetailFromList = function(name) {
        closeModal('manage-modal');
        const fakeEvent = { clientY: 200 };
        openMemberDetailAt(name, fakeEvent);
    };

    window.promoteLurkerMember = function() {
        const input = document.getElementById('lurker-promote-input');
        const name = input.value.trim();
        if (!name) { alert('请输入潜水成员的网名'); return; }

        const lurker = lurkerMembers.find(m => m.name === name);
        if (!lurker) { alert('未找到该潜水成员'); return; }

        if (getActiveMemberCount() >= MAX_ACTIVE_MEMBERS) {
            alert(`活跃成员已达上限（${MAX_ACTIVE_MEMBERS}人），请先踢出现有活跃成员`);
            return;
        }

        // 从潜水成员中移除
        lurkerMembers = lurkerMembers.filter(m => m.name !== name);
        saveLurkerMembers();

        // 添加到活跃成员（需要选择头像）
        lurker.isActive = true;
        lurker.title = '成员';
        lurker.titleColor = '#888888';
        members.push(lurker);
        saveMembers();

        // 添加升级指令到指令清单（不显示系统消息）
        pendingCommands.push({ 
            category: 'script', 
            type: 'promote', 
            content: `【隐性升级】${name} 已从潜水成员升级为活跃成员`,
            memberName: name,
            memberGender: lurker.gender,
            memberDesc: lurker.desc || '无'
        });
        updateCommandFab();

        input.value = '';
        updateHeaderInfo();
        renderAtMemberBar();
        renderMemberListTab();
        updateMemberTypeUI();

        alert(`${name} 已升级为活跃成员，请在指令清单中确认发送`);
    };

    window.kickLurkerMember = function() {
        const input = document.getElementById('lurker-kick-input');
        const name = input.value.trim();
        if (!name) { alert('请输入要踢出的潜水成员网名'); return; }

        // 添加踢出指令到指令清单
        pendingCommands.push({ 
            category: 'chat', 
            type: 'system',
            content: `将潜水成员"${name}"踢出群聊`
        });
        updateCommandFab();

        // 从本地潜水成员列表中移除（如果存在）
        const lurkerIndex = lurkerMembers.findIndex(m => m.name === name);
        if (lurkerIndex !== -1) {
            lurkerMembers.splice(lurkerIndex, 1);
            saveLurkerMembers();
        }

        // 清除该成员的私聊历史
        if (privateChatHistory[name]) {
            delete privateChatHistory[name];
        }

        input.value = '';
        updateHeaderInfo();
        renderMemberListTab();

        alert(`踢出"${name}"的指令已添加到指令清单，请确认发送`);
    };

    window.quickStartPrivateChat = function(name) {
        const member = members.find(m => m.name === name) || lurkerMembers.find(m => m.name === name);
        if (!member) return;

        currentEditingMember = name;
        currentPrivateTarget = member;

        document.getElementById('private-name').textContent = member.name;
        document.getElementById('private-target-name').textContent = member.name;

        if (member.isActive !== false && member.avatar) {
            document.getElementById('private-avatar').src = member.avatar;
        } else {
            document.getElementById('private-avatar').src = DEFAULT_AVATAR;
        }

        if (!privateChatHistory[member.name]) {
            privateChatHistory[member.name] = [];
        }

        // 标记私聊为已读
        markPrivateChatAsRead(member.name);

        closeModal('manage-modal');
        switchPage('private');
        renderPrivateMessages();
        
        // 重新渲染消息列表以更新红点状态
        const data = parseXML(rawXML);
        renderMessages(data);
    };

    function renderTitlePool(containerId, selectedTitle) {
        const container = document.getElementById(containerId);
        let html = '';
        titlePool.forEach((t, idx) => {
            const isSelected = selectedTitle && selectedTitle.name === t.name;
            const isDefault = idx < DEFAULT_TITLES.length;
            html += `<div class="title-chip ${isSelected ? 'selected' : ''}"
                style="background-color: ${t.color}20; color: ${t.color}; border-color: ${isSelected ? t.color : 'transparent'}"
                onclick="selectTitleFromPool('${containerId}', ${idx})">
                ${t.name}
                ${!isDefault ? `<span class="title-chip-delete" onclick="event.stopPropagation();deleteTitleFromPool(${idx}, '${containerId}')">✕</span>` : ''}
            </div>`;
        });
        container.innerHTML = html;
    }

    window.selectTitleFromPool = function(containerId, idx) {
        if (containerId === 'new-member-title-pool') selectedNewMemberTitle = titlePool[idx];
        renderTitlePool(containerId, titlePool[idx]);
    };

    window.toggleAddTitleForm = function(formType) {
        document.getElementById('add-title-form-' + formType).classList.toggle('show');
    };

    window.addNewTitle = function(formType) {
        const nameInput = document.getElementById('new-title-name');
        const colorInput = document.getElementById('new-title-color');
        const name = nameInput.value.trim();
        const color = colorInput.value;
        if (!name) { alert('请输入头衔名称'); return; }
        if (titlePool.find(t => t.name === name)) { alert('该头衔已存在'); return; }
        titlePool.push({ name, color });
        saveTitlePool();
        nameInput.value = '';
        colorInput.value = '#ff0055';
        document.getElementById('add-title-form-' + formType).classList.remove('show');
        if (formType === 'new') renderTitlePool('new-member-title-pool', selectedNewMemberTitle);
    };

    window.deleteTitleFromPool = function(idx, containerId) {
        if (idx < DEFAULT_TITLES.length) { alert('默认头衔不可删除'); return; }
        if (!confirm('确定删除该头衔吗？')) return;
        titlePool.splice(idx, 1);
        saveTitlePool();
        if (containerId === 'new-member-title-pool') {
            if (selectedNewMemberTitle && !titlePool.find(t => t.name === selectedNewMemberTitle.name)) selectedNewMemberTitle = titlePool[2];
            renderTitlePool('new-member-title-pool', selectedNewMemberTitle);
        }
    };

    function getPresetAvatarsByTab() {
        switch (currentAvatarTab) {
            case 'male': return PRESET_AVATARS_MALE;
            case 'general': return PRESET_AVATARS_GENERAL;
            default: return PRESET_AVATARS_FEMALE;
        }
    }

    function renderAvatarTabNav(containerId) {
        return `<div style="display:flex;gap:4px;margin-bottom:8px;background:rgba(0,0,0,0.2);border-radius:8px;padding:4px;">
            <div onclick="switchAvatarTab('female', '${containerId}')" style="flex:1;padding:6px 8px;text-align:center;font-size:12px;color:${currentAvatarTab === 'female' ? '#fff' : '#888'};cursor:pointer;border-radius:6px;background:${currentAvatarTab === 'female' ? 'var(--primary)' : 'transparent'};">👩 女性</div>
            <div onclick="switchAvatarTab('male', '${containerId}')" style="flex:1;padding:6px 8px;text-align:center;font-size:12px;color:${currentAvatarTab === 'male' ? '#fff' : '#888'};cursor:pointer;border-radius:6px;background:${currentAvatarTab === 'male' ? 'var(--primary)' : 'transparent'};">👨 男性</div>
            <div onclick="switchAvatarTab('general', '${containerId}')" style="flex:1;padding:6px 8px;text-align:center;font-size:12px;color:${currentAvatarTab === 'general' ? '#fff' : '#888'};cursor:pointer;border-radius:6px;background:${currentAvatarTab === 'general' ? 'var(--primary)' : 'transparent'};">🎭 通用</div>
        </div>`;
    }

    window.switchAvatarTab = function(tab, containerId) {
        currentAvatarTab = tab;
        if (containerId === 'new-member-preset-grid') {
            renderNewMemberPresets();
        } else if (containerId === 'member-preset-grid') {
            renderMemberPresetGrid();
        } else if (containerId === 'user-avatar-preset-grid') {
            renderUserAvatarPresets();
        }
    };

    function renderNewMemberPresets() {
        const grid = document.getElementById('new-member-preset-grid');
        const avatars = getPresetAvatarsByTab();
        grid.innerHTML = renderAvatarTabNav('new-member-preset-grid') + 
            `<div class="avatar-grid-container">${avatars.map(url => `
                <img src="${url}" class="preset-item ${tempNewMemberAvatar === url ? 'selected' : ''}" onclick="selectNewMemberPreset('${url}')">
            `).join('')}</div>`;
    }

    function renderMemberPresetGrid() {
        const grid = document.getElementById('member-preset-grid');
        if (!grid) return;
        const avatars = getPresetAvatarsByTab();
        grid.innerHTML = renderAvatarTabNav('member-preset-grid') + 
            `<div class="avatar-grid-container">${avatars.map(url => `
                <img src="${url}" class="preset-item ${tempMemberAvatar === url ? 'selected' : ''}" onclick="selectMemberPresetAvatar('${url}')">
            `).join('')}</div>`;
    }

    function renderUserAvatarPresets() {
        const grid = document.getElementById('user-avatar-preset-grid');
        if (!grid) return;
        const avatars = getPresetAvatarsByTab();
        grid.innerHTML = renderAvatarTabNav('user-avatar-preset-grid') + 
            `<div class="avatar-grid-container">${avatars.map(url => `
                <img src="${url}" class="preset-item ${tempConfig.userAvatar === url ? 'selected' : ''}" onclick="selectUserPresetAvatar('${url}')">
            `).join('')}</div>`;
    }

    window.selectUserPresetAvatar = function(url) {
        tempConfig.userAvatar = url;
        document.getElementById('user-avatar-preview').innerHTML = `<img src="${url}" style="width:100%;height:100%;object-fit:cover;border-radius:6px">`;
        renderUserAvatarPresets();
    };

    window.changeGroupName = function() {
        const newName = document.getElementById('group-name-input').value.trim();
        if (!newName) { alert('请输入群名称'); return; }
        const oldName = groupName;
        groupName = newName;
        saveGroupName();
        updateHeaderInfo();
        pendingCommands.push({ category: 'chat', type: 'system', content: `群名称已从"${oldName}"更改为"${newName}"` });
        updateCommandFab();
    };

    window.selectNewMemberPreset = function(url) {
        if (selectedMemberType === 'lurker') return;
        tempNewMemberAvatar = url;
        document.getElementById('new-member-avatar-box').innerHTML = `<img src="${url}">`;
        document.querySelectorAll('#new-member-preset-grid .preset-item').forEach(el => el.classList.toggle('selected', el.src === url));
    };

    window.selectGender = function(el) {
        document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('active'));
        el.classList.add('active');
        selectedGender = el.dataset.gender;
        if (selectedMemberType === 'lurker') {
            document.getElementById('new-member-avatar-box').innerHTML = `<span style="font-size:24px">${selectedGender === '男' ? '👨' : '👩'}</span><span style="font-size:11px;color:var(--text-sub)">默认头像</span>`;
        }
    };

    window.handleNewMemberAvatar = function(input) {
        if (!input.files || !input.files[0]) return;
        const file = input.files[0];
        if (!file.type.startsWith('image/')) { alert('请选择图片文件'); return; }
        const reader = new FileReader();
        reader.onload = function(e) {
            currentCropTarget = 'new-member';
            cropState.originalImage = new Image();
            cropState.originalImage.onload = function() { if (autoCropEnabled) { performAutoCrop(cropState.originalImage, currentCropTarget); } else { openCropModal(); } };
            cropState.originalImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    };

    window.addNewMember = async function() {
        const name = document.getElementById('new-member-name').value.trim();
        const desc = document.getElementById('new-member-desc').value.trim();
        if (!name) { alert('请输入角色名称'); return; }

        if (getActiveMemberCount() >= MAX_ACTIVE_MEMBERS) {
            alert(`活跃成员已达上限（${MAX_ACTIVE_MEMBERS}人）！`);
            return;
        }
        if (!tempNewMemberAvatar) { alert('请上传头像或选择预设头像'); return; }
        if (!selectedNewMemberTitle) { alert('请选择头衔'); return; }

        // 检查角色池是否已有同名角色
        const existingPoolChar = characterPool.find(c => c.name === name);
        if (existingPoolChar) {
            alert('角色池中已存在同名角色，请更换名称');
            return;
        }

        // 获取颜色
        const colors = assignColorToMember(name);

        // 保存到角色池
        if (characterPool.length < MAX_POOL_SIZE) {
            characterPool.push({
                id: 'pool_' + Date.now(),
                name: name,
                gender: selectedGender,
                title: selectedNewMemberTitle.name,
                bg: desc || '群成员',
                avatar: tempNewMemberAvatar,
                nameColor: colors.nameColor || '#94a3b8',
                titleColor: selectedNewMemberTitle.color || '#888888',
                bubbleColor: colors.bubbleColor || '#1e293b'
            });
            await saveCharacterPool();
        }

        const newMember = {
            id: 'member_' + Date.now(),
            name: name,
            gender: selectedGender,
            avatar: tempNewMemberAvatar,
            desc: desc || '新成员',
            title: selectedNewMemberTitle.name,
            titleColor: selectedNewMemberTitle.color,
            isActive: true
        };

        members.push(newMember);
        saveMembers();

        updateHeaderInfo();
        renderAtMemberBar();
        updateMemberTypeUI();

        pendingCommands.push({ category: 'chat', type: 'system', content: `${name}(${selectedGender}，${selectedNewMemberTitle.name}，活跃成员)加入了群聊，背景：${desc || '无'}` });
        
        pendingCommands.push({ 
            category: 'script', 
            type: 'worldbook', 
            content: `为新成员 ${name} 创建世界书条目`,
            memberName: name,
            memberGender: selectedGender,
            memberTitle: selectedNewMemberTitle.name,
            memberDesc: desc || '无'
        });
        updateCommandFab();

        // 重置表单
        document.getElementById('new-member-name').value = '';
        document.getElementById('new-member-desc').value = '';
        tempNewMemberAvatar = '';
        document.getElementById('new-member-avatar-box').innerHTML = `<span style="font-size:24px;color:var(--text-sub)">📷</span><span style="font-size:11px;color:var(--text-sub)">上传</span>`;
        selectedNewMemberTitle = titlePool[2];
        renderTitlePool('new-member-title-pool', selectedNewMemberTitle);
        alert(`角色 ${name} 已创建并添加到群聊！\n同时已保存到角色池，可在开局前端复用。`);
    };

    // 批量邀请潜水成员
    window.batchInviteLurkers = function() {
        const countInput = document.getElementById('batch-lurker-count');
        const descInput = document.getElementById('batch-lurker-desc');
        const count = parseInt(countInput.value) || 50;
        const desc = descInput.value.trim();

        if (count < 10 || count > 200) {
            alert('邀请人数必须在10-200人之间');
            return;
        }

        if (!desc) {
            alert('请填写身份背景描述，以便AI生成合适的潜水成员');
            return;
        }

        pendingCommands.push({ 
            category: 'chat', 
            type: 'system', 
            content: `批量邀请${count}名潜水成员加入群聊，身份背景：${desc}`
        });
        updateCommandFab();

        // 重置表单
        countInput.value = '50';
        descInput.value = '';
        alert(`已添加批量邀请${count}名潜水成员的指令到发送队列！`);
    };

    // ==================== 角色池功能 ====================
    async function loadCharacterPool() {
        const saved = await dbGet('wenyuan_character_pool');
        if (saved && Array.isArray(saved)) {
            characterPool = saved;
        } else {
            characterPool = [];
        }
    }

    async function saveCharacterPool() {
        await dbSet('wenyuan_character_pool', characterPool);
    }

    function renderChatCharacterPool() {
        const container = document.getElementById('chat-character-pool-grid');
        const countHint = document.getElementById('pool-count-hint');
        const pageInfo = document.getElementById('pool-page-info');
        
        if (!container) return;
        
        countHint.textContent = `(${characterPool.length}/${MAX_POOL_SIZE})`;
        
        const totalPages = Math.max(1, Math.ceil(characterPool.length / POOL_PAGE_SIZE));
        if (currentPoolPage > totalPages) currentPoolPage = totalPages;
        pageInfo.textContent = `${currentPoolPage}/${totalPages}`;
        
        const startIdx = (currentPoolPage - 1) * POOL_PAGE_SIZE;
        let html = '';
        
        for (let i = 0; i < POOL_PAGE_SIZE; i++) {
            const idx = startIdx + i;
            if (idx < characterPool.length) {
                const char = characterPool[idx];
                let avatarContent;
                if (char.avatar) {
                    avatarContent = `<img src="${char.avatar}" style="width:100%;height:100%;object-fit:cover;border-radius:6px">`;
                } else {
                    avatarContent = char.gender === '女' ? '👩' : '👨';
                }
                html += `
                    <div class="pool-char-card" onclick="openPoolCharPreview(${idx})" style="background:rgba(255,255,255,0.05);border:1px solid var(--border-color);border-radius:8px;padding:10px;text-align:center;cursor:pointer;transition:all 0.2s;position:relative">
                        <button onclick="event.stopPropagation();deletePoolChar(${idx})" style="position:absolute;top:4px;right:4px;width:18px;height:18px;border-radius:50%;background:rgba(255,100,100,0.3);border:none;color:#ff8888;cursor:pointer;font-size:10px;display:flex;align-items:center;justify-content:center">✕</button>
                        <div style="width:40px;height:40px;margin:0 auto 6px;display:flex;align-items:center;justify-content:center;font-size:24px;background:rgba(0,0,0,0.2);border-radius:6px;overflow:hidden">${avatarContent}</div>
                        <div style="font-size:12px;font-weight:bold;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${char.name}</div>
                        <div style="font-size:10px;color:var(--text-sub)">${char.gender} · ${char.title || '成员'}</div>
                    </div>
                `;
            } else {
                html += `
                    <div class="pool-char-card empty" style="background:transparent;border:2px dashed rgba(255,255,255,0.1);border-radius:8px;padding:10px;text-align:center;min-height:80px;display:flex;flex-direction:column;align-items:center;justify-content:center">
                        <div style="font-size:20px;color:var(--text-sub);opacity:0.3">📦</div>
                        <div style="font-size:10px;color:var(--text-sub);opacity:0.3">空槽位</div>
                    </div>
                `;
            }
        }
        
        container.innerHTML = html;
    }

    window.prevPoolPage = function() {
        if (currentPoolPage > 1) {
            currentPoolPage--;
            renderChatCharacterPool();
        }
    };

    window.nextPoolPage = function() {
        const totalPages = Math.max(1, Math.ceil(characterPool.length / POOL_PAGE_SIZE));
        if (currentPoolPage < totalPages) {
            currentPoolPage++;
            renderChatCharacterPool();
        }
    };

    window.addPoolCharToGroup = async function(index) {
        const char = characterPool[index];
        if (!char) return;

        if (getActiveMemberCount() >= MAX_ACTIVE_MEMBERS) {
            alert(`活跃成员已达上限（${MAX_ACTIVE_MEMBERS}人）！`);
            return;
        }

        if (members.find(m => m.name === char.name)) {
            alert('该角色已在群聊中！');
            return;
        }

        const newMember = {
            id: 'member_' + Date.now(),
            name: char.name,
            gender: char.gender,
            avatar: char.avatar || '',
            desc: char.bg || '群成员',
            title: char.title || '成员',
            titleColor: char.titleColor || '#888888',
            isActive: true
        };

        members.push(newMember);
        saveMembers();
        
        if (char.nameColor) {
            memberColors[char.name] = {
                nameColor: char.nameColor,
                bubbleColor: char.bubbleColor || '#1e293b'
            };
            saveMemberColors();
        } else {
            assignColorToMember(char.name);
        }

        updateHeaderInfo();
        renderAtMemberBar();
        updateMemberTypeUI();
        renderChatCharacterPool();

        pendingCommands.push({ 
            category: 'chat', 
            type: 'system', 
            content: `${char.name}(${char.gender}，${char.title || '成员'}，活跃成员)加入了群聊，背景：${char.bg || '无'}`
        });
        
        pendingCommands.push({ 
            category: 'script', 
            type: 'worldbook', 
            content: `为新成员 ${char.name} 创建世界书条目`,
            memberName: char.name,
            memberGender: char.gender,
            memberTitle: char.title || '成员',
            memberDesc: char.bg || '无'
        });
        updateCommandFab();
        renderChatCharacterPool();
    };

    window.deletePoolChar = async function(index) {
        if (!confirm(`确定要从角色池删除"${characterPool[index].name}"吗？`)) {
            return;
        }
        characterPool.splice(index, 1);
        await saveCharacterPool();
        renderChatCharacterPool();
    };

    // 角色池预览相关
    let currentPreviewPoolIndex = -1;

    window.openPoolCharPreview = function(index) {
        const char = characterPool[index];
        if (!char) return;
        
        currentPreviewPoolIndex = index;
        
        // 填充预览信息
        const avatarEl = document.getElementById('pool-preview-avatar');
        if (char.avatar) {
            avatarEl.innerHTML = `<img src="${char.avatar}" style="width:100%;height:100%;object-fit:cover;border-radius:10px">`;
        } else {
            avatarEl.innerHTML = char.gender === '女' ? '👩' : '👨';
        }
        
        document.getElementById('pool-preview-name').textContent = char.name;
        document.getElementById('pool-preview-gender').textContent = char.gender;
        document.getElementById('pool-preview-title').textContent = char.title || '成员';
        document.getElementById('pool-preview-bg').textContent = char.bg || '暂无背景介绍';
        
        // 检查是否已在群聊中
        const isInGroup = members.find(m => m.name === char.name);
        const inGroupHint = document.getElementById('pool-preview-in-group');
        const addBtn = document.getElementById('pool-preview-add-btn');
        
        if (isInGroup) {
            inGroupHint.style.display = 'block';
            addBtn.disabled = true;
            addBtn.style.opacity = '0.5';
            addBtn.textContent = '已在群聊中';
        } else if (getActiveMemberCount() >= MAX_ACTIVE_MEMBERS) {
            inGroupHint.style.display = 'none';
            addBtn.disabled = true;
            addBtn.style.opacity = '0.5';
            addBtn.textContent = '活跃成员已满';
        } else {
            inGroupHint.style.display = 'none';
            addBtn.disabled = false;
            addBtn.style.opacity = '1';
            addBtn.textContent = '添加到群聊';
        }
        
        showModal('pool-char-preview-modal');
    };

    window.confirmAddPoolChar = async function() {
        if (currentPreviewPoolIndex < 0) return;
        
        closeModal('pool-char-preview-modal');
        await addPoolCharToGroup(currentPreviewPoolIndex);
        currentPreviewPoolIndex = -1;
    };

    window.openSettingsModal = function() {
        tempConfig = { ...config };
        tempMemberColors = JSON.parse(JSON.stringify(memberColors));
        updateSettingsUI();
        document.querySelectorAll('#cache-list .cache-item').forEach(item => item.classList.remove('checked'));
        updateClearBtn();
        showModal('settings-modal');
    };

    window.switchSettingsTab = function(idx) {
        document.querySelectorAll('#settings-modal .modal-tabs .tab-item').forEach((t, i) => t.classList.toggle('active', i === idx));
        document.querySelectorAll('#settings-modal .tab-content').forEach((c, i) => c.classList.toggle('active', i === idx));
    };

    function updateSettingsUI() {
        const previewEl = document.getElementById('user-avatar-preview');
        if (tempConfig.userAvatar) {
            previewEl.innerHTML = `<img src="${tempConfig.userAvatar}" style="width:100%;height:100%;object-fit:cover;border-radius:6px">`;
        } else {
            previewEl.innerHTML = '<span>📷</span>';
        }

        document.getElementById('toggle-sender-info').classList.toggle('active', tempConfig.showSenderInfo);
        document.getElementById('toggle-avatar-border').classList.toggle('active', tempConfig.avatarBorder);
        document.getElementById('toggle-name-shadow').classList.toggle('active', tempConfig.nameShadow !== false);
        document.getElementById('bubble-text-white').classList.toggle('active', tempConfig.bubbleTextColor === 'white');
        document.getElementById('bubble-text-black').classList.toggle('active', tempConfig.bubbleTextColor === 'black');
        document.getElementById('theme-dark').classList.toggle('active', tempConfig.theme === 'dark');
        document.getElementById('theme-light').classList.toggle('active', tempConfig.theme === 'light');
        document.querySelectorAll('.width-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.width === tempConfig.phoneWidth));
        document.getElementById('lurker-bubble-color').value = tempConfig.lurkerBubbleColor || '#4a4a4a';
        const playerNameInput = document.getElementById('player-character-name');
        if (playerNameInput) playerNameInput.value = tempConfig.playerCharacterName || '';

        updateBgUI();
        updateFontUI();
        renderColorSettings();
        renderUserAvatarPresets();
    }

    window.toggleSenderInfo = function() {
        tempConfig.showSenderInfo = !tempConfig.showSenderInfo;
        document.getElementById('toggle-sender-info').classList.toggle('active', tempConfig.showSenderInfo);
    };

    window.toggleAvatarBorder = function() {
        tempConfig.avatarBorder = !tempConfig.avatarBorder;
        document.getElementById('toggle-avatar-border').classList.toggle('active', tempConfig.avatarBorder);
    };

    window.toggleNameShadow = function() {
        tempConfig.nameShadow = !tempConfig.nameShadow;
        document.getElementById('toggle-name-shadow').classList.toggle('active', tempConfig.nameShadow);
    };

    window.selectBubbleTextColor = function(color) {
        tempConfig.bubbleTextColor = color;
        document.getElementById('bubble-text-white').classList.toggle('active', color === 'white');
        document.getElementById('bubble-text-black').classList.toggle('active', color === 'black');
    };

    window.updateLurkerBubbleColor = function(color) {
        tempConfig.lurkerBubbleColor = color;
    };

    // 自动裁切开关切换
    window.toggleAutoCrop = function() {
        autoCropEnabled = !autoCropEnabled;
        document.getElementById('auto-crop-switch').classList.toggle('active', autoCropEnabled);
    };

    // 自动裁切函数 - 居中最大正方形裁切
    function performAutoCrop(img, target) {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        const minDim = Math.min(img.width, img.height);
        const srcX = (img.width - minDim) / 2;
        const srcY = (img.height - minDim) / 2;
        ctx.drawImage(img, srcX, srcY, minDim, minDim, 0, 0, 128, 128);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
        if (target === 'new-member') {
            tempNewMemberAvatar = dataUrl;
            document.getElementById('new-member-avatar-box').innerHTML = '<img src="' + dataUrl + '">';
            document.querySelectorAll('#new-member-preset-grid .preset-item').forEach(el => el.classList.remove('selected'));
        } else if (target === 'member-detail') {
            tempMemberAvatar = dataUrl;
            document.getElementById('member-detail-avatar').src = dataUrl;
            document.querySelectorAll('#member-preset-grid .preset-item').forEach(el => el.classList.remove('selected'));
        } else if (target === 'user-avatar') {
            tempConfig.userAvatar = dataUrl;
            document.getElementById('user-avatar-preview').innerHTML = '<img src="' + dataUrl + '" style="width:100%;height:100%;object-fit:cover;border-radius:6px">';
        }
    }


    window.handleUserAvatarUpload = function(input) {
        if (input.files && input.files[0]) {
            const file = input.files[0];
            if (!file.type.startsWith('image/')) { alert('请选择图片文件'); return; }
            const reader = new FileReader();
            reader.onload = function(e) {
                currentCropTarget = 'user-avatar';
                cropState.originalImage = new Image();
                cropState.originalImage.onload = function() { if (autoCropEnabled) { performAutoCrop(cropState.originalImage, currentCropTarget); } else { openCropModal(); } };
                cropState.originalImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    function renderColorSettings() {
        const container = document.getElementById('color-settings-list');
        const activeMembers = getActiveMembers();
        let html = '';
        activeMembers.forEach(m => {
            const colors = tempMemberColors[m.name] || COLOR_POOL[0];
            html += `<div class="color-picker-row">
                <img src="${m.avatar || DEFAULT_AVATAR}" class="color-picker-avatar">
                <span class="color-picker-name">${m.name}</span>
                <div class="color-picker-inputs">
                    <label>姓名<input type="color" value="${colors.nameColor}" onchange="updateMemberColor('${m.name}', 'nameColor', this.value)"></label>
                    <label>气泡<input type="color" value="${colors.bubbleColor}" onchange="updateMemberColor('${m.name}', 'bubbleColor', this.value)"></label>
                </div>
            </div>`;
        });
        container.innerHTML = html || '<div style="text-align:center;color:var(--text-sub)">暂无活跃成员</div>';
    }

    window.updateMemberColor = function(name, type, color) {
        if (!tempMemberColors[name]) tempMemberColors[name] = { ...COLOR_POOL[0] };
        tempMemberColors[name][type] = color;
    };

    window.selectTheme = function(theme) {
        tempConfig.theme = theme;
        document.getElementById('theme-dark').classList.toggle('active', theme === 'dark');
        document.getElementById('theme-light').classList.toggle('active', theme === 'light');
        updateBgUI();
    };

    window.selectWidth = function(el) {
        tempConfig.phoneWidth = el.dataset.width;
        document.querySelectorAll('.width-btn').forEach(btn => btn.classList.remove('active'));
        el.classList.add('active');
    };

    window.handleBgUpload = function(input) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) { tempConfig.bgImage = e.target.result; updateBgUI(); };
            reader.readAsDataURL(input.files[0]);
        }
    };

    window.clearBg = function() { tempConfig.bgImage = ''; updateBgUI(); };

    window.previewBgMask = function(val) {
        tempConfig.bgMask = val / 100;
        document.getElementById('bg-mask-val').textContent = val + '%';
        updateBgUI();
    };

    function updateBgUI() {
        const el = document.getElementById('bg-preview');
        const overlay = document.getElementById('bg-preview-overlay');
        if (tempConfig.bgImage) {
            el.style.backgroundImage = `url('${tempConfig.bgImage}')`;
            el.querySelector('span').style.display = 'none';
        } else {
            el.style.backgroundImage = 'none';
            el.querySelector('span').style.display = 'block';
        }
        overlay.style.backgroundColor = tempConfig.theme === 'light' ? '#ededed' : '#000';
        overlay.style.opacity = tempConfig.bgMask;
        document.getElementById('bg-mask-slider').value = Math.round(tempConfig.bgMask * 100);
        document.getElementById('bg-mask-val').textContent = Math.round(tempConfig.bgMask * 100) + '%';
    }

    window.previewFontSize = function(val) {
        tempConfig.fontSize = val;
        const labels = { '14': '小', '16': '中', '18': '大', '20': '特大' };
        document.getElementById('font-size-val').textContent = labels[val] || '小';
    };

    window.selectFont = function(font) {
        tempConfig.fontFamily = font;
        updateFontUI();
    };

    function updateFontUI() {
        document.getElementById('font-size-slider').value = tempConfig.fontSize;
        previewFontSize(tempConfig.fontSize);
        ['default', 'lxgw', 'song', 'jinghua', 'culiu'].forEach(f => {
            const el = document.getElementById('font-' + f);
            if (el) el.classList.toggle('active', tempConfig.fontFamily === f);
        });
    }

    window.toggleCacheItem = function(el) { el.classList.toggle('checked'); updateClearBtn(); };

    window.toggleSelectAllCache = function() {
        const items = document.querySelectorAll('#cache-list .cache-item');
        const allChecked = Array.from(items).every(item => item.classList.contains('checked'));
        items.forEach(item => item.classList.toggle('checked', !allChecked));
        updateClearBtn();
    };

    function updateClearBtn() {
        const checkedItems = document.querySelectorAll('#cache-list .cache-item.checked');
        const btn = document.getElementById('clear-selected-btn');
        btn.disabled = checkedItems.length === 0;
        btn.textContent = checkedItems.length > 0 ? `🗑️ 清除选中项 (${checkedItems.length})` : '🗑️ 清除选中项';
    }

    window.clearSelectedCache = async function() {
        const checkedItems = document.querySelectorAll('#cache-list .cache-item.checked');
        if (checkedItems.length === 0) return;

        const itemNames = Array.from(checkedItems).map(item => item.querySelector('.cache-name').textContent).join('、');
        if (!confirm(`确定要清除以下缓存吗？\n\n${itemNames}\n\n此操作不可恢复！`)) return;

        try {
            for (const item of checkedItems) {
                const keys = item.dataset.key.split(',');
                for (const key of keys) {
                    await dbDelete(key.trim());
                }
            }
            alert('✅ 选中的缓存已清除！');
        } catch (e) {
            console.error('清除缓存失败:', e);
            alert('❌ 清除缓存时出错');
        }

        closeModal('settings-modal');
        location.reload();
    };

    window.saveSettings = async function() {
        config = { ...tempConfig };
        memberColors = JSON.parse(JSON.stringify(tempMemberColors));

        await saveConfig();
        await saveMemberColors();

        applyConfig(config);

        const data = parseXML(rawXML);
        renderMessages(data);
        renderMoments();
        renderAtMemberBar();

        closeModal('settings-modal');
    };

    function applyConfig(cfg) {
        const root = document.documentElement;
        if (cfg.theme === 'light') root.setAttribute('data-theme', 'light');
        else root.removeAttribute('data-theme');

        root.style.setProperty('--phone-width', cfg.phoneWidth + 'px');

        const container = document.querySelector('.chat-container');
        if (container) {
            if (cfg.bgImage) {
                container.style.backgroundImage = `url('${cfg.bgImage}')`;
                container.querySelector('.chat-bg-overlay').style.opacity = cfg.bgMask;
            } else {
                container.style.backgroundImage = 'none';
                container.querySelector('.chat-bg-overlay').style.opacity = '0';
            }
        }

        const fontSize = parseInt(cfg.fontSize);
        root.style.setProperty('--base-font-size', fontSize + 'px');
        root.style.setProperty('--avatar-size', Math.round(fontSize * 2.857) + 'px');
        root.style.setProperty('--sender-name-size', Math.round(fontSize * 0.857) + 'px');
        root.style.setProperty('--sender-title-size', Math.round(fontSize * 0.786) + 'px');
        // 朋友圈相关字体大小
        root.style.setProperty('--moment-content-size', fontSize + 'px');
        root.style.setProperty('--moment-time-size', Math.round(fontSize * 0.786) + 'px');
        root.style.setProperty('--moment-stat-size', Math.round(fontSize * 0.857) + 'px');
        root.style.setProperty('--moment-people-size', Math.round(fontSize * 0.929) + 'px');
        root.style.setProperty('--comment-size', Math.round(fontSize * 0.929) + 'px');
        // 底部导航栏字体大小
        root.style.setProperty('--nav-icon-size', Math.round(fontSize * 1.43) + 'px');
        root.style.setProperty('--nav-text-size', Math.round(fontSize * 0.786) + 'px');

        let fontVal = '"Microsoft YaHei", sans-serif';
        if (cfg.fontFamily === 'lxgw') fontVal = '"LXGW WenKai Screen", sans-serif';
        if (cfg.fontFamily === 'song') fontVal = '"Noto Serif SC", serif';
        if (cfg.fontFamily === 'jinghua') fontVal = '"KingHwaOldSong", serif';
        if (cfg.fontFamily === 'culiu') fontVal = '"CLFN 24x CN", cursive';
        root.style.setProperty('--font-family', fontVal);

        // 应用气泡文字颜色
        const bubbleTextColor = cfg.bubbleTextColor === 'white' ? '#ffffff' : '#000000';
        root.style.setProperty('--bubble-text-color', bubbleTextColor);

        // 应用潜水成员气泡颜色
        root.style.setProperty('--lurker-bubble-color', cfg.lurkerBubbleColor || '#4a4a4a');
    }

    // ==================== 工具函数 ====================
    window.showModal = function(id) { document.getElementById(id).style.display = 'flex'; };
    window.closeModal = function(id) {
        document.getElementById(id).style.display = 'none';
        if (id === 'manage-modal') {
            document.getElementById('new-member-name').value = '';
            document.getElementById('new-member-desc').value = '';
            tempNewMemberAvatar = '';
            document.getElementById('add-title-form-new').classList.remove('show');
        }
    };

    // ==================== 裁切功能 ====================
    function openCropModal() {
        const modal = document.getElementById('crop-modal');
        const cropArea = document.getElementById('crop-area');
        const cropImage = document.getElementById('crop-image');
        const img = cropState.originalImage;
        const areaW = cropArea.clientWidth || 360;
        const areaH = cropArea.clientHeight || 280;
        const scaleX = areaW / img.width;
        const scaleY = areaH / img.height;
        cropState.displayScale = Math.min(scaleX, scaleY, 1);
        const dispW = img.width * cropState.displayScale;
        const dispH = img.height * cropState.displayScale;
        cropState.imgOffsetX = (areaW - dispW) / 2;
        cropState.imgOffsetY = (areaH - dispH) / 2;
        cropState.imageWidth = dispW;
        cropState.imageHeight = dispH;
        cropImage.src = img.src;
        cropImage.style.width = dispW + 'px';
        cropImage.style.height = dispH + 'px';
        cropImage.style.left = cropState.imgOffsetX + 'px';
        cropImage.style.top = cropState.imgOffsetY + 'px';
        const minDim = Math.min(dispW, dispH);
        cropState.cropSize = Math.min(minDim * 0.7, 120);
        cropState.cropX = cropState.imgOffsetX + (dispW - cropState.cropSize) / 2;
        cropState.cropY = cropState.imgOffsetY + (dispH - cropState.cropSize) / 2;
        updateCropBox();
        modal.classList.add('active');
        initCropEvents();
    }

    function updateCropBox() {
        const box = document.getElementById('crop-box');
        box.style.left = cropState.cropX + 'px';
        box.style.top = cropState.cropY + 'px';
        box.style.width = cropState.cropSize + 'px';
        box.style.height = cropState.cropSize + 'px';
    }

    function initCropEvents() {
        const box = document.getElementById('crop-box');
        const area = document.getElementById('crop-area');
        box.onmousedown = function(e) {
            e.preventDefault();
            cropState.startX = e.clientX;
            cropState.startY = e.clientY;
            cropState.startCropX = cropState.cropX;
            cropState.startCropY = cropState.cropY;
            cropState.startCropSize = cropState.cropSize;
            if (e.target.classList.contains('crop-box-corner')) {
                cropState.isResizing = true;
            } else {
                cropState.isDragging = true;
            }
        };
        area.onmousemove = function(e) {
            if (!cropState.isDragging && !cropState.isResizing) return;
            const dx = e.clientX - cropState.startX;
            const dy = e.clientY - cropState.startY;
            if (cropState.isDragging) {
                let newX = cropState.startCropX + dx;
                let newY = cropState.startCropY + dy;
                newX = Math.max(cropState.imgOffsetX, Math.min(newX, cropState.imgOffsetX + cropState.imageWidth - cropState.cropSize));
                newY = Math.max(cropState.imgOffsetY, Math.min(newY, cropState.imgOffsetY + cropState.imageHeight - cropState.cropSize));
                cropState.cropX = newX;
                cropState.cropY = newY;
            } else if (cropState.isResizing) {
                const delta = Math.max(dx, dy);
                let newSize = cropState.startCropSize + delta;
                newSize = Math.max(50, newSize);
                const maxW = cropState.imgOffsetX + cropState.imageWidth - cropState.cropX;
                const maxH = cropState.imgOffsetY + cropState.imageHeight - cropState.cropY;
                newSize = Math.min(newSize, maxW, maxH);
                cropState.cropSize = newSize;
            }
            updateCropBox();
        };
        area.onmouseup = function() { cropState.isDragging = false; cropState.isResizing = false; };
        area.onmouseleave = function() { cropState.isDragging = false; cropState.isResizing = false; };
    }

    window.closeCropModal = function() {
        document.getElementById('crop-modal').classList.remove('active');
        // 清除对应的input
        if (currentCropTarget === 'new-member') {
            document.getElementById('new-member-avatar-input').value = '';
        } else if (currentCropTarget === 'member-detail') {
            document.getElementById('member-avatar-input').value = '';
        } else if (currentCropTarget === 'user-avatar') {
            document.getElementById('user-avatar-input').value = '';
        }
    };

    window.confirmCrop = function() {
        const srcX = (cropState.cropX - cropState.imgOffsetX) / cropState.displayScale;
        const srcY = (cropState.cropY - cropState.imgOffsetY) / cropState.displayScale;
        const srcSize = cropState.cropSize / cropState.displayScale;
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(cropState.originalImage, srcX, srcY, srcSize, srcSize, 0, 0, 128, 128);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
        
        if (currentCropTarget === 'new-member') {
            tempNewMemberAvatar = dataUrl;
            document.getElementById('new-member-avatar-box').innerHTML = `<img src="${dataUrl}">`;
            document.querySelectorAll('#new-member-preset-grid .preset-item').forEach(el => el.classList.remove('selected'));
        } else if (currentCropTarget === 'member-detail') {
            tempMemberAvatar = dataUrl;
            document.getElementById('member-detail-avatar').src = dataUrl;
            document.querySelectorAll('#member-preset-grid .preset-item').forEach(el => el.classList.remove('selected'));
        } else if (currentCropTarget === 'user-avatar') {
            tempConfig.userAvatar = dataUrl;
            document.getElementById('user-avatar-preview').innerHTML = `<img src="${dataUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:6px">`;
        }
        
        closeCropModal();
    };

    // ==================== 直播功能 ====================
    let liveStatus = {}; // 存储直播状态 { memberName: { isLive: boolean, title: string, viewers: number } }
    let myLiveStatus = { isLive: false, title: '', type: 'public', invitedMembers: [] };
    let selectedBroadcastType = 'public';
    let selectedInviteMembers = [];

    async function loadLiveStatus() {
        try {
            const saved = await dbGet('wenyuan_live_status');
            if (saved) liveStatus = saved;
            const myStatus = await dbGet('wenyuan_my_live_status');
            if (myStatus) myLiveStatus = myStatus;
        } catch (e) {
            console.warn('加载直播状态失败:', e);
        }
    }

    async function saveLiveStatus() {
        await dbSet('wenyuan_live_status', liveStatus);
    }

    async function saveMyLiveStatus() {
        await dbSet('wenyuan_my_live_status', myLiveStatus);
    }

    function renderLivePage() {
        const activeMembers = getActiveMembers();
        const onlineGrid = document.getElementById('live-grid-online');
        const offlineGrid = document.getElementById('live-grid-offline');
        
        if (!onlineGrid || !offlineGrid) return;

        // 更新我的直播间头像
        const myAvatar = document.getElementById('my-live-avatar');
        if (myAvatar) {
            myAvatar.src = config.userAvatar || DEFAULT_AVATAR;
        }

        // 更新我的直播状态
        const myStatusEl = document.getElementById('my-live-status');
        const myBtn = document.getElementById('my-live-btn');
        if (myStatusEl && myBtn) {
            myBtn.classList.remove('streaming', 'pending-start', 'pending-end');
            myStatusEl.classList.remove('pending');
            
            if (myLiveStatus.pendingStart) {
                myStatusEl.textContent = '待开播 - ' + myLiveStatus.title;
                myStatusEl.classList.add('pending');
                myBtn.textContent = '等待开播...';
                myBtn.classList.add('pending-start');
                myBtn.onclick = null;
            } else if (myLiveStatus.pendingEnd) {
                myStatusEl.textContent = '待结束 - ' + myLiveStatus.title;
                myStatusEl.classList.add('pending');
                myBtn.textContent = '等待结束...';
                myBtn.classList.add('pending-end');
                myBtn.onclick = null;
            } else if (myLiveStatus.isLive) {
                myStatusEl.textContent = '直播中 - ' + myLiveStatus.title;
                myBtn.textContent = '结束直播';
                myBtn.classList.add('streaming');
                myBtn.onclick = endMyBroadcast;
            } else {
                myStatusEl.textContent = '未开播';
                myBtn.textContent = '开始直播';
                myBtn.onclick = openBroadcastModal;
            }
        }

        // 分类成员（排除玩家角色，玩家只在顶部我的直播间显示）
        const onlineMembers = [];
        const offlineMembers = [];
        const pendingStartMembers = [];
        const pendingEndMembers = [];

        // 过滤掉玩家的角色（通过角色名匹配识别）
        const otherMembers = activeMembers.filter(m => !(config.playerCharacterName && m.name === config.playerCharacterName));

        otherMembers.forEach(m => {
            const status = liveStatus[m.name];
            if (status && status.pendingStart) {
                pendingStartMembers.push({ ...m, liveInfo: status });
            } else if (status && status.pendingEnd) {
                pendingEndMembers.push({ ...m, liveInfo: status });
            } else if (status && status.isLive) {
                onlineMembers.push({ ...m, liveInfo: status });
            } else {
                offlineMembers.push(m);
            }
        });

        // 渲染正在直播（包含待结束的）
        const liveCards = [...onlineMembers, ...pendingEndMembers];
        if (liveCards.length > 0) {
            onlineGrid.innerHTML = liveCards.map(m => {
                const isPendingEnd = m.liveInfo.pendingEnd;
                return `
                <div class="live-card ${isPendingEnd ? 'pending-end' : ''}" onclick="enterLiveRoom('${m.name.replace(/'/g, "\\'")}')">
                    <div class="live-card-preview">
                        ${m.avatar ? `<img class="preview-avatar" src="${m.avatar}">` : `<div class="preview-placeholder">${m.gender === '男' ? '👨' : '👩'}</div>`}
                        ${isPendingEnd ? '<span class="pending-end-badge">待结束</span>' : '<span class="live-badge">LIVE</span>'}
                        <span class="viewers-badge">👁 ${m.liveInfo.viewers || 0}</span>
                    </div>
                    <div class="live-card-info">
                        <div class="live-card-name">${m.name}</div>
                        <div class="live-card-title">${m.liveInfo.title || '直播中'}</div>
                    </div>
                    <div class="live-card-actions">
                        <button class="live-card-btn enter" onclick="event.stopPropagation();enterLiveRoom('${m.name.replace(/'/g, "\\'")}')">进入</button>
                        ${isPendingEnd ? '<button class="live-card-btn pending">等待结束...</button>' : `<button class="live-card-btn close" onclick="event.stopPropagation();closeMemberLive('${m.name.replace(/'/g, "\\'")}')">关闭</button>`}
                    </div>
                </div>`;
            }).join('');
            document.getElementById('live-section-online').style.display = 'block';
        } else {
            onlineGrid.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:var(--text-sub);padding:20px;font-size:13px">暂无直播</div>';
        }

        // 渲染未开播（包含待开播的）
        const offlineCards = [...pendingStartMembers, ...offlineMembers];
        if (offlineCards.length > 0) {
            offlineGrid.innerHTML = offlineCards.map(m => {
                const isPendingStart = m.liveInfo && m.liveInfo.pendingStart;
                return `
                <div class="live-card ${isPendingStart ? 'pending-start' : 'offline'}">
                    <div class="live-card-preview">
                        ${m.avatar ? `<img class="preview-avatar" src="${m.avatar}">` : `<div class="preview-placeholder">${m.gender === '男' ? '👨' : '👩'}</div>`}
                        ${isPendingStart ? '<span class="pending-badge">待开播</span>' : '<span class="offline-badge">未开播</span>'}
                    </div>
                    <div class="live-card-info">
                        <div class="live-card-name">${m.name}</div>
                        <div class="live-card-title">${isPendingStart ? (m.liveInfo.title || '即将开播') : '暂未开播'}</div>
                    </div>
                    <div class="live-card-actions">
                        ${isPendingStart ? '<button class="live-card-btn pending">等待开播...</button>' : `<button class="live-card-btn start" onclick="event.stopPropagation();startMemberBroadcast('${m.name.replace(/'/g, "\\'")}')">🎬 开播</button>`}
                    </div>
                </div>`;
            }).join('');
        } else {
            offlineGrid.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:var(--text-sub);padding:20px;font-size:13px">所有成员都在直播</div>';
        }
    }

    window.openBroadcastModal = function() {
        selectedBroadcastType = 'public';
        selectedInviteMembers = [];
        document.getElementById('broadcast-title').value = '';
        document.querySelectorAll('.broadcast-type-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.type === 'public');
        });
        document.getElementById('invite-section').style.display = 'none';
        renderInviteMemberList();
        showModal('broadcast-modal');
    };

    window.selectBroadcastType = function(el) {
        selectedBroadcastType = el.dataset.type;
        document.querySelectorAll('.broadcast-type-btn').forEach(btn => btn.classList.remove('active'));
        el.classList.add('active');
        document.getElementById('invite-section').style.display = selectedBroadcastType === 'private' ? 'block' : 'none';
    };

    function renderInviteMemberList() {
        const list = document.getElementById('invite-member-list');
        const activeMembers = getActiveMembers();
        list.innerHTML = activeMembers.map(m => `
            <div class="invite-member-item ${selectedInviteMembers.includes(m.name) ? 'selected' : ''}" onclick="toggleInviteMember('${m.name.replace(/'/g, "\\'")}')">
                <img class="invite-member-avatar" src="${m.avatar || DEFAULT_AVATAR}">
                <div class="invite-member-name">${m.name}</div>
            </div>
        `).join('');
    }

    window.toggleInviteMember = function(name) {
        const idx = selectedInviteMembers.indexOf(name);
        if (idx > -1) {
            selectedInviteMembers.splice(idx, 1);
        } else {
            selectedInviteMembers.push(name);
        }
        renderInviteMemberList();
    };

    window.startBroadcast = function() {
        const title = document.getElementById('broadcast-title').value.trim();
        if (!title) {
            alert('请输入直播标题');
            return;
        }

        const typeText = selectedBroadcastType === 'private' ? '私密' : '公开';
        const invitedList = selectedBroadcastType === 'private' ? [...selectedInviteMembers] : [];

        // 添加到指令清单
        pendingCommands.push({
            category: 'live',
            type: 'start_my_broadcast',
            title: title,
            broadcastType: selectedBroadcastType,
            invitedMembers: invitedList
        });
        updateCommandFab();

        // 更新本地直播状态为"待开播"
        myLiveStatus = {
            isLive: false,
            pendingStart: true,
            title: title,
            type: selectedBroadcastType,
            invitedMembers: invitedList
        };
        saveMyLiveStatus();

        closeModal('broadcast-modal');
        renderLivePage();
        alert(`已添加开播指令到指令清单：${typeText}直播「${title}」\n\n💡 当前显示"待开播"状态，下一层回复后将显示为直播中`);
    };

    window.endMyBroadcast = function() {
        if (!myLiveStatus.isLive) return;
        
        // 添加到指令清单
        pendingCommands.push({
            category: 'live',
            type: 'end_my_broadcast',
            title: myLiveStatus.title
        });
        updateCommandFab();
        
        // 设置为"待结束"状态
        myLiveStatus = { 
            isLive: false, 
            pendingEnd: true,
            title: myLiveStatus.title, 
            type: myLiveStatus.type, 
            invitedMembers: myLiveStatus.invitedMembers 
        };
        saveMyLiveStatus();
        renderLivePage();
        alert('已添加结束直播指令到指令清单\n\n💡 当前显示"待结束"状态，下一层回复后将显示为未开播');
    };

    window.enterLiveRoom = function(name) {
        pendingCommands.push({
            category: 'live',
            type: 'enter_room',
            targetName: name
        });
        updateCommandFab();
        alert(`已添加「进入${name}的直播间」到指令清单`);
    };

    window.closeMemberLive = function(name) {
        // 检查是否已经是待结束状态
        if (liveStatus[name] && liveStatus[name].pendingEnd) {
            alert(`${name}的直播间已在等待结束中`);
            return;
        }
        
        if (!confirm(`确定要关闭${name}的直播间吗？`)) {
            return;
        }

        // 添加指令到指令清单
        pendingCommands.push({
            category: 'live',
            type: 'close_member_live',
            targetName: name
        });
        updateCommandFab();

        // 设置为"待结束"状态
        if (liveStatus[name]) {
            liveStatus[name] = {
                ...liveStatus[name],
                isLive: false,
                pendingEnd: true
            };
            saveLiveStatus();
        }

        renderLivePage();
        alert(`已添加「关闭${name}的直播间」到指令清单\n\n💡 当前显示"待结束"状态，下一层回复后将显示为未开播`);
    };

    // 成员开播相关变量
    let currentMemberBroadcastTarget = '';
    let memberBroadcastType = 'public';
    let memberInviteMembers = [];

    // 让其他活跃成员开播（上帝视角）- 打开弹窗
    window.startMemberBroadcast = function(name) {
        // 检查是否已经在待开播状态
        if (liveStatus[name] && liveStatus[name].pendingStart) {
            alert(`${name}的直播间已在等待开播中`);
            return;
        }
        currentMemberBroadcastTarget = name;
        memberBroadcastType = 'public';
        memberInviteMembers = [];
        document.getElementById('member-broadcast-name').textContent = name;
        document.getElementById('member-broadcast-title').value = '';
        document.querySelectorAll('#member-broadcast-modal .broadcast-type-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.type === 'public');
        });
        document.getElementById('member-invite-section').style.display = 'none';
        renderMemberInviteList();
        showModal('member-broadcast-modal');
    };

    window.selectMemberBroadcastType = function(el) {
        memberBroadcastType = el.dataset.type;
        document.querySelectorAll('#member-broadcast-modal .broadcast-type-btn').forEach(btn => btn.classList.remove('active'));
        el.classList.add('active');
        document.getElementById('member-invite-section').style.display = memberBroadcastType === 'private' ? 'block' : 'none';
    };

    function renderMemberInviteList() {
        const list = document.getElementById('member-invite-list');
        const activeMembers = getActiveMembers().filter(m => m.name !== currentMemberBroadcastTarget);
        list.innerHTML = activeMembers.map(m => `
            <div class="invite-member-item ${memberInviteMembers.includes(m.name) ? 'selected' : ''}" onclick="toggleMemberInviteMember('${m.name.replace(/'/g, "\\'")}')">
                <img class="invite-member-avatar" src="${m.avatar || DEFAULT_AVATAR}">
                <div class="invite-member-name">${m.name}</div>
            </div>
        `).join('');
    }

    window.toggleMemberInviteMember = function(name) {
        const idx = memberInviteMembers.indexOf(name);
        if (idx > -1) {
            memberInviteMembers.splice(idx, 1);
        } else {
            memberInviteMembers.push(name);
        }
        renderMemberInviteList();
    };

    window.confirmMemberBroadcast = function() {
        const title = document.getElementById('member-broadcast-title').value.trim();
        if (!title) {
            alert('请输入直播标题');
            return;
        }

        const typeText = memberBroadcastType === 'private' ? '私密' : '公开';
        const invitedList = memberBroadcastType === 'private' ? [...memberInviteMembers] : [];

        // 添加到指令清单
        pendingCommands.push({
            category: 'live',
            type: 'start_member_broadcast',
            targetName: currentMemberBroadcastTarget,
            title: title,
            broadcastType: memberBroadcastType,
            invitedMembers: invitedList
        });
        updateCommandFab();

        // 更新本地直播状态为"待开播"
        liveStatus[currentMemberBroadcastTarget] = { 
            isLive: false,
            pendingStart: true,
            title: title, 
            viewers: 0,
            type: memberBroadcastType,
            invitedMembers: invitedList
        };
        saveLiveStatus();

        closeModal('member-broadcast-modal');
        renderLivePage();
        alert(`已添加「${currentMemberBroadcastTarget}开始${typeText}直播」指令到指令清单\n\n💡 当前显示"待开播"状态，下一层回复后将显示为直播中`);
    };

    // 切换到其他直播间
    window.switchToLiveRoom = function(name) {
        pendingCommands.push({
            category: 'live',
            type: 'switch_room',
            targetName: name
        });
        updateCommandFab();
        alert(`已添加「切换到${name}的直播间」指令到指令清单`);
    };

    // 从XML解析直播状态
    function parseLiveStatus(xmlText) {
        const liveMatch = xmlText.match(/<live_status>([\s\S]*?)<\/live_status>/i);
        if (liveMatch) {
            const regex = /\[直播\|([^|\]]+)(?:\|([^|\]]+))?(?:\|([^|\]]+))?\]/g;
            let m;
            const currentLiveNames = new Set();
            
            while ((m = regex.exec(liveMatch[1])) !== null) {
                const name = m[1];
                const title = m[2] || '直播中';
                const viewers = parseInt(m[3]) || 0;
                currentLiveNames.add(name);
                
                // 处理"我"的直播状态
                if (name === '我') {
                    // 如果我在直播列表中，说明已经开播成功
                    if (myLiveStatus.pendingStart || !myLiveStatus.isLive) {
                        myLiveStatus = {
                            isLive: true,
                            pendingStart: false,
                            pendingEnd: false,
                            title: title,
                            type: myLiveStatus.type || 'public',
                            invitedMembers: myLiveStatus.invitedMembers || [],
                            viewers: viewers
                        };
                        saveMyLiveStatus();
                    }
                } else {
                    // 处理其他成员的直播状态
                    // 如果成员之前是待开播状态，现在确认开播
                    if (liveStatus[name] && liveStatus[name].pendingStart) {
                        liveStatus[name] = { 
                            isLive: true, 
                            pendingStart: false,
                            pendingEnd: false,
                            title, 
                            viewers 
                        };
                    } else {
                        liveStatus[name] = { isLive: true, title, viewers };
                    }
                }
            }
            
            // 检查"我"是否不在直播列表中（说明直播已结束）
            if (!currentLiveNames.has('我') && (myLiveStatus.isLive || myLiveStatus.pendingEnd)) {
                // 如果之前是待结束状态或直播中，现在不在列表中，说明已结束
                myLiveStatus = { isLive: false, title: '', type: 'public', invitedMembers: [] };
                saveMyLiveStatus();
            }
            
            // 检查其他成员是否已结束直播（待结束状态的成员不在列表中）
            for (const name in liveStatus) {
                if (!currentLiveNames.has(name) && (liveStatus[name].isLive || liveStatus[name].pendingEnd)) {
                    delete liveStatus[name];
                }
            }
            
            saveLiveStatus();
            renderLivePage();
        }
    }

    // 重置直播状态（直播模块快捷按钮）
    window.resetMyLiveStatus = async function() {
        if (!confirm('确定要重置所有直播状态吗？\n\n这将清除：\n• 我的直播状态\n• 所有成员的直播状态\n\n此操作不可恢复！')) {
            return;
        }
        myLiveStatus = { isLive: false, title: '', type: 'public', invitedMembers: [] };
        await saveMyLiveStatus();
        liveStatus = {};
        await saveLiveStatus();
        renderLivePage();
        alert('✅ 直播状态已重置！');
    };

    document.addEventListener('DOMContentLoaded', init);
</script>

</body>
</html>
```