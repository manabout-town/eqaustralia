// 화면 문구 — 영어(기본)·한국어 두 벌, 모양이 같아야 한다(content.test.ts).
// 신규 업체라 브랜드 원문이 없다: 서비스 범위는 대표 설명(user:2026-11-01 Uni Q 카톡), 규정·수치는 facts.ts 출처로만.
// 실적 숫자·고객 로고·"공식 파트너"·인증 단정은 쓰지 않는다(research/facts.json do_not_use).
export type L = string[][]; // 줄 > 구절(구절은 안 쪼개짐)

const en = {
  nav: [['Home', '#/'], ['About Us', '#/about'], ['Study Tours', '#/study-tours'], ['Our Services', '#/services'], ['Contact', '#/contact']] as [string, string][],
  langLabel: '한국어',
  enquire: 'Enquire',
  intro: [['Your students', 'land in Perth.'], ['From day one,', 'we run it.']] as [string[], string[]],
  hero: {
    h: [['Bringing a', 'student group', 'to Perth?']] as L,
    words: ['Airport', 'School visit', 'Campus', 'Coach', 'Stay', 'Interpreter'],
    answer: [['We plan it with you,', 'then run it'], ['on the ground', 'in Western Australia.']] as L,
    hint: 'Scroll',
  },
  what: {
    h: [['What a DMC', 'does for you']] as L,
    lead: 'A destination management company is your team on the ground. You set the goals and the budget. We arrange every part of the stay in Perth and run it day by day.',
    steps: [
      { k: 'Plan', d: 'Itinerary, budget and school requests, shaped around your learning goals.' },
      { k: 'Arrange', d: 'Vehicles, accommodation, interpreters, venues and activities, booked in one place.' },
      { k: 'Run', d: 'On-site coordination from the arrival gate to the departure gate.' },
    ],
  },
  who: {
    h: [['Who we', 'work with']] as L,
    lead: 'Groups that need a local partner they can hand the whole programme to.',
    list: ['Overseas schools and education offices', 'Travel agencies and tour operators', 'Universities and language academies', 'Corporate and government delegations'],
  },
  flow: {
    h: [['How a study tour', 'comes together']] as L,
    steps: [
      { k: 'Goals and dates', d: 'Tell us the group size, ages, dates and what the students should take home.' },
      { k: 'Proposal', d: 'A day-by-day draft with costs, ready for your school or client to review.' },
      { k: 'Bookings and approvals', d: 'School requests, insurance papers, vehicles and accommodation confirmed.' },
      { k: 'Arrival', d: 'Met at Perth Airport and taken straight to the first stop.' },
      { k: 'Every day on the ground', d: 'One coordinator follows the group and adjusts the day when plans change.' },
      { k: 'Departure', d: 'Back to the airport, with a short wrap-up for the organiser.' },
    ],
  },
  programs: {
    h: [['Study tours,', 'built for your group']] as L,
    lead: 'Sample programmes. Every itinerary is drafted from your goals, not picked from a catalogue.',
    list: [
      { k: 'School visit week', len: '3–5 days', d: 'Buddy classes and lessons at a Perth school, with excursions arranged around the school day.' },
      { k: 'Campus and careers', len: '1–3 days', d: 'University campus visits and short courses through the universities’ own study-tour teams.' },
      { k: 'English and culture', len: '1–2 weeks', d: 'Morning English sessions, afternoon activities across Perth and Fremantle.' },
      { k: 'Nature and science', len: '1–3 days', d: 'Field days to the Pinnacles, Rottnest Island and Kings Park bushland.' },
    ],
    note: 'Public schools in WA host visits from half a day up to four weeks, with the principal’s approval.',
  },
  services: {
    h: [['One partner', 'for the whole stay']] as L,
    list: [
      { k: 'School visits', d: 'We prepare the request and paperwork. The principal of each school makes the decision.' },
      { k: 'Transport', d: 'Airport transfers and daily transport for small groups through Beyond Perth, our own charter transport business.' },
      { k: 'Accommodation', d: 'Hotels and group stays matched to the students’ ages and your budget.' },
      { k: 'Interpreting', d: 'Korean–English interpreting during visits, meetings and activities.' },
      { k: 'Activities', d: 'Excursions, cultural experiences and field days around Perth and regional WA.' },
      { k: 'Daily operation', d: 'A coordinator on the ground, every day of the programme.' },
    ],
  },
  safety: {
    h: [['What schools ask for,', 'worked through with you']] as L,
    lead: 'The WA Department of Education sets these conditions for overseas study tours visiting public schools. We work through each one with you before the group flies.',
    list: [
      'Approval from the principal of each host school',
      'Comprehensive travel insurance for every student',
      'Public liability cover of A$10m–20m per claim',
      'Working With Children Checks for people in child-related work',
      'Group supervisors with the students at all times',
      'An organisation profile: structure, ownership and key contacts',
    ],
    after: 'Drivers carrying passengers for payment in WA need PTD authorisation, and vehicles need PTV authorisation.',
  },
  group: {
    h: [['A Perth company', 'you can look up']] as L,
    lead: 'EQ Australia is run by Madang Group Pty Ltd, the Perth company behind WoW Hoju and Beyond Perth. Its registered business names include EduQuest Australia, WoW Hoju and Beyond Perth.',
    rows: [
      { k: 'WoW Hoju', d: 'Tours of Western Australia for Korean-speaking travellers.', url: 'https://wowhoju.com.au/' },
      { k: 'Beyond Perth', d: 'Charter transport — a 12-seat Toyota HiAce and a 19-seat Toyota Coaster.', url: 'https://beyondperth.com.au/' },
    ],
    idLabel: 'ABN',
    acnLabel: 'ACN',
    lookup: 'Check Madang Group on ABN Lookup',
    cap: 'The Beyond Perth Toyota Coaster. Photo: Beyond Perth.',
  },
  perth: {
    h: [['Why Perth', 'works for a study tour']] as L,
    unit: 'hours of sunshine a year',
    words: 'Five universities, a river city and the Indian Ocean in one metro area. Perth runs on UTC+8, one hour behind Seoul and the same as Singapore.',
  },
  faq: {
    h: [['Questions organisers', 'ask first']] as L,
    list: [
      { q: 'What group sizes can you take?', a: 'Our transport business, Beyond Perth, runs a 12-seat and a 19-seat vehicle. For larger groups, tell us the numbers and we will plan the transport with you.' },
      { q: 'Can you arrange visits to local schools?', a: 'Yes, we prepare the request and the paperwork. In WA public schools, the principal of each school decides whether to host a visit.' },
      { q: 'What insurance does a school visit need?', a: 'The WA Department of Education asks for comprehensive travel insurance for every student and public liability cover of A$10m–20m per claim.' },
      { q: 'Do you provide interpreters?', a: 'Korean–English interpreting is available. For other languages, ask us when you enquire.' },
      { q: 'How long can a programme be?', a: 'School visits in WA run from half a day up to four weeks. Tours without a school visit can be any length.' },
    ],
    src: 'Source',
  },
  contact: {
    h: [['Tell us about', 'your group']] as L,
    lead: 'Send the basics and we will reply with a first draft of the programme.',
    f: { org: 'Organisation', name: 'Your name', email: 'Email', country: 'Country', size: 'Group size', ages: 'Student ages', dates: 'Preferred dates', msg: 'What should the group get out of the trip?', send: 'Open email to send' },
    or: 'Or call',
    hours: 'Perth time (UTC+8)',
    note: 'The form opens your email app. Nothing is sent from this page.',
  },
  footer: {
    draft: 'This is an unofficial proposal draft made by H&H Studio. It is not the live EQ Australia website yet.',
    sources: 'Rules and figures are quoted from the WA Department of Education, WA Department of Transport, WA Department of Communities, ABN Lookup, university pages and Wikipedia, as linked on each section (checked 1 Nov 2026).',
    photos: 'Photos: Wikimedia Commons (CC BY / CC BY-SA / CC0 — authors listed below) and Beyond Perth. Videos: Mixkit free licence. Fonts: Outfit and Pretendard (SIL OFL).',
  },
  pages: {
    about: [['About', 'EQ Australia']] as L,
    tours: [['Study tours', 'in Perth']] as L,
    services: [['Our services']] as L,
    contact: [['Contact']] as L,
  },
};

