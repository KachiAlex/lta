import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Let's Talk Agriculture | Growth partner for African agriculture",
  description: "Let's Talk Agriculture is a growth partner for organizations across Africa's agriculture and food systems — communications, media, editorial, and talent.",
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Link href="/contact" className="fab">Start a conversation</Link>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
