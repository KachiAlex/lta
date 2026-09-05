import type { Metadata } from 'next';
import { ServicePage, makeMetadata } from '@/components/service-page';

export const metadata: Metadata = makeMetadata(
  'Communications',
  'Strategic communications advisory for African agriculture and food systems organizations.',
  'communications'
);

export default function CommunicationsPage() {
  return (
    <ServicePage
      data={{
        slug: 'communications',
        title: 'Communications',
        tagline: 'Strategic communications that strengthen visibility and engage stakeholders.',
        description:
          'We help organizations across Africa\u2019s agriculture and food systems communicate their work with clarity and credibility. From strategy to execution, we ensure your message reaches the right people in the right way.',
        offerings: [
          { title: 'Communications Strategy', desc: 'Comprehensive strategies aligned with your goals, audience, and budget.' },
          { title: 'Stakeholder Engagement', desc: 'Targeted messaging and engagement plans for donors, partners, and communities.' },
          { title: 'Crisis Communications', desc: 'Rapid-response support to manage reputational risks and stakeholder confidence.' },
          { title: 'Brand Positioning', desc: 'Clear, consistent positioning that sets you apart in Africa\u2019s agriculture sector.' },
        ],
        checklist: [
          { label: 'Communications strategy development', ok: true },
          { label: 'Stakeholder mapping and engagement', ok: true },
          { label: 'Crisis communications support', ok: true },
          { label: 'Brand positioning and messaging', ok: true },
          { label: 'Media relations', ok: true },
          { label: 'Internal communications', ok: false },
        ],
        bullets: [
          { type: 'x', text: 'Tailored to African agriculture and food systems context.' },
          { type: 'x', text: 'Practical, measurable strategies — not 100-page documents that gather dust.' },
          { type: 'o', text: 'Ongoing support available beyond strategy delivery.' },
        ],
      }}
    />
  );
}
