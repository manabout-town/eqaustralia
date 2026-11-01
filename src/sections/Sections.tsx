import { useRef, useState, type CSSProperties, type FormEvent } from 'react';
import { Lines, Sents } from '../components/Lines';
import { Source } from '../components/Source';
import { keep, type L } from '../data/content';
import { facts } from '../data/facts';
import { useC } from '../lib/i18n';
import { useScrub, wordFill } from '../lib/scrub';
import { Count } from '../lib/fx';
import { heroStage, scatter } from './heroTimeline';

const v = (o: Record<string, number | string>) => o as CSSProperties;
const telHref = `tel:${facts.phone.value.replace(/\s/g, '')}`;

/* 1. 히어로 — 고객 질문 한 문장. 스크롤하면 흩어진 일정 낱말이 자간이 좁혀지며 한 줄로 정리(대표). */
export function Hero() {
  const { c } = useC();
  const ref = useRef<HTMLElement>(null);
  useScrub(ref, (p, el) => {
    const s = heroStage(p);
    el.style.setProperty('--track', `${s.track}em`);
    el.style.setProperty('--wt', String(s.weight));
    el.style.setProperty('--answer', String(s.answer));
    el.style.setProperty('--hint', String(s.hint));
    el.querySelectorAll<HTMLElement>('.hero__w').forEach((w, i) => {
      const k = scatter(i, s.order);
      w.style.transform = `translate(${k.x}vw, ${k.y}vh)`;
      w.style.filter = k.blur ? `blur(${k.blur}px)` : '';
      w.style.opacity = String(k.alpha);
    });
  }, { pin: true, end: '+=170%', still: 1 });
  return (
    <section id="hero" className="sec hero" data-bg="hero" ref={ref} data-fx="낱말정리,자간좁혀짐,답흐림해제,활주로느린줌,내려보세요선">
      <div className="wrap hero__in">
        <h1 className="hero__h"><Lines l={c.hero.h} /></h1>
        <p className="hero__words" aria-label={c.hero.words.join(', ')}>
          {c.hero.words.map((w, i) => <span key={w} className="hero__w" style={v({ '--i': i })}>{keep(w)}</span>)}
        </p>
        <p className="lead hero__answer"><Lines l={c.hero.answer} /></p>
        <p className="hero__hint"><span>{c.hero.hint}</span><i /></p>
      </div>
    </section>
  );
}

/* 서브 페이지 머리 — 페이지 제목만(히어로 대신) */
export function PageHead({ l, bg }: { l: L; bg: string }) {
  return (
    <section className="sec phead" data-bg={bg}>
      <div className="wrap"><h1 data-io className="fade-lines"><Lines l={l} /></h1></div>
    </section>
  );
}

