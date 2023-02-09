import React, { useState } from 'react';

import styles from 'styles';
import NavbarItem from './NavbarItem';
import NavbarToggle from './NavbarToggle';
import { logo } from 'assets';
import { navItems } from 'constants';

function NavbarWrapper() {
  const [active, setActive] = useState<string>('Home');

  const handleActive = (title: string) => {
    setActive(title);
  };

  const navbar = navItems.map((item) => (
    <NavbarItem key={item.id} {...item} active={active} onHandleActive={handleActive} />
  ));

  return (
    <section className={`${styles.paddingX} ${styles.boxWidth}`}>
      <nav className="navbar flex w-full items-center justify-between py-6">
        <img className="h-[32px] w-[124px]" src={logo} alt="HuyBank" />
        <ul className="hidden flex-1 list-none items-center justify-end gap-5 sm:flex">{navbar}</ul>
        <NavbarToggle navItems={navbar} />
      </nav>
    </section>
  );
}

export default NavbarWrapper;
