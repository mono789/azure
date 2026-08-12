import React from 'react';
import Image from 'next/image';
const Index = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=' relative flex flex-col w-full h-screen items-center justify-center bg-blanco'>
      <Image
        className='top-30 left-0  absolute z-0 '
        src='/BACKGROUND.png'
        alt='fondo'
        width={502}
        height={350}
      />
      <div
        className='
      absolute z-10 w-full h-full flex items-center justify-center
      '
      >
        {children}
      </div>
    </div>
  );
};

export default Index;
