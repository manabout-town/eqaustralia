import { it, expect } from 'vitest';
import { content, keep } from './content';

const shape = (o: unknown): unknown =>
  Array.isArray(o) ? (typeof o[0] === 'object' && o[0] !== null && !Array.isArray(o[0]) ? o.map(shape) : o.length) : typeof o === 'object' && o !== null ? Object.fromEntries(Object.entries(o).map(([k, v]) => [k, shape(v)])) : typeof o;

it('영어·한국어 문구가 같은 모양(키·목록 길이)', () => {
  const strip = (x: unknown): unknown => JSON.parse(JSON.stringify(shape(x), (_k, v) => (typeof v === 'number' ? 'n' : v)));
  expect(strip(content.ko)).toEqual(strip(content.en));
});
it('실적 숫자·파트너 단정 문구 없음', () => {
  const all = JSON.stringify(content);
  for (const bad of ['official partner', 'years of experience', 'students served', '공식 파트너', '년 경력', '명 수송', 'accredited', '인증 업체']) expect(all.toLowerCase()).not.toContain(bad.toLowerCase());
});
it('구절 묶음', () => {
  expect(keep('A$10m–20m per claim')).toContain('A$10m–20m');
  expect(keep('a 19-seat Toyota Coaster')).toContain('Toyota Coaster');
});
