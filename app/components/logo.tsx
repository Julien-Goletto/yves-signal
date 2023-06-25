import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/">
      <Image 
        src="/assets/Avatar.jpg"
        alt="Logo-Homepage Link"
        width={200}
        height={200}
        className='w-16 h-16 border border-white rounded-full'
      />
    </Link>
  );
};
