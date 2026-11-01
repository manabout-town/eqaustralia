import { useEffect, useRef, useState } from 'react';
import { reduced } from './gsap';

// [data-io] 요소가 화면 아래 15% 선을 넘으면 .is-in — 진입 효과는 CSS 전환으로(스크롤 중 다시 그리기 최소)
export function useInView() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-io]');
    if (reduced()) { els.forEach((e) => e.classList.add('is-in')); return; }
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }),
      { rootMargin: '0px 0px -15% 0px' },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

// 카운트업: 화면에 들어오면 0 → to (1.4s ease-out). reduced면 바로 최종값.
export const countAt = (t: number, to: number) => Math.round(to * (1 - Math.pow(1 - Math.min(1, Math.max(0, t)), 3)));
export function Count({ to, fmt = (n: number) => n.toLocaleString('ko-KR') }: { to: number; fmt?: (n: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(to);
  useEffect(() => {
    if (reduced() || new URLSearchParams(location.search).has('p')) return;
    const el = ref.current!;
    setN(0);
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => { const k = (t - t0) / 1400; setN(countAt(k, to)); if (k < 1) raf = requestAnimationFrame(tick); };
      raf = requestAnimationFrame(tick);
    }, { rootMargin: '0px 0px -15% 0px' });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to]);
  return <span ref={ref} className="num">{fmt(n)}</span>;
}
