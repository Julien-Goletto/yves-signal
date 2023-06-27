import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';

const commonStyle = `
  px-6 py-3 flex gap-2 justify-center md:px-12 md:py-4 lg:px-18 lg:py-6 xl:px-24
  rounded-full shadow-xl
  font-semibold text-center text-lg md:text-xl lg:text-2xl
  focus:outline-none focus:ring-4 focus:ring-offset-0 focus:scale-105 
  hover:outline-none hover:ring-4 hover:ring-offset-0 hover:scale-105
  transition duration-150 hover:ease-out 
  disabled:opacity-60
`;

const ButtonStyle = {
  primary: `${commonStyle} bg-gradient-to-r from-primary-medium to-secondary-medium
    shadow-primary-light/20 
    text-white
    focus:ring-primary-medium/10
    hover:ring-primary-medium/10
  `,
  secondary: `${commonStyle} border-2 border-primary-medium
    shadow-primary-light/20
    text-white
    backdrop-blur
    focus:ring-primary-medium/10
    hover:ring-primary-medium/10
  `,
  tertiary: `${commonStyle} border-2 border-secondary-medium
    shadow-secondary-light/20
    text-white
    backdrop-blur
    focus:ring-secondary-medium/10
    hover:ring-secondary-medium/10
  `,
  logo: `
    w-10 h-10 p-1.5 border border-white rounded-full bg-primary-dark
    flex items-center justify-center
    shadow-xl shadow-white/20
    focus:outline-none focus:ring-4 focus:ring-offset-0 focus:scale-105 focus:ring-white/10
    hover:outline-none hover:ring-4 hover:ring-offset-0 hover:scale-105 hover:ring-white/10
    transition duration-150 hover:ease-out 
    disabled:opacity-60
    `,
};

type ButtonProperties = ComponentPropsWithoutRef<'button'> & {
  customStyle?: 'logo' | 'primary'| 'secondary' | 'tertiary';
  to?: string;
  href?: string;
};

/**
 * @returns custom Button component
 * @param customStyle custom styles
 * @param to to specify for internal Link redirection
 * @param href for external links only
 */
export const Button = ({ children, customStyle, onClick, to, href, disabled }: ButtonProperties) => {
  const className = customStyle ? ButtonStyle[customStyle] : ButtonStyle.primary;

  return (
    <>
      {to && (
        <Link
          className={className}
          href={to}>
          {children}
        </Link>
      )}
      {href && (
        <Link
          className={className}
          href={href}
          target="_blank">
          {children}
        </Link>
      )}
      {!href && !to && (
        <button
          className={className}
          onClick={onClick}
          disabled={disabled}>
          {children}
        </button>
      )}
    </>
  );
};
