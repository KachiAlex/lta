'use client';
import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState('');
  const [ok, setOk] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
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
    <form onSubmit={submit} className="contact-form">
      <label>Name<input name="name" type="text" /></label>
      <label>Email<input type="email" name="email" required /></label>
      <label>Subject<input name="subject" type="text" /></label>
      <label>Message<textarea name="message" required rows={4} /></label>
      <button type="submit" className="pill">Send an Enquiry</button>
      {status && <p className={`status ${ok ? 'ok' : 'err'}`} role="status">{status}</p>}
    </form>
  );
}
