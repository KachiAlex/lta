import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal, Stagger } from '@/components/reveal';

export const metadata: Metadata = {
  title: 'About',
  description: "Let's Talk Agriculture is a growth partner for organizations across Africa's agriculture and food systems — helping them strengthen visibility, engage stakeholders, and communicate with clarity.",
  keywords: [
    'about Let\'s Talk Agriculture',
    'African agriculture consultancy',
    'agriculture communications team',
    'food systems experts Africa',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Let\'s Talk Agriculture',
    description: "A growth partner for organizations across Africa's agriculture and food systems.",
    url: 'https://letstalkagriculture.com/about',
  },
};

const team = [
  { name: 'Adesola Ajayi', role: 'Founder & Lead Consultant', bio: 'Strategic communications professional with over a decade of experience across African agriculture and food systems.' },
  { name: 'Team Member Two', role: 'Media & Editorial Lead', bio: 'Award-winning journalist and editor with deep expertise in African agricultural media.' },
  { name: 'Team Member Three', role: 'Talent & Partnerships', bio: 'Connects organizations with the right people across Africa\'s growing agriculture sector.' },
];

const orgs = ['MEDA', 'Mercy Corps AgriFin', 'FoodChain ID', 'AGRA', 'IFAD', 'GIZ'];

const aboutGlance = [
  { label: 'Who we are', lede: 'A growth partner, not a generalist.', body: 'We focus exclusively on African agriculture and food systems. That means we understand the landscape, the language, and the stakeholders — from the start.', src: 'Our positioning' },
  { label: 'What we do', lede: 'Four service lines, one roof.', body: 'Communications, media, editorial, and talent. Most firms offer one or two. We cover the full growth cycle.', src: 'Our services' },
  { label: 'How we work', lede: 'Practical, measurable, aligned.', body: 'We listen first, then craft strategies that fit your goals. No templates, no jargon — just clear thinking and good execution.', src: 'Our approach' },
];

const capabilities = [
  { label: 'Communications strategy', ok: true },
  { label: 'Media production & placement', ok: true },
  { label: 'Editorial & thought leadership', ok: true },
  { label: 'Talent search & recruitment', ok: true },
  { label: 'Africa-focused sector expertise', ok: true },
  { label: 'Stakeholder engagement', ok: true },
];

const sectors = [
  { label: 'Agribusiness', ok: true },
  { label: 'Agritech', ok: true },
  { label: 'Development programmes', ok: true },
  { label: 'Industry bodies & associations', ok: true },
  { label: 'Donor-funded projects', ok: true },
  { label: 'Policy & research', ok: true },
];

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <div className="eyebrow">About Us</div>
          <h1 className="serif">A growth partner for African agriculture and food systems.</h1>
          <p>
            Let&apos;s Talk Agriculture helps organizations strengthen visibility, engage stakeholders,
            and communicate their work with clarity and credibility. We work with agribusinesses,
            agritech companies, development programmes, and industry bodies across the continent.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="wrap">
          <Reveal><h2 className="section-title serif">Our approach</h2></Reveal>
          <Reveal delay={100}><div className="two-col">
            <p>
              We believe that effective communication is the missing link between great work and
              real impact. Many organizations across Africa&apos;s agriculture and food systems are
              doing remarkable work — but struggle to make that work visible to the people who matter
              most: donors, partners, policymakers, and the communities they serve.
            </p>
            <div>
              <p>
                Our approach is simple: we listen first, then craft strategies that are practical,
                measurable, and aligned with your goals. Whether it&apos;s a communications strategy,
                a media campaign, an editorial product, or a talent search, we bring the same
                Africa-focused expertise.
              </p>
              <p className="serif best-move">Your best move: let your work speak — clearly, consistently, and to the right people.</p>
            </div>
          </div></Reveal>
        </div>
      </div>

      <div className="section band">
        <div className="wrap">
          <Reveal><h2 className="section-title serif">Organizations we support</h2></Reveal>
          <Stagger className="client-grid">
            {orgs.map((o) => (
              <div key={o} className="client-logo">{o}</div>
            ))}
          </Stagger>
        </div>
      </div>

      {/* AT A GLANCE */}
      <div className="section">
        <div className="wrap">
          <Reveal><h2 className="section-title serif">Who we are, at a glance</h2></Reveal>
          <Stagger className="glance-grid">
            {aboutGlance.map((c) => (
              <div key={c.label} className="g-card">
                <div className="g-label">{c.label}</div>
                <div className="g-lede">{c.lede}</div>
                <div className="g-body">{c.body}</div>
                <div className="g-src">({c.src})</div>
              </div>
            ))}
          </Stagger>
        </div>
      </div>

      {/* CAPABILITIES & SECTORS */}
      <div className="section">
        <div className="wrap">
          <Reveal><h2 className="section-title serif">What we cover</h2></Reveal>
          <div className="rec-grid">
            <Reveal delay={100}>
              <h3 className="serif" style={{ fontSize: 22, marginBottom: 20 }}>Our capabilities</h3>
              <div className="check-rows">
                {capabilities.map((c) => (
                  <div key={c.label} className="check-row ok">
                    <span className="icon">&#10003;</span>
                    <span>{c.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={200}>
              <h3 className="serif" style={{ fontSize: 22, marginBottom: 20 }}>Sectors we serve</h3>
              <div className="table-rows">
                {sectors.map((s) => (
                  <div key={s.label} className="table-row ok">
                    <span>{s.label}</span>
                    <span className="icon">&#10003;</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="wrap">
          <Reveal><h2 className="section-title serif">Our team</h2></Reveal>
          <Stagger className="team-grid">
            {team.map((m) => (
              <div key={m.name} className="team-card">
                <div className="portrait" style={{ background: 'var(--color-bg-band)' }} />
                <div className="info">
                  <div className="name">{m.name}</div>
                  <div className="role">{m.role}</div>
                  <p className="bio">{m.bio}</p>
                </div>
              </div>
            ))}
          </Stagger>
        </div>
      </div>

      <div className="closing">
        <div className="inner">
          <h2 className="serif">Want to work together?</h2>
          <p>We&apos;d love to hear about what you&apos;re building. Let&apos;s start a conversation.</p>
          <Link href="/contact" className="pill">Start a conversation</Link>
        </div>
      </div>
    </>
  );
}
