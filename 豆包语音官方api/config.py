"""
火山引擎 TTS 2.0 配置文件
"""

# 应用凭证
APPID = "5930616370"
ACCESS_TOKEN = "iqJmJRPEZ65LuyW_BoydhviqYLjg8st5"
SECRET_KEY = "a4p6Z1u3GrQs25Jida9-W7pbWxZ8wAXz"

# 集群名称 (TTS 2.0 使用 volcano_bigotto)
CLUSTER = "volcano_bigotto"

# 豆包语音合成模型2.0 音色列表
VOICES = {
    # 通用场景
    "Vivi 2.0": {
        "voice_type": "zh_female_vv_uranus_bigtts",
        "language": "中文、英语",
        "features": "情感变化、指令遵循、ASMR",
        "scene": "通用场景"
    },
    "小何 2.0": {
        "voice_type": "zh_female_xiaohe_uranus_bigtts",
        "language": "中文",
        "features": "情感变化、指令遵循、ASMR",
        "scene": "通用场景"
    },
    "云舟 2.0": {
        "voice_type": "zh_male_m191_uranus_bigtts",
        "language": "中文",
        "features": "情感变化、指令遵循、ASMR",
        "scene": "通用场景"
    },
    "小天 2.0": {
        "voice_type": "zh_male_taocheng_uranus_bigtts",
        "language": "中文",
        "features": "情感变化、指令遵循、ASMR",
        "scene": "通用场景"
    },
    # 有声阅读
    "儿童绘本": {
        "voice_type": "zh_female_xueayi_saturn_bigtts",
        "language": "中文",
        "features": "指令遵循",
        "scene": "有声阅读"
    },
    # 视频配音
    "大壹": {
        "voice_type": "zh_male_dayi_saturn_bigtts",
        "language": "中文",
        "features": "指令遵循",
        "scene": "视频配音"
    },
    "黑猫侦探社咪": {
        "voice_type": "zh_female_mizai_saturn_bigtts",
        "language": "中文",
        "features": "指令遵循",
        "scene": "视频配音"
    },
    "鸡汤女": {
        "voice_type": "zh_female_jitangnv_saturn_bigtts",
        "language": "中文",
        "features": "指令遵循",
        "scene": "视频配音"
    },
    "魅力女友": {
        "voice_type": "zh_female_meilinvyou_saturn_bigtts",
        "language": "中文",
        "features": "指令遵循",
        "scene": "视频配音"
    },
    "流畅女声": {
        "voice_type": "zh_female_santongyongns_saturn_bigtts",
        "language": "中文",
        "features": "指令遵循",
        "scene": "视频配音"
    },
    "儒雅逸辰": {
        "voice_type": "zh_male_ruyayichen_saturn_bigtts",
        "language": "中文",
        "features": "指令遵循",
        "scene": "视频配音"
    },
    # 角色扮演
    "可爱女生": {
        "voice_type": "saturn_zh_female_keainvsheng_tob",
        "language": "中文",
        "features": "指令遵循、COT/QA功能",
        "scene": "角色扮演"
    },
    "调皮公主": {
        "voice_type": "saturn_zh_female_tiaopigongzhu_tob",
        "language": "中文",
        "features": "指令遵循、COT/QA功能",
        "scene": "角色扮演"
    },
    "爽朗少年": {
        "voice_type": "saturn_zh_male_shuanglangshaonian_tob",
        "language": "中文",
        "features": "指令遵循、COT/QA功能",
        "scene": "角色扮演"
    },
    "天才同桌": {
        "voice_type": "saturn_zh_male_tiancaitongzhuo_tob",
        "language": "中文",
        "features": "指令遵循、COT/QA功能",
        "scene": "角色扮演"
    },
    "知性灿灿": {
        "voice_type": "saturn_zh_female_cancan_tob",
        "language": "中文",
        "features": "指令遵循、COT/QA功能",
        "scene": "角色扮演"
    },
}

# 默认音色
DEFAULT_VOICE = "Vivi 2.0"