const ko: typeof en = {
  nav: [['홈', '#/'], ['회사 소개', '#/about'], ['스터디투어', '#/study-tours'], ['서비스', '#/services'], ['문의', '#/contact']],
  langLabel: 'English',
  enquire: '문의하기',
  intro: [['학생들이', '퍼스에 내리면'], ['그날부터', '저희가 운영합니다']],
  hero: {
    h: [['학생 단체를', '퍼스로 보내려는데,'], ['현지는 누가', '챙겨 주나요?']],
    words: ['공항', '학교 방문', '캠퍼스', '차량', '숙소', '통역'],
    answer: [['함께 계획하고,', '서호주 현지에서'], ['매일 직접', '운영합니다.']],
    hint: '내려 보세요',
  },
  what: {
    h: [['DMC는', '무슨 일을 하나요?']],
    lead: 'DMC(현지 운영사)는 현지에 있는 여러분의 팀입니다. 목표와 예산은 여러분이 정하세요. 퍼스 체류의 모든 부분은 저희가 준비하고 하루하루 운영합니다.',
    steps: [
      { k: '계획', d: '배움 목표에 맞춰 일정·예산·학교 방문 요청을 짭니다.' },
      { k: '준비', d: '차량·숙소·통역·장소·체험을 한곳에서 예약합니다.' },
      { k: '운영', d: '도착 게이트부터 출국 게이트까지 현장에서 챙깁니다.' },
    ],
  },
  who: {
    h: [['이런 곳과', '함께합니다']],
    lead: '프로그램 전체를 믿고 맡길 현지 파트너가 필요한 단체입니다.',
    list: ['해외 학교·교육청', '여행사·단체여행 기획사', '대학·어학원', '기업·정부 방문단'],
  },
  flow: {
    h: [['스터디투어는', '이렇게 준비됩니다']],
    steps: [
      { k: '목표와 날짜', d: '인원·나이·날짜, 그리고 학생들이 무엇을 얻어 가야 하는지 알려 주세요.' },
      { k: '제안서', d: '비용이 들어간 하루 단위 초안을 학교나 고객사가 검토할 수 있게 드립니다.' },
      { k: '예약과 승인', d: '학교 방문 요청·보험 서류·차량·숙소를 확정합니다.' },
      { k: '도착', d: '퍼스 공항에서 맞이해 첫 일정으로 바로 이동합니다.' },
      { k: '현지에서 매일', d: '담당 코디네이터가 단체와 함께 다니며 계획이 바뀌면 그날 바로 조정합니다.' },
      { k: '출국', d: '공항까지 모셔다드리고, 담당자께 짧은 마무리 보고를 드립니다.' },
    ],
  },
  programs: {
    h: [['스터디투어,', '단체에 맞춰 짭니다']],
    lead: '아래는 예시 프로그램입니다. 일정은 목록에서 고르지 않고 여러분의 목표에서 출발해 짭니다.',
    list: [
      { k: '학교 방문 주간', len: '3–5일', d: '퍼스 학교에서 버디 수업·수업 참관, 학교 시간에 맞춘 견학.' },
      { k: '캠퍼스와 진로', len: '1–3일', d: '대학 캠퍼스 방문과 단기 과정 — 각 대학 스터디투어 팀을 통해.' },
      { k: '영어와 문화', len: '1–2주', d: '오전 영어 수업, 오후 퍼스·프리맨틀 체험.' },
      { k: '자연과 과학', len: '1–3일', d: '피너클스·로트네스트섬·킹스파크 숲 현장 학습.' },
    ],
    note: '서호주 공립학교는 교장 승인 아래 반나절부터 최대 4주까지 방문을 받습니다.',
  },
  services: {
    h: [['체류 전체를', '한 곳에서']],
    list: [
      { k: '학교 방문', d: '요청서와 서류는 저희가 준비하고, 방문 여부는 각 학교 교장이 결정합니다.' },
      { k: '차량', d: '같은 회사의 전세 차량 사업 Beyond Perth로 공항 이동과 소규모 단체 일일 이동을 맡습니다.' },
      { k: '숙소', d: '학생 나이와 예산에 맞는 호텔·단체 숙소를 잡습니다.' },
      { k: '통역', d: '방문·회의·체험 중 한국어–영어 통역.' },
      { k: '체험', d: '퍼스와 서호주 지방의 견학·문화 체험·현장 학습.' },
      { k: '현지 운영', d: '프로그램 기간 내내 현장 코디네이터가 함께합니다.' },
    ],
  },
  safety: {
    h: [['학교가 요구하는 것,', '하나씩 함께 챙깁니다']],
    lead: '서호주 교육부는 공립학교를 방문하는 해외 스터디투어에 아래 조건을 둡니다. 단체가 출발하기 전에 하나씩 함께 챙깁니다.',
    list: [
      '방문 학교마다 교장 승인',
      '학생 전원 종합 여행자보험',
      '1청구당 A$10m–20m 공공배상책임보험',
      '아동 관련 업무자의 Working With Children Check',
      '인솔 감독자가 학생과 항상 함께',
      '기관 프로필: 법인 구조·소유·핵심 담당자',
    ],
    after: '서호주에서 돈을 받고 승객을 태우는 기사는 PTD 인증, 차량은 PTV 인증이 필요합니다.',
  },
  group: {
    h: [['직접 조회해 볼 수 있는', '퍼스 회사']],
    lead: 'EQ Australia는 WoW Hoju와 Beyond Perth를 운영하는 퍼스 회사 Madang Group Pty Ltd가 운영합니다. 이 회사의 등록 상호에는 EduQuest Australia, WoW Hoju, Beyond Perth가 있습니다.',
    rows: [
      { k: 'WoW Hoju', d: '한국어 여행객을 위한 서호주 투어.', url: 'https://wowhoju.com.au/' },
      { k: 'Beyond Perth', d: '전세 차량 — 12인승 토요타 하이에이스, 19인승 토요타 코스터.', url: 'https://beyondperth.com.au/' },
    ],
    idLabel: 'ABN',
    acnLabel: 'ACN',
    lookup: 'ABN Lookup에서 Madang Group 확인',
    cap: 'Beyond Perth 토요타 코스터. 사진: Beyond Perth.',
  },
  perth: {
    h: [['스터디투어에', '퍼스가 맞는 이유']],
    unit: '시간, 한 해 일조',
    words: '대학 다섯 곳, 강을 낀 도시, 인도양이 한 도시권 안에 있습니다. 퍼스는 UTC+8로 서울보다 1시간 늦고 싱가포르와 같습니다.',
  },
  faq: {
    h: [['담당자들이', '먼저 묻는 것']],
    list: [
      { q: '몇 명까지 가능한가요?', a: '같은 회사의 차량 사업 Beyond Perth가 12인승·19인승 차량을 운영합니다. 더 큰 단체는 인원을 알려 주시면 이동 계획을 함께 짭니다.' },
      { q: '현지 학교 방문도 잡아 주나요?', a: '네, 요청서와 서류를 준비합니다. 서호주 공립학교는 각 학교 교장이 방문 수락 여부를 결정합니다.' },
      { q: '학교 방문에 어떤 보험이 필요한가요?', a: '서호주 교육부는 학생 전원 종합 여행자보험과 1청구당 A$10m–20m 공공배상책임보험을 요구합니다.' },
      { q: '통역도 되나요?', a: '한국어–영어 통역이 가능합니다. 다른 언어는 문의 때 말씀해 주세요.' },
      { q: '프로그램은 얼마나 길게 할 수 있나요?', a: '서호주 학교 방문은 반나절부터 최대 4주입니다. 학교 방문이 없는 투어는 기간 제한이 없습니다.' },
    ],
    src: '출처',
  },
  contact: {
    h: [['단체에 대해', '알려 주세요']],
    lead: '기본 정보를 보내 주시면 프로그램 첫 초안으로 답장드립니다.',
    f: { org: '기관명', name: '담당자 이름', email: '이메일', country: '국가', size: '인원', ages: '학생 나이', dates: '희망 날짜', msg: '이번 방문으로 학생들이 무엇을 얻어 가면 좋을까요?', send: '이메일로 보내기' },
    or: '전화',
    hours: '퍼스 시간(UTC+8)',
    note: '양식은 메일 앱을 엽니다. 이 페이지에서 바로 전송되지 않습니다.',
  },
  footer: {
    draft: '이 페이지는 H&H 스튜디오가 만든 비공식 제안 시안이며, 아직 EQ Australia 공식 사이트가 아닙니다.',
    sources: '규정·수치는 서호주 교육부·교통부·지역사회부, ABN Lookup, 각 대학 페이지, 위키백과에서 옮겼고 섹션마다 출처를 달았습니다(2026년 11월 1일 확인).',
    photos: '사진: 위키미디어 공용(CC BY / CC BY-SA / CC0, 저작자 아래 표기)·Beyond Perth. 영상: Mixkit 무료 라이선스. 글꼴: Outfit·Pretendard(SIL OFL).',
  },
  pages: {
    about: [['EQ Australia', '소개']],
    tours: [['퍼스', '스터디투어']],
    services: [['서비스']],
    contact: [['문의']],
  },
};

