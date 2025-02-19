import { useState, useEffect } from 'react';
import { BitcoinPriceRepository } from '../../../../data/repositories';
import { GetBitcoinPriceUseCase } from '../../../../domain/usecases';
import { BitcoinPrice } from '../../../../domain/entities';

export const useBitcoinPrice = (selectedCurrency: 'brl' | 'usa') => {
  const [currentPrices, setCurrentPrices] = useState<BitcoinPrice | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [apiSource, setApiSource] = useState<'coingecko' | 'mercadoBitcoin' | 'fallback'>('coingecko');

  const repository = new BitcoinPriceRepository();
  const getBitcoinPriceUseCase = new GetBitcoinPriceUseCase(repository);

  const fetchData = async () => {
    setLoading(true);
    const currencyKey = selectedCurrency === 'usa' ? 'usd' : 'brl';
    const currencies = [currencyKey];

    try {
      const current = await getBitcoinPriceUseCase.execute(currencies);
      setCurrentPrices(current);
      setApiSource('coingecko');
    } catch (error) {
      console.error('Error fetching Bitcoin data:', error);
      setApiSource('fallback');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 300000); // Atualiza a cada 5 minutos
    return () => clearInterval(intervalId);
  }, [selectedCurrency]);

  return {
    currentPrices,
    loading,
    apiSource,
  };
};
