import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { Reveal } from '@/components/reveal';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Get in touch with Let's Talk Agriculture — book a discovery call or send us an enquiry. We help organizations across Africa's agriculture and food systems communicate their work.",
  keywords: [
    'contact Let\'s Talk Agriculture',
    'agriculture communications enquiry',
    'book discovery call agriculture',
    'agriculture consultancy contact',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Let\'s Talk Agriculture',
    description: "Book a discovery call or send us an enquiry — let's start a conversation.",
    url: 'https://letstalkagriculture.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Contact</div>
          <h1 className="serif">Let&apos;s start a conversation.</h1>
          <p>
            Whether you need strategic communications, media production, editorial content, or talent
            solutions, we&apos;d love to hear about what you&apos;re building. Send us a message or book
            a discovery call.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="wrap">
          <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
            <div>
              <h2 className="section-title serif" style={{ fontSize: 24 }}>Send an enquiry</h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="section-title serif" style={{ fontSize: 24 }}>Other ways to reach us</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div>
                  <div className="g-label">Email</div>
                  <a href="mailto:hello@letstalkagriculture.com" style={{ fontSize: 16, color: 'var(--color-navy)', textDecoration: 'none' }}>
                    hello@letstalkagriculture.com
                  </a>
                </div>
                <div>
                  <div className="g-label">Book a call</div>
                  <a href="https://coachli.co/letstalkagriculture/SV-djWAq" target="_blank" rel="noopener noreferrer" className="pill">
                    Book a Discovery Call
                  </a>
                </div>
                <div>
                  <div className="g-label">Follow us</div>
                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, color: 'var(--color-navy)' }}>LinkedIn</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, color: 'var(--color-navy)' }}>Twitter / X</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, color: 'var(--color-navy)' }}>Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </div>

      <div className="closing">
        <div className="inner">
          <h2 className="serif">Prefer to talk it through?</h2>
          <p>Book a 30-minute discovery call and we&apos;ll explore how we can help you grow.</p>
          <a href="https://coachli.co/letstalkagriculture/SV-djWAq" target="_blank" rel="noopener noreferrer" className="pill">Book a Discovery Call</a>
        </div>
      </div>
    </>
  );
}
