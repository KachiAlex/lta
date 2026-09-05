import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal } from '@/components/reveal';

export const metadata: Metadata = {
  title: 'Selected Work',
  description: "Selected engagements from Let's Talk Agriculture — strategic communications, media campaigns, editorial content, and talent solutions for organizations across Africa's agriculture and food systems.",
  keywords: [
    'agriculture communications case studies',
    'agritech media campaigns Africa',
    'agriculture editorial reports',
    'agribusiness talent placements',
    'Let\'s Talk Agriculture portfolio',
  ],
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Selected Work | Let\'s Talk Agriculture',
    description: "Engagements that moved the needle across communications, media, editorial, and talent.",
    url: 'https://letstalkagriculture.com/work',
  },
};

const engagements = [
  { tag: 'Communications', title: 'Strategic Communications for a Development Programme', desc: 'Developed a comprehensive communications strategy for a donor-funded agriculture programme across three countries, increasing stakeholder engagement by 40%.' },
  { tag: 'Media', title: 'Media Campaign for an Agritech Launch', desc: 'Produced and placed media content for an agritech company\'s product launch, reaching over 500,000 farmers across digital and traditional channels.' },
  { tag: 'Editorial', title: 'Editorial Content for an Industry Report', desc: 'Researched and wrote a flagship industry report on African food systems, distributed to 2,000+ policymakers and practitioners.' },
  { tag: 'Talent', title: 'Executive Search for an Agribusiness', desc: 'Led a senior leadership search for a growing agribusiness, placing a operations director within eight weeks.' },
  { tag: 'Communications', title: 'Crisis Communications for an Industry Body', desc: 'Provided rapid-response communications support during a food safety incident, managing media relations and stakeholder messaging.' },
  { tag: 'Media', title: 'Documentary Series for a Development Partner', desc: 'Produced a six-part documentary series highlighting smallholder farmer success stories, broadcast on national television and streamed online.' },
];

export default function WorkPage() {
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Selected Work</div>
          <h1 className="serif">Engagements that moved the needle.</h1>
          <p>
            A selection of our work across communications, media, editorial, and talent —
            for organizations across Africa&apos;s agriculture and food systems.
          </p>
        </div>
      </div>

      <div className="wrap">
        {engagements.map((e, i) => (
          <Reveal key={i} delay={i % 2 === 0 ? 0 : 100}>
          <div className="engagement">
            <div>
              <span className="tag">{e.tag}</span>
              <h3>{e.title}</h3>
              <p>{e.desc}</p>
            </div>
            <div className="engagement-visual">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="40" stroke="var(--color-orange)" strokeWidth="3" fill="none" />
                <path d="M60 30 L60 90 M30 60 L90 60" stroke="var(--color-orange)" strokeWidth="2" />
              </svg>
            </div>
          </div>
          </Reveal>
        ))}
      </div>

      <div className="closing">
        <div className="inner">
          <h2 className="serif">Have a project in mind?</h2>
          <p>We&apos;d love to hear about it. Let&apos;s explore how we can help.</p>
          <Link href="/contact" className="pill">Start a conversation</Link>
        </div>
      </div>
    </>
  );
}
