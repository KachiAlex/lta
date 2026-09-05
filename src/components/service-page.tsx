import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal, Stagger } from '@/components/reveal';

type ServiceData = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  offerings: { title: string; desc: string }[];
};

export function ServicePage({ data }: { data: ServiceData }) {
  const { title, tagline, description, offerings } = data;

  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <div className="eyebrow">{title}</div>
          <h1 className="serif">{tagline}</h1>
          <p>{description}</p>
        </div>
      </div>

      <div className="section">
        <div className="wrap">
          <Reveal><h2 className="section-title serif">What we offer</h2></Reveal>
          <Stagger className="service-grid">
            {offerings.map((o) => (
              <div key={o.title} className="service-card">
                <div className="icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </div>

      <div className="section band">
        <div className="wrap">
          <Reveal><h2 className="section-title serif">How we work</h2></Reveal>
          <Reveal delay={100}><div className="rec-grid">
            <div>
              <ul className="dash">
                <li>Discovery: We start by understanding your goals, audience, and context.</li>
                <li>Strategy: We craft a practical plan aligned with your objectives and budget.</li>
                <li>Execution: We deliver with attention to detail and measurable outcomes.</li>
                <li>Review: We measure results and refine for continuous improvement.</li>
              </ul>
            </div>
            <div className="next-box">
              <span className="next-label">Ready to start?</span>
              <h4 className="serif">Let&apos;s talk about your {title.toLowerCase()} needs.</h4>
              <div className="cta-line">Book a free 30-minute discovery call.</div>
              <Link href="/contact" className="pill">Start a conversation</Link>
            </div>
          </div></Reveal>
        </div>
      </div>

      <div className="closing">
        <div className="inner">
          <h2 className="serif">Want to see our work?</h2>
          <p>Explore selected engagements that show what we deliver.</p>
          <Link href="/work" className="pill">View Selected Work</Link>
        </div>
      </div>
    </>
  );
}

export function makeMetadata(title: string, description: string): Metadata {
  return { title: `${title} | Let's Talk Agriculture`, description };
}
