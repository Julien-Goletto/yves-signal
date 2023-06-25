import React from 'react';
import { Logo } from '@components/logo';
import { MobileNavigation } from '@/app/components/Layout/mobile-navigation';
import { DesktopNavigation } from './navigation';

export const Header = () => {
  return(
    <header 
      className='bg-red-800 relative h-20 w-full px-4 py-2.5 flex items-center justify-between'>
      <Logo />
      <MobileNavigation />
      <DesktopNavigation />
    </header>
  );
};