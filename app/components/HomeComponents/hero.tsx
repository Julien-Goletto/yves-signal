import React from 'react';
import Image from 'next/image';
import { Button } from '@components/Inputs/button';

import { AnimatedBlob } from '@components/Backgrounds/animated-blob';

export const HeroSection = () => {
  return (
    <section id="hero" className='relative w-full flex flex-col gap-8 py-4 md:py-8 lg:py-12 xl:py-16'>
      <div className='z-10 custom-container lg:flex-row'>
        <div className='w-full flex flex-col gap-4 md:flex-row md:items-center'>
          <Image 
            src="/assets/avatar_hello.png" 
            alt="Yves Signal' avatar" 
            width={200} 
            height={200}
            className='w-[100px] h-[100px] md:w-[200px] md:h-[200px]' />
          <h1>
              <span className='text-3xl md:text-4xl'>{"Bonjour, je suis \n"}</span>
              <br/>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary-medium to-secondary-medium'>Yves Signal</span>.
          </h1>
        </div>
        <div className='w-full flex flex-col gap-8'>
          <div className='flex flex-col items-start gap-4 text-3xl'>
            <p>Bienvenue dans mon univers 🚀</p>
            <Button to="/presentation">Faire connaissance</Button>
          </div>
          <p className='text-3xl'>
            <span>{"Développement, culture, créations..."}</span>
            <br/>
            <span className='text-lg'>Un joyeux et curieux mélange, bien hétéroclite 😁</span>
          </p>
        </div>
      </div>
      <div className='absolute inset-0 -left-[50%] md:-left-[0%] lg:left-[15%] lg:-top-[30%] 2xl:left-[30%] 2xl:-top-[20%]'>
        <AnimatedBlob />
      </div>
    </section>
  );
};
