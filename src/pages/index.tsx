import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import Gallery from 'react-photo-gallery';

const photos = [
  {
    src: 'https://i.imgur.com/qZ1uNfA.jpg',
    width: 1512,
    height: 2016
  },
  {
    src: 'https://i.imgur.com/J6te8jW.jpg',
    width: 384,
    height: 512
  },
  {
    src: 'https://i.imgur.com/RqrYSRY.jpg',
    width: 1512,
    height: 2016
  },
  {
    src: 'https://i.imgur.com/nGoWWph.jpg',
    width: 1008,
    height: 1344
  },
  {
    src: '/images/IMG_2E90260755D0-1.jpeg',
    width: 4,
    height: 3.5
  },
  {
    src: '/images/IMG_98555EEC069F-1.jpeg',
    width: 4,
    height: 3.5
  },
  {
    src: '/images/IMG_CAD4FC355832-1.jpeg',
    width: 4,
    height: 3.5
  },
  {
    src: 'https://i.imgur.com/b4SAvbw.jpg',
    width: 2016,
    height: 1197
  },
  
  {
    src: '/images/IMG_1062.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/images/IMG_CE5C3B74EC7A-1.jpeg',
    width: 4,
    height: 3
  }
];

const photos2 = [
  {
    src: '/images/IMG_2E90260755D0-1.jpeg',
    width: 4,
    height: 3.5
  },
  {
    src: '/images/IMG_CAD4FC355832-1.jpeg',
    width: 4,
    height: 3.5
  }
]

const photos3 = [{
  src: 'https://i.imgur.com/RqrYSRY.jpg',
  width: 1512,
  height: 2016
},
{
  src: 'https://i.imgur.com/nGoWWph.jpg',
  width: 1008,
  height: 1344
},
{
  src: '/images/IMG_2E90260755D0-1.jpeg',
  width: 4,
  height: 3.5
},
]

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Impact Debate"
        description="A TypeScript/Next.js theme that includes everything you need to build amazing landing page!"
      />
      <Header />
      <hr></hr>
      <Gallery photos={photos} />
      <Gallery photos={photos2} />
      <Gallery photos={photos3} />

      {/* <main>
        <VideoSection />
        <ListSection />
        <FeatureSection />
        <CasesSection />
        <SocialProof />
        <PricingTable />
      </main> */}
    </Page>
  );
}
