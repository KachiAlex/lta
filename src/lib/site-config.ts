export const siteConfig = {
  name: "Let's Talk Agriculture",
  url: 'https://letstalkagriculture.com',
  ogImage: '/og-image.png',
  description:
    "Let's Talk Agriculture is a growth partner for organizations across Africa's agriculture and food systems — strategic communications, media, editorial, and talent.",
  tagline: 'Growth partner for African agriculture and food systems',
  email: 'hello@letstalkagriculture.com',
  bookingUrl: 'https://coachli.co/letstalkagriculture/SV-djWAq',
  social: {
    linkedin: 'https://www.linkedin.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
  },
  services: [
    { slug: 'communications', name: 'Communications' },
    { slug: 'media', name: 'Media' },
    { slug: 'editorial', name: 'Editorial — Roots & Reach' },
    { slug: 'talent', name: 'Talent — LTA Talent' },
  ],
};

export type SiteConfig = typeof siteConfig;
