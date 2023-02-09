import React from 'react';

import styles from 'styles';
import { robot } from 'assets';

function HeroImage() {
  return (
    <div className={`flex flex-1 ${styles.flexCenter} relative my-10 md:my-0`}>
      <img className="relative z-[5] h-[100%] w-[100%]" src={robot} alt="Billing" />
      <div className="pink__gradient absolute top-0 z-[0] h-[35%] w-[40%]" />
      <div className="white__gradient absolute bottom-40 z-[1] h-[80%] w-[80%] rounded-full" />
      <div className="blue__gradient absolute right-20 bottom-20 z-[0] h-[50%] w-[50%]" />
    </div>
  );
}

export default HeroImage;
