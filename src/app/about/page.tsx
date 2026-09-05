import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Let\'s Talk Agriculture',
  description: 'A growth partner for organizations across Africa\'s agriculture and food systems.',
};

const team = [
  { name: 'Adesola Ajayi', role: 'Founder & Lead Consultant', bio: 'Strategic communications professional with over a decade of experience across African agriculture and food systems.' },
  { name: 'Team Member Two', role: 'Media & Editorial Lead', bio: 'Award-winning journalist and editor with deep expertise in African agricultural media.' },
  { name: 'Team Member Three', role: 'Talent & Partnerships', bio: 'Connects organizations with the right people across Africa\'s growing agriculture sector.' },
];

const orgs = ['MEDA', 'Mercy Corps AgriFin', 'FoodChain ID', 'AGRA', 'IFAD', 'GIZ'];

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
          <h2 className="section-title serif">Our approach</h2>
          <div className="two-col">
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
          </div>
        </div>
      </div>

      <div className="section band">
        <div className="wrap">
          <h2 className="section-title serif">Organizations we support</h2>
          <div className="client-grid">
            {orgs.map((o) => (
              <div key={o} className="client-logo">{o}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="wrap">
          <h2 className="section-title serif">Our team</h2>
          <div className="team-grid">
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
          </div>
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
