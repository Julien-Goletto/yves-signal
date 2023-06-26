import React from 'react';
import Image from 'next/image';
import { Button } from '@components/Inputs/button';

import { AnimatedBlob } from '@components/Backgrounds/animated-blob';

export const HeroSection = () => {
  return (
    <section id="hero" className='relative w-full flex flex-col gap-8'>
      <div className='z-10 custom-container'>
        <div className='flex flex-col gap-4'>
          <Image 
            src="/assets/avatar_hello.png" 
            alt="Yves Signal' avatar" 
            width={200} 
            height={200}
            className='w-[100px] h-[100px] md:w-[200px] md:h-[200px]' />
          <h1>
              <span className='text-3xl'>{"Bonjour, je suis \n"}</span>
              <br/>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary-medium to-secondary-medium'>Yves Signal</span>.</h1>
        </div>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-4 text-3xl'>
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
      <div className='absolute inset-0 -left-[50%]'>
        <AnimatedBlob />
      </div>
    </section>
  );
};
