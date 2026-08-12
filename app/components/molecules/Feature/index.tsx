import React from 'react';
import Title from '@/app/components/atoms/Title';
import PrincipalButton from '@/app/components/atoms/Buttoms/Principal';

interface Information {
  firstWord: string;
  secondWord: string;
  text: string;
  button: string;
}

const Index = ({
  firstWord = 'Work',
  secondWord = 'Together',
  text = 'Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note. ',
  button = 'Get Started',
}: Information) => {
  return (
    <div className='flex flex-col items-start justify-center gap-8 max-w-xl '>
      <div>
        <Title firstWord={firstWord} secondWord={secondWord} />
      </div>
      <div>
        <p className='text-lg text-negro mt-4 text-justify'>{text}</p>
      </div>
      <div>
        <PrincipalButton text={button} />
      </div>
    </div>
  );
};

export default Index;
