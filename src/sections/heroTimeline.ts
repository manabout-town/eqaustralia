// 히어로: 스크롤 진행도 p(0~1) → 화면. 순수 함수.
// 대표 효과 = 흩어진 일정 낱말이 자간이 좁혀지며 한 줄로 정리됨(행위 「기획하고 운영한다」).
export const seg = (t: number, a: number, b: number) => (t <= a ? 0 : t >= b ? 1 : (t - a) / (b - a));
export const easeInOut = (x: number) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2);

export type Stage = {
  order: number; // 0 = 흩어짐, 1 = 한 줄로 정리
  track: number; // 낱말 자간 em (0.42 → 0)
  weight: number; // 낱말 굵기 (200 → 600)
  answer: number; // 답 문장 보임
  hint: number; // 「내려 보세요」
};

export function heroStage(raw: number): Stage {
  const p = Math.min(1, Math.max(0, raw));
  const d = easeInOut(seg(p, 0.05, 0.6));
  return {
    order: d,
    track: Math.round((0.42 - 0.42 * d) * 1000) / 1000,
    weight: Math.round(200 + 400 * d),
    answer: seg(p, 0.6, 0.85),
    hint: 1 - seg(p, 0.02, 0.1),
  };
}

// 낱말 i가 흩어져 있을 때의 자리(vw·vh 단위, 고정 씨앗) — 정리되면 0
const SPOTS = [[-4, -16], [18, -8], [-8, 10], [22, 14], [2, 24], [30, -2]];
export const scatter = (i: number, order: number) => {
  const [x, y] = SPOTS[i % SPOTS.length];
  const k = 1 - order;
  return { x: x * k, y: y * k, blur: Math.round(2.5 * k * 10) / 10, alpha: 0.7 + 0.3 * order };
};
