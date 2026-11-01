import { Fragment } from 'react';
import { keep } from '../data/content';

// 제목·인용 줄바꿈: 바깥 배열 = 줄, 안쪽 배열 = 구절(안 쪼개짐)
export function Lines({ l, className }: { l: string[][]; className?: string }) {
  return (
    <>
      {l.map((line, i) => (
        <span key={i} className={`ln${className ? ` ${className}` : ''}`}>
          {line.map((c, j) => <Fragment key={j}>{j > 0 && ' '}<span className="nw">{keep(c)}</span></Fragment>)}
        </span>
      ))}
    </>
  );
}
export const flat = (l: string[][]) => l.map((x) => x.join(' ')).join(' ');

// 문장이 끝나면 다음 줄, 긴 문장은 두 줄로 고르게(.sent)
export const split = (t: string) => t.split(/(?<=[.!?])\s+(?=\S)/);
export function Sents({ s }: { s: string | string[] }) {
  const list = typeof s === 'string' ? split(s) : s.flatMap(split);
  return <>{list.map((x, i) => <span key={i} className="sent">{keep(x)} </span>)}</>;
}
