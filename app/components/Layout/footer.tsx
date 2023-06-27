import React from 'react';
import { WavyBackground } from '../Backgrounds/wavy-backgrounds';

const footerStyle = ` bg-lime-800
  flex justify-center
  w-full relative overflow-hidden 
  h-[450px] xs:h-[450px] md:h-[550px] 
`;

const backgroudPositionStyle = `absolute 
  -bottom-0 sm:-bottom-16 md:bottom-8 xl:bottom-0 2xl:-bottom-4
  -left-[300%] sm:-left-[150%] md:-left-[125%] lg:-left-[75%] xl:-left-[35%] 2xl:-left-0
`;

export const Footer = () => {
  return(
    <footer className={footerStyle}>
      <div className='absolute z-10 container bottom-0 mx-auto px-4 py-2.5 flex flex-col gap-4' id="footer_content">
        <div className='flex flex-wrap gap-6 justify-between'>
          <label htmlFor="theme" className='flex flex-col gap-1.5'>
            <p className='text-2xl font-extrabold'>Thème</p>
            <input type="checkbox" name="theme" id="theme" className='h-10 w-25'/>
          </label>
          <div className='flex flex-col gap-1.5'>
            <p className='text-2xl font-extrabold'>Me retrouver</p>
            <div className='flex justify-between gap-4 h-10 bg-primary-dark'>
              <a href="https://www.linkedin.com/in/alexandre-roux-1b1b1b1b1/" target="_blank" rel="noreferrer">Github</a>
              <a href="https://www.linkedin.com/in/alexandre-roux-1b1b1b1b1/" target="_blank" rel="noreferrer">Linkedin</a>
              <a href="https://www.linkedin.com/in/alexandre-roux-1b1b1b1b1/" target="_blank" rel="noreferrer">Twitter</a>
            </div>
          </div>
          <div className='flex flex-col gap-1.5 flex-1'>
            <p className='text-2xl font-extrabold'>Me contacter</p>
            <div className='flex gap-4'>
              <a href="https://www.linkedin.com/in/alexandre-roux-1b1b1b1b1/" target="_blank" rel="noreferrer">📧 Par email</a>
              <a href="https://www.linkedin.com/in/alexandre-roux-1b1b1b1b1/" target="_blank" rel="noreferrer">💬 Par chat</a>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-wrap gap-4'>
            <a href="https://www.linkedin.com/in/alexandre-roux-1b1b1b1b1/" target="_blank" rel="noreferrer">🗺️ Plan du site</a>
            <a href="https://www.linkedin.com/in/alexandre-roux-1b1b1b1b1/" target="_blank" rel="noreferrer">🧑‍⚖️ Mentions légales</a>
            <a href="https://www.linkedin.com/in/alexandre-roux-1b1b1b1b1/" target="_blank" rel="noreferrer">🔒 Confidentialité</a>
          </div>
          <p className='flex flex-wrap gap-4'>
            <span>Une création de Yves Signal.</span>
            <span>Tous droits réservés.</span>
            <span>©️ 2023</span>
          </p>
        </div>
      </div>
      <div className={backgroudPositionStyle}>
        <WavyBackground />
      </div>
    </footer>
  );
};