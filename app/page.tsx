import Hero from '@/app/components/organism/Hero';
import Layout from '@/app/components/molecules/Layout';
import Title from '@/app/components/atoms/Title';
import Feature from '@/app/components/molecules/Feature';
import FeatureGroup from '@/app/components/organism/FeaturesGroup';
import Price from '@/app/components/organism/Price';
import Contact from '@/app/components/organism/Contact';

export default function Home() {
  return (
    <div className=''>
      <Hero />
      <div>
        <Layout>
          <div className='flex flex-col w-full gap-20  items-center '>
            <FeatureGroup
              button='Get started'
              firstWord='Project'
              secondWord='Managment'
              text='Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.'
              orentation={true}
            />
            <FeatureGroup
              button='Try it now'
              firstWord='Work'
              secondWord='Together'
              text='With whitepace, share your notes with your colleagues and collaborate on them.
            You can also publish a note to the internet and share the URL with others.
            '
              orentation={false}
            />
          </div>
        </Layout>
        <div className='mt-20 mb-20 flex justify-center items-center'>
          <Price />
        </div>
        <div className='mt-20   '>
          <Contact />
        </div>
      </div>
    </div>
  );
}
