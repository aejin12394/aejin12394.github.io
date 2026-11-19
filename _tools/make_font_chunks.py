"""나눔손글씨 엄마사랑 → assets/fonts/ 조각(woff) + style.css 용 @font-face 줄 (2026-11-19 "노트 들어갈 때 렉").
core = 화면 문구(app.js·404.html·roster.js·m/*/extra.js)에 쓰인 한글 + 한글 아닌 글자 전부 → 열 때 바로 받음(404·껍데기에서 preload).
ks1~6 = 나머지 자주 쓰는 한글(KS X 1001), x01~16 = 그 밖 한글 — 화면에 그 글자가 있을 때만 브라우저가 받음(unicode-range).
글꼴 원본: git clone --depth 1 --filter=blob:none --sparse https://github.com/item4/kfonts && git sparse-checkout set packages/nanum-handwritting-eommasalang
 → src/eommasalang.ttf (OFL). 사용: python3 _tools/make_font_chunks.py <eommasalang.ttf>  → 출력된 @font-face 줄로 style.css 노트 테마 블록 교체, ?v= 올리기.
문구를 바꿔도 다시 안 돌려도 됨(빠진 글자는 ks 조각에서 받음) — 처음 열 때 조각이 늘어나면 그때 다시."""
import glob, os, sys
from fontTools import subset
from fontTools.ttLib import TTFont
SRC = sys.argv[1]; R = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..") + "/"
cmap = set(TTFont(SRC).getBestCmap())
txt = "".join(open(p, encoding="utf-8").read() for p in [R + "assets/app.js", R + "404.html", R + "assets/roster.js"] + glob.glob(R + "m/*/extra.js"))
used = {ord(c) for c in txt if 0xAC00 <= ord(c) <= 0xD7A3}
ks = set()
for b1 in range(0xB0, 0xC9):
    for b2 in range(0xA1, 0xFF):
        try: ks.add(ord(bytes([b1, b2]).decode("euc-kr")))
        except Exception: pass
hang = {c for c in cmap if 0xAC00 <= c <= 0xD7A3}
groups = [("core", sorted((used | {c for c in cmap if c not in hang}) & cmap))]
k = sorted((ks - used) & cmap)
groups += [("ks%d" % (i + 1), k[i * len(k) // 6:(i + 1) * len(k) // 6]) for i in range(6)]
e = sorted(hang - used - ks)
groups += [("x%02d" % (i + 1), e[i * len(e) // 16:(i + 1) * len(e) // 16]) for i in range(16)]
def ranges(s):
    out, a, b = [], s[0], s[0]
    for c in s[1:]:
        if c == b + 1: b = c
        else: out.append((a, b)); a = b = c
    out.append((a, b))
    return ", ".join("U+%X" % a if a == b else "U+%X-%X" % (a, b) for a, b in out)
os.makedirs(R + "assets/fonts", exist_ok=True)
for name, s in groups:
    o = subset.Options(); o.flavor = "woff"; o.layout_features = ["*"]; o.hinting = False; o.desubroutinize = True; o.drop_tables += ["FFTM"]
    f = TTFont(SRC); ss = subset.Subsetter(o); ss.populate(unicodes=s); ss.subset(f); f.flavor = "woff"
    f.save(R + "assets/fonts/eommasalang-%s.woff" % name)
    print('@font-face { font-family: "나눔손글씨 엄마사랑"; src: local("나눔손글씨 엄마사랑"), local("Nanum EomMaSaRang"), url(fonts/eommasalang-%s.woff?v=1) format("woff"); font-weight: 400; font-display: swap; unicode-range: %s; }' % (name, ranges(s)))
