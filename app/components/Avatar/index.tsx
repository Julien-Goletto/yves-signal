import React from 'react';
import Image from 'next/image';

export const Avatar = () => {
  return (
    <Image 
      src="/assets/avatar_hello.png" 
      alt="Yves Signal' avatar" 
      width={200} 
      height={200}
      className='w-[100px] h-[100px] md:w-[150px] md:h-[150px]'
    />
  );
};
