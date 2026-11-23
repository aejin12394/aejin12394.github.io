/* 김서현 회원님 — 앱에서 만든 회원(이름·목표·시작일은 창고 profile) + Claude가 올린 자세 복습지.
   404.html·roster.js 가 window.MEMBER_EXTRA 를 창고 정보에 합침 (forms·notices 는 앞에 붙임). 최신이 위.
   5회차(10/28)·6회차(11/5)는 영상 대신 시작·끝 사진 2장으로 만든 반복 화면. */
window.MEMBER_EXTRA = {
  notices: [
    { date: "2026. 11. 23", title: "하체 자세 복습지 4개가 올라왔어요", body: "10월 28일 PT 5회차 하체 운동 — 힙 어덕션 · 와이드 스쿼트 · 불가리안 스플릿 스쿼트 · 힙 에어플레인 자세를 사진으로 다시 확인해 보세요.", link: "#forms" },
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
    },
    {
      id: "1028-hip-adduction", record: [[15, 12], [15, 12]], dir: "media/form-1028-hip-adduction/", date: "2026. 10. 28",
      exercise: "힙 어덕션", exercise_en: "Hip Adduction", part: "하체",
      targets: ["허벅지 안쪽 라인", "골반 안정", "하체 운동 준비"],
      benefit: "벌어진 다리를 안쪽으로 모으면서 허벅지 안쪽(내전근)을 쓰는 머신이에요. 스쿼트 전에 하면 무릎이 안으로 무너지지 않게 잡아 줘요.",
      key_point: "엉덩이는 등받이에 붙이고, 모을 때 1초 꽉 · 벌릴 때는 천천히 버티기!",
      good_points: [
        { title: "상체를 세웠어요", desc: "손잡이를 잡고 상체를 곧게 세워서 다리 힘으로만 움직였어요." },
        { title: "끝까지 모았어요", desc: "무릎 패드가 맞닿을 때까지 끝까지 모아 허벅지 안쪽이 조였어요." },
        { title: "12회를 일정하게", desc: "15kg로 2세트 모두 같은 속도로 해냈어요." }
      ],
      primary_muscles: [{ name: "내전근", where: "허벅지 안쪽" }],
      secondary_muscles: "치골근 · 박근",
      feel_good: "모을 때 허벅지 안쪽이 꽉 조이는 느낌",
      feel_stop: "사타구니가 찌릿하거나 무릎 안쪽이 아프면 벌리는 폭을 줄여요",
      steps: [
        { title: "자리 잡기", desc: "엉덩이를 등받이 끝까지 넣고 앉아 무릎 안쪽을 패드에 대요. 손잡이를 잡고 상체를 세워요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "안쪽으로 모으기", desc: "허벅지 안쪽 힘으로 패드가 닿을 때까지 모으고 1초 꽉.", chip: "모으며 후~", media: "step2.webp", loop: true },
        { title: "천천히 벌리기", desc: "무게가 탁 떨어지지 않게 버티면서 천천히 벌려요.", chip: "벌리며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["엉덩이는 등받이에 붙인 채로", "모을 때 1초 멈추기", "벌릴 때 천천히"],
      dont: ["상체 앞으로 숙이기", "반동으로 탁탁 모으기", "무게 쾅 내려놓기"]
    },
    {
      id: "1028-wide-squat", record: [[null, 15], [4, 15], [4, 15]], dir: "media/form-1028-wide-squat/", date: "2026. 10. 28",
      exercise: "와이드 스쿼트", exercise_en: "Wide Squat", part: "하체",
      targets: ["허벅지 안쪽", "엉덩이", "하체 라인"],
      benefit: "다리를 어깨보다 넓게 벌리고 앉는 스쿼트예요. 일반 스쿼트보다 허벅지 안쪽과 엉덩이를 더 많이 써요.",
      key_point: "발끝·무릎은 같은 방향 바깥으로, 엉덩이를 뒤로 빼며 앉고 발뒤꿈치로 밀어 일어나기!",
      good_points: [
        { title: "엉덩이를 뒤로 뺐어요", desc: "무릎보다 엉덩이가 먼저 뒤로 가면서 앉아 엉덩이에 힘이 실렸어요." },
        { title: "충분히 앉았어요", desc: "허벅지가 바닥과 평행해질 만큼 깊이 앉았어요." },
        { title: "덤벨을 몸 가까이", desc: "덤벨을 몸 앞에 수직으로 들고 흔들리지 않게 내렸어요." }
      ],
      primary_muscles: [{ name: "내전근", where: "허벅지 안쪽" }, { name: "대둔근", where: "엉덩이" }],
      secondary_muscles: "대퇴사두근 · 햄스트링 · 코어",
      feel_good: "일어날 때 엉덩이와 허벅지 안쪽이 같이 힘 들어가는 느낌",
      feel_stop: "무릎 안쪽이 아프거나 허리가 뻐근하면 앉는 깊이를 줄여요",
      steps: [
        { title: "넓게 서기", desc: "다리를 어깨보다 넓게, 발끝은 살짝 바깥으로. 덤벨은 몸 앞에 수직으로 들어요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "엉덩이 뒤로 앉기", desc: "엉덩이를 뒤로 빼며 무릎이 발끝 방향으로 벌어지게 앉아요.", chip: "앉으며 들이마시기", media: "step2.webp", loop: true },
        { title: "발뒤꿈치로 일어나기", desc: "발뒤꿈치로 바닥을 밀고 엉덩이를 조이면서 일어나요.", chip: "일어나며 후~", media: "step3.webp", loop: true }
      ],
      do: ["무릎은 발끝 방향으로", "가슴 펴고 시선 앞", "발뒤꿈치로 밀기"],
      dont: ["무릎 안으로 모이기", "허리 둥글게 말기", "발뒤꿈치 들기"]
    },
    {
      id: "1028-bulgarian-split-squat", record: [[null, 12], [null, 12], [null, 12]], dir: "media/form-1028-bulgarian-split-squat/", date: "2026. 10. 28",
      exercise: "불가리안 스플릿 스쿼트", exercise_en: "Bulgarian Split Squat", part: "엉덩이",
      targets: ["엉덩이 (한쪽씩)", "애플힙 라인", "좌우 균형"],
      benefit: "뒷발을 패드에 올리고 한 다리로 앉았다 일어나는 운동이에요. 오늘은 상체를 살짝 앞으로 숙여서 엉덩이를 타겟으로 했어요.",
      key_point: "상체는 살짝 앞으로, 무게는 앞발 뒤꿈치에! 앞다리 엉덩이로 밀어 올라오기",
      good_points: [
        { title: "엉덩이 타겟 자세", desc: "상체를 앞으로 숙여 엉덩이가 늘어나는 자세를 잘 잡았어요." },
        { title: "깊이 내려갔어요", desc: "뒷무릎이 바닥 가까이까지 내려가 엉덩이가 충분히 늘어났어요." },
        { title: "흔들림 없이", desc: "손을 가슴 앞에 모으고 균형을 잡아 12회씩 3세트를 해냈어요." }
      ],
      primary_muscles: [{ name: "대둔근", where: "엉덩이" }],
      secondary_muscles: "중둔근 · 햄스트링 · 대퇴사두근 · 내전근",
      feel_good: "앞다리 쪽 엉덩이가 쭉 늘어났다가 조여지는 느낌",
      feel_stop: "앞무릎이 아프거나 뒷다리 허벅지 앞만 당기면 앞발 위치를 조정해요",
      steps: [
        { title: "자리 잡기", desc: "뒷발 등을 패드에 올리고 앞발은 한 걸음 크게 앞으로. 손은 가슴 앞에 모아요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "앞으로 숙이며 내려가기", desc: "상체를 살짝 앞으로 숙인 채 뒷무릎이 바닥 가까이 갈 때까지 내려가요.", chip: "내려가며 들이마시기", media: "step2.webp", loop: true },
        { title: "엉덩이로 밀어 올라오기", desc: "앞발 뒤꿈치로 바닥을 밀고 엉덩이를 조이며 올라와요.", chip: "올라오며 후~", media: "step3.webp", loop: true }
      ],
      do: ["무게는 앞발 뒤꿈치에", "앞무릎은 발끝 방향", "한쪽 끝나면 반대쪽도 같은 횟수"],
      dont: ["앞무릎이 안으로 모이기", "뒷다리로 밀어 올라오기", "골반 비틀기"]
    },
    {
      id: "1028-hip-airplane", record: [[null, 10], [null, 10]], dir: "media/form-1028-hip-airplane/", date: "2026. 10. 28",
      exercise: "힙 에어플레인", exercise_en: "Hip Airplane", part: "엉덩이",
      targets: ["엉덩이 옆 (중둔근)", "골반 안정", "한 다리 균형"],
      benefit: "한 다리로 서서 상체를 숙인 채 골반을 열었다 닫는 운동이에요. 엉덩이 옆 근육과 균형 감각을 길러서 스쿼트·런지 때 골반이 흔들리지 않게 해 줘요.",
      key_point: "서 있는 다리 엉덩이로 버티고, 골반을 천천히 바깥으로 열었다 닫기!",
      good_points: [
        { title: "상체를 숙이고 버텼어요", desc: "한 다리로 서서 상체를 앞으로 숙인 자세를 무너지지 않게 버텼어요." },
        { title: "골반을 크게 열었어요", desc: "들고 있는 다리 쪽 골반을 바깥으로 크게 돌려 열었어요." },
        { title: "균형을 잡았어요", desc: "손을 가슴 앞에 모으고 10회씩 2세트 끝까지 해냈어요." }
      ],
      primary_muscles: [{ name: "대둔근", where: "엉덩이" }, { name: "중둔근", where: "엉덩이 옆" }],
      secondary_muscles: "햄스트링 · 코어",
      feel_good: "서 있는 다리 엉덩이 옆이 뜨겁게 버티는 느낌",
      feel_stop: "허리가 비틀리며 아프거나 넘어질 것 같으면 벽·기둥을 짚고 해요",
      steps: [
        { title: "한 다리로 숙이기", desc: "한 다리로 서서 무릎은 살짝 굽히고, 상체를 앞으로 숙이며 반대 다리를 뒤로 들어요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "골반 열기", desc: "서 있는 다리 엉덩이로 버티면서 들고 있는 다리 쪽 골반을 바깥으로 돌려 열어요.", chip: "열며 후~", media: "step2.webp", loop: true },
        { title: "다시 닫기", desc: "천천히 골반을 바닥 쪽으로 돌려 처음 자세로 돌아와요.", chip: "닫으며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["서 있는 무릎 살짝 굽히기", "천천히 열고 닫기", "양쪽 같은 횟수"],
      dont: ["허리로 비틀기", "서 있는 무릎 쫙 펴서 잠그기", "빠르게 휙휙 돌리기"]
    }

  ]
};
