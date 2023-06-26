import './globals.css';
import React from 'react';
import { Header, Footer } from '@/app/components/Layout';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fr">
      <body 
        className="min-h-screen flex flex-col items-center gap-6 md:gap-8 lg:gap-10 xl:gap-14 bg-primary-dark text-white"
        >
        <Header/>
        <main className='container grow mt-20 mx-auto px-3 py-8 lg:py-16 flex flex-col items-center gap-6 xl:px-6 md:gap-8 lg:gap-10 xl:gap-14'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
};

export default RootLayout;
