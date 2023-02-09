import React from 'react';

type NavbarItemProps = {
  id: string;
  title: string;
  active: string;
  onHandleActive(title: string): void;
};

function NavbarItem(props: NavbarItemProps) {
  const { id, title, active, onHandleActive } = props;

  return (
    <li
      className={`cursor-pointer font-poppins text-[16px] font-medium ${
        active === title ? 'text-white' : 'text-dimWhite'
      }`}
      onClick={() => onHandleActive(title)}
    >
      <a href={`#${id}`}>{title}</a>
    </li>
  );
}

export default NavbarItem;
