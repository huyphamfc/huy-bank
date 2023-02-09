import React from 'react';

import styles from 'styles';
import { arrow } from 'assets';

function HeroAction() {
  return (
    <div
      className={`bg-blue-gradient h-[140px] w-[140px] cursor-pointer rounded-full p-[2px] ${styles.flexCenter}`}
    >
      <div className={`h-[100%] w-[100%] flex-col rounded-full bg-primary ${styles.flexCenter}`}>
        <div className={`flex-row ${styles.flexStart}`}>
          <p className="font-poppins text-[18px] font-medium leading-[23.4px]">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrow} alt="arrow-up" className="h-[23px] w-[23px] object-contain" />
        </div>
        <p className="font-poppins text-[18px] font-medium leading-[23.4px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
}

export default HeroAction;
