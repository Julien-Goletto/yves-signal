import React from 'react';
import Link from 'next/link';

const links = [
  { name: "Les Articles", href: "/articles"},
  { name: "Les Fils", href: "/fils"},
  { name: "Les Créations", href: "/creations"},
  { name: "Présentation", href: "/presentation"},
];

export const MobileNavigationContent = () => {
  return (
    <nav className='bg-lime-600 absolute inset-0 min-h-screen flex lg:hidden flex-col'>
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
    <nav className='hidden lg:flex'>
      {
        links.map((link) => (
        <Link href={link.href} key={link.href}>{link.name}</Link>
        ))
      }
    </nav>
  );
};
