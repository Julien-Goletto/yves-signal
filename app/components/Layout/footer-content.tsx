import React from 'react';
import { Button } from '../Atomic/Inputs/Button';

export const FooterContent = () => {
  return(
    <div className='absolute z-10 container bottom-0 mx-auto px-4 py-2.5 flex flex-col gap-6' id="footer_content">
        <section className='w-full grid grid-cols-1 gap-4 justify-items-start sm:grid-cols-2 md:grid-cols-3'>
          <label htmlFor="theme" className='w-full flex flex-col gap-1.5 md:justify-start'>
            <p className='text-2xl font-extrabold'>Thème</p>
            <input type="checkbox" name="theme" id="theme" className='h-10 w-25'/>
          </label>
          <div className='w-full flex flex-col gap-1.5 md:justify-center'>
            <p className='w-full text-2xl font-extrabold md:text-center'>Me retrouver</p>
            <div className='flex justify-center gap-4'>
              <Button href='/' customStyle='logo'>Linkedin</Button>
              <Button href='/' customStyle='logo'>GitHub</Button>
              <Button href='/' customStyle='logo'>Twitter</Button>
            </div>
          </div>
          <div className='w-full flex flex-col gap-1.5 flex-1 md:justify-self-end'>
            <p className='w-full text-2xl font-extrabold md:text-right'>Me contacter</p>
            <div className='flex gap-4 md:justify-end'>
              <a href="https://www.linkedin.com/in/alexandre-roux-1b1b1b1b1/" target="_blank" rel="noreferrer">📧 Par email</a>
              <a href="https://www.linkedin.com/in/alexandre-roux-1b1b1b1b1/" target="_blank" rel="noreferrer">💬 Par chat</a>
            </div>
          </div>
        </section>
        <section className='flex flex-col gap-4 lg:flex-row lg:justify-between'>
          <div className='flex flex-wrap gap-1.5'>
            <a href="https://www.linkedin.com/in/alexandre-roux-1b1b1b1b1/" target="_blank" rel="noreferrer">🗺️ Plan du site</a>
            <a href="https://www.linkedin.com/in/alexandre-roux-1b1b1b1b1/" target="_blank" rel="noreferrer">🧑‍⚖️ Mentions légales</a>
            <a href="https://www.linkedin.com/in/alexandre-roux-1b1b1b1b1/" target="_blank" rel="noreferrer">🔒 Confidentialité</a>
          </div>
          <p className='flex flex-wrap gap-1.5'>
            <span>Une création de Yves Signal.</span>
            <span>Tous droits réservés.</span>
            <span>©️ 2023</span>
          </p>
        </section>
      </div>
  );
};