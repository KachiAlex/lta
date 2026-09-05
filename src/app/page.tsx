import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal, Stagger } from '@/components/reveal';

export const metadata: Metadata = {
  title: {
    default: "Let's Talk Agriculture | Growth partner for African agriculture",
    template: `%s | Let's Talk Agriculture`,
  },
  description: "A growth partner for organizations across Africa's agriculture and food systems — strategic communications, media, editorial, and talent solutions.",
  keywords: [
    'African agriculture communications',
    'agritech media Africa',
    'agriculture editorial content',
    'agriculture talent recruitment Africa',
    'food systems strategic communications',
    'agribusiness growth partner',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: "Let's Talk Agriculture | Growth partner for African agriculture",
    description: "A growth partner for organizations across Africa's agriculture and food systems — strategic communications, media, editorial, and talent solutions.",
    url: 'https://letstalkagriculture.com',
    siteName: "Let's Talk Agriculture",
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Let's Talk Agriculture | Growth partner for African agriculture",
    description: "Strategic communications, media, editorial, and talent for Africa's agriculture and food systems.",
  },
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

const glanceCards = [
  { label: 'Who you serve', lede: '', body: 'Organizations across African agriculture and food systems: agribusinesses, agritech, development programmes and industry bodies.', body2: 'Named clients like MEDA, Mercy Corps AgriFin and FoodChain ID split into donor-funded programmes and private-sector founders.', src: 'Our client roster' },
  { label: 'How we sell', lede: 'Sales-led, and rightly so.', body: 'Every path leads to a human: discovery calls, contact forms, and direct outreach. No self-serve signup, which is correct for negotiated advisory work.', src: 'How we work' },
  { label: 'Your stage', lede: 'Established and growing.', body: 'Named client roster, attributed testimonials, four packaged service lines. A repeatable model with a track record across the continent.', src: 'Our engagements' },
  { label: 'Our positioning', lede: '', body: 'We lead with "growth partner" on the homepage — covering communications, media, editorial and talent under one roof.', body2: 'An Africa-focused specialist, not a global generalist.', src: 'Homepage', span: 'row2' },
  { label: 'Our reach', lede: '', body: 'Eight client logos and two testimonials sit on our homepage. Our work spans agribusiness, agritech, development and policy.', src: 'Client list', span: 'row2b' },
  { label: 'What customers say', lede: 'Both testimonials praise our Communications and Media work.', body: 'Clients highlight our strategic approach, our understanding of African agriculture, and our ability to reach both technical and general audiences.', src: 'Testimonials', span: 'rowfull' },
];

const quickWins = [
  { title: 'One discovery call, one destination.', desc: 'Every "Book a Discovery Call" button leads to the same place — a simple 30-minute conversation to explore how we can help.' },
  { title: 'One name for what we do.', desc: 'We are a growth partner for African agriculture and food systems. Communications, media, editorial, and talent — under one roof.' },
  { title: 'Measurable results, every engagement.', desc: 'From stakeholder engagement metrics to media reach numbers, we track outcomes so you can see the impact of our work.' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">Growth Partner &middot; African Agriculture &amp; Food Systems</p>
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

          {/* BLEED FIGURE — agricultural landscape SVG */}
          <figure className="bleed-figure">
            <svg viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block', borderRadius: 2 }}>
              <rect width="900" height="300" fill="#ECE8D6" />
              <path d="M0 150 Q 225 130 450 148 T 900 140 V300 H0 Z" fill="#4C5E56" opacity="0.55" />
              <rect x="0" y="120" width="900" height="30" fill="#DDD9C4" />
              <line x1="0" y1="128" x2="900" y2="126" stroke="#B9B49A" strokeWidth="2" strokeDasharray="10 10" />
              <line x1="0" y1="142" x2="900" y2="140" stroke="#B9B49A" strokeWidth="2" strokeDasharray="10 10" />
              <g fill="#233833">
                <g transform="translate(60,130) scale(0.8)"><circle cx="0" cy="10" r="6" /><circle cx="20" cy="10" r="6" /><rect x="4" y="-4" width="12" height="12" /></g>
                <g transform="translate(150,124) scale(0.8)"><circle cx="0" cy="10" r="6" /><circle cx="20" cy="10" r="6" /><rect x="4" y="-4" width="12" height="12" /><rect x="-14" y="-8" width="14" height="10" fill="#C15C2E" /></g>
                <g transform="translate(560,120) scale(0.8)"><circle cx="0" cy="10" r="6" /><circle cx="20" cy="10" r="6" /><rect x="4" y="-4" width="12" height="12" /></g>
                <g transform="translate(650,132) scale(0.8)"><circle cx="0" cy="10" r="6" /><circle cx="20" cy="10" r="6" /><rect x="4" y="-4" width="12" height="12" /></g>
                <g transform="translate(730,118) scale(0.8)"><circle cx="0" cy="10" r="6" /><circle cx="20" cy="10" r="6" /><rect x="4" y="-4" width="12" height="12" /><rect x="-14" y="-10" width="16" height="12" fill="#8C6A45" /></g>
                <g transform="translate(820,128) scale(0.8)"><circle cx="0" cy="10" r="6" /><circle cx="20" cy="10" r="6" /><rect x="4" y="-4" width="12" height="12" /></g>
              </g>
              <path d="M0 300 L360 300 L430 150 L 400 150 L 340 300 Z" fill="#C15C2E" opacity="0.85" />
              <path d="M900 300 L540 300 L470 150 L500 150 L 560 300 Z" fill="#C15C2E" opacity="0.85" />
              <g>
                <rect x="0" y="150" width="330" height="150" fill="#DED6B0" />
                <rect x="570" y="150" width="330" height="150" fill="#DED6B0" />
                <g stroke="#C15C2E" strokeWidth="3" opacity="0.9">
                  <g transform="translate(20,170)"><line x1="0" y1="0" x2="0" y2="40" /><ellipse cx="0" cy="0" rx="6" ry="14" /></g>
                  <g transform="translate(60,190)"><line x1="0" y1="0" x2="0" y2="50" /><ellipse cx="0" cy="0" rx="6" ry="14" /></g>
                  <g transform="translate(110,175)"><line x1="0" y1="0" x2="0" y2="45" /><ellipse cx="0" cy="0" rx="6" ry="14" /></g>
                  <g transform="translate(160,200)"><line x1="0" y1="0" x2="0" y2="55" /><ellipse cx="0" cy="0" rx="6" ry="14" /></g>
                  <g transform="translate(210,180)"><line x1="0" y1="0" x2="0" y2="48" /><ellipse cx="0" cy="0" rx="6" ry="14" /></g>
                  <g transform="translate(260,205)"><line x1="0" y1="0" x2="0" y2="55" /><ellipse cx="0" cy="0" rx="6" ry="14" /></g>
                  <g transform="translate(600,175)"><line x1="0" y1="0" x2="0" y2="45" /><ellipse cx="0" cy="0" rx="6" ry="14" /></g>
                  <g transform="translate(650,195)"><line x1="0" y1="0" x2="0" y2="52" /><ellipse cx="0" cy="0" rx="6" ry="14" /></g>
                  <g transform="translate(700,178)"><line x1="0" y1="0" x2="0" y2="46" /><ellipse cx="0" cy="0" rx="6" ry="14" /></g>
                  <g transform="translate(750,205)"><line x1="0" y1="0" x2="0" y2="55" /><ellipse cx="0" cy="0" rx="6" ry="14" /></g>
                  <g transform="translate(800,182)"><line x1="0" y1="0" x2="0" y2="47" /><ellipse cx="0" cy="0" rx="6" ry="14" /></g>
                  <g transform="translate(850,200)"><line x1="0" y1="0" x2="0" y2="52" /><ellipse cx="0" cy="0" rx="6" ry="14" /></g>
                </g>
              </g>
              <g transform="translate(410,60)">
                <line x1="20" y1="0" x2="20" y2="95" stroke="#8B6A45" strokeWidth="6" />
                <rect x="-14" y="-6" width="68" height="34" fill="#E4D9B8" stroke="#8B6A45" strokeWidth="3" transform="rotate(-6 20 10)" />
              </g>
              <g transform="translate(400,150)">
                <rect x="0" y="-100" width="14" height="130" fill="#233833" />
                <rect x="150" y="-100" width="14" height="130" fill="#233833" />
                <g stroke="#C15C2E" strokeWidth="8" fill="none">
                  <rect x="10" y="-92" width="146" height="120" fill="#D98B54" stroke="#C15C2E" />
                  <line x1="10" y1="-72" x2="156" y2="-72" />
                  <line x1="10" y1="-42" x2="156" y2="-42" />
                  <line x1="10" y1="-12" x2="156" y2="-12" />
                  <line x1="14" y1="-88" x2="152" y2="24" />
                </g>
              </g>
            </svg>
          </figure>

          {/* TWO-COL with best-move callout */}
          <div className="two-col">
            <p>We help organizations across Africa&apos;s agriculture and food systems strengthen visibility, engage stakeholders, and communicate their work with clarity and credibility — through four service lines that cover the full growth cycle.</p>
            <div>
              <p>From agribusinesses to development programmes, we bring Africa-focused expertise that global generalists can&apos;t match.</p>
              <p className="serif best-move">Your best move: let your work speak — clearly, consistently, and to the right people.</p>
            </div>
          </div>

          {/* STAT STRIP */}
          <div className="stat-strip" role="list">
            <div role="listitem">
              <span className="num serif">Four</span>
              <div className="cap">service lines</div>
              <div className="sub">Communications, Media, Editorial &amp; Talent — covering the full growth cycle.</div>
            </div>
            <div role="listitem">
              <span className="num serif">25+</span>
              <div className="cap">engagements delivered</div>
              <div className="sub">Across agribusiness, agritech, development programmes and industry bodies.</div>
            </div>
            <div role="listitem">
              <span className="num serif">Africa</span>
              <div className="cap">is our focus</div>
              <div className="sub">An Africa-focused specialist covering all four service areas together.</div>
            </div>
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="section">
        <div className="wrap">
          <Reveal><h2 className="section-title serif">Let&apos;s Talk Agriculture at a glance</h2></Reveal>
          <Stagger className="glance-grid">
            {glanceCards.map((c) => (
              <div key={c.label} className={`g-card ${c.span || ''}`}>
                <div className="g-label">{c.label}</div>
                {c.lede && <div className="g-lede">{c.lede}</div>}
                <div className="g-body" style={{ fontWeight: c.lede ? 400 : 600, color: c.lede ? '#3E463F' : 'var(--color-ink)' }}>{c.body}</div>
                {c.body2 && <div className="g-body">{c.body2}</div>}
                <div className="g-src">({c.src})</div>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* BAND TRANSITION */}
      <div className="band">
        <div className="wrap" style={{ padding: '70px 0 40px' }}>
          <Reveal><h2 className="section-title serif">Four ways<br />we help you grow</h2></Reveal>
          <Reveal delay={100}><p>Your front door is solid. These build a way in that works without you posting.</p></Reveal>
        </div>
      </div>

      {/* NUMBERED RECOMMENDATION SECTIONS */}
      <div className="wrap">
        {/* REC 1 — Communications */}
        <div className="rec">
          <div className="rec-num serif">1</div>
          <div className="rec-inner">
            <Reveal><h3 className="serif">Strategic communications that strengthen visibility and engage stakeholders.</h3></Reveal>
            <div className="rec-grid">
              <Reveal delay={100}>
                <p className="rec-body">We develop comprehensive communications strategies for organizations across Africa&apos;s agriculture and food systems — from donor-funded programmes to agritech startups. Our approach is practical, measurable, and aligned with your goals.</p>
                <div className="stat-boxes">
                  <div className="stat-box">
                    <span className="n serif">40%</span>
                    <span className="t">average increase in stakeholder engagement.</span>
                  </div>
                  <div className="stat-box">
                    <span className="n serif">3</span>
                    <span className="t">countries covered in a single programme.</span>
                  </div>
                </div>
                <ul className="dash">
                  <li>Communications strategy development</li>
                  <li>Stakeholder mapping and engagement</li>
                  <li>Crisis communications support</li>
                </ul>
              </Reveal>
              <Reveal delay={200}>
                <div className="next-box">
                  <span className="next-label">What we do:</span>
                  <h4 className="serif">From strategy to execution, we help you reach the right people.</h4>
                  <ol>
                    <li>Discovery: We understand your goals, audience, and context.</li>
                    <li>Strategy: We craft a practical plan aligned with your objectives.</li>
                    <li>Execution: We deliver with measurable outcomes.</li>
                  </ol>
                  <div className="cta-line">Explore our communications services.</div>
                  <Link href="/communications" className="pill">Learn more</Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* REC 2 — Media */}
        <div className="rec">
          <div className="rec-num serif">2</div>
          <div className="rec-inner">
            <Reveal><h3 className="serif">Media production and placement that puts your work in front of the right audiences.</h3></Reveal>
            <div className="rec-grid">
              <Reveal delay={100}>
                <p className="rec-body">From documentary series to product launch campaigns, we produce media content that resonates with both technical and general audiences across Africa. We handle production, placement, and distribution across digital and traditional channels.</p>
                <div className="stat-boxes">
                  <div className="stat-box">
                    <span className="n serif">500K</span>
                    <span className="t">farmers reached in a single campaign.</span>
                  </div>
                  <div className="stat-box">
                    <span className="n serif">6</span>
                    <span className="t">part documentary series, broadcast nationally.</span>
                  </div>
                </div>
                <ul className="dash">
                  <li>Documentary and video production</li>
                  <li>Media placement and distribution</li>
                  <li>Digital content campaigns</li>
                </ul>
              </Reveal>
              <Reveal delay={200}>
                <div className="next-box">
                  <span className="next-label">What we do:</span>
                  <h4 className="serif">Content that moves your audience, on the channels they already use.</h4>
                  <ol>
                    <li>Concept: We develop the story and format.</li>
                    <li>Production: We film, edit, and polish.</li>
                    <li>Distribution: We place it where your audience is.</li>
                  </ol>
                  <div className="cta-line">Explore our media services.</div>
                  <Link href="/media" className="pill">Learn more</Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* REC 3 — Editorial */}
        <div className="rec">
          <div className="rec-num serif">3</div>
          <div className="rec-inner">
            <Reveal><h3 className="serif">Roots &amp; Reach — editorial content that communicates your work with clarity and credibility.</h3></Reveal>
            <div className="rec-grid">
              <Reveal delay={100}>
                <p className="rec-body">We research, write, and edit flagship reports, thought leadership pieces, and editorial content that positions your organization as a credible voice in African agriculture and food systems.</p>
                <div className="stat-boxes">
                  <div className="stat-box">
                    <span className="n serif">2,000+</span>
                    <span className="t">policymakers reached with a single report.</span>
                  </div>
                  <div className="stat-box">
                    <span className="n serif">4</span>
                    <span className="t">service lines covered with editorial expertise.</span>
                  </div>
                </div>
                <ul className="dash">
                  <li>Industry reports and white papers</li>
                  <li>Thought leadership articles</li>
                  <li>Editorial strategy and content calendars</li>
                </ul>
              </Reveal>
              <Reveal delay={200}>
                <div className="next-box">
                  <span className="next-label">What we do:</span>
                  <h4 className="serif">We turn your expertise into content that policymakers and practitioners read.</h4>
                  <ol>
                    <li>Research: We dig into the data and the context.</li>
                    <li>Write: We craft clear, quotable, authoritative content.</li>
                    <li>Distribute: We get it to the people who matter.</li>
                  </ol>
                  <div className="cta-line">Explore our editorial services.</div>
                  <Link href="/editorial" className="pill">Learn more</Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* REC 4 — Talent */}
        <div className="rec">
          <div className="rec-num serif">4</div>
          <div className="rec-inner">
            <Reveal><h3 className="serif">LTA Talent — connecting agriculture and food systems organizations with the right people.</h3></Reveal>
            <div className="rec-grid">
              <Reveal delay={100}>
                <p className="rec-body">We help organizations find the right talent across Africa&apos;s growing agriculture sector — from senior leadership to specialized roles. Our network spans agribusiness, agritech, development, and policy.</p>
                <div className="stat-boxes">
                  <div className="stat-box">
                    <span className="n serif">8</span>
                    <span className="t">weeks to place an operations director.</span>
                  </div>
                  <div className="stat-box">
                    <span className="n serif">100%</span>
                    <span className="t">retention rate on placed candidates.</span>
                  </div>
                </div>
                <ul className="dash">
                  <li>Executive search and recruitment</li>
                  <li>Talent strategy and planning</li>
                  <li>Interim placements</li>
                </ul>
              </Reveal>
              <Reveal delay={200}>
                <div className="next-box">
                  <span className="next-label">What we do:</span>
                  <h4 className="serif">We find people who understand African agriculture, not just the job description.</h4>
                  <ol>
                    <li>Scope: We define the role and the ideal profile.</li>
                    <li>Search: We tap our network across the continent.</li>
                    <li>Place: We shortlist, interview, and support onboarding.</li>
                  </ol>
                  <div className="cta-line">Explore our talent services.</div>
                  <Link href="/talent" className="pill">Learn more</Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* CLIENTS */}
      <section className="section band">
        <div className="wrap">
          <Reveal><h2 className="section-title serif">Organizations we work with</h2></Reveal>
          <Stagger className="client-grid">
            {clients.map((c) => (
              <div key={c} className="client-logo">{c}</div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
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

          {/* QUOTE CARD */}
          <Reveal delay={200}>
            <div className="quote-card">
              <div className="dots"></div>
              <div>Africa-focused specialists covering all four service areas: <span className="big serif">one.</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUICK WINS */}
      <section className="section">
        <div className="wrap">
          <Reveal><h2 className="section-title serif">Why organizations choose us</h2></Reveal>
          <Stagger className="qw-grid">
            {quickWins.map((q) => (
              <div key={q.title} className="qw-card">
                <svg width="34" height="24" viewBox="0 0 34 24"><path d="M2 12 H22 M22 12 L30 4 M22 12 L30 20" stroke="#C15C2E" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <h4>{q.title}</h4>
                <p>{q.desc}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="method">
        <div className="wrap">
          <div className="method-inner">
            <div className="brace">
              <svg viewBox="0 0 20 300" preserveAspectRatio="none">
                <path d="M14 2 Q2 2 2 40 L2 130 Q2 150 -4 150 Q2 150 2 170 L2 260 Q2 298 14 298" stroke="#3E7A4C" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div>
              <div className="method-label">Our approach</div>
              <p>We work with organizations across Africa&apos;s agriculture and food systems, drawing on deep sector knowledge, a network of practitioners, and a track record of delivering across communications, media, editorial, and talent.</p>
              <p>Every engagement starts with understanding your goals and context. We then craft a practical plan, execute with measurable outcomes, and ensure the work continues to deliver after we hand off. Our clients include agribusinesses, agritech startups, development programmes, and industry bodies — each with different needs, each served with the same Africa-focused expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="closing">
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
      </section>
    </>
  );
}
