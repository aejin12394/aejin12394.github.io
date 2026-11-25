/* 권수미 회원님 — 앱에서 만든 회원(이름·목표·시작일은 창고 profile) + Claude가 올린 자세 복습지.
   404.html·roster.js 가 window.MEMBER_EXTRA 를 창고 정보에 합침 (forms·notices 는 앞에 붙임). 최신이 위. */
window.MEMBER_EXTRA = {
  notices: [
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
    }
  ]
};
