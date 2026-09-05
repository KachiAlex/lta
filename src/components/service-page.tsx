import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal, Stagger } from '@/components/reveal';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/json-ld';

type ServiceData = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  offerings: { title: string; desc: string }[];
  checklist?: { label: string; ok: boolean }[];
  bullets?: { type: 'x' | 'o'; text: string }[];
};

export function ServicePage({ data }: { data: ServiceData }) {
  const { title, tagline, description, offerings, slug, checklist, bullets } = data;

  return (
    <>
      <ServiceJsonLd name={title} description={description} slug={slug} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: title, url: `/${slug}` }]} />
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

      {(checklist || bullets) && (
        <div className="section">
          <div className="wrap">
            <Reveal><h2 className="section-title serif">What&apos;s included</h2></Reveal>
            <div className="rec-grid">
              {checklist && (
                <Reveal delay={100}>
                  <div className="check-rows">
                    {checklist.map((c) => (
                      <div key={c.label} className={`check-row ${c.ok ? 'ok' : 'no'}`}>
                        <span className="icon">{c.ok ? '\u2713' : '\u2717'}</span>
                        <span>{c.label}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}
              {bullets && (
                <Reveal delay={200}>
                  <ul className="bullet-icon">
                    {bullets.map((b, i) => (
                      <li key={i}>
                        <span className={`box ${b.type}`}>{b.type === 'x' ? '\u2717' : '\u00A0'}</span>
                        <span>{b.text}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="section band">
        <div className="wrap">
          <Reveal><h2 className="section-title serif">How we work</h2></Reveal>
          <Reveal delay={100}><div className="rec-grid">
            <div>
              {/* DIAGRAM CARD */}
              <div className="diagram-card">
                <svg className="diagram-svg" viewBox="0 0 400 110">
                  <rect x="10" y="42" width="60" height="26" rx="6" fill="#3E7A4C" opacity="0.15" stroke="#3E7A4C" strokeWidth="1.5" />
                  <g stroke="#3E7A4C" strokeWidth="1.5" fill="none">
                    <path d="M70 55 L150 20" />
                    <path d="M70 55 L150 40" />
                    <path d="M70 55 L150 55" />
                    <path d="M70 55 L150 70" />
                    <path d="M70 55 L150 90" />
                  </g>
                  <rect x="150" y="12" width="55" height="16" rx="4" fill="#3E7A4C" opacity="0.15" stroke="#3E7A4C" strokeWidth="1.2" />
                  <rect x="150" y="32" width="55" height="16" rx="4" fill="#3E7A4C" opacity="0.15" stroke="#3E7A4C" strokeWidth="1.2" />
                  <rect x="150" y="52" width="55" height="16" rx="4" fill="#3E7A4C" opacity="0.15" stroke="#3E7A4C" strokeWidth="1.2" />
                  <rect x="150" y="72" width="55" height="16" rx="4" fill="#3E7A4C" opacity="0.15" stroke="#3E7A4C" strokeWidth="1.2" />
                  <rect x="150" y="92" width="55" height="14" rx="4" fill="#3E7A4C" opacity="0.15" stroke="#3E7A4C" strokeWidth="1.2" />
                  <line x1="240" y1="10" x2="240" y2="100" stroke="#C9D0C9" strokeWidth="1.5" />
                  <rect x="270" y="45" width="60" height="26" rx="6" fill="#C15C2E" opacity="0.12" stroke="#C15C2E" strokeWidth="1.5" />
                  <line x1="335" y1="58" x2="365" y2="58" stroke="#C15C2E" strokeWidth="1.5" />
                  <line x1="358" y1="50" x2="358" y2="66" stroke="#C15C2E" strokeWidth="2" />
                </svg>
                <div className="diagram-caption">From discovery to delivery, we connect your goals to measurable outcomes.</div>
              </div>
              <ul className="dash" style={{ marginTop: 24 }}>
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

export function makeMetadata(title: string, description: string, slug?: string): Metadata {
  return {
    title,
    description,
    alternates: slug ? { canonical: `/${slug}` } : undefined,
    openGraph: {
      title: `${title} | Let's Talk Agriculture`,
      description,
      url: slug ? `https://letstalkagriculture.com/${slug}` : undefined,
    },
  };
}
