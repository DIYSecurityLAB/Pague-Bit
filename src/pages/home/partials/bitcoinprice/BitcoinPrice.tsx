import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useBitcoinPrice } from './useBitcoinPrice';

const BitcoinPrice: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<'brl' | 'usa'>('usa');
  const { currentPrices, loading, apiSource } = useBitcoinPrice(selectedCurrency);

  const formatPrice = (price: number | undefined, currency: string): string => {
    if (price === undefined) return 'N/A';
    const locale = currency === 'usd' ? 'en-US' : 'pt-BR';
    const currencyCode = currency === 'usd' ? 'USD' : 'BRL';
    return price.toLocaleString(locale, { style: 'currency', currency: currencyCode });
  };

  const price =
    selectedCurrency === 'usa'
      ? formatPrice(currentPrices?.['usd'], 'usd')
      : formatPrice(currentPrices?.['brl'], 'brl');

  return (
    <motion.div
      className="flex flex-col items-center bg-white py-8 px-4 md:px-0 shadow-md rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="text-center">
          <div className="text-xl font-medium text-gray-600">Preço do Bitcoin</div>
          {loading ? (
            <div className="text-6xl font-bold text-gray-800 mt-2">Carregando...</div>
          ) : (
            <div className="text-6xl font-bold text-gray-800 mt-2">{price}</div>
          )}
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => setSelectedCurrency('usa')}
            className={`px-6 py-3 rounded-full border-2 transition-colors duration-300 ${
              selectedCurrency === 'usa'
                ? 'bg-orange-500 text-white border-orange-500'
                : 'bg-white text-orange-500 border-orange-500'
            }`}
          >
            USD
          </button>
          <button
            onClick={() => setSelectedCurrency('brl')}
            className={`px-6 py-3 rounded-full border-2 transition-colors duration-300 ${
              selectedCurrency === 'brl'
                ? 'bg-orange-500 text-white border-orange-500'
                : 'bg-white text-orange-500 border-orange-500'
            }`}
          >
            BRL
          </button>
        </div>
      </div>

      {apiSource !== 'coingecko' && !loading && (
        <div className="text-center text-sm text-yellow-500 mt-4">
          Dados de: {apiSource === 'mercadoBitcoin' ? 'Mercado Bitcoin' : 'Fonte Alternativa'}
        </div>
      )}
    </motion.div>
  );
};

export default BitcoinPrice;
