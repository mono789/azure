import React from 'react';
import PrincipalButtom from '@/app/components/atoms/Buttoms/Principal';

const Index = () => {
  return (
    <div className='flex flex-col items-start max-w-2xl  px-4 gap-8'>
      <div>
        <h1 className='text-blanco text-6xl font-bold mt-10'>Get More Done with whitepace</h1>
      </div>
      <div>
        <p className='text-blanco text-lg mt-4'>
          Project management software that enables your teams to collaborate, plan, analyze and
          manage everyday tasks
        </p>
      </div>
      <div>
        <PrincipalButtom text='Try Whitepace free' />
      </div>
    </div>
  );
};

export default Index;
