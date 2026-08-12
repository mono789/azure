import React from 'react';

interface Information {
  firstWord: string;
  secondWord: string;
}

const Index = ({ firstWord = 'Project', secondWord = 'Management' }: Information) => {
  return (
    <div className='text-7xl text-negro font-extrabold'>
      <span>{firstWord}</span>
      <div className='relative '>
        <span className='absulute z-10'>{secondWord}</span>
        <img className='absolute -z-10  inset-x-0 -bottom-2' src='/Vector.svg' alt='resaltado' />
      </div>
    </div>
  );
};

export default Index;
