import { BitcoinPriceRepository } from '@/data/repositories';
import { BitcoinHistoricalData, BitcoinPrice } from '@/domain/entities';
import {
  GetBitcoinHistoricalDataUseCase,
  GetBitcoinPriceUseCase,
} from '@/domain/usecases';
import { useCallback, useEffect, useState } from 'react';

const RETRY_DELAY = 10000; // 10 seconds
const UPDATE_INTERVAL = 300000; // 5 minutes

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

  const repository = new BitcoinPriceRepository();
  const getBitcoinPriceUseCase = new GetBitcoinPriceUseCase(repository);
  const getBitcoinHistoricalDataUseCase = new GetBitcoinHistoricalDataUseCase(
    repository,
  );

  const fetchData = useCallback(async () => {
    const currencyKey = selectedCurrency === 'usa' ? 'usd' : 'brl';
    const currencies = [currencyKey];
    let retryTimeout: NodeJS.Timeout;

    try {
      setLoading(true);
      setError(null);

      // Fetch current price and historical data in parallel
      const [current, historical] = await Promise.all([
        getBitcoinPriceUseCase.execute(currencies),
        getBitcoinHistoricalDataUseCase.execute(currencies, '7d'),
      ]);

      setCurrentPrices(current);
      setHistoricalData(historical);
      setApiSource('coingecko');

      // Calculate trend
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

      // Retry after delay
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
