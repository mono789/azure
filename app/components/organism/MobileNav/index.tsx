'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Menu from '@/app/components/molecules/Menu';
export const Index = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='flex flex-row items-center justify-between w-full  bg-primary shadow-md py-4 px-6 relative'>
      <div>
        <Image
          src='/Logo_White.png'
          alt='Logo'
          width={150}
          height={30}
          className='object-contain'
        />
      </div>
      <div>
        <button onClick={() => setOpen(!open)} className='focus:outline-none'>
          <Icon icon='material-symbols:menu-rounded' color='ffffff' width='42' height='24' />
        </button>
      </div>
      {open && (
        <div className='bg-blanco shadow-md w-5/6 absolute inset-x-10 top-20'>
          <Menu />
        </div>
      )}
    </div>
  );
};

export default Index;
