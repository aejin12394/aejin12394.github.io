/* 김서현 회원님 — 앱에서 만든 회원(이름·목표·시작일은 창고 profile) + Claude가 올린 자세 복습지.
   404.html·roster.js 가 window.MEMBER_EXTRA 를 창고 정보에 합침 (forms·notices 는 앞에 붙임). 최신이 위.
   6회차(11/5)는 영상 대신 시작·끝 사진 2장으로 만든 반복 화면. */
window.MEMBER_EXTRA = {
  notices: [
    { date: "2026. 11. 23", title: "등 운동 자세 복습지 4개가 올라왔어요", body: "11월 19일 PT 7회차 등 운동 — 암 풀다운 · 케이블 로프 로우 · T바 로우 · 라이프 피트니스 시티드 로우 영상으로 자세를 다시 확인해 보세요.", link: "#forms" },
    { date: "2026. 11. 23", title: "어깨·삼두 자세 복습지 4개가 올라왔어요", body: "11월 5일 PT 6회차 — 시티드 벤트 오버 레터럴 레이즈 · 리버스 펙덱 플라이 · 페이스풀 · 케이블 로프 푸쉬다운 자세를 사진으로 다시 확인해 보세요.", link: "#forms" }
  ],
  forms: [
    {
      id: "1119-straight-arm-pulldown", record: [[10, 15], [15, 15], [15, 15]], dir: "media/form-1119-straight-arm-pulldown/", date: "2026. 11. 19",
      exercise: "암 풀다운", exercise_en: "Straight Arm Pulldown", part: "등",
      targets: ["등 옆 라인", "광배근 느끼기", "등 운동 준비"],
      benefit: "팔을 편 채로 케이블을 허벅지 쪽으로 내려 광배근만 따로 쓰는 운동이에요. 팔 힘이 덜 들어가서 등에 힘 주는 감각을 익히기 좋아요.",
      key_point: "팔꿈치는 살짝 굽힌 채 고정, 팔이 아니라 겨드랑이 아래 등으로 내리기!",
      good_points: [
        { title: "곧게 선 자세", desc: "상체가 숙여지지 않고 곧게 선 채로 팔만 움직였어요." },
        { title: "허벅지까지 내렸어요", desc: "손잡이를 허벅지 앞까지 끝까지 내려서 등 옆이 꽉 조였어요." },
        { title: "팔을 편 채로", desc: "팔꿈치를 굽혔다 폈다 하지 않아서 팔 대신 등에 힘이 실렸어요." }
      ],
      primary_muscles: [{ name: "광배근", where: "등 옆쪽 넓은 근육" }],
      secondary_muscles: "대원근 · 삼두근 장두 · 후면 삼각근",
      feel_good: "내렸을 때 겨드랑이 아래 등 옆이 조이는 느낌",
      feel_stop: "어깨 앞이 찝히거나 팔만 아프면 무게를 낮춰요",
      steps: [
        { title: "자리 잡기", desc: "케이블을 머리 위 높이에 걸고 한 걸음 물러나 서요. 팔은 앞으로 쭉, 팔꿈치는 살짝만 굽혀요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "허벅지로 내리기", desc: "팔을 편 채로 손잡이를 허벅지 앞까지 내려요. 끝에서 1초 등 꽉.", chip: "내리면서 후~", media: "step2.webp", loop: true },
        { title: "천천히 올리기", desc: "등이 늘어나는 걸 느끼면서 눈높이까지 천천히 올려요.", chip: "올리며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["팔꿈치 각도 고정", "허벅지까지 끝까지", "올릴 때 천천히"],
      dont: ["팔꿈치 굽혔다 폈다 하기", "상체 숙이며 반동", "어깨 으쓱"]
    },
    {
      id: "1119-cable-rope-row", record: [[15, 15], [15, 15], [15, 15]], dir: "media/form-1119-cable-rope-row/", date: "2026. 11. 19",
      exercise: "케이블 로프 로우", exercise_en: "Cable Rope Row", part: "등",
      targets: ["등 두께", "날개뼈 사이 탄탄하게", "바른 자세"],
      benefit: "케이블 로프를 몸 쪽으로 당겨 등 가운데(능형근)와 광배근을 쓰는 운동이에요. 로프라 손목이 편하고 끝에서 더 많이 당길 수 있어요.",
      key_point: "엉덩이를 뒤로 빼고 허리는 곧게, 팔꿈치를 뒤로 보내며 날개뼈 모으기!",
      good_points: [
        { title: "허리를 곧게 지켰어요", desc: "엉덩이를 뒤로 뺀 자세에서 허리가 말리지 않았어요." },
        { title: "배꼽 쪽으로 당겼어요", desc: "로프를 배꼽 쪽으로 당겨 등 가운데에 자극이 잘 갔어요." },
        { title: "끝까지 팔을 폈어요", desc: "돌아갈 때 팔을 쭉 펴서 등을 끝까지 늘렸어요." }
      ],
      primary_muscles: [{ name: "광배근", where: "등 옆쪽" }, { name: "능형근", where: "날개뼈 사이" }],
      secondary_muscles: "중부 승모근 · 후면 삼각근 · 이두근",
      feel_good: "당겼을 때 날개뼈 사이가 꽉 모이는 느낌",
      feel_stop: "허리가 뻐근하면 무릎을 더 굽히고 무게를 낮춰요",
      steps: [
        { title: "준비 자세", desc: "로프를 잡고 무릎을 살짝 굽혀 엉덩이를 뒤로 빼요. 허리는 곧게, 팔은 앞으로 쭉.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "배꼽 쪽으로 당기기", desc: "팔꿈치를 뒤로 보내며 로프를 배꼽 쪽으로 당겨요. 끝에서 날개뼈 꽉.", chip: "당기면서 후~", media: "step2.webp", loop: true },
        { title: "천천히 펴기", desc: "케이블에 끌려가지 않게 버티면서 팔을 천천히 펴요.", chip: "펴면서 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["허리는 곧게 고정", "팔꿈치를 뒤로", "펼 때 천천히"],
      dont: ["등 둥글게 말기", "상체를 들썩이며 반동", "어깨 으쓱"]
    },
    {
      id: "1119-t-bar-row", record: [["봉만", 15], ["봉만", 15]], dir: "media/form-1119-t-bar-row/", date: "2026. 11. 19",
      exercise: "T바 로우", exercise_en: "T-Bar Row", part: "등",
      targets: ["등 두께", "등 가운데 탄탄하게", "자세 익히기"],
      benefit: "가슴을 패드에 대고 T바를 몸 쪽으로 당겨 등 전체를 쓰는 운동이에요. 상체가 받쳐져서 허리 부담 없이 등에 집중할 수 있어요.",
      key_point: "가슴은 패드에 붙이고, 팔꿈치를 뒤로 보내며 날개뼈 모으기!",
      good_points: [
        { title: "봉만으로 자세부터", desc: "원판 없이 봉만으로 당기는 길을 먼저 정확하게 익혔어요." },
        { title: "가슴을 패드에 붙였어요", desc: "상체가 들리지 않아서 반동 없이 등으로 당겼어요." },
        { title: "끝까지 내렸어요", desc: "내릴 때 팔을 쭉 펴서 등을 끝까지 늘렸어요." }
      ],
      primary_muscles: [{ name: "광배근", where: "등 옆쪽" }, { name: "능형근", where: "날개뼈 사이" }],
      secondary_muscles: "중부 승모근 · 대원근 · 후면 삼각근 · 이두근",
      feel_good: "당겼을 때 등 가운데가 꽉 조이는 느낌",
      feel_stop: "허리가 아프거나 팔만 아프면 멈추고 자세부터 다시",
      steps: [
        { title: "자리 잡기", desc: "발판에 발을 딛고 가슴을 패드에 대요. 손잡이를 잡고 팔은 아래로 쭉 펴요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "가슴 쪽으로 당기기", desc: "팔꿈치를 뒤로 보내며 손잡이를 가슴 아래쪽으로 당겨요. 끝에서 1초 날개뼈 꽉.", chip: "당기면서 후~", media: "step2.webp", loop: true },
        { title: "천천히 내리기", desc: "등이 늘어나는 걸 느끼면서 천천히 내려요.", chip: "내리며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["가슴은 패드에 붙인 채로", "팔꿈치를 뒤로", "내릴 때 천천히"],
      dont: ["가슴을 패드에서 떼며 반동", "어깨 으쓱", "손목으로만 당기기"]
    },
    {
      id: "1119-seated-row", record: [[10, 15], [20, 15], [20, 15]], dir: "media/form-1119-seated-row/", date: "2026. 11. 19",
      exercise: "라이프 피트니스 시티드 로우", exercise_en: "Life Fitness Seated Row", part: "등",
      targets: ["등 두께", "굽은 등 펴기", "바른 자세"],
      benefit: "앉아서 손잡이를 몸 쪽으로 당겨 등 가운데와 옆을 쓰는 머신이에요. 길이 정해져 있어서 등에 힘 주는 감각을 익히기 좋아요.",
      key_point: "상체는 곧게 세우고, 팔꿈치를 뒤로 보내며 날개뼈 모으기!",
      good_points: [
        { title: "상체를 곧게 세웠어요", desc: "당길 때 상체가 뒤로 젖혀지지 않아서 등으로만 당겼어요." },
        { title: "팔꿈치를 뒤로 보냈어요", desc: "손이 아니라 팔꿈치를 뒤로 보내서 날개뼈가 잘 모였어요." },
        { title: "무게를 올려도 자세 유지", desc: "10kg에서 20kg로 올려도 15회를 같은 자세로 해냈어요." }
      ],
      primary_muscles: [{ name: "광배근", where: "등 옆쪽" }],
      secondary_muscles: "능형근 · 중부 승모근 · 대원근 · 후면 삼각근 · 이두근",
      feel_good: "당겼을 때 등 가운데와 옆이 조이는 느낌",
      feel_stop: "허리가 뻐근하거나 팔만 아프면 무게를 낮춰요",
      steps: [
        { title: "자리 잡기", desc: "의자에 앉아 손잡이가 팔을 쭉 뻗었을 때 잡히게 맞춰요. 상체는 곧게, 가슴은 들고.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "몸 쪽으로 당기기", desc: "팔꿈치를 몸 뒤로 보내며 손잡이를 옆구리 쪽으로 당겨요. 끝에서 1초 날개뼈 꽉.", chip: "당기면서 후~", media: "step2.webp", loop: true },
        { title: "천천히 펴기", desc: "등이 늘어나는 걸 느끼면서 팔을 앞으로 천천히 펴요.", chip: "펴면서 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["상체는 곧게 고정", "팔꿈치를 뒤로", "펼 때 천천히"],
      dont: ["상체를 뒤로 젖히며 반동", "어깨 으쓱", "손목으로만 당기기"]
    },
    {
      id: "1105-seated-bent-over-lateral-raise", record: [[2, 20], [2, 20], [2, 20]], dir: "media/form-1105-seated-bent-over-lateral-raise/", date: "2026. 11. 5",
      exercise: "시티드 벤트 오버 레터럴 레이즈", exercise_en: "Seated Bent-over Lateral Raise", part: "어깨",
      targets: ["동그란 어깨 라인", "어깨 옆·뒤", "가벼운 무게로 정확하게"],
      benefit: "벤치에 앉아 몸이 흔들리지 않게 고정하고 덤벨을 옆으로 들어 어깨 옆·뒤를 쓰는 운동이에요. 앉아서 하니까 반동 없이 어깨에만 집중할 수 있어요.",
      key_point: "어깨는 귀에서 멀리, 팔꿈치가 먼저 올라간다는 느낌으로 옆으로 멀리!",
      good_points: [
        { title: "앉은 자세로 몸을 고정했어요", desc: "엉덩이를 벤치에 붙이고 상체를 고정해서 반동이 없었어요." },
        { title: "어깨 높이까지 들었어요", desc: "팔을 어깨 높이까지 옆으로 멀리 들어 어깨에 자극이 잘 갔어요." },
        { title: "20회를 끝까지", desc: "2kg로 20회씩 3세트를 자세 흐트러지지 않고 해냈어요." }
      ],
      primary_muscles: [{ name: "측면 삼각근", where: "어깨 옆쪽" }],
      secondary_muscles: "후면 삼각근 · 상부 승모근",
      feel_good: "팔을 들 때 어깨 옆이 뜨겁게 차오르는 느낌",
      feel_stop: "목·승모근이 먼저 뻐근하거나 어깨 안쪽이 찝히면 멈춰요",
      steps: [
        { title: "앉은 준비 자세", desc: "벤치 끝에 앉아 덤벨을 몸 옆에 늘어뜨려요. 가슴은 살짝 앞으로, 어깨는 내려요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "옆으로 들기", desc: "팔꿈치를 살짝 굽힌 채 옆으로 멀리 어깨 높이까지 들어요.", chip: "들면서 후~", media: "step2.webp", loop: true },
        { title: "천천히 내리기", desc: "덤벨이 툭 떨어지지 않게 버티면서 천천히 내려요.", chip: "내리며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["엉덩이는 벤치에 붙인 채로", "어깨 높이까지만", "내릴 때 천천히"],
      dont: ["어깨 으쓱 올리기", "몸 흔들며 반동", "덤벨을 툭 떨어뜨리기"]
    },
    {
      id: "1105-reverse-pec-deck", record: [[10, 20], [15, 20]], dir: "media/form-1105-reverse-pec-deck/", date: "2026. 11. 5",
      exercise: "리버스 펙덱 플라이", exercise_en: "Reverse Pec Deck Fly", part: "어깨",
      targets: ["어깨 뒤쪽 라인", "굽은 어깨 펴기", "등 위쪽 탄탄하게"],
      benefit: "팔을 옆으로 크게 벌려 어깨 뒤(후면 삼각근)와 날개뼈 사이를 쓰는 머신이에요. 굽은 어깨·라운드 숄더를 펴는 데 좋아요.",
      key_point: "팔꿈치를 살짝 굽힌 채 고정하고, 팔이 아니라 어깨 뒤로 크게 벌리기!",
      good_points: [
        { title: "곧게 앉아 시작했어요", desc: "상체가 흔들리지 않게 앉아서 어깨 뒤에만 힘이 들어갔어요." },
        { title: "팔을 크게 벌렸어요", desc: "손이 몸통 옆 일직선까지 와서 어깨 뒤가 제일 짧아지는 곳까지 썼어요." },
        { title: "무게를 올려도 20회", desc: "10kg에서 15kg로 올려도 20회를 끝까지 해냈어요." }
      ],
      primary_muscles: [{ name: "후면 삼각근", where: "어깨 뒤쪽" }],
      secondary_muscles: "능형근(날개뼈 사이) · 중부 승모근 · 극하근",
      feel_good: "벌렸을 때 어깨 뒤와 날개뼈 사이가 조이는 느낌",
      feel_stop: "어깨 앞이 찝히거나 목·승모근만 뻐근하면 무게를 낮춰요",
      steps: [
        { title: "자리 잡기", desc: "손잡이가 어깨 높이에 오게 의자를 맞추고 팔을 앞으로 뻗어 잡아요. 팔꿈치는 살짝 굽혀서 고정.", chip: "어깨는 내리기", media: "step1.jpg" },
        { title: "크게 벌리기", desc: "팔꿈치가 먼저 나간다는 느낌으로 몸통 옆 일직선까지 크게 벌려요. 끝에서 1초 꽉.", chip: "벌리면서 후~", media: "step2.webp", loop: true },
        { title: "천천히 모으기", desc: "어깨 뒤 힘을 유지한 채 천천히 앞으로 돌아와요.", chip: "모으며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["상체는 곧게 고정", "팔꿈치 각도 그대로", "돌아올 때 천천히"],
      dont: ["어깨 으쓱 올리기", "팔꿈치를 굽혔다 폈다 하기", "반동으로 확 젖히기"]
    },
    {
      id: "1105-face-pull", record: [[15, 15], [15, 15], [15, 15]], dir: "media/form-1105-face-pull/", date: "2026. 11. 5",
      exercise: "페이스풀", exercise_en: "Face Pull", part: "어깨",
      targets: ["어깨 뒤쪽", "굽은 어깨 펴기", "바른 자세"],
      benefit: "케이블 로프를 얼굴 쪽으로 당겨 어깨 뒤(후면 삼각근)와 날개뼈 사이를 쓰는 운동이에요. 앞으로 말린 어깨를 펴는 데 좋아요.",
      key_point: "팔꿈치를 높게, 로프를 얼굴 쪽으로 당기며 양옆으로 벌리기!",
      good_points: [
        { title: "엉덩이를 살짝 빼고 버텼어요", desc: "무릎을 살짝 굽히고 자세를 고정해서 몸이 케이블에 끌려가지 않았어요." },
        { title: "얼굴 쪽으로 당겼어요", desc: "로프를 귀 옆까지 당겨서 어깨 뒤에 자극이 잘 갔어요." },
        { title: "팔꿈치를 높게", desc: "팔꿈치가 어깨 높이 이상으로 올라가서 어깨 뒤를 제대로 썼어요." }
      ],
      primary_muscles: [{ name: "후면 삼각근", where: "어깨 뒤쪽" }, { name: "중부 승모근", where: "날개뼈 사이" }],
      secondary_muscles: "능형근 · 극하근(어깨 회전근)",
      feel_good: "당겼을 때 어깨 뒤와 날개뼈 사이가 조이는 느낌",
      feel_stop: "목·승모근이 먼저 뻐근하거나 어깨 앞이 찝히면 무게를 낮춰요",
      steps: [
        { title: "자리 잡기", desc: "케이블을 얼굴보다 높게 걸고 로프 양끝을 잡아요. 물러나서 팔을 앞으로 쭉 펴요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "얼굴로 당기기", desc: "팔꿈치를 높게 든 채 로프를 얼굴 쪽으로 당기면서 양옆으로 벌려요. 끝에서 1초 꽉.", chip: "당기면서 후~", media: "step2.webp", loop: true },
        { title: "천천히 펴기", desc: "케이블에 끌려가지 않게 버티면서 팔을 앞으로 천천히 펴요.", chip: "펴면서 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["팔꿈치는 어깨 높이 이상", "로프는 얼굴 쪽으로", "펼 때 천천히"],
      dont: ["로프를 가슴·배 쪽으로 당기기", "상체를 뒤로 젖히며 반동", "어깨 으쓱"]
    },
    {
      id: "1105-rope-pushdown", record: [[15, 15], [15, 15]], dir: "media/form-1105-rope-pushdown/", date: "2026. 11. 5",
      exercise: "케이블 로프 푸쉬다운", exercise_en: "Cable Rope Pushdown", part: "팔",
      targets: ["팔 뒤쪽 탄탄하게", "팔뚝 라인 정리", "삼두 힘 기르기"],
      benefit: "케이블 로프를 아래로 밀어 팔 뒤쪽(삼두근)을 쓰는 운동이에요. 팔뚝 뒤가 탄탄해져서 팔 라인이 정리돼요.",
      key_point: "팔꿈치는 옆구리에 딱 고정, 팔꿈치 아래만 움직여서 끝까지 펴기!",
      good_points: [
        { title: "곧게 섰어요", desc: "상체를 곧게 세워서 몸무게로 누르지 않고 팔로만 밀었어요." },
        { title: "끝까지 폈어요", desc: "팔을 아래로 끝까지 펴서 팔 뒤가 꽉 조였어요." },
        { title: "팔꿈치를 고정했어요", desc: "팔꿈치가 앞뒤로 흔들리지 않고 옆구리에 붙어 있었어요." }
      ],
      primary_muscles: [{ name: "삼두근", where: "팔 뒤쪽" }],
      secondary_muscles: "따로 없음 — 팔 뒤 하나만 집중해요",
      feel_good: "다 폈을 때 팔 뒤쪽이 단단하게 조이는 느낌",
      feel_stop: "팔꿈치가 아프거나 손목이 꺾이면 무게를 낮춰요",
      steps: [
        { title: "준비 자세", desc: "케이블 앞에 곧게 서서 로프를 잡아요. 팔꿈치는 옆구리에 붙이고 손은 가슴 앞에.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "아래로 펴기", desc: "팔꿈치는 그대로 두고 팔을 아래로 끝까지 펴요. 끝에서 1초 꽉.", chip: "밀면서 후~", media: "step2.webp", loop: true },
        { title: "천천히 올리기", desc: "케이블에 끌려 올라가지 않게 버티면서 가슴 앞까지 천천히 올려요.", chip: "올리며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["팔꿈치는 옆구리에 고정", "끝까지 펴기", "올릴 때 천천히"],
      dont: ["팔꿈치가 앞뒤로 움직이기", "상체를 숙여 몸무게로 누르기", "손목 꺾기"]
    }
  ]
};
