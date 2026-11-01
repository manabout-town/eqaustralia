// 디자인 방향은 전부 리서치에서 나온다. 결정마다 근거(basis)와 그 근거를 본 곳(from).
// from = 리서치 결과 파일(research/…json) · URL · 유저가 직접 지정했으면 'user:<날짜> 지시'.
export type Pick = { value: string; basis: string; from: string };
export type Axis = { score: number; basis: string; from: string };
export const AXES = ['온도', '결', '속도', '시대', '시각'] as const;

export const direction: {
  purpose: 'brand' | 'franchise' | 'market' | 'card' | 'menu';
  calm: Pick;
  vibe: Record<(typeof AXES)[number], Axis>;
  style: Pick;
  heroEffect: Pick;
  palette: { dark: Pick; light: Pick; brand: Pick; point: Pick };
  display: Pick;
  quote?: Pick;
  logo: Pick;
  introVideo: Pick;
  bgVideos: Pick[];
  props: Pick[];
} = {
  purpose: 'brand',
  calm: { value: '정적 업종 모드(calm-static.md)', basis: '학교·정부기관이 고객인 보수 업종(대표 "굉장히 보수적인 경향") + 도메인만 산 신규 업체(자료 없음)', from: 'user:2026-11-01 Uni Q 카톡' },
  vibe: {
    온도: { score: 3, basis: '연 3,200시간 일조의 퍼스(밝음) ↔ 교육부 정책·보험 같은 공적 절차(차분)', from: 'research/market.json' },
    결: { score: 1, basis: 'WA 정부·관광청 서체가 전부 기하학 산세리프, globalen 은 법인 신원·절차 서술로 신뢰', from: 'research/refs.json' },
    속도: { score: 1, basis: '고객이 학교·정부기관, 교육부 정책 요구(보험·WWC·상시 감독) — 서두르지 않는 인상', from: 'research/market.json' },
    시대: { score: 2, basis: 'UWA 사암 로마네스크 건물(전통) + 엘리자베스 퀴 CBD(현대)', from: 'research/design.json' },
    시각: { score: 2, basis: '스터디투어는 낮 일정(학교 방문·캠퍼스) — 마지막 문의만 퍼스 야경', from: 'research/design.json' },
  },
  style: { value: '미니멀리즘', basis: '보수 업종·원문이 적은 신규 업체 — calm-static 규칙 "원문이 적을 때 미니멀리즘", 결 1·속도 1', from: 'research/refs.json' },
  heroEffect: { value: '흩어진 일정 낱말(공항·학교·캠퍼스·차량·숙소·통역)이 자간이 좁혀지며 한 줄로 정리됨', basis: 'DMC 행위 칸 「기획하고 운영한다」(대표 설명: 학교 방문부터 차량·숙소·통역·체험·일정 운영) — 흩어진 것을 정리하는 동작을 글자 자간·굵기로 번역', from: 'user:2026-11-01 Uni Q 카톡' },
  palette: {
    dark: { value: '#1c2230', basis: '스완강 CBD 앞 물빛 #59657d 를 밤 톤으로 내림(본문 대비 확보)', from: 'research/design.json' },
    light: { value: '#f3f1ec', basis: 'UWA 윈스롭홀 사암 #a89c8e 를 바탕용으로 밝힘(순백 금지 범위 #F2~F7)', from: 'research/design.json' },
    brand: { value: '#20118a', basis: '같은 법인(Madang Group) 자매 사업 Beyond Perth 로고 인디고 실측', from: 'research/design.json' },
    point: { value: '#23adbc', basis: '로트네스트 바다 수면 실측 — 퍼스 고유 실물색', from: 'research/design.json' },
  },
  display: { value: 'Outfit', basis: 'Tourism WA(tourism.wa.gov.au) 사용 서체 + 가변 굵기 100~900(글꼴 효과 가능) — Poppins는 가변 아님으로 탈락', from: 'research/design.json' },
  logo: { value: 'EQ Australia 워드마크 조판(Outfit 600)', basis: '업체 로고 없음(도메인만 구매) — 새 심볼을 지어내지 않고 상호만 조판', from: 'research/facts.json' },
  introVideo: { value: '/video/v_plane.mp4', basis: '스터디투어의 첫 장면 = 퍼스 공항 도착. 퍼스 지정 영상이 없어 Mixkit 비행기 착륙(무료·상업 가능)', from: 'https://mixkit.co/free-stock-video/airplane-landing-in-a-clear-day-6796/' },
  bgVideos: [
    { value: '대학 캠퍼스를 걷는 학생들(고객)', basis: '고객 칸 — 대학·학교 방문(UWA·Curtin·ECU 스터디투어 운영)', from: 'https://mixkit.co/free-stock-video/students-walking-on-a-university-campus-4503/' },
    { value: '교실 수업(프로그램)', basis: '스터디투어 = 수업·교류 프로그램', from: 'https://mixkit.co/free-stock-video/group-of-college-students-working-together-in-a-classroom-48166/' },
  ],
  props: [],
};
