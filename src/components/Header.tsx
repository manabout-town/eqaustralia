import { useEffect, useState } from 'react';
import { useC } from '../lib/i18n';
import './header.css';

// 늘 보이는 투명 헤더: 상호 · 메뉴 5개(대표 지정) · 언어 · 문의. 내리면 짙은 막이 깔림. 폰은 메뉴 띠가 로고 아래(옆으로 밀기).
export function Header({ route }: { route: string }) {
  const { c, lang, setLang } = useC();
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(scrollY > 40);
    on();
    addEventListener('scroll', on, { passive: true });
    return () => removeEventListener('scroll', on);
  }, []);
  return (
    <header className={`hd${solid ? ' is-solid' : ''}`}>
      <div className="hd__in wrap">
        <a className="hd__mark" href="#/">EQ Australia</a>
        <nav className="hd__nav" aria-label="Menu">
          {c.nav.map(([l, h]) => <a key={h} href={h} aria-current={route === h ? 'page' : undefined}>{l}</a>)}
        </nav>
        <button className="hd__lang" type="button" onClick={() => setLang(lang === 'en' ? 'ko' : 'en')} lang={lang === 'en' ? 'ko' : 'en'}>{c.langLabel}</button>
        <a className="hd__cta" href="#/contact">{c.enquire}</a>
      </div>
      <nav className="hd__strip" aria-label="Menu">
        {c.nav.map(([l, h]) => <a key={h} href={h} aria-current={route === h ? 'page' : undefined}>{l}</a>)}
      </nav>
    </header>
  );
}
