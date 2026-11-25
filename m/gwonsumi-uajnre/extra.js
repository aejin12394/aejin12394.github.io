/* 권수미 회원님 — 앱에서 만든 회원(이름·목표·시작일은 창고 profile) + Claude가 올린 자세 복습지.
   404.html·roster.js 가 window.MEMBER_EXTRA 를 창고 정보에 합침 (forms·notices 는 앞에 붙임). 최신이 위. */
window.MEMBER_EXTRA = {
  notices: [
    { date: "2026. 11. 25", title: "복근 자세 복습지 4개가 올라왔어요", body: "11월 13일 PT 4회차 복근 운동 — 호흡법 · 테이블 탑 · 데드버그 · 레그 트위스트 영상으로 자세를 다시 확인해 보세요.", link: "#forms" },
    { date: "2026. 11. 25", title: "등 운동 자세 복습지 3개가 올라왔어요", body: "11월 18일 PT 5회차 등 운동 — 덤벨 월 슬라이드 · 암 풀다운 · 시티드 로우 머신 영상으로 자세를 다시 확인해 보세요.", link: "#forms" }
  ],
  forms: [
    {
      id: "1118-db-wall-slide", record: [[2, 15], [2, 15], [2, 15], [2, 15]], dir: "media/form-1118-db-wall-slide/", date: "2026. 11. 18",
      exercise: "덤벨 월 슬라이드", exercise_en: "Dumbbell Wall Slide", part: "등",
      targets: ["굽은 등·말린 어깨 펴기", "날개뼈 아래로 모으기", "등 운동 준비"],
      benefit: "등받이에 등을 붙이고 앉아 덤벨을 두 손으로 잡고 머리 위로 올렸다 내리는 운동이에요. 날개뼈를 아래로 끌어내리는 등 아래쪽 승모근을 깨워서, 굽은 등을 펴고 등 운동 전에 어깨를 바른 자리에 놓아 줘요.",
      key_point: "허리·등은 등받이에 붙인 채, 내릴 때 날개뼈를 아래로 쭉 끌어내리기!",
      good_points: [
        { title: "등을 붙이고 했어요", desc: "등받이에 등을 붙이고 앉아 허리가 뜨지 않게 버텼어요." },
        { title: "팔을 길게 올렸어요", desc: "덤벨을 머리 위까지 길게 밀어 올려 어깨가 넓게 움직였어요." },
        { title: "4세트를 끝까지", desc: "2kg로 15회씩 4세트를 같은 속도로 해냈어요." }
      ],
      primary_muscles: [{ name: "중·하부 승모근", where: "날개뼈 사이·아래쪽" }],
      secondary_muscles: "능형근 · 회전근개 · 어깨 앞·옆",
      feel_good: "내릴 때 날개뼈 아래쪽이 조이고 가슴이 펴지는 느낌",
      feel_stop: "어깨 안쪽이 찝히거나 허리가 등받이에서 뜨면 올리는 높이를 줄여요",
      steps: [
        { title: "앉은 준비 자세", desc: "등받이에 엉덩이·등을 붙이고 앉아 덤벨을 두 손으로 세워 잡고 얼굴 앞에 둬요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "머리 위로 올리기", desc: "어깨가 귀로 따라 올라가지 않게 하면서 덤벨을 머리 위로 길게 밀어 올려요.", chip: "올리며 후~", media: "step2.webp", loop: true },
        { title: "날개뼈 끌어내리기", desc: "팔꿈치를 아래로 당기듯 내리면서 날개뼈를 아래로 모아요.", chip: "내리며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["등·허리는 등받이에", "내릴 때 날개뼈 아래로", "천천히 일정하게"],
      dont: ["어깨 으쓱 올리기", "허리 뒤로 젖히기", "반동으로 빠르게"]
    },
    {
      id: "1118-straight-arm-pulldown", record: [[10, 15], [10, 15], [12, 15], [12, 15]], dir: "media/form-1118-straight-arm-pulldown/", date: "2026. 11. 18",
      exercise: "암 풀다운", exercise_en: "Straight Arm Pulldown", part: "등",
      targets: ["넓은 등 (광배근)", "등 라인 정리", "등 쓰는 감각 익히기"],
      benefit: "케이블을 마주 보고 서서 팔을 편 채로 손잡이를 허벅지 쪽으로 끌어내리는 운동이에요. 팔 힘을 빼고 등(광배근)만 쓰는 감각을 익히기 좋아요.",
      key_point: "팔꿈치는 살짝 굽힌 채 고정, 팔이 아니라 겨드랑이 아래 등으로 끌어내리기!",
      good_points: [
        { title: "팔을 편 채로 당겼어요", desc: "팔꿈치를 굽혔다 폈다 하지 않고 팔을 길게 유지했어요." },
        { title: "허벅지까지 끌어내렸어요", desc: "손잡이를 허벅지 앞까지 내려 등 옆이 꽉 조였어요." },
        { title: "무게를 올렸어요", desc: "10kg에서 12kg로 올려서도 15회를 끝까지 해냈어요." }
      ],
      primary_muscles: [{ name: "광배근", where: "등 옆·겨드랑이 아래" }],
      secondary_muscles: "대원근 · 삼두근 · 어깨 뒤 · 코어",
      feel_good: "끌어내릴 때 겨드랑이 아래 등이 조이는 느낌",
      feel_stop: "팔만 뻐근하거나 허리가 꺾이면 무게를 낮춰요",
      steps: [
        { title: "준비 자세", desc: "케이블을 마주 보고 서서 손잡이를 잡고 팔을 앞으로 뻗어요. 배에 힘을 주고 상체를 세워요.", chip: "어깨는 내리기", media: "step1.jpg" },
        { title: "허벅지 쪽으로 끌어내리기", desc: "팔을 편 채 큰 원을 그리듯 손잡이를 허벅지 앞까지 끌어내려요. 끝에서 1초 꽉.", chip: "내리며 후~", media: "step2.webp", loop: true },
        { title: "천천히 올리기", desc: "케이블에 끌려가지 않게 버티면서 어깨 높이까지 천천히 올려요.", chip: "올리며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["팔꿈치 각도 그대로", "허벅지 앞까지 내리기", "올릴 때 천천히"],
      dont: ["팔꿈치 굽혀 팔로 당기기", "상체 숙여 몸무게로 누르기", "어깨 으쓱"]
    },
    {
      id: "1118-seated-row", record: [[15, 15], [15, 15], [20, 15], [20, 15]], dir: "media/form-1118-seated-row/", date: "2026. 11. 18",
      exercise: "시티드 로우 머신", exercise_en: "Seated Row Machine", part: "등",
      targets: ["등 가운데 두께", "굽은 어깨 펴기", "바른 자세"],
      benefit: "앉아서 손잡이를 몸 쪽으로 당겨 등 가운데와 날개뼈 사이를 쓰는 머신이에요. 앞으로 말린 어깨를 펴 주고 등이 탄탄해져요.",
      key_point: "가슴 펴고 상체는 그대로, 팔꿈치를 뒤로 보내며 날개뼈를 모으기!",
      good_points: [
        { title: "상체를 세웠어요", desc: "가슴을 펴고 앉아 상체가 앞뒤로 흔들리지 않았어요." },
        { title: "팔꿈치를 뒤로 보냈어요", desc: "손이 아니라 팔꿈치를 뒤로 당겨 등에 힘이 실렸어요." },
        { title: "무게를 올렸어요", desc: "15kg에서 20kg로 올려서도 15회를 끝까지 해냈어요." }
      ],
      primary_muscles: [{ name: "광배근", where: "등 옆" }, { name: "능형근·중부 승모근", where: "날개뼈 사이" }],
      secondary_muscles: "대원근 · 어깨 뒤 · 이두근 · 전완",
      feel_good: "당겼을 때 날개뼈 사이가 꽉 모이는 느낌",
      feel_stop: "허리가 뻐근하거나 팔만 아프면 무게를 낮춰요",
      steps: [
        { title: "자리 잡기", desc: "발을 발판에 두고 앉아 손잡이를 잡아요. 가슴을 펴고 팔을 앞으로 쭉 펴요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "몸 쪽으로 당기기", desc: "팔꿈치를 뒤로 보내며 손잡이를 배 쪽으로 당기고 날개뼈를 모아요. 끝에서 1초 꽉.", chip: "당기며 후~", media: "step2.webp", loop: true },
        { title: "천천히 펴기", desc: "등 힘을 유지한 채 팔을 앞으로 천천히 펴요.", chip: "펴며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["가슴 펴고 상체 고정", "팔꿈치를 뒤로", "펼 때 천천히"],
      dont: ["상체를 뒤로 젖히며 당기기", "어깨 으쓱", "무게에 끌려가기"]
    },
    {
      id: "1113-breathing", wide: true, dir: "media/form-1113-breathing/", date: "2026. 11. 13",
      exercise: "호흡법", exercise_en: "Core Breathing", part: "복근",
      targets: ["복압 잡는 법", "허리 보호", "모든 운동의 기본"],
      benefit: "누워서 다리를 테이블 탑 자세로 들고, 무릎 사이 공과 정강이 폼롤러를 잡은 채 숨을 쉬는 연습이에요. 배 둘레에 힘을 채우는 법(복압)을 익히면 모든 운동에서 허리를 지킬 수 있어요.",
      key_point: "코로 들이마셔 배 둘레를 360도로 채우고, 입으로 '후~' 길게 내쉬며 배를 납작하게 조이기!",
      good_points: [
        { title: "허리를 바닥에 붙였어요", desc: "다리를 든 채로도 허리가 뜨지 않게 바닥에 눌렀어요." },
        { title: "손으로 배를 느꼈어요", desc: "배 위에 손을 올리고 숨 쉴 때 배가 부풀고 줄어드는 걸 확인했어요." },
        { title: "다리를 고정했어요", desc: "공과 폼롤러를 꼭 잡아 다리가 흔들리지 않았어요." }
      ],
      primary_muscles: [{ name: "복횡근", where: "배 둘레 깊은 곳" }, { name: "복직근·복사근", where: "배 앞·옆" }],
      secondary_muscles: "횡격막 · 골반저근",
      feel_good: "내쉴 때 배꼽 아래가 단단하게 조여지는 느낌",
      feel_stop: "어지럽거나 목·어깨에 힘이 들어가면 쉬었다가 천천히 다시",
      steps: [
        { title: "자세 잡기", desc: "누워서 무릎·고관절을 90도로 들고 무릎 사이에 공, 정강이 사이에 폼롤러를 껴요. 손은 배 위에.", chip: "허리 바닥에", media: "step1.jpg" },
        { title: "들이마시기", desc: "코로 천천히 들이마시며 배와 옆구리를 360도로 부풀려요. 어깨는 올라가지 않게.", chip: "코로 들이마시기", media: "step2.webp", loop: true },
        { title: "길게 내쉬기", desc: "입으로 '후~' 길게 내쉬며 배를 납작하게 조이고 허리를 바닥에 눌러요.", chip: "입으로 후~", media: "step3.webp", loop: true }
      ],
      do: ["허리는 바닥에 붙인 채", "내쉴 때 길게", "공·폼롤러 꼭 잡기"],
      dont: ["어깨로 숨 쉬기", "숨 참기", "허리 들뜨기"]
    },
    {
      id: "1113-table-top", wide: true, record: [[null, 10], [null, 10], [null, 10], [null, 10]], dir: "media/form-1113-table-top/", date: "2026. 11. 13",
      exercise: "테이블 탑", exercise_en: "Table Top", part: "복근",
      targets: ["아랫배", "복압 유지", "허리 안정"],
      benefit: "누운 자세에서 무릎을 굽힌 채 다리를 테이블 모양(무릎·고관절 90도)으로 들었다 내리는 운동이에요. 허리를 바닥에 붙인 채 아랫배 힘으로 다리를 움직이는 연습이에요.",
      key_point: "허리는 바닥에 꾹, 내쉬면서 아랫배 힘으로 다리를 들어 올리기!",
      good_points: [
        { title: "허리를 지켰어요", desc: "다리를 들고 내릴 때 허리가 바닥에서 뜨지 않았어요." },
        { title: "무릎 사이 공을 잡았어요", desc: "공을 꼭 잡아 다리가 벌어지지 않고 가운데로 움직였어요." },
        { title: "천천히 내렸어요", desc: "발이 툭 떨어지지 않게 버티며 10회씩 4세트를 해냈어요." }
      ],
      primary_muscles: [{ name: "복직근 아래쪽", where: "아랫배" }],
      secondary_muscles: "복횡근 · 복사근 · 장요근",
      feel_good: "다리를 들 때 아랫배가 조여지는 느낌",
      feel_stop: "허리가 뜨거나 아프면 다리를 드는 높이를 줄여요",
      steps: [
        { title: "누워서 준비", desc: "무릎을 세우고 누워 무릎 사이에 공을 껴요. 손은 배 위, 허리는 바닥에 붙여요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "다리 들기", desc: "숨을 내쉬며 아랫배 힘으로 무릎·고관절이 90도가 될 때까지 다리를 들어요.", chip: "들며 후~", media: "step2.webp", loop: true },
        { title: "천천히 내리기", desc: "허리가 뜨지 않게 버티면서 발끝을 바닥에 천천히 내려요.", chip: "내리며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["허리는 바닥에 붙인 채", "내쉬면서 들기", "천천히 내리기"],
      dont: ["허리 들뜨기", "반동으로 다리 던지기", "숨 참기"]
    },
    {
      id: "1113-dead-bug", wide: true, record: [[null, 20], [null, 20], [null, 20]], dir: "media/form-1113-dead-bug/", date: "2026. 11. 13",
      exercise: "데드버그 (팔 고정)", exercise_en: "Dead Bug (Arms Fixed)", part: "복근",
      targets: ["코어 안정", "허리 보호", "좌우 균형"],
      benefit: "누워서 다리를 테이블 탑으로 들고, 팔은 고정한 채 한쪽 다리씩 길게 뻗었다 돌아오는 운동이에요. 다리가 움직여도 허리와 골반이 흔들리지 않게 버티는 힘을 길러요.",
      key_point: "허리는 바닥에 붙인 채, 한 다리씩 길게 뻗으며 '후~' 내쉬기!",
      good_points: [
        { title: "팔을 고정했어요", desc: "팔은 움직이지 않고 다리만 번갈아 움직였어요." },
        { title: "다리를 길게 뻗었어요", desc: "발끝까지 멀리 뻗어 아랫배가 길게 버텼어요." },
        { title: "20회씩 3세트", desc: "양쪽을 번갈아 20회씩 3세트를 끝까지 해냈어요." }
      ],
      primary_muscles: [{ name: "복직근·복횡근", where: "배 앞·깊은 곳" }],
      secondary_muscles: "복사근 · 장요근",
      feel_good: "다리를 뻗을 때 배가 단단하게 버티는 느낌",
      feel_stop: "허리가 뜨거나 아프면 다리를 덜 뻗거나 높이 뻗어요",
      steps: [
        { title: "테이블 탑 자세", desc: "누워서 무릎·고관절 90도로 다리를 들고 팔은 고정해요. 허리는 바닥에.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "한 다리 뻗기", desc: "숨을 내쉬며 한쪽 다리를 바닥 가까이 길게 뻗어요. 반대 다리는 그대로.", chip: "뻗으며 후~", media: "step2.webp", loop: true },
        { title: "돌아와서 바꾸기", desc: "들이마시며 다리를 제자리로 가져오고 반대쪽 다리를 뻗어요.", chip: "돌아오며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["허리는 바닥에 붙인 채", "천천히 번갈아", "내쉬면서 뻗기"],
      dont: ["허리 들뜨기", "다리를 빠르게 차기", "숨 참기"]
    },
    {
      id: "1113-leg-twist", wide: true, record: [[null, 20], [null, 20], [null, 20]], dir: "media/form-1113-leg-twist/", date: "2026. 11. 13",
      exercise: "레그 트위스트", exercise_en: "Leg Twist", part: "복근",
      targets: ["옆구리 (복사근)", "허리 라인", "코어 회전 힘"],
      benefit: "팔꿈치로 상체를 받치고 기대 앉아, 모은 다리를 좌우로 넘겼다 돌아오는 운동이에요. 옆구리(복사근)를 써서 허리 라인을 잡아 줘요.",
      key_point: "두 다리는 붙인 채, 옆구리 힘으로 천천히 좌우로 넘기기!",
      good_points: [
        { title: "상체를 받쳤어요", desc: "팔꿈치로 단단히 받쳐 상체가 흔들리지 않았어요." },
        { title: "다리를 붙였어요", desc: "두 다리를 모은 채 같이 움직여 옆구리에 힘이 들어갔어요." },
        { title: "20회씩 3세트", desc: "좌우를 번갈아 20회씩 3세트를 끝까지 해냈어요." }
      ],
      primary_muscles: [{ name: "복사근", where: "옆구리" }],
      secondary_muscles: "복직근 · 장요근",
      feel_good: "다리를 넘길 때 반대쪽 옆구리가 당기며 버티는 느낌",
      feel_stop: "허리가 비틀리며 아프면 넘기는 폭을 줄여요",
      steps: [
        { title: "기대 앉기", desc: "팔꿈치로 바닥을 짚고 상체를 뒤로 기대요. 두 다리는 붙여서 무릎을 살짝 굽혀요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "옆으로 넘기기", desc: "숨을 내쉬며 붙인 다리를 한쪽 옆으로 천천히 넘겨요.", chip: "넘기며 후~", media: "step2.webp", loop: true },
        { title: "반대쪽으로", desc: "옆구리 힘으로 가운데로 돌아와 반대쪽으로 넘겨요.", chip: "돌아오며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["두 다리 붙이기", "천천히 좌우로", "상체는 고정"],
      dont: ["반동으로 휙 넘기기", "어깨 으쓱", "숨 참기"]
    }
  ]
};
