import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="page-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="wrap">
        <div className="eyebrow">404</div>
        <h1 className="serif">This page can&apos;t be found.</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link href="/" className="pill" style={{ marginTop: 24 }}>Back to home</Link>
      </div>
    </div>
  );
}
