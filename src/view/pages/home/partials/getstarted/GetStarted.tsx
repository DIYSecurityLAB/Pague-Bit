import { Bitcoin, Wallet, Store } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import bitcoin1 from "../../../../assets/3d-cryptocurrency-rendering-design.jpg";
import bitcoin2 from "../../../../assets/bitcoin-9401909_1920.png";
import bitcoin3 from "../../../../assets/golden-bitcoin-coin-keyboard-stock-market-trading-chart-online-candlestick.jpg";

const GetStarted = () => {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-12 bg-orange-50 text-gray-800">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t("getStarted.title")}</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center border border-orange-100"
            variants={item}
          >
            <Bitcoin className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">{t("getStarted.buy.title")}</h3>
            <p className="text-gray-600">{t("getStarted.buy.description")}</p>
            <img src={bitcoin1} alt={t("getStarted.buy.imageAlt")} className='mt-4 rounded-md'/>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center border border-orange-100"
            variants={item}
          >
            <Wallet className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">{t("getStarted.store.title")}</h3>
            <p className="text-gray-600">{t("getStarted.store.description")}</p>
            <img src={bitcoin2} alt={t("getStarted.store.imageAlt")} className='mt-4 rounded-md'/>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center border border-orange-100"
            variants={item}
          >
            <Store className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">{t("getStarted.accept.title")}</h3>
            <p className="text-gray-600">{t("getStarted.accept.description")}</p>
            <img src={bitcoin3} alt={t("getStarted.accept.imageAlt")} className='mt-4 rounded-md'/>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;
