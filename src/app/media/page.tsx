import type { Metadata } from 'next';
import { ServicePage, makeMetadata } from '@/components/service-page';

export const metadata: Metadata = makeMetadata(
  'Media',
  'Media production and placement for African agriculture and food systems organizations.'
);

export default function MediaPage() {
  return (
    <ServicePage
      data={{
        slug: 'media',
        title: 'Media',
        tagline: 'Media production and placement that puts your work in front of the right audiences.',
        description:
          'We produce and place media content that resonates with both technical and general audiences across Africa. From documentaries to social media campaigns, we help your work get seen and heard.',
        offerings: [
          { title: 'Video & Documentary', desc: 'Professional video production, from short-form social content to full documentaries.' },
          { title: 'Podcast Production', desc: 'End-to-end podcast production, from concept to distribution.' },
          { title: 'Social Media Campaigns', desc: 'Strategic social media campaigns that engage and grow your audience.' },
          { title: 'Media Placement', desc: 'Earned and paid media placement across African and international outlets.' },
        ],
      }}
    />
  );
}