/* 2. DMC가 하는 일 — 계획 → 준비 → 운영 선이 스크롤 따라 그려지고, 지나간 낱말이 굵어짐(대표). */
export function What() {
  const { c } = useC();
  const ref = useRef<HTMLElement>(null);
  useScrub(ref, (p, el) => {
    el.style.setProperty('--wp', p.toFixed(3));
    el.querySelectorAll<HTMLElement>('.what__s').forEach((s, i) => s.style.setProperty('--on', wordFill(p, i, 3, 1).toFixed(3)));
  }, { start: 'top 70%', end: 'center 45%' });
  return (
    <section id="what" className="sec what" data-bg="what" ref={ref} data-fx="세단계선그려짐,낱말굵기채움,제목흐림해제,문장차례,도시느린줌">
      <div className="wrap">
        <div className="head">
          <h2 data-io className="fade-lines"><Lines l={c.what.h} /></h2>
          <p className="lead what__lead" data-io><Sents s={c.what.lead} /></p>
        </div>
        <div className="what__line" aria-hidden><b /></div>
        <ol className="what__steps">
          {c.what.steps.map((s) => (
            <li key={s.k} className="what__s">
              <h3 className="what__k">{s.k}</h3>
              <p><Sents s={s.d} /></p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* 3. 고객 — 줄마다 굵기가 가벼워짐(대표), 인디고로 물든 캠퍼스 영상. */
export function Who() {
  const { c } = useC();
  return (
    <section id="who" className="sec who" data-bg="who" data-fx="행굵기가벼워짐,구분선그려짐,행차례등장,인디고그레이딩영상,호버터콰이즈">
      <div className="wrap">
        <div className="head">
          <h2 data-io className="fade-lines"><Lines l={c.who.h} /></h2>
          <p className="lead" data-io><Sents s={c.who.lead} /></p>
        </div>
        <ul className="who__list">
          {c.who.list.map((w, i) => <li key={w} data-io style={v({ '--i': i })}><span className="who__w">{keep(w)}</span></li>)}
        </ul>
      </div>
    </section>
  );
}

/* 4. 진행 순서(고정) — 여섯 단계가 차례로 밝아지고 왼쪽 선이 차오름(대표). */
export function Flow() {
  const { c } = useC();
  const ref = useRef<HTMLElement>(null);
  const n = c.flow.steps.length;
  useScrub(ref, (p, el) => {
    el.style.setProperty('--fp', p.toFixed(3));
    el.querySelectorAll<HTMLElement>('.flow__s').forEach((s, i) => s.style.setProperty('--on', wordFill(p, i, n, 1.2).toFixed(3)));
  }, { pin: true, end: '+=220%', still: 1 });
  return (
    <section id="flow" className="sec flow" data-bg="flow" ref={ref} data-fx="여섯단계스크럽,진행선차오름,글자밝아짐,점커짐,강빛느린줌">
      <div className="wrap flow__in">
        <h2 className="flow__h"><Lines l={c.flow.h} /></h2>
        <div className="flow__body">
          <i className="flow__bar" aria-hidden><b /></i>
          <ol className="flow__steps">
            {c.flow.steps.map((s) => (
              <li key={s.k} className="flow__s">
                <h3>{s.k}</h3>
                <p><Sents s={s.d} /></p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* 5. 프로그램 예시 — 기간이 타자처럼 찍히고 행이 차례로(대표: 타자). 인디고 교실 영상. */
export function Programs() {
  const { c } = useC();
  return (
    <section id="programs" className="sec programs" data-bg="programs" data-fx="기간타자,행차례등장,구분선그려짐,인디고그레이딩영상,제목흐림해제">
      <div className="wrap">
        <div className="head">
          <h2 data-io className="fade-lines"><Lines l={c.programs.h} /></h2>
          <p className="lead" data-io><Sents s={c.programs.lead} /></p>
        </div>
        <ul className="rows">
          {c.programs.list.map((x, i) => (
            <li key={x.k} data-io style={v({ '--i': i })}>
              <h3>{keep(x.k)}</h3>
              <p className="rows__len"><span className="type" style={v({ '--n': x.len.length, '--i': i })}>{keep(x.len)}</span></p>
              <p className="rows__d"><Sents s={x.d} /></p>
            </li>
          ))}
        </ul>
        <p className="lead programs__note" data-io><Sents s={c.programs.note} /></p>
        <Source facts={[facts.programLength, facts.uwa, facts.curtin]} />
      </div>
    </section>
  );
}

/* 6. 서비스 — 항목 이름이 자간이 좁혀지며 정리되고(대표), 두 줄 목록이 차례로. */
export function Services() {
  const { c } = useC();
  return (
    <section id="services" className="sec services" data-bg="services" data-fx="이름자간좁혀짐,항목차례등장,구분선그려짐,캠퍼스느린줌,호버터콰이즈">
      <div className="wrap">
        <div className="head"><h2 data-io className="fade-lines"><Lines l={c.services.h} /></h2></div>
        <ul className="svc">
          {c.services.list.map((x, i) => (
            <li key={x.k} data-io style={v({ '--i': i })}>
              <h3 className="svc__k">{keep(x.k)}</h3>
              <p><Sents s={x.d} /></p>
            </li>
          ))}
        </ul>
        <Source facts={[facts.hiace, facts.policy]} />
      </div>
    </section>
  );
}

/* 7. 안전·규정(밝은 톤) — 항목이 확인되듯 체크선이 그려지고 굵기가 300 → 700(대표). */
export function Safety() {
  const { c } = useC();
  return (
    <section id="safety" className="sec safety on-light" data-bg="safety" data-fx="체크굵기확인,체크선그려짐,행차례등장,출처흐림해제,밝은안개">
      <div className="wrap">
        <div className="head">
          <h2 data-io className="fade-lines"><Lines l={c.safety.h} /></h2>
          <p className="lead" data-io><Sents s={c.safety.lead} /></p>
        </div>
        <ul className="chk">
          {c.safety.list.map((x, i) => (
            <li key={x} data-io style={v({ '--i': i })}>
              <svg viewBox="0 0 24 24" aria-hidden><path d="M4 12.5l5 5L20 6.5" pathLength={1} /></svg>
              <span>{keep(x)}</span>
            </li>
          ))}
        </ul>
        <p className="lead safety__after" data-io><Sents s={c.safety.after} /></p>
        <div className="unblur" data-io><Source facts={[facts.policy, facts.wwc, facts.ptd]} /></div>
      </div>
    </section>
  );
}

/* 8. 회사 — ABN 번호가 타자로 찍힘(대표), 코스터 사진이 가운데서 열림. */
export function Group() {
  const { c } = useC();
  return (
    <section id="group" className="sec group" data-bg="group" data-fx="ABN타자,사진가운데열림,행구분선,링크밑줄그려짐,사진시차">
      <div className="wrap group__grid">
        <div>
          <div className="head">
            <h2 data-io className="fade-lines"><Lines l={c.group.h} /></h2>
            <p className="lead" data-io><Sents s={c.group.lead} /></p>
          </div>
          <dl className="group__id" data-io>
            <div><dt>{keep(facts.entity.value)}</dt><dd /></div>
            <div><dt>{c.group.idLabel}</dt><dd><span className="type" style={v({ '--n': 14, '--i': 0 })}>{facts.abn.value}</span></dd></div>
            <div><dt>{c.group.acnLabel}</dt><dd><span className="type" style={v({ '--n': 11, '--i': 1 })}>{facts.acn.value}</span></dd></div>
          </dl>
          <p className="group__look" data-io><a className="ul" href={facts.abn.url} target="_blank" rel="noreferrer">{c.group.lookup}</a></p>
          <ul className="group__rows">
            {c.group.rows.map((r, i) => (
              <li key={r.k} data-io style={v({ '--i': i })}>
                <h3><a className="ul" href={r.url} target="_blank" rel="noreferrer">{r.k}</a></h3>
                <p><Sents s={r.d} /></p>
              </li>
            ))}
          </ul>
        </div>
        <figure className="group__ph" data-io>
          <img src="/img/p_coaster-800.webp" srcSet="/img/p_coaster-800.webp 800w, /img/p_coaster-1600.webp 1134w" sizes="(max-width: 860px) 92vw, 44vw" alt="White Toyota Coaster minibus parked beside a park" loading="lazy" width="1134" height="614" />
          <figcaption className="cap"><Sents s={c.group.cap} /></figcaption>
        </figure>
      </div>
      <div className="wrap"><Source facts={[facts.entity, facts.wowhoju, facts.beyondperth, facts.coaster]} /></div>
    </section>
  );
}

/* 9. 왜 퍼스 — 3,200 카운트업 + 문장이 앞에서부터 밝아짐(대표: 햇살). */
export function Perth() {
  const { c } = useC();
  const ref = useRef<HTMLElement>(null);
  const words = c.perth.words.split(' ');
  useScrub(ref, (p, el) => el.querySelectorAll<HTMLElement>('.pw').forEach((w, i) => w.style.setProperty('--f', wordFill(p, i, words.length, 2.4).toFixed(3))), { start: 'top 65%', end: 'center 40%' });
  return (
    <section id="perth" className="sec perth" data-bg="perth" ref={ref} data-fx="햇살문장밝아짐,3200카운트업,숫자굵기숨쉬기,피너클스느린줌,제목흐림해제">
      <div className="wrap">
        <div className="head"><h2 data-io className="fade-lines"><Lines l={c.perth.h} /></h2></div>
        <div className="perth__num" data-io>
          <p className="big breathe"><Count to={facts.sunshine.value} fmt={(n) => n.toLocaleString('en-AU')} /></p>
          <p className="perth__u">{c.perth.unit}</p>
        </div>
        <p className="perth__words">{words.map((w, i) => <span key={i} className="pw">{w} </span>)}</p>
        <Source facts={[facts.sunshine, facts.tz]} />
      </div>
    </section>
  );
}

/* 10. 자주 묻는 질문(밝은 톤) — 답이 흐림에서 또렷하게(대표). JSON-LD FAQPage 와 같은 데이터. */
export function Faq() {
  const { c } = useC();
  return (
    <section id="faq" className="sec faq on-light" data-bg="faq" data-fx="답녹아나옴,열림선그려짐,기호회전,질문차례등장,숲느린줌">
      <div className="wrap">
        <div className="head"><h2 data-io className="fade-lines"><Lines l={c.faq.h} /></h2></div>
        <div className="faq__list">
          {c.faq.list.map((f, i) => (
            <details key={f.q} data-io style={v({ '--i': i })}>
              <summary><h3>{keep(f.q)}</h3><i aria-hidden /></summary>
              <div className="faq__a"><p><Sents s={f.a} /></p></div>
            </details>
          ))}
        </div>
        <Source facts={[facts.policy, facts.hiace]} />
      </div>
    </section>
  );
}

/* 11. 문의 — 입력칸 밑줄이 차례로 그려짐(대표). 서버 전송 없음: 메일 앱을 연다. */
const FIELDS = ['org', 'name', 'email', 'country', 'size', 'ages', 'dates'] as const;
export function Contact() {
  const { c } = useC();
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [...FIELDS.map((k) => `${c.contact.f[k]}: ${d.get(k) ?? ''}`), '', String(d.get('msg') ?? '')].join('\n');
    location.href = `mailto:${facts.email.value}?subject=${encodeURIComponent(`EQ Australia enquiry — ${d.get('org') ?? ''}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <section id="contact" className="sec contact" data-bg="contact" data-fx="입력선차례그려짐,야경느린줌,제목흐림해제,전화밑줄그려짐,버튼빛">
      <div className="wrap contact__grid">
        <div>
          <div className="head">
            <h2 data-io className="fade-lines"><Lines l={c.contact.h} /></h2>
            <p className="lead" data-io><Sents s={c.contact.lead} /></p>
          </div>
          <p className="contact__or" data-io>
            {c.contact.or} <a className="ul ul--big" href={telHref}>{facts.phone.value}</a>
            <span className="cap">{c.contact.hours}</span>
          </p>
          <p className="contact__or" data-io><a className="ul ul--big" href={`mailto:${facts.email.value}`}>{facts.email.value}</a></p>
        </div>
        <form className="form" onSubmit={submit} data-io>
          {FIELDS.map((k, i) => (
            <label key={k} className="fld" style={v({ '--i': i })}>
              <span>{c.contact.f[k]}</span>
              <input name={k} type={k === 'email' ? 'email' : 'text'} required={k === 'org' || k === 'email'} autoComplete={k === 'email' ? 'email' : k === 'name' ? 'name' : 'off'} />
            </label>
          ))}
          <label className="fld fld--wide" style={v({ '--i': FIELDS.length })}>
            <span>{c.contact.f.msg}</span>
            <textarea name="msg" rows={3} />
          </label>
          <button className="btn" type="submit">{c.contact.f.send}</button>
          <p className="cap form__note" aria-live="polite">{sent ? `→ ${facts.email.value}` : <Sents s={c.contact.note} />}</p>
        </form>
      </div>
      <div className="wrap"><Source facts={[facts.phone, facts.email]} /></div>
    </section>
  );
}
