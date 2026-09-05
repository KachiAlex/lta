import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal, Stagger } from '@/components/reveal';

export const metadata: Metadata = {
  title: "Let's Talk Agriculture | Growth partner for African agriculture",
  description: "A growth partner for organizations across Africa's agriculture and food systems — strategic communications, media, editorial, and talent.",
};

const services = [
  { href: '/communications', label: 'Communications', desc: 'Strategic communications advisory that strengthens visibility and engages stakeholders.' },
  { href: '/media', label: 'Media', desc: 'Media production and placement that puts your work in front of the right audiences.' },
  { href: '/editorial', label: 'Editorial', desc: 'Roots & Reach — editorial content that communicates your work with clarity and credibility.' },
  { href: '/talent', label: 'Talent', desc: 'LTA Talent — connecting agriculture and food systems organizations with the right people.' },
];

const clients = ['MEDA', 'Mercy Corps AgriFin', 'FoodChain ID', 'AGRA', 'IFAD', 'GIZ', 'USAID', 'AFDB'];

const testimonials = [
  {
    quote: "Let's Talk Agriculture transformed how we communicate our impact. Their strategic approach helped us reach new audiences and strengthen our credibility with donors.",
    author: 'Programme Director',
    role: 'International Development Organization',
  },
  {
    quote: "The media work was exceptional. They understood our mission and produced content that resonated with both technical and general audiences across Africa.",
    author: 'Communications Lead',
    role: 'Agritech Company',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="wrap">
          <div className="eyebrow">Growth Partner &middot; African Agriculture &amp; Food Systems</div>
          <h1 className="serif">
            Strategic communications for agriculture{' '}
            <span className="underline-wrap">
              and food systems
              <svg viewBox="0 0 300 16" preserveAspectRatio="none">
                <path d="M2 10 Q 75 2, 150 8 T 298 6" stroke="#C15C2E" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p>
            Helping organizations strengthen visibility, engage stakeholders, and communicate
            their work with clarity and credibility.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
            <a href="https://coachli.co/letstalkagriculture/SV-djWAq" target="_blank" rel="noopener noreferrer" className="pill">
              Book a Discovery Call
            </a>
            <Link href="/work" className="pill ghost">View Our Work</Link>
          </div>

          {/* STAT STRIP */}
          <div className="stat-strip">
            <div>
              <span className="num serif">Four</span>
              <div className="cap">service lines</div>
              <div className="sub">Communications, Media, Editorial &amp; Talent — covering the full growth cycle.</div>
            </div>
            <div>
              <span className="num serif">25+</span>
              <div className="cap">engagements delivered</div>
              <div className="sub">Across agribusiness, agritech, development programmes and industry bodies.</div>
            </div>
            <div>
              <span className="num serif">Africa</span>
              <div className="cap">is our focus</div>
              <div className="sub">An Africa-focused specialist covering all four service areas together.</div>
            </div>
          </div>
        </div>
      </div>

      {/* AT A GLANCE */}
      <div className="section">
        <div className="wrap">
          <Reveal><h2 className="section-title serif">What we do</h2></Reveal>
          <Stagger className="service-grid">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="service-card" style={{ textDecoration: 'none' }}>
                <div className="icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3>{s.label}</h3>
                <p>{s.desc}</p>
                <span className="pill small ghost">Learn more</span>
              </Link>
            ))}
          </Stagger>
        </div>
      </div>

      {/* CLIENTS */}
      <div className="section band">
        <div className="wrap">
          <Reveal><h2 className="section-title serif">Organizations we work with</h2></Reveal>
          <Stagger className="client-grid">
            {clients.map((c) => (
              <div key={c} className="client-logo">{c}</div>
            ))}
          </Stagger>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="section">
        <div className="wrap">
          <Reveal><h2 className="section-title serif">What clients say</h2></Reveal>
          <Stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }} className="">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="author">{t.author}</div>
                <div className="role">{t.role}</div>
              </div>
            ))}
          </Stagger>
        </div>
      </div>

      {/* CLOSING CTA */}
      <div className="closing">
        <div className="inner">
          <h2 className="serif">Your front door is solid. Let&apos;s build a way in that works without you.</h2>
          <p>
            Whether you need strategic communications, media production, editorial content, or talent
            solutions, we help you reach the right people with the right message. Let&apos;s talk about
            what you need.
          </p>
          <Link href="/contact" className="pill">Start a conversation</Link>
        </div>
        <figure>
          <svg viewBox="0 0 900 320" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
            <defs>
              <radialGradient id="glow" cx="50%" cy="35%" r="55%">
                <stop offset="0%" stopColor="#F4EBC8" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#1A3A34" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0C2320" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="900" height="320" fill="#0C2320" />
            <path d="M0 150 Q 225 130 450 148 T 900 138 V320 H0 Z" fill="#16332D" />
            <rect x="0" y="145" width="900" height="8" fill="#D9D6C0" opacity="0.4" />
            <rect width="900" height="320" fill="url(#glow)" />
            <g fill="#0A1E1A">
              <g transform="translate(0,150)"><rect width="330" height="170" /></g>
              <g transform="translate(570,150)"><rect width="330" height="170" /></g>
            </g>
            <path d="M310 320 L450 175 L470 175 L560 320 Z" fill="#C15C2E" opacity="0.9" />
            <g>
              <circle cx="290" cy="270" r="7" fill="#F4B860" /><line x1="290" y1="277" x2="290" y2="300" stroke="#4A4A3E" strokeWidth="3" />
              <circle cx="340" cy="250" r="7" fill="#F4B860" /><line x1="340" y1="257" x2="340" y2="285" stroke="#4A4A3E" strokeWidth="3" />
              <circle cx="380" cy="230" r="6" fill="#F4B860" /><line x1="380" y1="236" x2="380" y2="260" stroke="#4A4A3E" strokeWidth="3" />
              <circle cx="420" cy="210" r="6" fill="#F4B860" /><line x1="420" y1="216" x2="420" y2="238" stroke="#4A4A3E" strokeWidth="3" />
              <circle cx="480" cy="210" r="6" fill="#F4B860" /><line x1="480" y1="216" x2="480" y2="238" stroke="#4A4A3E" strokeWidth="3" />
              <circle cx="520" cy="230" r="6" fill="#F4B860" /><line x1="520" y1="236" x2="520" y2="260" stroke="#4A4A3E" strokeWidth="3" />
              <circle cx="560" cy="250" r="7" fill="#F4B860" /><line x1="560" y1="257" x2="560" y2="285" stroke="#4A4A3E" strokeWidth="3" />
              <circle cx="610" cy="270" r="7" fill="#F4B860" /><line x1="610" y1="277" x2="610" y2="300" stroke="#4A4A3E" strokeWidth="3" />
            </g>
            <g transform="translate(400,90)">
              <rect x="0" y="0" width="12" height="90" fill="#0A1E1A" />
              <rect x="128" y="0" width="12" height="90" fill="#0A1E1A" />
              <rect x="8" y="8" width="128" height="76" fill="#132420" stroke="#0A1E1A" strokeWidth="4" />
            </g>
          </svg>
        </figure>
      </div>
    </>
  );
}
