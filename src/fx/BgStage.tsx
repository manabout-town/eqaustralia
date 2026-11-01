import { useEffect, useRef, useState } from 'react';

// 페이지 뒤 고정 배경 한 층. 화면 가운데를 지나는 섹션(data-bg)의 장면으로 1.2초 교차.
// 영상은 보이는 것만 재생(디코더 최대 2개). 사진은 느린 줌. grade = 브랜드 인디고로 물들인 장면.
export type Scene = { key: string; video?: string; img: string; tone?: 'night' | 'day'; grade?: boolean };

export function BgStage({ scenes }: { scenes: Scene[] }) {
  const [active, setActive] = useState(scenes[0].key);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive((e.target as HTMLElement).dataset.bg!)),
      { rootMargin: '-50% 0px -50% 0px' },
    );
    document.querySelectorAll('[data-bg]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timers: number[] = [];
    ref.current!.querySelectorAll('video').forEach((v) => {
      if (v.dataset.key === active) {
        if (still) return;
        v.preload = 'auto';
        v.play().catch(() => {});
      } else if (!v.paused) timers.push(window.setTimeout(() => v.pause(), 1300));
    });
    return () => timers.forEach(clearTimeout);
  }, [active]);

  const cur = scenes.find((s) => s.key === active);
  return (
    <div className="bgs" data-tone={cur?.tone ?? 'night'} data-grade={cur?.grade ? '1' : undefined} ref={ref} aria-hidden>
      {scenes.map((s) => (
        <div key={s.key} className={`bgs__l${s.key === active ? ' is-on' : ''}`}>
          {s.video ? (
            <video data-key={s.key} src={s.video} poster={s.img} muted loop playsInline preload={s.key === scenes[0].key ? 'auto' : 'none'} />
          ) : (
            <img src={s.img.replace('-1600', '-800')} srcSet={`${s.img.replace('-1600', '-800')} 800w, ${s.img} 1600w`} sizes="100vw" alt="" loading="lazy" decoding="async" />
          )}
        </div>
      ))}
      <div className="bgs__grade" />
      <div className="bgs__veil" />
    </div>
  );
}
