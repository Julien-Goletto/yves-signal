import React from 'react';
import { WavyBackground } from '../Backgrounds/wavy-backgrounds';

export const Footer = () => {
  return(
    <footer className='w-full relative overflow-hidden h-[400px] md:h-[500px] flex justify-center'>
      <div className='absolute z-10 container bottom-0 mx-auto flex flex-col items-center'>
        This is my footer
      </div>
      <div className='absolute -bottom-16 md:-bottom-8 xl:bottom-0 2xl:-bottom-20 -left-[300%] md:-left-[125%] xl:-left-[0%] mx-auto'>
        <WavyBackground />
      </div>
    </footer>
  );
};