export const content = { en, ko };
export type Lang = keyof typeof content;
export type Content = typeof en;

// 사진 저작자 표기(CC BY·BY-SA) — research/design.json photos
export const credits = [
  'Perth Airport runway — Calistemon, CC BY-SA 4.0',
  'Elizabeth Quay — Dietmar Rabich, CC BY-SA 4.0',
  'Perth skyline from the Swan River — JamesBromberger, CC BY 4.0',
  'Curtin University — Orderinchaos, CC BY-SA 4.0',
  'Beaconsfield PS classroom — Jim Owens, CC BY 3.0',
  'Pinnacles Desert — Dhx1, CC0',
  'Kings Park — Dcoetzee, public domain',
  'Perth CBD from the Queen St Jetty — Tim Sneddon, CC BY-SA 2.0',
  'UWA Whitfield Court — Orderinchaos, CC BY-SA 4.0',
];

// 줄이 갈리면 어색한 구절
const GLUE = ['A$10m–20m', 'UTC+8', 'Toyota HiAce', 'Toyota Coaster', 'Beyond Perth', 'WoW Hoju', 'EQ Australia', 'Madang Group Pty Ltd', 'EduQuest Australia', 'Perth Airport', 'Rottnest Island', 'Kings Park', '12인승', '19인승', '4주', '1시간', '3–5일', '1–3일', '1–2주', '3–5 days', '1–3 days', '1–2 weeks'];
export const keep = (t: string) => GLUE.reduce((s, g) => s.split(g).join(g.replace(/ /g, ' ')), t).replace(/·/g, '⁠·⁠');
