import type { Metadata } from 'next';
import { ServicePage, makeMetadata } from '@/components/service-page';

export const metadata: Metadata = makeMetadata(
  'Editorial — Roots & Reach',
  'Editorial content services for African agriculture and food systems organizations.',
  'editorial'
);

export default function EditorialPage() {
  return (
    <ServicePage
      data={{
        slug: 'editorial',
        title: 'Editorial — Roots & Reach',
        tagline: 'Editorial content that communicates your work with clarity and credibility.',
        description:
          'Roots & Reach is our editorial service line. We research, write, and edit content that makes complex agricultural and food systems work accessible to the audiences who need to understand it.',
        offerings: [
          { title: 'Industry Reports', desc: 'Flagship research reports that position your organization as a thought leader.' },
          { title: 'Thought Leadership', desc: 'Articles, op-eds, and commentary that shape conversations in your sector.' },
          { title: 'Case Studies', desc: 'Detailed case studies that demonstrate your impact and approach.' },
          { title: 'Content Strategy', desc: 'Editorial calendars and content frameworks that keep your messaging consistent.' },
        ],
      }}
    />
  );
}
