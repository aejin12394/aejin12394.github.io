/* 유선 회원님 — 앱에서 만든 회원(이름·목표·시작일은 창고 profile) + Claude가 올린 자세 복습지.
   404.html·roster.js 가 window.MEMBER_EXTRA 를 창고 정보에 합침 (forms·notices 는 앞에 붙임). 최신이 위. */
window.MEMBER_EXTRA = {
  notices: [
    { date: "2026. 11. 24", title: "하체 자세 복습지 3개가 올라왔어요", body: "11월 21일 PT 21회차 하체 운동 — 레그 컬 · 스미스머신 내로우 스쿼트 · 스미스머신 스텝업 영상으로 자세를 다시 확인해 보세요.", link: "#forms" }
  ],
  forms: [
    {
      id: "1121-leg-curl", wide: true, record: [[10, 15], [10, 15], [10, 15]], dir: "media/form-1121-leg-curl/", date: "2026. 11. 21",
      exercise: "레그 컬", exercise_en: "Lying Leg Curl", part: "하체",
      targets: ["허벅지 뒤 라인", "힙 아래 라인 정리", "무릎 안정"],
      benefit: "엎드려서 발목 패드를 엉덩이 쪽으로 당겨 허벅지 뒤(햄스트링)를 쓰는 머신이에요. 허벅지 뒤가 탄탄해지면 힙 아래 라인이 정리돼요.",
      key_point: "골반은 패드에 꾹 누르고, 엉덩이 쪽으로 끝까지 당겼다 천천히 내리기!",
      good_points: [
        { title: "골반을 눌렀어요", desc: "엉덩이가 들리지 않게 골반을 패드에 붙이고 다리만 움직였어요." },
        { title: "끝까지 당겼어요", desc: "패드를 엉덩이 가까이까지 당겨 허벅지 뒤가 꽉 조였어요." },
        { title: "천천히 내렸어요", desc: "다리를 펼 때 무게가 툭 떨어지지 않게 버티며 15회씩 3세트를 해냈어요." }
      ],
      primary_muscles: [{ name: "햄스트링", where: "허벅지 뒤쪽" }],
      secondary_muscles: "종아리(비복근)",
      feel_good: "당길 때 허벅지 뒤가 뭉치듯 조이는 느낌",
      feel_stop: "허리가 뻐근하거나 종아리에 쥐가 나면 무게를 낮춰요",
      steps: [
        { title: "엎드려 자리 잡기", desc: "무릎이 패드 끝에 오게 엎드리고 발목 위에 패드를 걸어요. 손잡이를 잡고 골반은 패드에 붙여요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "엉덩이 쪽으로 당기기", desc: "허벅지 뒤 힘으로 패드를 엉덩이 쪽으로 끝까지 당겨요. 끝에서 1초 꽉.", chip: "당기며 후~", media: "step2.webp", loop: true },
        { title: "천천히 내리기", desc: "무게가 툭 떨어지지 않게 버티면서 다리를 천천히 펴요.", chip: "내리며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["골반은 패드에 붙인 채로", "끝까지 당기기", "내릴 때 천천히"],
      dont: ["엉덩이 들기", "반동으로 휙 차올리기", "무게 쾅 내려놓기"]
    },
    {
      id: "1121-smith-narrow-squat", record: [["빈 바", 15], [2.5, 15], [5, 15]], dir: "media/form-1121-smith-narrow-squat/", date: "2026. 11. 21",
      exercise: "스미스머신 내로우 스쿼트", exercise_en: "Smith Machine Narrow Squat", part: "엉덩이",
      targets: ["엉덩이 (힙 업)", "힙 아래 라인", "바른 스쿼트 자세"],
      benefit: "스미스머신 바를 등에 올리고 발을 좁게 모아 앉는 스쿼트예요. 오늘은 엉덩이를 뒤로 빼며 앉고 발뒤꿈치로 밀어 올라와서 엉덩이를 타겟으로 했어요.",
      key_point: "엉덩이를 뒤로 쭉 빼며 앉고, 발뒤꿈치로 밀며 엉덩이를 조여 일어나기!",
      good_points: [
        { title: "엉덩이를 뒤로 뺐어요", desc: "무릎보다 엉덩이가 먼저 뒤로 가면서 앉아 엉덩이에 힘이 실렸어요." },
        { title: "깊이 앉았어요", desc: "엉덩이가 충분히 늘어나는 곳까지 내려갔어요." },
        { title: "무게를 올렸어요", desc: "빈 바에서 2.5kg, 5kg까지 올리며 15회씩 해냈어요." }
      ],
      primary_muscles: [{ name: "대둔근", where: "엉덩이" }],
      secondary_muscles: "햄스트링 · 대퇴사두근 · 코어",
      feel_good: "일어날 때 엉덩이가 꽉 조이는 느낌",
      feel_stop: "허벅지 앞만 타거나 허리가 뻐근하면 엉덩이를 더 뒤로 빼고 깊이를 줄여요",
      steps: [
        { title: "준비 자세", desc: "바를 등 위(승모근)에 올리고 손으로 잡아요. 발은 좁게 모아 바보다 살짝 앞에 둬요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "엉덩이 뒤로 앉기", desc: "의자에 앉듯 엉덩이를 뒤로 빼면서 가슴을 편 채 천천히 앉아요.", chip: "앉으며 들이마시기", media: "step2.webp", loop: true },
        { title: "발뒤꿈치로 일어나기", desc: "발뒤꿈치로 바닥을 밀고 엉덩이를 조이며 곧게 일어나요.", chip: "일어나며 후~", media: "step3.webp", loop: true }
      ],
      do: ["엉덩이 먼저 뒤로", "무게는 발뒤꿈치에", "일어나며 엉덩이 조이기"],
      dont: ["무릎부터 앞으로 나가기", "발뒤꿈치 들기", "허리 둥글게 말기"]
    },
    {
      id: "1121-smith-step-up", record: [["빈 바", 15], ["빈 바", 15], ["빈 바", 15]], dir: "media/form-1121-smith-step-up/", date: "2026. 11. 21",
      exercise: "스미스머신 스텝업", exercise_en: "Smith Machine Step-up", part: "엉덩이",
      targets: ["엉덩이 (한쪽씩)", "허벅지 라인", "좌우 균형"],
      benefit: "스미스머신 바를 등에 올리고 스텝 박스에 한 발씩 올라서는 운동이에요. 올라서는 다리의 엉덩이와 허벅지를 쓰고, 바가 레일을 따라 움직여 균형 잡기가 쉬워요.",
      key_point: "박스 위 발 뒤꿈치로 밀어 올라서기! 뒷발로 튕기지 말고 앞다리 엉덩이 힘으로",
      good_points: [
        { title: "앞다리로 올라섰어요", desc: "박스 위 다리 힘으로 몸을 밀어 올려 엉덩이를 썼어요." },
        { title: "상체를 세웠어요", desc: "바를 등에 단단히 올리고 상체를 곧게 유지했어요." },
        { title: "3세트를 일정하게", desc: "빈 바로 15회씩 3세트를 같은 자세로 해냈어요." }
      ],
      primary_muscles: [{ name: "대둔근", where: "엉덩이" }],
      secondary_muscles: "대퇴사두근 · 햄스트링 · 중둔근",
      feel_good: "올라설 때 박스 위 다리 엉덩이가 조이는 느낌",
      feel_stop: "무릎이 아프거나 중심이 흔들리면 박스 높이를 낮춰요",
      steps: [
        { title: "준비 자세", desc: "바를 등 위에 올리고 한 발을 박스 위에 발바닥 전체로 올려요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "올라서기", desc: "박스 위 발 뒤꿈치로 밀어 몸을 올리고 엉덩이를 조여요.", chip: "올라서며 후~", media: "step2.webp", loop: true },
        { title: "천천히 내려오기", desc: "박스 위 다리로 버티면서 뒷발을 천천히 바닥에 내려요.", chip: "내려오며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["박스 위 발바닥 전체로", "앞다리 엉덩이로 밀기", "양쪽 같은 횟수"],
      dont: ["뒷발로 바닥 튕기기", "무릎 안으로 모이기", "쿵 내려오기"]
    }
  ]
};
