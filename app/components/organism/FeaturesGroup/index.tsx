import React from 'react';
import Feature from '@/app/components/molecules/Feature';
import Image from 'next/image';

interface Information {
  firstWord: string;
  secondWord: string;
  text: string;
  button: string;
  orentation: boolean;
}

const Index = ({ firstWord, secondWord, text, button, orentation }: Information) => {
  return (
    <div
      className={
        orentation
          ? 'flex  items-center justify-center gap-10'
          : ' flex  items-center justify-center gap-10 flex-row-reverse'
      }
    >
      <div className='w-1/2'>
        <Feature button={button} firstWord={firstWord} secondWord={secondWord} text={text} />
      </div>
      <div className='w-1/2'>
        <Image src='/Work Together Image.png' alt='Work Together Image' width={500} height={500} />
      </div>
    </div>
  );
};

export default Index;
