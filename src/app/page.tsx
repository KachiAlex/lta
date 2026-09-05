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
  { label: 'Who you serve', lede: '', body: 'Organizations across African agriculture and food systems: agribusinesses, agritech, development programmes and industry bodies.', body2: 'Named clients like MEDA, Mercy Corps AgriFin and FoodChain ID split into donor-funded programmes and private-sector founders. Both show up in your proof.', src: 'your homepage' },
  { label: 'How you sell', lede: 'Sales-led, and rightly so.', body: 'Every path leads to a human: "Work With Us," "Book a Discovery Call," "Contact Us." No self-serve signup, which is correct for negotiated advisory work.', src: 'homepage' },
  { label: 'Your stage', lede: 'Early but real.', body: 'Small team, named client roster, two attributed testimonials, four packaged service lines. That\'s the start of a repeatable model. What\'s missing is a way for strangers to find you.', src: 'homepage' },
  { label: 'Your positioning', lede: '', body: 'You lead with "growth partner" on the homepage, while your indexed pages and LinkedIn still say "strategic communications advisory."', body2: 'Two labels live at once.', src: 'homepage, LinkedIn', span: 'row2' },
  { label: 'Your search footprint', lede: '', body: 'You rank for exactly one Google keyword, and it\'s unrelated to your services.', body2: 'Your brand name draws too little search to register.', src: 'SEO keyword source', span: 'row2b' },
  { label: 'What customers say', lede: 'Both testimonials praise your Communications and Media work.', body: 'Neither mentions Editorial or Talent, which you advertise with equal weight. No G2 profile exists (the result there is a different, same-named product).', src: 'homepage, G2', span: 'rowfull' },
];

