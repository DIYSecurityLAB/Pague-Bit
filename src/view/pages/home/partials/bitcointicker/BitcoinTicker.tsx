import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useBitcoinTickerPrices } from './useBitcoinTickerPrices';

const BitcoinTicker: React.FC = () => {
  const { t } = useTranslation();
  const { prices, loading, itemsRef, controls, setIsHovered } =
    useBitcoinTickerPrices();

  if (loading) {
    return (
      <div className="w-full bg-orange-500 text-white py-2 text-center text-lg font-semibold relative z-40">
        {t('ticker.loading')}
      </div>
    );
  }

  const formattedPrices = [
    {
      label: 'USD',
      value:
        prices.usd?.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        }) || 'N/A',
    },
    {
      label: 'BRL',
      value:
        prices.brl?.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }) || 'N/A',
    },
    {
      label: 'CNY',
      value:
        prices.cny?.toLocaleString('zh-CN', {
          style: 'currency',
          currency: 'CNY',
        }) || 'N/A',
    },
    {
      label: 'EUR',
      value:
        prices.eur?.toLocaleString('de-DE', {
          style: 'currency',
          currency: 'EUR',
        }) || 'N/A',
    },
  ];

  // Duplicação para um loop infinito real
  const tickerItems = [
    { label: '🔥', value: t('ticker.bitcoin_all_currencies') },
    ...formattedPrices,
    ...formattedPrices,
    { label: '🔥', value: t('ticker.bitcoin_all_currencies') },
    ...formattedPrices,
    ...formattedPrices,
  ];

  return (
    <div
      className="w-full bg-white py-2 overflow-hidden relative z-40 border-t-2 border-orange-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={itemsRef}
        animate={controls}
        className="flex w-max gap-10 whitespace-nowrap text-orange-500 text-sm md:text-lg font-semibold"
      >
        {tickerItems.map((item, index) => (
          <span key={index} className="flex-shrink-0 px-6">
            {item.label} {item.value}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default BitcoinTicker;
