import React from 'react';

const Index = ({ text = 'Read more' }: { text?: string }) => {
  return (
    <button
      className='
   bg-secondary text-blanco text-lg font-medium py-2 px-8 rounded-lg h-15  hover:cursor-pointer hover:bg-tertiary transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-primary
   flex items-center justify-center flex-row gap-2
  
   '
    >
      {text}
      <div>
        <img src='/Icon.svg' alt='' />
      </div>
    </button>
  );
};

export default Index;
