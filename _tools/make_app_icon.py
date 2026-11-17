"""바로가기(홈 화면) 아이콘 — 노트 테마(2026-11-17 선생님 "피티노트 바로가기 로고 내 피티노트 컨셉으로").
흰 모눈종이 + 검정 펜 손글씨 'PT' + 노란 형광펜 + 빨간 밑줄 + 연보라 형광펜 위 'NOTE'(회원 노트) / 'COACH'(선생님 페이지).
글씨는 폰트 대신 펜 획을 직접 그림(손으로 쓴 느낌, 매번 같은 모양이 나오게 고정된 흔들림).
python3 _tools/make_app_icon.py   → assets/icon.png(회원 노트), assets/icon-coach-180/192/512.png(선생님 페이지)
그림을 바꾸면 html·manifest의 icon ?v= 숫자도 올릴 것."""
import math
import os
import random

from PIL import Image, ImageDraw

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "assets")

# 노트 테마 색 (assets/style.css '노트 테마' 블록과 같음)
PAPER = "#FFFFFF"
GRID = "#D3D9E1"     # --grid(#DFE3E8)보다 살짝 진하게 — 작은 아이콘에서도 모눈이 보이게
INK = "#111111"
HL = "#FFF27A"       # 노란 형광펜
PEN = "#E3261F"      # 빨간 펜
LAV = "#D4D4FA"      # 연보라 형광펜(--lav #DCDCFB보다 살짝 진하게 — 작은 아이콘에서도 보이게)

S = 1024             # 설계 크기
SS = 2               # 매끄럽게 그리려고 2배로 그린 뒤 줄임

# ---- 손글씨 획 (글자 칸: 높이 1, y 아래로) -------------------------------------------------
def arc(cx, cy, rx, ry, a0, a1, n=14):
    return [(cx + rx * math.cos(math.radians(a0 + (a1 - a0) * i / n)),
             cy + ry * math.sin(math.radians(a0 + (a1 - a0) * i / n))) for i in range(n + 1)]

GLYPHS = {  # 글자: (폭, [획, …])  획 = 점 목록(부드럽게 이어짐)
    "P": (0.64, [[(0.07, 0.03), (0.05, 0.36), (0.03, 0.7), (0.02, 1.0)],
                 [(0.05, 0.07), (0.27, 0.0), (0.52, 0.02), (0.66, 0.15), (0.63, 0.33),
                  (0.45, 0.46), (0.22, 0.51), (0.06, 0.5)]]),
    "T": (0.8, [[(-0.02, 0.08), (0.3, 0.035), (0.6, 0.005), (0.82, -0.01)],
                [(0.39, 0.05), (0.38, 0.4), (0.36, 0.74), (0.35, 1.0)]]),
    "N": (0.7, [[(0.04, 1.0), (0.04, 0.5), (0.05, 0.0)],
                [(0.05, 0.0), (0.66, 1.0)],
                [(0.66, 1.0), (0.67, 0.5), (0.69, -0.02)]]),
    "O": (0.78, [arc(0.39, 0.5, 0.38, 0.5, -100, -470, 24)]),
    "E": (0.6, [[(0.06, 0.01), (0.05, 0.5), (0.04, 0.99)],
                [(0.06, 0.02), (0.58, 0.0)],
                [(0.06, 0.5), (0.47, 0.48)],
                [(0.04, 0.98), (0.6, 0.96)]]),
    "C": (0.68, [arc(0.4, 0.5, 0.38, 0.5, -45, -312, 20)]),
    "A": (0.76, [[(0.02, 1.0), (0.38, 0.0)],
                 [(0.38, 0.0), (0.74, 1.0)],
                 [(0.17, 0.63), (0.6, 0.61)]]),
    "H": (0.7, [[(0.05, 0.0), (0.04, 1.0)],
                [(0.68, 0.0), (0.67, 1.0)],
                [(0.05, 0.52), (0.67, 0.49)]]),
}


def catmull(pts, steps=24):
    if len(pts) == 2:
        (x0, y0), (x1, y1) = pts
        return [(x0 + (x1 - x0) * i / steps, y0 + (y1 - y0) * i / steps) for i in range(steps + 1)]
    p = [pts[0]] + pts + [pts[-1]]
    out = []
    for i in range(1, len(p) - 2):
        p0, p1, p2, p3 = p[i - 1], p[i], p[i + 1], p[i + 2]
        for k in range(steps):
            t = k / steps
            t2, t3 = t * t, t * t * t
            out.append(tuple(0.5 * ((2 * p1[j]) + (-p0[j] + p2[j]) * t + (2 * p0[j] - 5 * p1[j] + 4 * p2[j] - p3[j]) * t2
                                    + (-p0[j] + 3 * p1[j] - 3 * p2[j] + p3[j]) * t3) for j in (0, 1)))
    out.append(p[-2])
    return out


