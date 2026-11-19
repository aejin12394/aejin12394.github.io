/* 구혜주 회원님 — 앱에서 만든 회원(이름·목표·시작일은 창고 profile) + Claude가 올린 자세 복습지.
   404.html·roster.js 가 window.MEMBER_EXTRA 를 창고 정보에 합침 (forms·notices 는 앞에 붙임). 최신이 위. */
window.MEMBER_EXTRA = {
  notices: [
    { date: "2026. 11. 19", title: "어깨 운동 자세 복습지 3개가 올라왔어요", body: "11월 13일 PT 17회차 어깨 운동 — 누워서 밴드 와이 레이즈 · 벤트 오버 레터럴 레이즈 · 리버스 펙덱 플라이 영상으로 자세를 다시 확인해 보세요.", link: "#forms" },
    { date: "2026. 11. 19", title: "자세 복습지 3개가 올라왔어요", body: "11월 18일 PT 18회차 하체 운동 — 몬스터 글루트 · 고블릿 스쿼트 · 레그 익스텐션 영상으로 자세를 다시 확인해 보세요.", link: "#forms" }
  ],
  forms: [
    {
      id: "1118-leg-extension", record: [[15, 15], [15, 15], [15, 15], [15, 15]], dir: "media/form-1118-leg-extension/", date: "2026. 11. 18",
      exercise: "레그 익스텐션", exercise_en: "Leg Extension", part: "하체",
      targets: ["앞벅지 탄탄하게", "무릎 주변 근력", "하체 마무리"],
      benefit: "앞벅지(대퇴사두근)만 따로 집중해서 쓰는 머신이에요. 하체 운동 마지막에 남은 힘까지 꽉 채워 줘요.",
      key_point: "무릎을 끝까지 펴고 1초 버티기, 내릴 땐 천천히!",
      good_points: [
        { title: "등을 등받이에 딱 붙였어요", desc: "상체가 흔들리지 않아서 앞벅지에만 힘이 잘 들어갔어요." },
        { title: "손잡이를 잡고 몸을 고정했어요", desc: "엉덩이가 들리지 않아 무게가 다리로만 갔어요." },
        { title: "끝까지 쭉 폈어요", desc: "무릎을 다 펴서 앞벅지가 제일 짧아지는 곳까지 썼어요." }
      ],
      primary_muscles: [{ name: "대퇴사두근", where: "앞벅지 전체" }],
      secondary_muscles: "따로 없음 — 앞벅지 하나만 집중해요",
      feel_good: "다 폈을 때 앞벅지가 뜨겁고 단단해지는 느낌",
      feel_stop: "무릎 안쪽이나 무릎뼈가 찌릿하게 아프면 바로 멈춰요",
      steps: [
        { title: "자리 잡기", desc: "등을 등받이에 붙이고 패드는 발목 바로 위에. 손잡이를 잡아 엉덩이를 고정해요.", chip: "숨 편하게", media: "step1.jpg" },
        { title: "쭉 펴기", desc: "앞벅지 힘으로 무릎을 끝까지 펴고 위에서 1초 꽉 버텨요.", chip: "펴면서 후~", media: "step2.webp", loop: true },
        { title: "천천히 내리기", desc: "무게를 버티면서 2초 동안 천천히 내려요. 무게판이 쾅 닿지 않게!", chip: "내리면서 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["등·엉덩이는 의자에 붙인 채로", "위에서 1초 버티기", "내릴 때 2초 천천히"],
      dont: ["반동으로 다리 차올리기", "엉덩이 들기", "무게판을 쾅 내려놓기"]
    },
    {
      id: "1118-goblet-squat", record: [[6, 15], [6, 15], [6, 15], [6, 15]], dir: "media/form-1118-goblet-squat/", date: "2026. 11. 18",
      exercise: "고블릿 스쿼트", exercise_en: "Goblet Squat", part: "하체",
      targets: ["엉덩이·앞벅지", "바른 스쿼트 자세", "칼로리 많이 쓰기"],
      benefit: "덤벨을 몸 앞에 띄워 코 높이로 들면 상체가 자연스럽게 세워지고 코어까지 같이 써서 스쿼트 자세를 가장 쉽게 배울 수 있어요. 큰 근육을 한꺼번에 써서 다이어트에도 좋아요.",
      key_point: "엉덩이를 뒤로 빼며 앉고, 뒤꿈치로 바닥을 밀며 일어나기!",
      good_points: [
        { title: "덤벨을 코 높이에 맞췄어요", desc: "덤벨을 몸에서 살짝 떼고 코 높이로 들어서 상체가 세워지고 배에 힘이 잘 들어갔어요." },
        { title: "깊게 앉았어요", desc: "허벅지가 바닥과 거의 나란할 때까지 내려가서 엉덩이를 잘 썼어요." },
        { title: "발바닥 전체로 버텼어요", desc: "뒤꿈치가 들리지 않고 바닥을 꽉 눌렀어요." }
      ],
      primary_muscles: [{ name: "대퇴사두근", where: "앞벅지" }, { name: "대둔근", where: "엉덩이" }],
      secondary_muscles: "내전근(안쪽 허벅지) · 척추기립근 · 복근",
      feel_good: "일어날 때 엉덩이와 앞벅지가 같이 단단해지는 느낌",
      feel_stop: "허리가 뻐근하거나 무릎이 찌릿하면 멈추고 자세부터 다시",
      steps: [
        { title: "준비 자세", desc: "발은 어깨너비, 발끝은 살짝 바깥. 덤벨을 세워 잡고 몸에서 살짝 떼서 코 높이에 맞춰요. 가슴은 펴요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "앉기", desc: "의자에 앉듯 엉덩이를 뒤로 빼며 내려가요. 무릎은 발끝 방향으로 벌어지게.", chip: "앉으면서 들이마시기", media: "step2.webp", loop: true },
        { title: "일어나기", desc: "뒤꿈치로 바닥을 밀고, 다 올라와서 엉덩이를 꽉 조여요.", chip: "일어나며 후~", media: "step3.webp", loop: true }
      ],
      do: ["덤벨은 몸에서 떼고 코 높이 유지", "무릎은 발끝과 같은 방향", "뒤꿈치로 바닥 밀기"],
      dont: ["덤벨이 가슴·배 쪽으로 내려오기", "무릎이 안쪽으로 모이기", "뒤꿈치 들기"]
    },
    {
      id: "1118-monster-glute", record: [[5, 15], [10, 15], [15, 15], [15, 15]], dir: "media/form-1118-monster-glute/", date: "2026. 11. 18",
      exercise: "몬스터 글루트", exercise_en: "Monster Glute", part: "엉덩이",
      targets: ["엉덩이 위쪽 볼륨", "힙업", "허리 대신 엉덩이 쓰기"],
      benefit: "엉덩이(대둔근) 힘으로 다리를 뒤로 밀어내는 머신이에요. 허리 부담 없이 엉덩이만 집중해서 키울 수 있어요.",
      key_point: "발뒤꿈치로 밀고, 다 폈을 때 엉덩이 1초 꽉!",
      good_points: [
        { title: "몸을 등받이에 고정했어요", desc: "상체가 따라 움직이지 않아서 엉덩이에 힘이 모였어요." },
        { title: "끝까지 밀었어요", desc: "다리를 끝까지 펴서 엉덩이가 제일 세게 수축하는 곳까지 갔어요." },
        { title: "일정한 속도", desc: "15회 내내 반동 없이 같은 속도로 했어요." }
      ],
      primary_muscles: [{ name: "대둔근", where: "엉덩이 전체" }],
      secondary_muscles: "햄스트링(뒷벅지)",
      feel_good: "다 밀었을 때 엉덩이가 단단하게 뭉치는 느낌",
      feel_stop: "허리가 꺾이면서 허리에 힘이 들어가면 무게를 낮춰요",
      steps: [
        { title: "자리 잡기", desc: "등과 엉덩이를 등받이에 붙이고 손잡이를 잡아요. 발은 발판 가운데에.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "밀어내기", desc: "발뒤꿈치로 발판을 밀면서 엉덩이 힘으로 다리를 쭉 펴요. 끝에서 1초 꽉!", chip: "밀면서 후~", media: "step2.webp", loop: true },
        { title: "돌아오기", desc: "엉덩이 힘을 풀지 말고 천천히 무릎을 접으며 돌아와요.", chip: "돌아오며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["뒤꿈치로 밀기", "끝에서 엉덩이 1초 조이기", "돌아올 때 천천히"],
      dont: ["허리 꺾기", "반동으로 차기", "등받이에서 몸 떼기"]
    },
    {
      id: "1113-reverse-pec-deck", record: [[10, 15], [15, 10], [15, 10], [15, 15]], dir: "media/form-1113-reverse-pec-deck/", date: "2026. 11. 13",
      exercise: "리버스 펙덱 플라이", exercise_en: "Reverse Pec Deck Fly", part: "어깨",
      targets: ["어깨 뒤쪽 라인", "굽은 어깨 펴기", "등 위쪽 탄탄하게"],
      benefit: "팔을 옆으로 크게 벌려 어깨 뒤(후면 삼각근)와 날개뼈 사이를 쓰는 머신이에요. 굽은 어깨·라운드 숄더를 펴는 데 좋아요.",
      key_point: "팔꿈치를 살짝 굽힌 채 고정하고, 팔이 아니라 어깨 뒤로 크게 벌리기!",
      good_points: [
        { title: "가슴을 패드에 붙였어요", desc: "상체가 뒤로 젖혀지지 않아 어깨 뒤에만 힘이 들어갔어요." },
        { title: "팔을 끝까지 벌렸어요", desc: "손이 몸통 옆 일직선까지 와서 어깨 뒤가 제일 짧아지는 곳까지 썼어요." },
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
      id: "1113-bent-over-lateral-raise", record: [[2, 15], [2, 15], [2, 15], [2, 15]], dir: "media/form-1113-bent-over-lateral-raise/", date: "2026. 11. 13",
      exercise: "벤트 오버 레터럴 레이즈", exercise_en: "Bent-over Lateral Raise", part: "어깨",
      targets: ["어깨 뒤쪽", "동그란 어깨 라인", "바른 자세"],
      benefit: "상체를 숙이고 덤벨을 옆으로 들어 어깨 뒤쪽을 따로 쓰는 운동이에요. 가벼운 무게로도 어깨 뒤에 자극이 확실히 와요.",
      key_point: "새끼손가락 쪽으로 옆으로 멀리 들고, 어깨는 귀에서 멀리!",
      good_points: [
        { title: "상체를 숙인 채 버텼어요", desc: "15회 내내 상체가 들리지 않아 어깨 뒤를 계속 쓸 수 있었어요." },
        { title: "옆으로 넓게 들었어요", desc: "팔을 몸 옆으로 크게 벌려서 어깨 뒤쪽에 자극이 잘 갔어요." },
        { title: "가벼운 무게로 정확하게", desc: "2kg로 반동 없이 정확한 자세를 먼저 익혔어요." }
      ],
      primary_muscles: [{ name: "후면 삼각근", where: "어깨 뒤쪽" }],
      secondary_muscles: "측면 삼각근 · 능형근 · 중부 승모근",
      feel_good: "팔을 들 때 어깨 뒤쪽이 화끈하게 뜨거워지는 느낌",
      feel_stop: "목·승모근이 먼저 아프거나 허리가 뻐근하면 멈춰요",
      steps: [
        { title: "숙인 자세", desc: "벤치 끝에 앉아 가슴을 허벅지 쪽으로 숙여요. 등은 곧게, 덤벨은 다리 옆에 늘어뜨려요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "옆으로 들기", desc: "팔꿈치를 살짝 굽힌 채 새끼손가락 쪽으로 옆으로 멀리 들어 어깨 높이까지.", chip: "들면서 후~", media: "step2.webp", loop: true },
        { title: "천천히 내리기", desc: "덤벨이 바닥으로 떨어지지 않게 버티면서 천천히 내려요.", chip: "내리며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["상체는 숙인 채 고정", "팔은 옆으로 멀리", "어깨는 귀에서 멀리"],
      dont: ["상체가 들리면서 반동", "어깨 으쓱", "덤벨을 몸 뒤로 당기기"]
    },
    {
      id: "1113-band-y-raise", wide: true, record: [["빨강 밴드", 15], ["빨강 밴드", 15], ["핑크 밴드", 15]], dir: "media/form-1113-band-y-raise/", date: "2026. 11. 13",
      exercise: "누워서 밴드 와이 레이즈", exercise_en: "Lying Band Y Raise", part: "어깨",
      targets: ["어깨 안정", "등 위쪽 바른 자세", "어깨 운동 준비"],
      benefit: "누워서 발에 건 밴드를 버티며 팔을 머리 위 바닥 쪽으로 Y자로 뻗어 하부 승모근과 어깨를 깨워요. 어깨 운동 전에 어깨를 안정시키는 준비 운동이에요.",
      key_point: "팔을 Y자로 머리 위 바닥 쪽까지 길게, 어깨는 귀에서 멀리!",
      good_points: [
        { title: "허리를 바닥에 붙였어요", desc: "다리를 들고 누워 허리가 뜨지 않아서 어깨만 움직였어요." },
        { title: "Y자로 끝까지 뻗었어요", desc: "팔을 머리 위 바닥 쪽 대각선까지 길게 뻗어 하부 승모근을 썼어요." },
        { title: "밴드 장력을 유지했어요", desc: "팔을 다시 올릴 때도 밴드가 느슨해지지 않게 버텼어요." }
      ],
      primary_muscles: [{ name: "하부·중부 승모근", where: "날개뼈 아래·사이" }],
      secondary_muscles: "후면·측면 삼각근 · 능형근",
      feel_good: "팔을 머리 위로 뻗었을 때 날개뼈 아래쪽이 조이는 느낌",
      feel_stop: "어깨 앞이 찝히거나 허리가 뜨면 멈추고 다시 자세 잡기",
      steps: [
        { title: "누워서 준비", desc: "등을 대고 누워 다리를 들고 밴드를 발에 걸어요. 밴드 양쪽을 잡고 팔은 가슴 위로 쭉 뻗어요. 허리는 바닥에 꾹.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "Y자로 뻗기", desc: "밴드를 버티면서 팔을 머리 위 바닥 쪽 대각선(Y자)으로 길게 뻗어요. 끝에서 1초.", chip: "뻗으면서 후~", media: "step2.webp", loop: true },
        { title: "천천히 돌아오기", desc: "밴드에 끌려가지 않게 버티면서 천천히 가슴 위로 돌아와요.", chip: "돌아오며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["허리는 바닥에 붙인 채로", "팔은 Y자로 길게", "어깨는 귀에서 멀리"],
      dont: ["허리 들기", "어깨 으쓱", "밴드에 끌려 팔이 확 돌아오기"]
    }
  ]
};
