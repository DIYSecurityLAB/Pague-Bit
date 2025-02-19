import React from 'react';
import Hero from './partials/hero/Hero';
import WhyPagueBit from './partials/whypaguebit/WhyPagueBit';
import WhatIsBitcoin from './partials/whatisbitcoin/WhatIsBitcoin';
import GetStarted from './partials/getstarted/GetStarted';
import FaqSection from './partials/faq/FaqSection';

const Home = () => {
  return (
    <>
      <Hero />
      <WhyPagueBit />
      <WhatIsBitcoin />
      <GetStarted />
      <FaqSection />
    </>
  );
};

export default Home;
