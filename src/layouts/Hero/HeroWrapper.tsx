import React from 'react';

import styles from 'styles';
import HeroText from './HeroText';
import HeroImage from './HeroImage';
import HeroAction from './HeroAction';

function Hero() {
  return (
    <section
      className={`flex-col bg-primary md:flex-row ${styles.flexStart} ${styles.paddingY} ${styles.boxWidth}`}
      id="home"
    >
      <HeroText />
      <HeroImage />
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <HeroAction />
      </div>
    </section>
  );
}

export default Hero;
