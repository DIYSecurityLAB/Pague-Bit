import { BitcoinPriceRepository } from '@/data/repositories/BitcoinPrice.repository';
import {
  BitcoinHistoricalData,
  BitcoinPrice,
} from '@/domain/entities/BitcoinPrice.entity';
import { GetBitcoinHistoricalDataUseCase } from '@/domain/usecases/bitcoin/GetBitcoinHistoricalData.usecase';
import { GetBitcoinPriceUseCase } from '@/domain/usecases/bitcoin/GetBitcoinPrice.usecase';
import { useCallback, useEffect, useState } from 'react';

const RETRY_DELAY = 10000;
const UPDATE_INTERVAL = 300000;

export const useBitcoinPrice = (selectedCurrency: 'brl' | 'usa') => {
  const [currentPrices, setCurrentPrices] = useState<BitcoinPrice | null>(null);
  const [historicalData, setHistoricalData] =
    useState<BitcoinHistoricalData | null>(null);
  const [trend, setTrend] = useState<'up' | 'down' | 'neutral'>('neutral');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [apiSource, setApiSource] = useState<
    'coingecko' | 'mercadoBitcoin' | 'fallback'
  >('coingecko');

  const fetchData = useCallback(async () => {
    const currencyKey = selectedCurrency === 'usa' ? 'usd' : 'brl';
    const currencies = [currencyKey];
    let retryTimeout: NodeJS.Timeout;
    const repository = new BitcoinPriceRepository();
    const getBitcoinPriceUseCase = new GetBitcoinPriceUseCase(repository);
    const getBitcoinHistoricalDataUseCase = new GetBitcoinHistoricalDataUseCase(
      repository,
    );

    try {
      setLoading(true);
      setError(null);

      const [current, historical] = await Promise.all([
        getBitcoinPriceUseCase.execute(currencies),
        getBitcoinHistoricalDataUseCase.execute(currencies, '7d'),
      ]);

      setCurrentPrices(current);
      setHistoricalData(historical);
      setApiSource('coingecko');

      if (historical && historical[currencyKey]) {
        const firstPrice = historical[currencyKey].series[0];
        const lastPrice = current[currencyKey];
        if (firstPrice != null && lastPrice != null) {
          setTrend(
            lastPrice > firstPrice
              ? 'up'
              : lastPrice < firstPrice
                ? 'down'
                : 'neutral',
          );
        }
      }
    } catch (error) {
      console.error('Error fetching Bitcoin data:', error);
      setError(error instanceof Error ? error.message : 'Unknown error');
      setApiSource('fallback');

      retryTimeout = setTimeout(fetchData, RETRY_DELAY);
    } finally {
      setLoading(false);
    }

    return () => {
      if (retryTimeout) {
        clearTimeout(retryTimeout);
      }
    };
  }, [selectedCurrency]);

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, UPDATE_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [fetchData]);

  return {
    currentPrices,
    historicalData,
    trend,
    loading,
    error,
    apiSource,
    refetch: fetchData,
  };
};
