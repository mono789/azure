import React from 'react';
import Image from 'next/image';
import HeroText from '@/app/components/molecules/HeroText';

const Index = () => {
  return (
    <div className='relative w-full h-screen flex flex-col items-center justify-center bg-primary'>
      <div className='relative w-full  flex items-center justify-center  h-1/2 mb-8 z-0'>
        <Image
          src='/Element.png'
          alt='Hero Image'
          quality={100}
          fill
          sizes='100vw'
          style={{
            objectFit: 'cover',
          }}
          className='w-full h-auto object-cover'
        />
      </div>
      <div className='absolute  w-full  flex flex-row items-center justify-center  h-full mb-8 z-10'>
        <div>
          <HeroText />
        </div>
        <div className='relative ml-20 rounded-4xl '>
          <Image
            src='/Hero.png'
            alt='Hero Image'
            quality={100}
            width={824}
            height={549}
            style={{
              objectFit: 'cover',
            }}
            className='w-full h-auto object-cover rounded-4xl'
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
