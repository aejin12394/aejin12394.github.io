/* 정아름 회원님 — 앱에서 만든 회원(이름·목표·시작일은 창고 profile) + Claude가 올린 자세 복습지.
   404.html·roster.js 가 window.MEMBER_EXTRA 를 창고 정보에 합침 (forms·notices 는 앞에 붙임). 최신이 위. */
window.MEMBER_EXTRA = {
  notices: [
    { date: "2026. 11. 23", title: "등 운동 자세 복습지 3개가 올라왔어요", body: "11월 19일 PT 17회차 등 운동 — 랫풀다운 · 해머 레터럴 로우 · 바벨 로우 영상으로 자세를 다시 확인해 보세요.", link: "#forms" },
    { date: "2026. 11. 23", title: "어깨 운동 자세 복습지 3개가 올라왔어요", body: "11월 23일 PT 18회차 어깨 운동 — 리버스 펙덱 플라이 · 사이드 레터럴 레이즈 · 페이스풀 영상으로 자세를 다시 확인해 보세요.", link: "#forms" }
  ],
  forms: [
    {
      id: "1123-face-pull", record: [[15, 15], [15, 15], [15, 15], [15, 15]], dir: "media/form-1123-face-pull/", date: "2026. 11. 23",
      exercise: "페이스풀", exercise_en: "Face Pull", part: "어깨",
      targets: ["어깨 뒤쪽", "굽은 어깨 펴기", "바른 자세"],
      benefit: "케이블 로프를 얼굴 쪽으로 당겨 어깨 뒤(후면 삼각근)와 날개뼈 사이를 쓰는 운동이에요. 앞으로 말린 어깨를 펴는 데 좋아요.",
      key_point: "팔꿈치를 높게, 로프를 얼굴(눈·코 높이)로 당기며 양옆으로 벌리기!",
      good_points: [
        { title: "곧게 선 자세를 지켰어요", desc: "상체가 뒤로 젖혀지지 않아서 반동 없이 어깨 뒤로만 당겼어요." },
        { title: "얼굴 쪽으로 당겼어요", desc: "로프를 가슴이 아니라 얼굴 높이로 당겨 어깨 뒤에 자극이 잘 갔어요." },
        { title: "팔을 끝까지 뻗었어요", desc: "돌아갈 때 팔을 쭉 펴서 매번 처음부터 다시 당겼어요." }
      ],
      primary_muscles: [{ name: "후면 삼각근", where: "어깨 뒤쪽" }, { name: "중부 승모근", where: "날개뼈 사이" }],
      secondary_muscles: "능형근 · 극하근(어깨 회전근)",
      feel_good: "당겼을 때 어깨 뒤와 날개뼈 사이가 조이는 느낌",
      feel_stop: "목·승모근이 먼저 뻐근하거나 어깨 앞이 찝히면 무게를 낮춰요",
      steps: [
        { title: "자리 잡기", desc: "케이블을 얼굴 높이에 맞추고 로프 양끝을 잡아요. 한두 걸음 물러나 팔을 앞으로 쭉 펴고 곧게 서요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "얼굴로 당기기", desc: "팔꿈치를 높게 든 채 로프를 얼굴 쪽으로 당기면서 양옆으로 벌려요. 끝에서 1초 꽉.", chip: "당기면서 후~", media: "step2.webp", loop: true },
        { title: "천천히 펴기", desc: "케이블에 끌려가지 않게 버티면서 팔을 앞으로 천천히 펴요.", chip: "펴면서 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["팔꿈치는 어깨 높이 이상", "로프는 얼굴 쪽으로", "상체는 곧게 고정"],
      dont: ["로프를 가슴·배 쪽으로 당기기", "상체를 뒤로 젖히며 반동", "어깨 으쓱"]
    },
    {
      id: "1123-side-lateral-raise", record: [[2, 20], [2, 20], [2, 20]], dir: "media/form-1123-side-lateral-raise/", date: "2026. 11. 23",
      exercise: "사이드 레터럴 레이즈", exercise_en: "Side Lateral Raise", part: "어깨",
      targets: ["동그란 어깨 라인", "어깨 옆 볼륨", "상체 라인 정리"],
      benefit: "덤벨을 옆으로 들어 어깨 옆(측면 삼각근)을 쓰는 운동이에요. 가벼운 무게로 횟수를 많이 해서 어깨 라인을 예쁘게 만들어요.",
      key_point: "팔꿈치를 살짝 굽힌 채 옆으로 어깨 높이까지, 어깨는 귀에서 멀리!",
      good_points: [
        { title: "가벼운 무게로 20회", desc: "2kg로 20회씩 반동 없이 끝까지 해냈어요." },
        { title: "어깨 높이까지만", desc: "팔을 어깨 높이까지만 들어서 승모근 대신 어깨 옆을 썼어요." },
        { title: "몸통을 고정했어요", desc: "상체가 흔들리지 않게 곧게 선 채로 팔만 움직였어요." }
      ],
      primary_muscles: [{ name: "측면 삼각근", where: "어깨 옆쪽" }],
      secondary_muscles: "전면 삼각근 · 상부 승모근",
      feel_good: "팔을 들 때 어깨 옆이 뜨겁게 차오르는 느낌",
      feel_stop: "목·승모근이 먼저 아프거나 어깨 안쪽이 찝히면 멈춰요",
      steps: [
        { title: "준비 자세", desc: "발은 골반 너비, 덤벨을 몸 옆에 들고 곧게 서요. 팔꿈치는 살짝 굽혀요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "옆으로 들기", desc: "팔꿈치가 먼저 올라간다는 느낌으로 옆으로 어깨 높이까지 들어요.", chip: "들면서 후~", media: "step2.webp", loop: true },
        { title: "천천히 내리기", desc: "덤벨이 툭 떨어지지 않게 버티면서 천천히 내려요.", chip: "내리며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["팔꿈치 살짝 굽힌 채 고정", "어깨 높이까지만", "내릴 때 천천히"],
      dont: ["어깨 으쓱 올리기", "몸 흔들며 반동", "덤벨을 툭 떨어뜨리기"]
    },
    {
      id: "1123-reverse-pec-deck", record: [[15, 15], [15, 15], [15, 15]], dir: "media/form-1123-reverse-pec-deck/", date: "2026. 11. 23",
      exercise: "리버스 펙덱 플라이", exercise_en: "Reverse Pec Deck Fly", part: "어깨",
      targets: ["어깨 뒤쪽 라인", "굽은 어깨 펴기", "등 위쪽 탄탄하게"],
      benefit: "팔을 옆으로 크게 벌려 어깨 뒤(후면 삼각근)와 날개뼈 사이를 쓰는 머신이에요. 굽은 어깨·라운드 숄더를 펴는 데 좋아요.",
      key_point: "팔꿈치를 살짝 굽힌 채 고정하고, 팔이 아니라 어깨 뒤로 크게 벌리기!",
      good_points: [
        { title: "가슴을 패드에 붙였어요", desc: "상체가 뒤로 젖혀지지 않아 어깨 뒤에만 힘이 들어갔어요." },
        { title: "팔을 크게 벌렸어요", desc: "손이 몸통 옆 일직선까지 와서 어깨 뒤가 제일 짧아지는 곳까지 썼어요." },
        { title: "천천히 돌아왔어요", desc: "모을 때 무게판이 쾅 닿지 않게 버티면서 돌아왔어요." }
      ],
      primary_muscles: [{ name: "후면 삼각근", where: "어깨 뒤쪽" }],
      secondary_muscles: "능형근(날개뼈 사이) · 중부 승모근 · 극하근",
      feel_good: "벌렸을 때 어깨 뒤와 날개뼈 사이가 조이는 느낌",
      feel_stop: "어깨 앞이 찝히거나 목·승모근만 뻐근하면 무게를 낮춰요",
      steps: [
        { title: "자리 잡기", desc: "가슴을 패드에 붙이고 손잡이가 어깨 높이에 오게 의자를 맞춰요. 팔꿈치는 살짝 굽혀서 고정.", chip: "어깨는 내리기", media: "step1.jpg" },
        { title: "크게 벌리기", desc: "팔꿈치가 먼저 나간다는 느낌으로 몸통 옆 일직선까지 크게 벌려요. 끝에서 1초 꽉.", chip: "벌리면서 후~", media: "step2.webp", loop: true },
        { title: "천천히 모으기", desc: "어깨 뒤 힘을 유지한 채 2초 동안 천천히 앞으로 돌아와요.", chip: "모으며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["가슴은 패드에 붙인 채로", "팔꿈치 각도 그대로 고정", "돌아올 때 천천히"],
      dont: ["어깨 으쓱 올리기", "팔꿈치를 굽혔다 폈다 하기", "반동으로 확 젖히기"]
    },
    {
      id: "1119-lat-pulldown", record: [[20, 15], [20, 15], [20, 15], [20, 15]], dir: "media/form-1119-lat-pulldown/", date: "2026. 11. 19",
      exercise: "랫풀다운", exercise_en: "Lat Pulldown", part: "등",
      targets: ["넓은 등 라인", "등 위쪽 탄탄하게", "바른 자세"],
      benefit: "머리 위 바를 가슴 쪽으로 당겨 등 넓은 근육(광배근)을 쓰는 대표 등 운동이에요. 등 라인이 생기면 허리가 더 잘록해 보여요.",
      key_point: "팔이 아니라 팔꿈치를 옆구리로 내린다는 느낌, 가슴은 바 쪽으로 들기!",
      good_points: [
        { title: "허벅지를 패드에 고정했어요", desc: "몸이 들리지 않아서 당길 때 등에 힘이 모였어요." },
        { title: "쇄골 쪽까지 당겼어요", desc: "바를 가슴 위쪽까지 끝까지 당겨 등을 끝까지 조였어요." },
        { title: "올라갈 때도 버텼어요", desc: "바가 확 올라가지 않게 천천히 팔을 펴면서 등을 늘렸어요." }
      ],
      primary_muscles: [{ name: "광배근", where: "등 옆쪽 넓은 근육" }],
      secondary_muscles: "대원근 · 능형근 · 중부 승모근 · 이두근",
      feel_good: "당겼을 때 겨드랑이 아래 등 옆이 조이는 느낌",
      feel_stop: "팔(이두)만 아프거나 어깨 앞이 찝히면 무게를 낮춰요",
      steps: [
        { title: "자리 잡기", desc: "허벅지를 패드에 넣고 바를 어깨보다 조금 넓게 잡아요. 팔은 머리 위로 쭉, 가슴은 들고.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "가슴으로 당기기", desc: "팔꿈치를 옆구리 쪽으로 내리면서 바를 쇄골 아래까지 당겨요. 끝에서 1초 등 꽉.", chip: "당기면서 후~", media: "step2.webp", loop: true },
        { title: "천천히 올리기", desc: "등이 늘어나는 걸 느끼면서 팔을 천천히 펴요. 어깨가 귀까지 따라 올라가지 않게.", chip: "올리며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["가슴은 바 쪽으로 들기", "팔꿈치는 옆구리로", "올릴 때 천천히"],
      dont: ["몸을 뒤로 크게 젖히며 반동", "바를 목 뒤로 당기기", "어깨 으쓱"]
    },
    {
      id: "1119-hammer-lateral-row", record: [[5, 15], [10, 10], [10, 10], [10, 10]], dir: "media/form-1119-hammer-lateral-row/", date: "2026. 11. 19",
      exercise: "해머 레터럴 로우", exercise_en: "Hammer Strength Lateral Row", part: "등",
      targets: ["등 두께", "날개뼈 사이 탄탄하게", "굽은 등 펴기"],
      benefit: "가슴을 패드에 대고 손잡이를 몸 쪽으로 당겨 등 가운데와 옆을 쓰는 해머스트렝스 머신이에요. 상체가 고정돼서 등에만 집중하기 좋아요.",
      key_point: "가슴은 패드에 붙이고, 팔꿈치를 뒤로 보내며 날개뼈를 모으기!",
      good_points: [
        { title: "가슴을 패드에 붙였어요", desc: "상체가 뒤로 젖혀지지 않아서 반동 없이 등으로 당겼어요." },
        { title: "팔꿈치를 뒤로 보냈어요", desc: "손이 아니라 팔꿈치를 뒤로 보내서 날개뼈가 잘 모였어요." },
        { title: "무게를 올려도 자세 유지", desc: "5kg에서 10kg로 올려도 자세가 무너지지 않았어요." }
      ],
      primary_muscles: [{ name: "광배근", where: "등 옆쪽" }, { name: "능형근", where: "날개뼈 사이" }],
      secondary_muscles: "중부 승모근 · 대원근 · 후면 삼각근 · 이두근",
      feel_good: "당겼을 때 날개뼈 사이가 꽉 모이는 느낌",
      feel_stop: "허리가 뻐근하거나 팔만 아프면 무게를 낮춰요",
      steps: [
        { title: "자리 잡기", desc: "가슴을 패드에 대고 손잡이가 팔을 쭉 뻗었을 때 잡히게 의자를 맞춰요.", chip: "가슴 들기", media: "step1.jpg" },
        { title: "뒤로 당기기", desc: "팔꿈치를 몸 뒤로 보내며 손잡이를 옆구리 쪽으로 당겨요. 끝에서 1초 날개뼈 꽉.", chip: "당기면서 후~", media: "step2.webp", loop: true },
        { title: "천천히 펴기", desc: "등이 늘어나는 걸 느끼면서 팔을 앞으로 천천히 펴요.", chip: "펴면서 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["가슴은 패드에 붙인 채로", "팔꿈치를 뒤로", "펼 때 천천히"],
      dont: ["상체를 뒤로 젖히기", "어깨 으쓱", "손목으로만 당기기"]
    },
    {
      id: "1119-barbell-row", record: [[10, 15], [10, 15]], dir: "media/form-1119-barbell-row/", date: "2026. 11. 19",
      exercise: "바벨 로우", exercise_en: "Barbell Row", part: "등",
      targets: ["등 두께", "바른 자세 근력", "몸 뒷라인 전체"],
      benefit: "상체를 숙인 채 바벨을 배 쪽으로 당겨 등 전체를 쓰는 프리웨이트 운동이에요. 몸을 지탱하는 허리·엉덩이 힘도 같이 길러져요.",
      key_point: "허리는 곧게, 바벨을 배꼽 쪽으로 몸에 붙여서 당기기!",
      good_points: [
        { title: "상체를 숙인 채 버텼어요", desc: "엉덩이를 뒤로 빼고 상체를 숙인 자세를 끝까지 유지했어요." },
        { title: "몸 가까이 당겼어요", desc: "바벨이 다리 앞을 스치듯 몸 가까이로 올라와서 등에 힘이 실렸어요." },
        { title: "가벼운 무게로 정확하게", desc: "10kg로 자세를 먼저 익히면서 15회를 채웠어요." }
      ],
      primary_muscles: [{ name: "광배근", where: "등 옆쪽" }, { name: "능형근", where: "날개뼈 사이" }],
      secondary_muscles: "중부 승모근 · 후면 삼각근 · 척추기립근 · 이두근",
      feel_good: "당겼을 때 등 가운데가 조이고, 허벅지 뒤가 살짝 당기는 느낌",
      feel_stop: "허리가 아프거나 등이 둥글게 말리면 바로 멈춰요",
      steps: [
        { title: "숙인 자세", desc: "무릎을 살짝 굽히고 엉덩이를 뒤로 빼며 상체를 숙여요. 등은 곧게, 바벨은 무릎 앞에.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "배꼽 쪽으로 당기기", desc: "팔꿈치를 뒤로 보내며 바벨을 몸에 붙여 배꼽 쪽으로 당겨요. 끝에서 날개뼈 꽉.", chip: "당기면서 후~", media: "step2.webp", loop: true },
        { title: "천천히 내리기", desc: "상체 각도는 그대로 두고 바벨만 천천히 내려요.", chip: "내리며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["허리는 곧게 고정", "바벨은 몸에 붙여서", "내릴 때 천천히"],
      dont: ["등 둥글게 말기", "상체를 들썩이며 반동", "고개 들어 목 꺾기"]
    }
  ]
};
