'use client';
import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState('');
  const [ok, setOk] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    // Honeypot check — bots fill hidden fields
    if (f.get('website')) { return; }
    const email = String(f.get('email') || '');
    const message = String(f.get('message') || '');
    if (!email || !message) { setStatus('Please complete your email and message.'); setOk(false); return; }
    setStatus('Sending...');
    setOk(false);
    try {
      const r = await fetch('/send.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: String(f.get('name') || ''),
          email,
          subject: String(f.get('subject') || ''),
          message,
        }),
      });
      const d = await r.json();
      if (r.ok) {
        setStatus('Thank you. Your enquiry has been sent.');
        setOk(true);
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        setStatus(d.error || 'Unable to send your enquiry. Please try again.');
        setOk(false);
      }
    } catch {
      setStatus('Unable to send your enquiry. Please try again.');
      setOk(false);
    }
  }

  return (
    <form onSubmit={submit} className="contact-form" aria-label="Contact form" noValidate>
      <label htmlFor="cf-name">Name</label>
      <input id="cf-name" name="name" type="text" autoComplete="name" />

      <label htmlFor="cf-email">Email</label>
      <input id="cf-email" type="email" name="email" required autoComplete="email" />

      <label htmlFor="cf-subject">Subject</label>
      <input id="cf-subject" name="subject" type="text" autoComplete="off" />

      <label htmlFor="cf-message">Message</label>
      <textarea id="cf-message" name="message" required rows={4} />

      {/* Honeypot field — hidden from users, catches bots */}
      <input type="text" name="website" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button type="submit" className="pill">Send an Enquiry</button>
      {status && <p className={`status ${ok ? 'ok' : 'err'}`} role="status" aria-live="polite">{status}</p>}
    </form>
  );
}