def pen_stroke(d, pts, r, color):
    """펜으로 그은 획: 점을 촘촘히 찍어서(둥근 끝) — 시작은 살짝 가늘게, 끝은 살짝 빠지게."""
    path = catmull(pts)
    dense = []
    for (x0, y0), (x1, y1) in zip(path, path[1:]):
        n = max(1, int(math.hypot(x1 - x0, y1 - y0) / (r * 0.18)))
        dense += [(x0 + (x1 - x0) * i / n, y0 + (y1 - y0) * i / n) for i in range(n)]
    dense.append(path[-1])
    N = len(dense)
    for i, (x, y) in enumerate(dense):
        t = i / max(1, N - 1)
        w = r * (0.84 + 0.16 * math.sin(math.pi * min(1.0, t * 1.15)))
        if t > 0.9:
            w *= 1 - (t - 0.9) * 1.6
        d.ellipse([x - w, y - w, x + w, y + w], fill=color)


def write(d, text, x, y, h, r, color, gap=0.12, slant=0.07, seed=1, jitter=0.014, rise=0.0):
    """손글씨로 한 줄 쓰기. (x, y) = 왼쪽 위, h = 글자 높이. 다 쓴 오른쪽 끝 x를 돌려줌."""
    rnd = random.Random(seed)
    for k, ch in enumerate(text):
        w, strokes = GLYPHS[ch]
        dy = rnd.uniform(-0.025, 0.025) * h - rise * k * h   # 글자마다 높이 살짝 다르게
        for s in strokes:
            pts = []
            for (u, v) in s:
                u += rnd.gauss(0, jitter)
                v += rnd.gauss(0, jitter)
                pts.append((x + (u + (1 - v) * slant) * h, y + dy + v * h))
            pen_stroke(d, pts, r, color)
        x += (w + gap) * h
    return x


def text_width(text, h, gap=0.12):
    return sum((GLYPHS[c][0] + gap) * h for c in text) - gap * h


def highlighter(d, x0, y0, x1, y1, color, tilt=0.0, seed=3):
    """형광펜 한 번 그은 모양: 끝은 비스듬히 잘린 납작 펜촉, 위·아래 가장자리 살짝 울퉁불퉁."""
    rnd = random.Random(seed)
    top, bot = [], []
    n = 12
    for i in range(n + 1):
        t = i / n
        x = x0 + (x1 - x0) * t
        off = tilt * (t - 0.5)
        top.append((x, y0 + off + rnd.uniform(-4, 4) * SS))
        bot.append((x, y1 + off + rnd.uniform(-4, 4) * SS))
    cut = (y1 - y0) * 0.22   # 펜촉이 비스듬히 잘린 끝
    top[0] = (top[0][0] + cut, top[0][1])
    bot[-1] = (bot[-1][0] - cut, bot[-1][1])
    d.polygon(top + bot[::-1], fill=color)


def make(path, size, label):
    W = S * SS
    im = Image.new("RGB", (W, W), PAPER)
    d = ImageDraw.Draw(im)

    # 모눈종이
    cell = W / 9
    lw = 5 * SS
    for i in range(1, 9):
        p = round(i * cell)
        d.rectangle([p - lw // 2, 0, p + lw // 2, W], fill=GRID)
        d.rectangle([0, p - lw // 2, W, p + lw // 2], fill=GRID)

    # 큰 'PT' 자리
    h = 410 * SS
    tw = text_width("PT", h, gap=0.1)
    x = (W - tw) / 2 - 16 * SS
    y = 196 * SS

    # 노란 형광펜(글자 아래쪽 반) → 그 위에 검정 펜 글씨 → 빨간 밑줄
    highlighter(d, x - 52 * SS, y + h * 0.5, x + tw + 62 * SS, y + h + 26 * SS, HL, tilt=-14 * SS, seed=7)
    write(d, "PT", x, y, h, 31 * SS, INK, gap=0.1, slant=0.06, seed=11, jitter=0.012)
    ux0, ux1, uy = x - 30 * SS, x + tw + 50 * SS, y + h + 70 * SS
    pen_stroke(d, [(ux0, uy + 4 * SS), (ux0 + (ux1 - ux0) * 0.5, uy + 4 * SS), (ux1, uy - 14 * SS)], 13 * SS, PEN)

    # 아래 이름표: 연보라 형광펜 + 손글씨 NOTE / COACH
    lh = 104 * SS
    lw_ = text_width(label, lh, gap=0.2)
    lx = (W - lw_) / 2
    ly = 808 * SS
    highlighter(d, lx - 40 * SS, ly + lh * 0.18, lx + lw_ + 44 * SS, ly + lh + 18 * SS, LAV, tilt=-6 * SS, seed=5)
    write(d, label, lx, ly, lh, 12 * SS, INK, gap=0.2, slant=0.05, seed=23, jitter=0.016)

    im.resize((size, size), Image.LANCZOS).save(path, optimize=True)


if __name__ == "__main__":
    make(os.path.join(ROOT, "icon.png"), 180, "NOTE")
    for s in (180, 192, 512):
        make(os.path.join(ROOT, "icon-coach-%d.png" % s), s, "COACH")
