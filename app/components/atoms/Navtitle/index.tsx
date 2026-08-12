import React from 'react';
import { Icon } from '@iconify/react';

const Index = ({ text }: { text: string }) => {
  return (
    <div className='flex items-center justify-center'>
      <span
        className=' text-primary lg:text-blanco
       text-lg font-semibold py-2 px-4 hover:cursor-pointer hover:text-secondary transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110
      '
      >
        {text}
      </span>
      <div className='text-blanco inline-block ml-1'>
        <Icon icon='material-symbols:keyboard-arrow-down' width='24' height='24' />
      </div>
    </div>
  );
};

export default Index;
