import React, { useState } from 'react';

import styles from 'styles';
import { logo, bar, xMark } from 'assets';
import { navItems } from 'constants';

function Navbar() {
  const [active, setActive] = useState<string>('Home');
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  const navbar = navItems.map(({ id, title }, index) => (
    <li
      key={id}
      className={`cursor-pointer font-poppins text-[16px] font-normal ${
        active === title ? 'text-white' : 'text-dimWhite'
      } ${index === navItems.length - 1 ? 'mr-0' : 'mr-10'}`}
    >
      <a href={`#${id}`}>{title}</a>
    </li>
  ));

  const navbarSmall = navItems.map(({ id, title }, index) => (
    <li
      key={id}
      className={`cursor-pointer font-poppins text-[16px] font-medium ${
        active === title ? 'text-white' : 'text-dimWhite'
      } ${index === navItems.length - 1 ? 'mr-0' : 'mb-4'}`}
      onClick={() => setActive(title)}
    >
      <a href={`#${id}`}>{title}</a>
    </li>
  ));

  const handleToggleNav = () => {
    setToggleNav((state) => !state);
  };

  return (
    <section className={`${styles.paddingX} ${styles.boxWidth}`}>
      <nav className="navbar flex w-full items-center justify-between py-6">
        <img className="h-[32px] w-[124px]" src={logo} alt="HuyBank" />
        <ul className="hidden flex-1 list-none items-center justify-end sm:flex">{navbar}</ul>
        <div className="relative flex flex-1 cursor-pointer items-center justify-end sm:hidden">
          <img
            className="h-[22px] w-[96px] object-contain"
            src={toggleNav ? xMark : bar}
            alt="Menu"
            onClick={handleToggleNav}
          />
          <div
            className={`bg-black-gradient sidebar absolute top-10 right-2 mx-4 my-2 min-w-[140px] rounded-xl p-6 ${
              toggleNav ? 'flex' : 'hidden'
            }`}
          >
            <ul className="flex flex-1 list-none list-none flex-col items-start justify-end">
              {navbarSmall}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
