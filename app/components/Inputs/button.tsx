import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';

const commonStyle = `
  px-6 py-3 flex gap-2 justify-center md:px-4 md:py-5 lg:px-4 lg:py-6 xl:px-5 xl:py-7
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
};

type ButtonProperties = ComponentPropsWithoutRef<'button'> & {
  customStyle?: 'primary'| 'secondary' | 'tertiary';
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
