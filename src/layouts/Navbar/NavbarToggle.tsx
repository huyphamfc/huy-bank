import React, { useState } from 'react';

import { bar, xMark } from 'assets';

type NavbarToggleProps = {
  navItems: JSX.Element[];
};

function NavbarToggle({ navItems }: NavbarToggleProps) {
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  const handleToggleNav = () => {
    setToggleNav((state) => !state);
  };

  return (
    <div className="relative flex flex-1 cursor-pointer items-center justify-end sm:hidden">
      <img
        className="h-[22px] w-[96px] object-contain"
        src={toggleNav ? xMark : bar}
        alt="Menu"
        onClick={handleToggleNav}
      />
      <ul
        className={`bg-black-gradient sidebar absolute top-10 right-2 mx-4 my-2 min-w-[140px] list-none list-none flex-col items-start justify-end gap-2 rounded-xl p-6 ${
          toggleNav ? 'flex flex-1' : 'hidden'
        }`}
      >
        {navItems}
      </ul>
    </div>
  );
}

export default NavbarToggle;
