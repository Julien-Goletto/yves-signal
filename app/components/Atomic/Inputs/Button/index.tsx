import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';

import { buttonStyles } from './button-styles';

type ButtonProperties = ComponentPropsWithoutRef<'button'> & {
  customStyle?: 'logo' | 'primary'| 'secondary' | 'tertiary';
  to?: string;
  href?: string;
};

/**
 * @returns polymorphic Button component, can be an anchor or a button
 * @param customStyle custom styles
 * @param to to specify for internal Link redirection
 * @param href for external links only
 */
export const Button = ({ children, customStyle, onClick, to, href, disabled }: ButtonProperties) => {
  const className = customStyle ? buttonStyles[customStyle] : buttonStyles.primary;

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
