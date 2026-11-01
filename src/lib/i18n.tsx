import { createContext, useContext } from 'react';
import { content, type Content, type Lang } from '../data/content';

// 언어: 영어 기본, 헤더 버튼으로 한국어. 저장소가 막혀도 영어로 동작.
export const LangCtx = createContext<{ lang: Lang; c: Content; setLang: (l: Lang) => void }>({ lang: 'en', c: content.en, setLang: () => {} });
export const useC = () => useContext(LangCtx);

export function initialLang(): Lang {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'ko' || q === 'en') return q;
  try { const s = localStorage.getItem('eq-lang'); if (s === 'ko' || s === 'en') return s; } catch { /* 막힘 */ }
  return 'en';
}
export function saveLang(l: Lang) {
  try { localStorage.setItem('eq-lang', l); } catch { /* 막힘 */ }
  document.documentElement.lang = l;
}
