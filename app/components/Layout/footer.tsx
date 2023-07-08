import React from 'react';
import { WavyBackground } from '../Backgrounds/wavy-background';
import { FooterContent } from './footer-content';

const footerStyle = `
  flex justify-center
  w-full relative overflow-hidden 
  h-[600px] xs:h-[600px] sm:h-[475px] md:h-[410px] 2xl:h-[480px]
`;

const backgroudPositionStyle = `absolute 
  -bottom-16 xs:-bottom-24 sm:-bottom-52 md:-bottom-72 2xl:-bottom-80
  -left-[200%] xs:-left-[150%] sm:-left-[100%] md:-left-[75%] lg:-left-[50%] xl:-left-[25%] 2xl:-left-0
`;

export const Footer = () => {
  return(
    <footer className={footerStyle}>
      <FooterContent />
      <div className={backgroudPositionStyle}>
        <WavyBackground />
      </div>
    </footer>
  );
};