const quickWins = [
  { title: 'Make "Book a Discovery Call" go to one place.', desc: 'The same button leads to your contact page in the hero and your Calendly at the bottom. Same words, two destinations. Pick one, likely Calendly.', cta: 'Flag the spots to change', link: '#' },
  { title: 'Pick one name for what you do.', desc: 'Your homepage says "growth partner"; LinkedIn and your indexed pages say "strategic communications advisory." Choose one everywhere.', cta: 'Draft the corrected line', link: '#' },
  { title: 'Confirm your analytics is actually running.', desc: 'My scan found no recognized analytics on your homepage. That check can\'t see everything, but without measurement you can\'t tell whether the podcast or the feed produces anything.', cta: 'Tell me what to look for', link: '#' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">Growth Grader &middot; Let&apos;s Talk Agriculture &middot; August 2026</p>
          <h1 className="serif">
            Your homepage does its job. The problem is that almost nobody outside{' '}
            <span className="underline-wrap">
              your own feed
              <svg viewBox="0 0 300 16" preserveAspectRatio="none">
                <path d="M2 10 Q 75 2, 150 8 T 298 6" stroke="#C15C2E" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>{' '}
            can find you.
          </h1>
          <p>
            Good news first, because it&apos;s real. A stranger landing on your homepage knows within seconds what you sell, who it&apos;s for, and what you promise: a growth partner for African agriculture and food systems, with four named service lines. Eight client logos and two testimonials sit right above your &quot;Book a Discovery Call.&quot; That&apos;s proof in the right place.
          </p>

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
                <g fill="#8B9E7C">
                  <g id="cropA"></g>
                </g>
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
            <p>The trouble is discovery. Your domain ranks for one search term, &quot;agriculture chat rooms,&quot; which has nothing to do with anything you sell. Your brand name draws too little search to register. And when I asked an AI assistant eight questions your customers actually ask, it named 25 firms and never mentioned you.</p>
            <div>
              <p>So the only live routes to you are the founder&apos;s LinkedIn and the podcast, and both stop the day the posting stops.</p>
              <p className="serif best-move">Your best move: build one channel that keeps working while you sleep.</p>
            </div>
          </div>

          {/* STAT STRIP */}
          <div className="stat-strip" role="list">
            <div role="listitem">
              <span className="num serif">Eight</span>
              <div className="cap">client logos and two testimonials</div>
              <div className="sub">sit right above your &quot;Book a Discovery Call.&quot;</div>
            </div>
            <div role="listitem">
              <span className="num serif">one</span>
              <div className="cap">search term, &quot;agriculture chat rooms,&quot;</div>
              <div className="sub">which has nothing to do with anything you sell.</div>
            </div>
            <div role="listitem">
              <span className="num serif">eight</span>
              <div className="cap">questions your customers actually ask</div>
              <div className="sub">it named 25 firms and never mentioned you.</div>
            </div>
          </div>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="section">
        <div className="wrap">
          <Reveal><h2 className="section-title serif">Let&apos;s Talk Agriculture at a glance</h2></Reveal>
          <Stagger className="glance-grid">
            <div className="g-card">
              <div className="g-label">Who you serve</div>
              <div className="g-body" style={{ fontWeight: 600, color: 'var(--color-ink)' }}>Organizations across African agriculture and food systems: agribusinesses, agritech, development programmes and industry bodies.</div>
              <div className="g-body">Named clients like MEDA, Mercy Corps AgriFin and FoodChain ID split into donor-funded programmes and private-sector founders. Both show up in your proof.</div>
              <div className="g-src">(your homepage)</div>
            </div>
            <div className="g-card">
              <div className="g-label">How you sell</div>
              <div className="g-lede">Sales-led, and rightly so.</div>
              <div className="g-body">Every path leads to a human: &quot;Work With Us,&quot; &quot;Book a Discovery Call,&quot; &quot;Contact Us.&quot; No self-serve signup, which is correct for negotiated advisory work.</div>
              <div className="g-src">(homepage)</div>
            </div>
            <div className="g-card">
              <div className="g-label">Your stage</div>
              <div className="g-lede">Early but real.</div>
              <div className="g-body">Small team, named client roster, two attributed testimonials, four packaged service lines. That&apos;s the start of a repeatable model. What&apos;s missing is a way for strangers to find you.</div>
              <div className="g-src">(homepage)</div>
            </div>
            <div className="g-card row2">
              <div className="g-label">Your positioning</div>
              <div className="g-body" style={{ fontSize: 16, color: 'var(--color-ink)' }}>You lead with{' '}<span className="circle">&quot;growth partner&quot;</span>{' '}on the homepage, while your indexed pages and LinkedIn still say{' '}<span className="circle">&quot;strategic communications advisory.&quot;</span></div>
              <div className="g-body">Two labels live at once.</div>
              <div className="g-src">(homepage, LinkedIn)</div>
            </div>
            <div className="g-card row2b">
              <div className="g-label">Your search footprint</div>
              <div className="g-body" style={{ fontSize: 16, color: 'var(--color-ink)' }}>You rank for exactly one Google keyword, and it&apos;s unrelated to your services.</div>
              <div className="g-body">Your brand name draws too little search to register.</div>
              <div className="g-src">(SEO keyword source)</div>
            </div>
            <div className="g-card rowfull">
              <div className="g-label">What customers say</div>
              <div className="g-lede">Both testimonials praise your Communications and Media work.</div>
              <div className="g-body">Neither mentions Editorial or Talent, which you advertise with equal weight. No G2 profile exists (the result there is a different, same-named product).</div>
              <div className="g-src">(homepage, G2)</div>
            </div>
          </Stagger>
        </div>
      </section>

      {/* BAND TRANSITION */}
      <div className="band">
        <div className="wrap" style={{ padding: '70px 0 40px' }}>
          <Reveal><h2 className="section-title serif">Four ways<br />to get found</h2></Reveal>
          <Reveal delay={100}><p>Your front door is solid. These build a way in that works without you posting.</p></Reveal>
        </div>
      </div>

      {/* NUMBERED RECOMMENDATION SECTIONS */}
      <div className="wrap">
        {/* REC 1 */}
        <div className="rec">
          <div className="rec-num serif">1</div>
          <div className="rec-inner">
            <Reveal><h3 className="serif">The Africa-specialist position is sitting empty. Claim it.</h3></Reveal>
            <div className="rec-grid">
              <Reveal delay={100}>
                <p className="rec-body">When I asked an assistant your customers&apos; questions, it named 25 firms across your three service areas. Almost all are global, US, or South African generalists. Not one is an Africa-focused specialist covering communications, media, editorial and talent together. That&apos;s your exact position, and nobody&apos;s holding it.</p>
                <div className="stat-boxes">
                  <div className="stat-box">
                    <span className="n serif">25</span>
                    <span className="t">firms named in AI answers to your customers&apos; questions.</span>
                    <span className="flag">You appear in none.</span>
                  </div>
                  <div className="stat-box">
                    <span className="n serif">39</span>
                    <span className="t">websites those answers cite, yours isn&apos;t one.</span>
                  </div>
                </div>
                <ul className="dash">
                  <li>The competitors named are mostly global or non-African generalists.</li>
                  <li>You rank for one Google keyword, and it&apos;s unrelated to your services.</li>
                </ul>
              </Reveal>
              <Reveal delay={200}>
                <svg viewBox="0 0 700 460" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', borderRadius: 12 }}>
                  <rect width="700" height="460" fill="#EDEADC" />
                  <g stroke="#8B9E7C" strokeWidth="18" opacity="0.5">
                    <line x1="30" y1="460" x2="180" y2="60" />
                    <line x1="150" y1="460" x2="270" y2="60" />
                    <line x1="290" y1="460" x2="360" y2="60" />
                    <line x1="700" y1="460" x2="520" y2="60" />
                    <line x1="600" y1="460" x2="450" y2="60" />
                  </g>
                  <g transform="translate(120,90)">
                    <rect x="0" y="0" width="16" height="180" fill="#8B6A45" />
                    <ellipse cx="8" cy="0" rx="20" ry="30" fill="#5E6E52" />
                  </g>
                  <g transform="translate(500,80)">
                    <rect x="0" y="0" width="16" height="190" fill="#8B6A45" />
                    <ellipse cx="8" cy="0" rx="22" ry="32" fill="#5E6E52" />
                  </g>
                  <rect x="90" y="260" width="480" height="34" rx="4" fill="#B98450" />
                  <g fill="#233833">
                    <g transform="translate(120,220)"><rect x="-14" y="0" width="28" height="42" rx="6" /><circle cx="0" cy="-14" r="15" /></g>
                    <g transform="translate(180,225)"><rect x="-14" y="0" width="28" height="42" rx="6" /><circle cx="0" cy="-14" r="15" /></g>
                    <g transform="translate(240,222)"><rect x="-14" y="0" width="28" height="42" rx="6" /><circle cx="0" cy="-14" r="15" /></g>
                    <g transform="translate(300,226)"><rect x="-14" y="0" width="28" height="42" rx="6" /><circle cx="0" cy="-14" r="15" /></g>
                    <g transform="translate(400,224)"><rect x="-14" y="0" width="28" height="42" rx="6" /><circle cx="0" cy="-14" r="15" /></g>
                    <g transform="translate(460,220)"><rect x="-14" y="0" width="28" height="42" rx="6" /><circle cx="0" cy="-14" r="15" /></g>
                    <g transform="translate(520,225)"><rect x="-14" y="0" width="28" height="42" rx="6" /><circle cx="0" cy="-14" r="15" /></g>
                  </g>
                  <g transform="translate(350,340)">
                    <path d="M-30 60 L-30 20 Q-30 0 -10 0 L10 0 Q30 0 30 20 L30 60 Z" fill="#C15C2E" />
                    <line x1="-30" y1="20" x2="30" y2="20" stroke="#A64A22" strokeWidth="3" />
                  </g>
                </svg>
              </Reveal>
            </div>

            <Reveal delay={300}>
              <div className="quote-card">
                <div className="dots"></div>
                <div>Africa-focused specialists among the 25 firms AI named: <span className="big serif">zero.</span></div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="next-box">
                <span className="next-label">What I&apos;d do next:</span>
                <h4 className="serif">Write plain-language answer pages, one per real customer question.</h4>
                <ol>
                  <li>Turn the eight questions I tested into eight page briefs.</li>
                  <li>Draft each as a direct, quotable answer that leads with your African focus.</li>
                  <li>Structure each so assistants and search engines can lift the answer cleanly.</li>
                </ol>
                <div className="cta-line">Want me to draft the first three answer pages?</div>
                <Link href="#" className="pill">Draft the answer pages</Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* REC 2 */}
        <div className="rec">
          <div className="rec-num serif">2</div>
          <div className="rec-inner">
            <Reveal><h3 className="serif">You invited the AI crawlers in, then handed them a map to nowhere.</h3></Reveal>
            <p className="rec-body">Your robots.txt does something smart: it welcomes every major AI crawler. Then the last line undoes it, pointing them to <code>Sitemap: http://localhost:4321/sitemap.xml</code>, a development leftover at an address that doesn&apos;t exist. There&apos;s no llms.txt and no structured data either.</p>

            <div className="rec-grid">
              <Reveal delay={100}>
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
                    <rect x="270" y="45" width="60" height="26" rx="6" fill="#B3452F" opacity="0.12" stroke="#B3452F" strokeWidth="1.5" />
                    <line x1="335" y1="58" x2="365" y2="58" stroke="#B3452F" strokeWidth="1.5" />
                    <line x1="358" y1="50" x2="358" y2="66" stroke="#B3452F" strokeWidth="2" />
                  </svg>
                  <div className="diagram-caption">A sitemap is how a crawler finds all your pages instead of just the one it landed on. Yours points nowhere.</div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="check-rows">
                  <div className="check-row ok"><span className="icon">&#10003;</span><span>robots.txt correctly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended and CCBot.</span></div>
                  <div className="check-row no"><span className="icon">&#10007;</span><span>The same file&apos;s sitemap line points to a local development address.</span></div>
                  <div className="check-row no"><span className="icon">&#10007;</span><span>No llms.txt exists; the URL returns a 404.</span></div>
                  <div className="check-row no"><span className="icon">&#10007;</span><span>No structured data detected on the homepage.</span></div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={300}>
              <div className="next-box">
                <span className="next-label">What I&apos;d do next:</span>
                <h4 className="serif">Prepare three files you drop straight in.</h4>
                <ol>
                  <li>Point the sitemap directive at your live sitemap.</li>
                  <li>Draft an llms.txt that lists your key pages and describes what you do.</li>
                  <li>Add homepage structured data so assistants read your offer and proof directly.</li>
                </ol>
                <div className="cta-line">Want these ready today?</div>
                <Link href="#" className="pill">Prepare the three files</Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* REC 3 */}
        <div className="rec">
          <div className="rec-num serif">3</div>
          <div className="rec-inner">
            <Reveal><h3 className="serif">Two of your four service lines have no proof behind them.</h3></Reveal>
            <div className="rec-grid">
              <Reveal delay={100}>
                <div className="table-rows">
                  <div className="table-row ok"><span>Communications</span><span className="icon">&#10003;</span></div>
                  <div className="table-row ok"><span>Media</span><span className="icon">&#10003;</span></div>
                  <div className="table-row no"><span>Editorial (Roots &amp; Reach)</span><span className="icon">&#10007;</span></div>
                  <div className="table-row no"><span>Talent (LTA Talent)</span><span className="icon">&#10007;</span></div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <p className="rec-body">You advertise four service lines with equal weight. Both testimonials speak only to Communications and Media. A prospect weighing you for editorial work or a talent search finds nothing that says you deliver there.</p>
                <ul className="dash">
                  <li>Two attributed testimonials, both about Communications and Media.</li>
                  <li>Editorial (Roots &amp; Reach) and Talent (LTA Talent) carry no customer voice.</li>
                  <li>A &quot;Selected Engagements&quot; page at /work shows you&apos;ve delivered the work.</li>
                </ul>
              </Reveal>
            </div>

            <Reveal delay={300}>
              <div className="next-box">
                <span className="next-label">What I&apos;d do next:</span>
                <h4 className="serif">Draft testimonial requests for your best Editorial and Talent clients.</h4>
                <ol>
                  <li>Identify which engagements on /work fall under Editorial and Talent.</li>
                  <li>Draft short, specific requests that ask for a one-line outcome.</li>
                  <li>Format the replies as testimonials ready to place beside those service lines.</li>
                </ol>
                <div className="cta-line">Tell me which clients to aim at.</div>
                <Link href="#" className="pill">Write the testimonial requests</Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* REC 4 */}
        <div className="rec">
          <div className="rec-num serif">4</div>
          <div className="rec-inner">
            <Reveal><h3 className="serif">There&apos;s no independent listing of you anywhere your customers look.</h3></Reveal>
            <div className="rec-grid">
              <Reveal delay={100}>
                <svg viewBox="0 0 700 460" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', borderRadius: 12 }}>
                  <rect width="700" height="460" fill="#EDE4C4" />
                  <rect x="0" y="380" width="700" height="80" fill="#DCD2AC" />
                  <polygon points="90,80 610,80 560,150 140,150" fill="#4C5E56" />
                  <rect x="120" y="150" width="460" height="220" fill="#B98450" stroke="#8B6A45" strokeWidth="6" />
                  <g>
                    <rect x="140" y="170" width="60" height="44" fill="#EDEADC" transform="rotate(-4 170 192)" />
                    <rect x="210" y="180" width="55" height="50" fill="#233833" transform="rotate(3 237 205)" />
                    <rect x="275" y="168" width="58" height="46" fill="#D98B54" transform="rotate(-2 304 191)" />
                    <rect x="345" y="182" width="55" height="48" fill="#EDEADC" transform="rotate(5 372 206)" />
                    <rect x="150" y="230" width="58" height="46" fill="#233833" transform="rotate(2 179 253)" />
                    <rect x="218" y="240" width="55" height="44" fill="#D98B54" transform="rotate(-3 245 262)" />
                    <rect x="345" y="235" width="56" height="46" fill="#233833" transform="rotate(4 373 258)" />
                    <rect x="410" y="175" width="58" height="90" fill="#F4F0E0" stroke="#C9C4A6" strokeWidth="2" />
                    <rect x="415" y="270" width="52" height="40" fill="#EDEADC" transform="rotate(-2 441 290)" />
                    <rect x="480" y="180" width="56" height="46" fill="#D98B54" transform="rotate(3 508 203)" />
                    <rect x="480" y="240" width="56" height="44" fill="#233833" transform="rotate(-4 508 262)" />
                  </g>
                  <rect x="290" y="330" width="120" height="30" fill="#EDE4C4" stroke="#B98450" strokeWidth="3" />
                  <rect x="230" y="370" width="20" height="90" fill="#8B6A45" />
                  <rect x="450" y="370" width="20" height="90" fill="#8B6A45" />
                  <rect x="60" y="380" width="70" height="60" fill="#B98450" stroke="#8B6A45" strokeWidth="4" />
                  <line x1="60" y1="400" x2="130" y2="400" stroke="#8B6A45" strokeWidth="4" />
                  <line x1="60" y1="420" x2="130" y2="420" stroke="#8B6A45" strokeWidth="4" />
                  <g transform="translate(520,360)" stroke="#233833" strokeWidth="5" fill="none">
                    <circle cx="0" cy="60" r="45" />
                    <circle cx="130" cy="60" r="45" />
                    <line x1="0" y1="60" x2="55" y2="10" />
                    <line x1="55" y1="10" x2="90" y2="10" />
                    <line x1="55" y1="10" x2="20" y2="60" />
                    <line x1="90" y1="10" x2="130" y2="60" />
                    <line x1="20" y1="60" x2="130" y2="60" />
                    <line x1="90" y1="10" x2="95" y2="-15" strokeWidth="3" />
                  </g>
                </svg>
              </Reveal>
              <Reveal delay={200}>
                <p className="rec-body">I found no directory or review-site listing for you. The firms AI answers cite sit on trade media, agency directories and job boards. Your customers, especially donor-funded ones, check independent sources before they commit.</p>
                <ul className="bullet-icon">
                  <li><span className="box x">&#10007;</span><span>No profile found for you on G2 (the result there is an unrelated product).</span></li>
                  <li><span className="box x">&#10007;</span><span>AI answers cite agency directories and African sector sites, not your domain.</span></li>
                  <li><span className="box o">&nbsp;</span><span>Directories that likely matter (Clutch, Sortlist, agri-sector associations) were never queried, so this is an opening, not a dead end.</span></li>
                </ul>
              </Reveal>
            </div>

            <Reveal delay={300}>
              <div className="next-box">
                <span className="next-label">What I&apos;d do next:</span>
                <h4 className="serif">Build a shortlist of listings worth claiming, with a ready-to-paste profile for each.</h4>
                <ol>
                  <li>Identify the directories your customers and AI answers rely on.</li>
                  <li>Write one consistent profile blurb keyed to your African specialist position.</li>
                  <li>Draft the entries so you just review and submit.</li>
                </ol>
                <div className="cta-line">Want the shortlist and the profiles?</div>
                <Link href="#" className="pill">Pull the directory shortlist</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* QUICK WINS */}
      <section className="section">
        <div className="wrap">
          <Reveal><h2 className="section-title serif">Quick wins</h2></Reveal>
          <Stagger className="qw-grid">
            <div className="qw-card">
              <svg width="34" height="24" viewBox="0 0 34 24"><path d="M2 12 H22 M22 12 L30 4 M22 12 L30 20" stroke="#C15C2E" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <h4>Make &quot;Book a Discovery Call&quot; go to one place.</h4>
              <p>The same button leads to your contact page in the hero and your Calendly at the bottom. Same words, two destinations. Pick one, likely Calendly.</p>
              <Link href="#" className="pill rust small">Flag the spots to change</Link>
            </div>
            <div className="qw-card">
              <h4>Pick one name for what you do.</h4>
              <p>Your homepage says &quot;growth partner&quot;; LinkedIn and your indexed pages say &quot;strategic communications advisory.&quot; Choose one everywhere.</p>
              <Link href="#" className="pill rust small">Draft the corrected line</Link>
            </div>
            <div className="qw-card">
              <h4>Confirm your analytics is actually running.</h4>
              <p>My scan found no recognized analytics on your homepage. That check can&apos;t see everything, but without measurement you can&apos;t tell whether the podcast or the feed produces anything.</p>
              <Link href="#" className="pill rust small">Tell me what to look for</Link>
            </div>
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
              <div className="method-label">Methodology</div>
              <p>I captured this on 21 August 2026, drawing on your homepage, robots.txt, your public records, an SEO keyword source, and an AI-answer test that ran eight questions matched to your four service lines.</p>
              <p>A few honest limits. I did not print a visitor number, because traffic models for a site this size are routinely off by ten or twenty times; your own analytics is the only trustworthy source there. The internet archive rate-limited every request, so I could not read how your positioning has changed over time. Your sitemap request failed the same way, so I could not list every page you have. The workforce data source was not licensed, so I can say nothing about your hiring direction. Trustpilot could not be reached, so your presence there is unknown rather than confirmed empty. And no domains resolved for the competitors named in AI answers, so I could not run a head-to-head. Where a finding rests on a single day or a self-reported figure, I&apos;ve treated it as directional rather than precise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="closing">
        <div className="inner">
          <h2 className="serif">Your front door is solid. Let&apos;s build a way in that works without you.</h2>
          <p>Right now your whole reach runs on the founder posting daily. Pick your top priority and I&apos;ll start: the answer pages that claim your Africa-specialist position, the three files that fix your crawler problem, or the testimonial requests for your Editorial and Talent work. I&apos;ll have first drafts back in a few hours, and there&apos;s nothing to install. (Nothing goes live without your sign-off.)</p>
          <Link href="#" className="pill">Start on my top priority</Link>
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
