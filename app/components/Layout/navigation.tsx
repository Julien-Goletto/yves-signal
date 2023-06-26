import React from 'react';
import Link from 'next/link';

const links = [
  { name: "Les Articles", href: "/articles"},
  { name: "Les Fils", href: "/fils"},
  { name: "Les Créations", href: "/creations"},
  { name: "Présentation", href: "/presentation"},
];

const desktopLinksStyle = `after:absolute after:inset-x-0 after:h-0.5 after:bottom-0 
  after:bg-white after:opacity-100 after:-translate-x-[101%]
  after:group-hover:opacity-100 after:group-hover:translate-x-0
  after:transition after:duration-500 after:ease-in-out`;

export const MobileNavigation = () => {
  return (
    <nav className='lg:hidden absolute top-20 inset-0 flex flex-col items-center gap-8'>
      {
        links.map((link) => (
          <Link href={link.href} key={link.href}>{link.name}</Link>
        ))
      }
    </nav>
  );
};

export const DesktopNavigation = () => {
  return (
    <nav className='hidden lg:flex gap-12 items-center text-2xl'>
      {
        links.map((link) => (
          <div
            key={link.href}
            className='relative group overflow-hidden'
          >
            <Link 
              href={link.href}
              className={desktopLinksStyle}> 
                {link.name}
              </Link>
          </div>
        ))
      }
    </nav>
  );
};
