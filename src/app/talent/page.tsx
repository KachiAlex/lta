import type { Metadata } from 'next';
import { ServicePage, makeMetadata } from '@/components/service-page';

export const metadata: Metadata = makeMetadata(
  'Talent — LTA Talent',
  'Talent solutions for African agriculture and food systems organizations.'
);

export default function TalentPage() {
  return (
    <ServicePage
      data={{
        slug: 'talent',
        title: 'Talent — LTA Talent',
        tagline: 'Connecting agriculture and food systems organizations with the right people.',
        description:
          'LTA Talent connects organizations across Africa\u2019s agriculture and food systems with skilled professionals. We understand the sector and we know where to find the people who can move your work forward.',
        offerings: [
          { title: 'Executive Search', desc: 'Senior leadership placements for agribusinesses and development organizations.' },
          { title: 'Specialist Recruitment', desc: 'Sector-specific roles in communications, media, research, and programme management.' },
          { title: 'Talent Advisory', desc: 'Workforce planning and organizational design support for growing teams.' },
          { title: 'Interim Placements', desc: 'Experienced professionals for short-term and project-based roles.' },
        ],
      }}
    />
  );
}
