import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">Let&apos;s Talk Agriculture</div>
            <p className="footer-tagline">
              A growth partner for organizations across Africa&apos;s agriculture
              and food systems.
            </p>
          </div>
          <nav aria-label="Footer services">
            <h5>Services</h5>
            <ul>
              <li><Link href="/communications">Communications</Link></li>
              <li><Link href="/media">Media</Link></li>
              <li><Link href="/editorial">Editorial</Link></li>
              <li><Link href="/talent">Talent</Link></li>
            </ul>
          </nav>
          <nav aria-label="Footer company links">
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/work">Selected Work</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
          <nav aria-label="Footer connect links">
            <h5>Connect</h5>
            <ul>
              <li><a href="https://coachli.co/letstalkagriculture/SV-djWAq" target="_blank" rel="noopener noreferrer">Book a Discovery Call</a></li>
              <li><a href="mailto:hello@letstalkagriculture.com">hello@letstalkagriculture.com</a></li>
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Let&apos;s Talk Agriculture. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
