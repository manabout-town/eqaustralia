import { it, expect } from 'vitest';
import { heroStage, scatter } from './heroTimeline';

it('처음엔 흩어지고 끝엔 한 줄로 정리', () => {
  const a = heroStage(0), b = heroStage(1);
  expect(a.order).toBe(0); expect(b.order).toBe(1);
  expect(a.track).toBeCloseTo(0.42); expect(b.track).toBe(0);
  expect(a.weight).toBe(200); expect(b.weight).toBe(600);
  expect(a.answer).toBe(0); expect(b.answer).toBe(1);
});
it('정리되면 낱말 자리 0·흐림 0', () => {
  expect(scatter(3, 1)).toEqual({ x: 0, y: 0, blur: 0, alpha: 1 });
  expect(Math.abs(scatter(0, 0).x)).toBeGreaterThan(0);
});
it('범위 밖 p는 잘림', () => {
  expect(heroStage(-1)).toEqual(heroStage(0));
  expect(heroStage(2)).toEqual(heroStage(1));
});
