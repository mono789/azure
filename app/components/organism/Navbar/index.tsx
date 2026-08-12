import React from 'react';
import Menu from '@/app/components/molecules/Menu';
import Image from 'next/image';
import LoginButton from '@/app/components/atoms/Buttoms/Login';
import PrincipalButton from '@/app/components/atoms/Buttoms/Principal';
const Index = () => {
  return (
    <div className='flex flex-row items-center justify-around w-full  bg-primary shadow-md py-6'>
      <div>
        <Image
          src='/Logo_White.png'
          alt='Logo'
          width={200}
          height={50}
          className='object-contain'
        />
      </div>
      <div>
        <Menu />
      </div>
      <div className='flex flex-row items-center justify-center gap-4'>
        <LoginButton />
        <PrincipalButton />
      </div>
    </div>
  );
};

export default Index;
