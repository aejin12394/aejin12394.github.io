/* 정현아 회원님 — 앱에서 만든 회원(이름·목표·시작일은 창고 profile) + Claude가 올린 자세 복습지.
   404.html·roster.js 가 window.MEMBER_EXTRA 를 창고 정보에 합침 (forms·notices 는 앞에 붙임). 최신이 위. */
window.MEMBER_EXTRA = {
  notices: [
    { date: "2026. 11. 23", title: "어깨·삼두 자세 복습지 4개가 올라왔어요", body: "11월 20일 PT 6회차 — 시티드 벤트 오버 레터럴 레이즈 · 리버스 펙덱 플라이 · 페이스풀 · 케이블 로프 푸쉬다운 영상으로 자세를 다시 확인해 보세요.", link: "#forms" },
    { date: "2026. 11. 23", title: "하체 자세 복습지 4개가 올라왔어요", body: "11월 18일 PT 5회차 하체 운동 — 레그 컬 · 스탠딩 힙 어브덕션 · 불가리안 스플릿 스쿼트 · 덤벨 스티프 데드리프트 영상으로 자세를 다시 확인해 보세요.", link: "#forms" }
  ],
  forms: [
    {
      id: "1120-seated-bent-over-lateral-raise", record: [[1, 15], [1, 15], [1, 15], [1, 15]], dir: "media/form-1120-seated-bent-over-lateral-raise/", date: "2026. 11. 20",
      exercise: "시티드 벤트 오버 레터럴 레이즈", exercise_en: "Seated Bent-over Lateral Raise", part: "어깨",
      targets: ["동그란 어깨 라인", "어깨 옆·뒤", "가벼운 무게로 정확하게"],
      benefit: "벤치에 앉아 몸을 고정하고 덤벨을 옆으로 들어 어깨 옆·뒤를 쓰는 운동이에요. 앉아서 하니까 반동 없이 어깨에만 집중할 수 있어요.",
      key_point: "어깨는 귀에서 멀리, 팔꿈치가 먼저 올라간다는 느낌으로 옆으로 멀리!",
      good_points: [
        { title: "앉아서 몸을 고정했어요", desc: "엉덩이를 벤치에 붙이고 상체를 고정해서 반동 없이 들었어요." },
        { title: "옆으로 멀리 들었어요", desc: "팔을 옆으로 멀리 뻗어 어깨 높이까지 들어 어깨에 자극이 갔어요." },
        { title: "4세트를 끝까지", desc: "1kg로 15회씩 4세트를 같은 자세로 해냈어요." }
      ],
      primary_muscles: [{ name: "측면 삼각근", where: "어깨 옆쪽" }],
      secondary_muscles: "후면 삼각근 · 상부 승모근",
      feel_good: "팔을 들 때 어깨 옆이 뜨겁게 차오르는 느낌",
      feel_stop: "목·승모근이 먼저 뻐근하거나 어깨 안쪽이 찝히면 멈춰요",
      steps: [
        { title: "앉은 준비 자세", desc: "벤치 끝에 앉아 덤벨을 몸 옆에 늘어뜨려요. 가슴은 펴고 어깨는 내려요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "옆으로 들기", desc: "팔꿈치를 살짝 굽힌 채 옆으로 멀리 어깨 높이까지 들어요.", chip: "들면서 후~", media: "step2.webp", loop: true },
        { title: "천천히 내리기", desc: "덤벨이 툭 떨어지지 않게 버티면서 천천히 내려요.", chip: "내리며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["엉덩이는 벤치에 붙인 채로", "어깨 높이까지만", "내릴 때 천천히"],
      dont: ["어깨 으쓱 올리기", "몸 흔들며 반동", "덤벨을 툭 떨어뜨리기"]
    },
    {
      id: "1120-reverse-pec-deck", record: [[10, 15], [10, 15], [10, 15], [10, 15]], dir: "media/form-1120-reverse-pec-deck/", date: "2026. 11. 20",
      exercise: "리버스 펙덱 플라이", exercise_en: "Reverse Pec Deck Fly", part: "어깨",
      targets: ["어깨 뒤쪽 라인", "굽은 어깨 펴기", "등 위쪽 탄탄하게"],
      benefit: "가슴 패드에 기대 앉아 팔을 옆으로 크게 벌려 어깨 뒤(후면 삼각근)와 날개뼈 사이를 쓰는 머신이에요. 굽은 어깨를 펴는 데 좋아요.",
      key_point: "팔꿈치를 살짝 굽힌 채 고정하고, 팔이 아니라 어깨 뒤로 크게 벌리기!",
      good_points: [
        { title: "곧게 앉아 시작했어요", desc: "가슴을 패드에 붙이고 상체가 흔들리지 않게 앉아서 어깨 뒤에만 힘이 들어갔어요." },
        { title: "팔을 크게 벌렸어요", desc: "손이 몸통 옆까지 오도록 크게 벌려 어깨 뒤를 끝까지 썼어요." },
        { title: "4세트를 일정하게", desc: "10kg로 15회씩 4세트를 같은 속도로 해냈어요." }
      ],
      primary_muscles: [{ name: "후면 삼각근", where: "어깨 뒤쪽" }],
      secondary_muscles: "능형근(날개뼈 사이) · 중부 승모근 · 극하근",
      feel_good: "벌렸을 때 어깨 뒤와 날개뼈 사이가 조이는 느낌",
      feel_stop: "어깨 앞이 찝히거나 목·승모근만 뻐근하면 무게를 낮춰요",
      steps: [
        { title: "자리 잡기", desc: "손잡이가 어깨 높이에 오게 의자를 맞추고 가슴을 패드에 붙여요. 팔을 앞으로 뻗어 잡고 팔꿈치는 살짝 굽혀 고정.", chip: "어깨는 내리기", media: "step1.jpg" },
        { title: "크게 벌리기", desc: "팔꿈치가 먼저 나간다는 느낌으로 몸통 옆까지 크게 벌려요. 끝에서 1초 꽉.", chip: "벌리면서 후~", media: "step2.webp", loop: true },
        { title: "천천히 모으기", desc: "어깨 뒤 힘을 유지한 채 천천히 앞으로 돌아와요.", chip: "모으며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["가슴은 패드에 붙인 채로", "팔꿈치 각도 그대로", "돌아올 때 천천히"],
      dont: ["어깨 으쓱 올리기", "팔꿈치를 굽혔다 폈다 하기", "반동으로 확 젖히기"]
    },
    {
      id: "1120-face-pull", record: [[6.8, 15], [4.5, 15], [4.5, 15], [4.5, 15]], dir: "media/form-1120-face-pull/", date: "2026. 11. 20",
      exercise: "페이스풀", exercise_en: "Face Pull", part: "어깨",
      targets: ["어깨 뒤쪽", "굽은 어깨 펴기", "바른 자세"],
      benefit: "케이블 로프를 얼굴 쪽으로 당겨 어깨 뒤(후면 삼각근)와 날개뼈 사이를 쓰는 운동이에요. 앞으로 말린 어깨를 펴는 데 좋아요.",
      key_point: "팔꿈치를 높게, 로프를 얼굴 쪽으로 당기며 양옆으로 벌리기!",
      good_points: [
        { title: "곧게 서서 버텼어요", desc: "상체를 곧게 세우고 버텨서 몸이 케이블에 끌려가지 않았어요." },
        { title: "얼굴 쪽으로 당겼어요", desc: "로프를 얼굴 앞까지 당겨서 어깨 뒤에 자극이 잘 갔어요." },
        { title: "무게를 맞춰 끝까지", desc: "6.8kg로 시작해 4.5kg로 낮춰서 자세를 지키며 4세트를 해냈어요." }
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
      id: "1120-rope-pushdown", record: [[4.5, 15], [4.5, 15], [6.8, 15], [6.8, 15]], dir: "media/form-1120-rope-pushdown/", date: "2026. 11. 20",
      exercise: "케이블 로프 푸쉬다운", exercise_en: "Cable Rope Pushdown", part: "팔",
      targets: ["팔 뒤쪽 탄탄하게", "팔뚝 라인 정리", "삼두 힘 기르기"],
      benefit: "케이블 로프를 아래로 밀어 팔 뒤쪽(삼두근)을 쓰는 운동이에요. 팔뚝 뒤가 탄탄해져서 팔 라인이 정리돼요.",
      key_point: "팔꿈치는 옆구리에 딱 고정, 팔꿈치 아래만 움직여서 끝까지 펴기!",
      good_points: [
        { title: "팔꿈치를 고정했어요", desc: "팔꿈치가 앞뒤로 흔들리지 않고 옆구리에 붙어 있었어요." },
        { title: "끝까지 폈어요", desc: "팔을 아래로 끝까지 펴서 팔 뒤가 꽉 조였어요." },
        { title: "무게를 올렸어요", desc: "4.5kg에서 6.8kg로 올려서도 15회를 끝까지 해냈어요." }
      ],
      primary_muscles: [{ name: "삼두근", where: "팔 뒤쪽" }],
      secondary_muscles: "따로 없음 — 팔 뒤 하나만 집중해요",
      feel_good: "다 폈을 때 팔 뒤쪽이 단단하게 조이는 느낌",
      feel_stop: "팔꿈치가 아프거나 손목이 꺾이면 무게를 낮춰요",
      steps: [
        { title: "준비 자세", desc: "케이블 앞에 서서 로프를 잡아요. 상체는 살짝 앞으로, 팔꿈치는 옆구리에 붙이고 손은 가슴 앞에.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "아래로 펴기", desc: "팔꿈치는 그대로 두고 팔을 아래로 끝까지 펴요. 끝에서 1초 꽉.", chip: "밀면서 후~", media: "step2.webp", loop: true },
        { title: "천천히 올리기", desc: "케이블에 끌려 올라가지 않게 버티면서 가슴 앞까지 천천히 올려요.", chip: "올리며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["팔꿈치는 옆구리에 고정", "끝까지 펴기", "올릴 때 천천히"],
      dont: ["팔꿈치가 앞뒤로 움직이기", "상체를 숙여 몸무게로 누르기", "손목 꺾기"]
    },
    {
      id: "1118-leg-curl", record: [[15, 15], [15, 15], [15, 15], [15, 15]], dir: "media/form-1118-leg-curl/", date: "2026. 11. 18",
      exercise: "레그 컬", exercise_en: "Lying Leg Curl", part: "하체",
      targets: ["허벅지 뒤 라인", "힙 아래 라인 정리", "무릎 안정"],
      benefit: "엎드려서 발목 패드를 엉덩이 쪽으로 당겨 허벅지 뒤(햄스트링)를 쓰는 머신이에요. 허벅지 뒤가 탄탄해지면 힙 아래 라인이 정리돼요.",
      key_point: "골반은 패드에 꾹 누르고, 엉덩이 쪽으로 끝까지 당겼다 천천히 내리기!",
      good_points: [
        { title: "골반을 눌렀어요", desc: "엉덩이가 들리지 않게 골반을 패드에 붙이고 다리만 움직였어요." },
        { title: "끝까지 당겼어요", desc: "패드를 엉덩이 가까이까지 당겨 허벅지 뒤가 꽉 조였어요." },
        { title: "4세트를 일정하게", desc: "15kg로 15회씩 4세트를 같은 속도로 해냈어요." }
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
      id: "1118-standing-hip-abduction", record: [[5, 15], [5, 15], [5, 15], [5, 15]], dir: "media/form-1118-standing-hip-abduction/", date: "2026. 11. 18",
      exercise: "스탠딩 힙 어브덕션", exercise_en: "Standing Hip Abduction", part: "엉덩이",
      targets: ["엉덩이 옆 (중둔근)", "힙 라인 위쪽", "골반 안정"],
      benefit: "머신에 몸을 기대고 서서 한쪽 다리를 옆으로 밀어 엉덩이 옆(중둔근)을 쓰는 운동이에요. 엉덩이 위쪽이 둥글게 차오르고 골반이 덜 흔들려요.",
      key_point: "상체는 머신에 기대 고정, 발이 아니라 엉덩이 옆으로 다리를 밀어내기!",
      good_points: [
        { title: "상체를 고정했어요", desc: "손잡이를 잡고 상체를 기대서 몸이 같이 기울지 않았어요." },
        { title: "엉덩이 옆으로 밀었어요", desc: "다리를 옆으로 밀 때 엉덩이 옆에 힘이 들어갔어요." },
        { title: "4세트를 끝까지", desc: "5kg로 15회씩 4세트를 같은 자세로 해냈어요." }
      ],
      primary_muscles: [{ name: "중둔근", where: "엉덩이 옆쪽" }],
      secondary_muscles: "대둔근 위쪽 · 대퇴근막장근",
      feel_good: "밀어낼 때 엉덩이 옆 위쪽이 뜨거워지는 느낌",
      feel_stop: "허리가 옆으로 꺾이거나 허벅지 바깥만 당기면 범위를 줄여요",
      steps: [
        { title: "자리 잡기", desc: "패드를 움직일 다리 바깥쪽에 대고 서서 손잡이를 잡고 상체를 기대요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "옆으로 밀기", desc: "엉덩이 옆 힘으로 다리를 옆으로 밀어내요. 끝에서 1초 꽉.", chip: "밀며 후~", media: "step2.webp", loop: true },
        { title: "천천히 돌아오기", desc: "패드에 끌려가지 않게 버티면서 천천히 돌아와요.", chip: "돌아오며 들이마시기", media: "step3.webp", loop: true }
      ],
      do: ["상체는 머신에 고정", "발끝은 앞을 보게", "양쪽 같은 횟수"],
      dont: ["몸을 옆으로 기울이기", "반동으로 휙 차기", "허리 꺾기"]
    },
    {
      id: "1118-bulgarian-split-squat", record: [[null, 10], [null, 10], [null, 10], [null, 10]], dir: "media/form-1118-bulgarian-split-squat/", date: "2026. 11. 18",
      exercise: "불가리안 스플릿 스쿼트", exercise_en: "Bulgarian Split Squat", part: "엉덩이",
      targets: ["엉덩이 (한쪽씩)", "애플힙 라인", "좌우 균형"],
      benefit: "뒷발을 벤치에 올리고 한 다리로 앉았다 일어나는 운동이에요. 상체를 살짝 앞으로 숙여서 엉덩이를 타겟으로 했어요.",
      key_point: "상체는 살짝 앞으로, 무게는 앞발 뒤꿈치에! 앞다리 엉덩이로 밀어 올라오기",
      good_points: [
        { title: "엉덩이 타겟 자세", desc: "상체를 앞으로 숙여 엉덩이가 늘어나는 자세를 잘 잡았어요." },
        { title: "깊이 내려갔어요", desc: "뒷무릎이 바닥 쪽으로 충분히 내려가 엉덩이가 늘어났어요." },
        { title: "균형을 잡았어요", desc: "손을 가슴 앞에 모으고 10회씩 4세트를 해냈어요." }
      ],
      primary_muscles: [{ name: "대둔근", where: "엉덩이" }],
      secondary_muscles: "중둔근 · 햄스트링 · 대퇴사두근 · 내전근",
      feel_good: "앞다리 쪽 엉덩이가 쭉 늘어났다가 조여지는 느낌",
      feel_stop: "앞무릎이 아프거나 뒷다리 허벅지 앞만 당기면 앞발 위치를 조정해요",
      steps: [
        { title: "자리 잡기", desc: "뒷발 등을 벤치에 올리고 앞발은 한 걸음 크게 앞으로. 손은 가슴 앞에 모아요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "앞으로 숙이며 내려가기", desc: "상체를 살짝 앞으로 숙인 채 뒷무릎이 바닥 가까이 갈 때까지 내려가요.", chip: "내려가며 들이마시기", media: "step2.webp", loop: true },
        { title: "엉덩이로 밀어 올라오기", desc: "앞발 뒤꿈치로 바닥을 밀고 엉덩이를 조이며 올라와요.", chip: "올라오며 후~", media: "step3.webp", loop: true }
      ],
      do: ["무게는 앞발 뒤꿈치에", "앞무릎은 발끝 방향", "한쪽 끝나면 반대쪽도 같은 횟수"],
      dont: ["앞무릎이 안으로 모이기", "뒷다리로 밀어 올라오기", "골반 비틀기"]
    },
    {
      id: "1118-db-stiff-deadlift", record: [[4, 15], [6, 12], [6, 12]], dir: "media/form-1118-db-stiff-deadlift/", date: "2026. 11. 18",
      exercise: "덤벨 스티프 데드리프트", exercise_en: "Dumbbell Stiff-leg Deadlift", part: "하체",
      targets: ["허벅지 뒤 라인", "힙 업", "엉덩이 접기 연습"],
      benefit: "무릎을 거의 편 채로 엉덩이를 뒤로 빼며 덤벨을 내려 허벅지 뒤와 엉덩이를 늘렸다 조이는 운동이에요. 힙 아래 라인과 허벅지 뒤가 같이 정리돼요.",
      key_point: "허리는 곧게, 엉덩이를 뒤로 쭉 빼며 내려가고 엉덩이를 조이며 올라오기!",
      good_points: [
        { title: "엉덩이를 뒤로 뺐어요", desc: "허리를 숙이는 대신 엉덩이를 뒤로 빼며 내려가 허벅지 뒤가 늘어났어요." },
        { title: "덤벨을 다리 가까이", desc: "덤벨이 다리를 타고 내려가서 허리에 부담이 덜 갔어요." },
        { title: "무게를 올렸어요", desc: "4kg에서 6kg로 올려 12회씩 2세트를 해냈어요." }
      ],
      primary_muscles: [{ name: "햄스트링", where: "허벅지 뒤쪽" }, { name: "대둔근", where: "엉덩이" }],
      secondary_muscles: "척추기립근 · 내전근 · 악력",
      feel_good: "내려갈 때 허벅지 뒤가 쭉 늘어나고 올라올 때 엉덩이가 조이는 느낌",
      feel_stop: "허리가 뻐근하거나 등이 둥글게 말리면 내려가는 깊이를 줄여요",
      steps: [
        { title: "준비 자세", desc: "발은 골반 너비, 덤벨을 허벅지 앞에 들고 곧게 서요. 무릎은 살짝만 굽혀요.", chip: "배에 힘 주기", media: "step1.jpg" },
        { title: "엉덩이 뒤로 내려가기", desc: "허리를 곧게 편 채 엉덩이를 뒤로 빼며 덤벨을 다리 따라 정강이 쪽까지 내려요.", chip: "내려가며 들이마시기", media: "step2.webp", loop: true },
        { title: "엉덩이 조이며 올라오기", desc: "발바닥으로 바닥을 밀고 엉덩이를 앞으로 밀며 곧게 일어나요.", chip: "올라오며 후~", media: "step3.webp", loop: true }
      ],
      do: ["허리는 끝까지 곧게", "덤벨은 다리 가까이", "올라올 때 엉덩이 조이기"],
      dont: ["등 둥글게 말기", "무릎 많이 굽혀 스쿼트처럼", "올라와서 허리 뒤로 젖히기"]
    }
  ]
};
