import { content } from '../data/content.ts';
import { facts } from '../data/facts.ts';

// 화면과 같은 데이터에서 JSON-LD(TravelAgency + FAQPage)
export function jsonLd() {
  const c = content.en;
  return [
    {
      '@context': 'https://schema.org', '@type': 'TravelAgency', name: 'EQ Australia', url: 'https://eqaustralia.com.au/',
      description: 'Destination management for overseas school groups, travel agencies and delegations visiting Perth, Western Australia — study tours, school visits, transport, accommodation and interpreting.',
      areaServed: 'Western Australia', telephone: facts.phone.value, email: facts.email.value,
      address: { '@type': 'PostalAddress', addressLocality: 'Perth', addressRegion: 'WA', addressCountry: 'AU' },
      parentOrganization: { '@type': 'Organization', name: facts.entity.value, taxID: `ABN ${facts.abn.value}` },
      knowsLanguage: ['en', 'ko'],
    },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: c.faq.list.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
}
