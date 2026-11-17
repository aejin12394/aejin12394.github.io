"""바로가기(홈 화면) 아이콘 — 테마색 초록 바탕 + 흰 'PT' + 노랑 띠. 센터 이름(G) 없음. (2026-11-17)
python3 _tools/make_app_icon.py   → assets/icon.png(회원 노트), assets/icon-coach-180/192/512.png(선생님 페이지)"""
import os
from PIL import Image, ImageDraw, ImageFont
F_BLACK = "/usr/share/fonts/opentype/noto/NotoSansCJK-Black.ttc"
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "assets")

def centered(d, cx, cy, text, f, fill, track=0):
    ws = [d.textlength(c, font=f) for c in text]
    W = sum(ws) + track * (len(text) - 1)
    bb = f.getbbox(text)
    x = cx - W / 2
    y = cy - (bb[1] + bb[3]) / 2
    for c, w in zip(text, ws):
        d.text((x, y), c, font=f, fill=fill)
        x += w + track

def make(path, size, bg, band_text, band="#E0B31E", band_ink="#174B31"):
    S = 1024
    im = Image.new("RGB", (S, S), bg)
    d = ImageDraw.Draw(im)
    band_h = int(S * 0.25)
    d.rectangle([0, S - band_h, S, S], fill=band)
    centered(d, S / 2, (S - band_h) / 2 + 6, "PT", ImageFont.truetype(F_BLACK, 470, index=1), "#FFFFFF", track=6)
    centered(d, S / 2, S - band_h / 2, band_text, ImageFont.truetype(F_BLACK, 150, index=1), band_ink, track=14)
    im.resize((size, size), Image.LANCZOS).save(path)

make(os.path.join(ROOT, "icon.png"), 180, "#1F6442", "NOTE")
for s in (180, 192, 512):
    make(os.path.join(ROOT, "icon-coach-%d.png" % s), s, "#174B31", "COACH")
