import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://letstalkagriculture.com';
  const now = new Date();

  const routes: { path: string; priority: number; changeFrequency: 'monthly' | 'weekly' }[] = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/communications', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/media', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/editorial', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/talent', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/work', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
