/* 정아름 회원님 — 앱에서 만든 회원(이름·목표·시작일은 창고 profile) + Claude가 올린 자세 복습지.
   404.html·roster.js 가 window.MEMBER_EXTRA 를 창고 정보에 합침 (forms·notices 는 앞에 붙임). 최신이 위. */
window.MEMBER_EXTRA = {
  notices: [
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
    }
  ]
};
