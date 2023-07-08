"use client";

import React from 'react';
import { Logo } from '@/app/components/Logo';
import { MobileNavigation } from './mobile-navigation';
import { DesktopNavigation } from './navigation';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleBurgerMenu = () => setIsOpen(!isOpen);

  const headerStyle = 'fixed z-50 backdrop-blur-xl h-20 w-full px-4 py-2.5 flex items-start justify-between';

  return(
    <header 
      className={`${headerStyle} ${isOpen && 'min-h-screen'}`}>
        <div className='container mx-auto flex items-center justify-between'>
          <Logo />
          <MobileNavigation isOpen={isOpen} toggleBurgerMenu={toggleBurgerMenu}/>
          <DesktopNavigation />
        </div>
    </header>
  );
};