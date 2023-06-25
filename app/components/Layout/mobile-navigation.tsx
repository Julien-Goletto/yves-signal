import React from 'react';
import { MobileNavigation as MobileNavigationMenu } from './navigation';

type MobileNavigationProperties = {
  isOpen: boolean;
  toggleBurgerMenu: () => void;
}

/**
 * @return              \<button\> type burger menu
 * @param type          burger or user
 * @param stateValue    controlled state
 * @param setter        state setter
 */
export const MobileNavigation = ({isOpen, toggleBurgerMenu}: MobileNavigationProperties)  => {

  const basicHeaderButtonStyle = `relative z-20 w-10 h-10 flex flex-col gap-1.5 items-center rounded-full overflow-hidden
  focus:outline-none focus:ring-4 focus:ring-offset-0 focus:ring-white/5 focus:scale-110 
  hover:outline-none hover:ring-4 hover:ring-offset-0 hover:ring-white/5 hover:scale-110
  transition duration-150 hover:ease-out `;

  const buttonStyle = `${basicHeaderButtonStyle  }burger pt-2.5 lg:hidden`;

  const burgerLineStyle = 'burger h-0.5 w-5 rounded-full bg-white transition ease transform duration-300';

  return (
    <>
      <button
        onClick={() => toggleBurgerMenu()}
        className={ isOpen ? `${buttonStyle} z-[100]` : buttonStyle }>
              <div className={`${burgerLineStyle  }${isOpen && ' rotate-45 translate-y-2'}`} />
              <div className={`${burgerLineStyle  }${isOpen && ' opacity-0'}`} />
              <div className={`${burgerLineStyle  }${isOpen && ' -rotate-45 -translate-y-2'}`} />
      </button>
      { isOpen && (<MobileNavigationMenu />) }
    </>
  );
};
