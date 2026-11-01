import { useEffect, useRef, useState } from 'react';
import { gsap } from '../lib/gsap';
import './intro.css';

// 첫 방문 오프닝(세션당 한 번): 착륙 영상 → 두 줄 → 상호 워드마크가 자간이 좁혀지며 또렷(히어로 「정리됨」의 예고) → 막이 걷힘.
// 상호 아래 줄 없음(유저 2026-10-27). 스크롤·터치·키 → 빨리 감기. reduced·해시 페이지·?p= 면 건너뜀.
export function Intro({ video, poster, lines }: { video: string; poster: string; lines: [string[], string[]] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(() => {
    const q = new URLSearchParams(location.search);
    let seen = false;
    try { seen = sessionStorage.getItem('eq-intro') === '1'; } catch { /* 막힘 */ }
    const sub = location.hash && location.hash !== '#/';
    return (!seen || q.has('intro')) && !sub && !q.has('p') && !matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (!on) return;
    const el = ref.current!;
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    const html = document.documentElement;
    html.style.overflow = 'hidden';
    lenis?.stop();
    const q = (s: string) => el.querySelectorAll(s);
    const tl = gsap.timeline({
      defaults: { ease: 'expo.out' },
      onComplete: () => {
        html.style.overflow = '';
        lenis?.start();
        try { sessionStorage.setItem('eq-intro', '1'); } catch { /* 무시 */ }
        setOn(false);
      },
    });
    tl.fromTo(q('.in-video'), { scale: 1.06, opacity: 0 }, { scale: 1, opacity: 1, duration: 5.6, ease: 'power2.out' }, 0)
      .fromTo(q('.in-l1'), { opacity: 0, filter: 'blur(12px)' }, { opacity: 1, filter: 'blur(0px)', duration: 1.4 }, 0.4)
      .fromTo(q('.in-l2'), { opacity: 0, filter: 'blur(12px)' }, { opacity: 1, filter: 'blur(0px)', duration: 1.4 }, 1.0)
      .to(q('.in-lines'), { opacity: 0, filter: 'blur(10px)', duration: 0.8, ease: 'power2.in' }, 2.8)
      .fromTo(q('.in-word'), { opacity: 0, letterSpacing: '0.4em', fontWeight: 200 }, { opacity: 1, letterSpacing: '-0.02em', fontWeight: 600, duration: 1.8 }, 3.2)
      .to(el, { clipPath: 'inset(0 0 100% 0)', duration: 1.2, ease: 'expo.inOut' }, 5.4);
    const hurry = () => { if (tl.time() < 5.0) tl.seek(5.0); tl.timeScale(1.6); };
    addEventListener('wheel', hurry, { passive: true });
    addEventListener('touchmove', hurry, { passive: true });
    addEventListener('keydown', hurry);
    return () => {
      tl.kill();
      html.style.overflow = '';
      lenis?.start();
      removeEventListener('wheel', hurry);
      removeEventListener('touchmove', hurry);
      removeEventListener('keydown', hurry);
    };
  }, [on]);

  if (!on) return null;
  return (
    <div className="in" ref={ref} aria-hidden>
      <video className="in-video" src={video} poster={poster} autoPlay muted loop playsInline />
      <div className="in-dim" />
      <div className="in-center">
        <div className="in-lines">
          <p className="in-l1">{lines[0].map((c, i) => <span key={i}>{i > 0 && ' '}<span className="nw">{c}</span></span>)}</p>
          <p className="in-l2">{lines[1].map((c, i) => <span key={i}>{i > 0 && ' '}<span className="nw">{c}</span></span>)}</p>
        </div>
        <p className="in-word">EQ Australia</p>
      </div>
    </div>
  );
}
