import React from 'react';
import Link from 'next/link';

const links = [
  { name: "Les Articles", href: "/articles"},
  { name: "Les Fils", href: "/fils"},
  { name: "Les Créations", href: "/creations"},
  { name: "Présentation", href: "/presentation"},
];

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
        <Link href={link.href} key={link.href}>{link.name}</Link>
        ))
      }
    </nav>
  );
};
