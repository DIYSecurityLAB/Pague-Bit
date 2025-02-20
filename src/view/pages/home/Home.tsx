import BitcoinTicker from './partials/bitcointicker/BitcoinTicker';
import Hero from './partials/hero/Hero';
import WhyPagueBit from './partials/whypaguebit/WhyPagueBit';
import WhatIsBitcoin from './partials/whatisbitcoin/WhatIsBitcoin';
import GetStarted from './partials/getstarted/GetStarted';
import FaqSection from './partials/faq/FaqSection';

const Home = () => {
  return (
    <>
      <BitcoinTicker />
      <Hero />
      <WhyPagueBit />
      <WhatIsBitcoin />
      <GetStarted />
      <FaqSection />
    </>
  );
};

export default Home;
