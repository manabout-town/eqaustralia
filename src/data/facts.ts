// 페이지의 모든 수치·사실은 여기 한 곳에서만. 출처 없는 값은 넣지 않는다.
// claim: true = 업체 자체 주장(제3자 검증 없음) → 화면에서 인용으로만.
export type Fact<T> = { value: T; source: string; url?: string; asOf: string; claim?: boolean };

const ABR = 'https://abr.business.gov.au/ABN/View?abn=14606553333';
const ABRH = 'https://abr.business.gov.au/AbnHistory/View?id=14606553333';
const POLICY = 'https://www.education.wa.edu.au/dl/kkzq2ed';
const BP = 'https://beyondperth.com.au/services/';

export const facts = {
  entity: { value: 'Madang Group Pty Ltd', source: 'ABN Lookup', url: ABR, asOf: '2026-11-01' },
  abn: { value: '14 606 553 333', source: 'ABN Lookup', url: ABR, asOf: '2026-11-01' },
  acn: { value: '606 553 333', source: 'ABN Lookup', url: ABR, asOf: '2026-11-01' },
  abnSince: { value: 2015, source: 'ABN Lookup (ABN active from 2015-06-19)', url: ABRH, asOf: '2026-11-01' },
  wowhoju: { value: 'WoW Hoju', source: 'ABN Lookup — business name registered 2022-06-07', url: ABRH, asOf: '2026-11-01' },
  beyondperth: { value: 'Beyond Perth', source: 'ABN Lookup — business name registered 2025-07-11', url: ABRH, asOf: '2026-11-01' },
  phone: { value: '+61 416 471 983', source: 'wowhoju.com.au · beyondperth.com.au contact', url: 'https://beyondperth.com.au/', asOf: '2026-11-01' },
  email: { value: 'info@wowhoju.com.au', source: 'wowhoju.com.au contact', url: 'https://wowhoju.com.au/about-us/', asOf: '2026-11-01' },
  hiace: { value: 12, source: 'Beyond Perth services — 12-seater Toyota HiAce', url: BP, asOf: '2026-11-01' },
  coaster: { value: 19, source: 'Beyond Perth services — 19-seater Toyota Coaster', url: BP, asOf: '2026-11-01' },
  policy: { value: 'Short-Term School Visits/Study Tours by Overseas Students in Public Schools', source: 'WA Department of Education policy (v1.2, 2018-08-22)', url: POLICY, asOf: '2018-08-22' },
  liability: { value: 'A$10m–20m', source: 'WA Department of Education policy (v1.2)', url: POLICY, asOf: '2018-08-22' },
  programLength: { value: 'half a day to 4 weeks', source: 'WA Department of Education policy (v1.2)', url: POLICY, asOf: '2018-08-22' },
  wwc: { value: 'Working With Children Check', source: 'WA Department of Communities', url: 'https://www.wa.gov.au/organisation/department-of-communities/working-children-check', asOf: '2026-11-01' },
  ptd: { value: 'PTD driver & PTV vehicle authorisation', source: 'WA Department of Transport', url: 'https://www.transport.wa.gov.au/On-demandTransport/ptd-faqs.asp', asOf: '2026-11-01' },
  uwa: { value: 'UWA CELT Study Tours', source: 'The University of Western Australia', url: 'https://www.uwa.edu.au/celt/programs/study-tours', asOf: '2026-11-01' },
  curtin: { value: 'Curtin customised study tours', source: 'Curtin University', url: 'https://www.curtin.edu.au/engage/global-engagement/customised-study-tours-programs-and-short-courses/', asOf: '2026-11-01' },
  sunshine: { value: 3200, source: 'Wikipedia — Perth (about 3,200 hours of sunshine a year)', url: 'https://en.wikipedia.org/wiki/Perth', asOf: '2026-11-01' },
  tz: { value: 'UTC+8', source: 'Wikipedia — Perth (AWST, no daylight saving)', url: 'https://en.wikipedia.org/wiki/Perth', asOf: '2026-11-01' },
} satisfies Record<string, Fact<unknown>>;
