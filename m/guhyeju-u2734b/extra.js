/* 구혜주 회원님 — 앱에서 만든 회원(이름·목표·시작일은 창고 profile) + Claude가 올린 자세 복습지.
   404.html·roster.js 가 window.MEMBER_EXTRA 를 창고 정보에 합침 (forms·notices 는 앞에 붙임). 최신이 위. */
window.MEMBER_EXTRA = {
  notices: [
    { date: "2026. 11. 19", title: "자세 복습지 3개가 올라왔어요", body: "11월 18일 PT 18회차 하체 운동 — 몬스터 글루트 · 고블릿 스쿼트 · 레그 익스텐션 영상으로 자세를 다시 확인해 보세요.", link: "#forms" }
  ],
  forms: [
    {
      id: "1118-leg-extension", dir: "media/form-1118-leg-extension/", date: "2026. 11. 18",
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
      id: "1118-goblet-squat", dir: "media/form-1118-goblet-squat/", date: "2026. 11. 18",
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
      id: "1118-monster-glute", dir: "media/form-1118-monster-glute/", date: "2026. 11. 18",
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
    }
  ]
};
