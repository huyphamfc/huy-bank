import React from 'react';

import styles from 'styles';
import { discount } from 'assets';
import HeroAction from './HeroAction';

function HeroText() {
  return (
    <div className={`flex-1 flex-col px-6 sm:px-16 xl:px-0 ${styles.flexStart}`}>
      <div className="bg-discount-gradient mb-2 flex flex-row items-center rounded-[10px] py-[6px] px-4">
        <img className="h-[32px] w-[32px]" src={discount} alt="discount" />
        <p className={`ml-2 ${styles.paragraph}`}>
          <span className="text-white">20%</span> Discount For{' '}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <h1 className="flex-1 font-poppins text-[52px] font-semibold leading-[75px] text-white ss:text-[72px] ss:leading-[100.8px]">
          The Next <br className="hidden sm:block" />{' '}
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="mr-0 hidden ss:flex md:mr-4">
          <HeroAction />
        </div>
      </div>
      <h1 className="w-full font-poppins text-[52px] font-semibold leading-[75px] text-white ss:text-[68px] ss:leading-[100.8px]">
        Payment Method.
      </h1>
      <p className={`mt-5 max-w-[470px] ${styles.paragraph}`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your
        needs. We examine annual percentage rates, annual fees.
      </p>
    </div>
  );
}

export default HeroText;
