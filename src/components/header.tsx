'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/communications', label: 'Communications' },
  { href: '/media', label: 'Media' },
  { href: '/editorial', label: 'Editorial' },
  { href: '/talent', label: 'Talent' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="masthead" role="banner">
      <div className="wrap row">
        <Link href="/" className="masthead-logo" aria-label="Let's Talk Agriculture — Home">Let&apos;s Talk Agriculture</Link>
        <nav className="desktop-nav" aria-label="Primary navigation" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontSize: 14.5, fontWeight: 500, color: 'var(--color-navy)', textDecoration: 'none' }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="pill small">Book a Discovery Call</Link>
        </nav>
        <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="wrap">
          <nav className="mobile-nav" aria-label="Mobile navigation" style={{ display: 'flex' }}>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="pill small" onClick={() => setOpen(false)} style={{ marginTop: 8 }}>
              Book a Discovery Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
