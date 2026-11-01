import type { Fact } from '../data/facts';
import { useC } from '../lib/i18n';

const fmt = (d: string) => d.replaceAll('-', '.');

export function Source({ facts, note }: { facts: Fact<unknown>[]; note?: string }) {
  const { c } = useC();
  const seen = new Set<string>();
  const list = facts.filter((f) => (seen.has(f.source) ? false : (seen.add(f.source), true)));
  return (
    <p className="src">
      {c.faq.src}:{' '}
      {list.map((f, i) => (
        <span key={f.source}>
          {i > 0 && ' · '}
          {f.url ? <a href={f.url} target="_blank" rel="noreferrer">{f.source}</a> : f.source} ({fmt(f.asOf)})
        </span>
      ))}
      {note && <> · {note}</>}
    </p>
  );
}
