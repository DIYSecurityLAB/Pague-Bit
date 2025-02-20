import { BitcoinPrice, BitcoinHistoricalData } from '../../domain/entities/BitcoinPrice.entity';

const COINGECKO_API_BASE_URL = 'https://api.coingecko.com/api/v3';

export class CoinGeckoDataSource {
  async getCurrentPrice(currencies: string[] = ['brl', 'usd', 'eur', 'cny']): Promise<BitcoinPrice> {
    try {
      const currenciesString = currencies.join(',');
      const response = await fetch(`${COINGECKO_API_BASE_URL}/simple/price?ids=bitcoin&vs_currencies=${currenciesString}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch Bitcoin price: ${response.status}`);
      }
      const data = await response.json();
      const prices: BitcoinPrice = {};
      currencies.forEach(currency => {
        prices[currency] = data.bitcoin[currency];
      });
      return prices;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getHistoricalData(currencies: string[] = ['brl', 'usd', 'eur', 'cny']): Promise<BitcoinHistoricalData> {
    try {
      const now = Date.now();
      const from = now - (7 * 24 * 60 * 60 * 1000);
      const historicalData: BitcoinHistoricalData = {};

      for (const currency of currencies) {
        const response = await fetch(
          `${COINGECKO_API_BASE_URL}/coins/bitcoin/market_chart/range?vs_currency=${currency}&from=${Math.floor(from/1000)}&to=${Math.floor(now/1000)}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch historical data for ${currency}: ${response.status}`);
        }
        const data = await response.json();
        const processedData: number[] = [];
        const categories: number[] = [];
        const interval = 6 * 60 * 60 * 1000;

        for (let timestamp = now; timestamp >= from; timestamp -= interval) {
          let closestPoint = null;
          let minDiff = Infinity;
          for (const [priceTimestamp, price] of data.prices) {
            const diff = Math.abs(priceTimestamp - timestamp);
            if (diff < minDiff) {
              minDiff = diff;
              closestPoint = { timestamp: priceTimestamp, price };
            }
          }
          if (closestPoint) {
            processedData.unshift(closestPoint.price);
            categories.unshift(closestPoint.timestamp);
          }
        }

        if (processedData.length === 0) {
          processedData.push(0);
          categories.push(now);
        }
        historicalData[currency] = { series: processedData, categories };
      }
      return historicalData;
    } catch (error) {
      console.error("Error fetching historical data:", error);
      throw error;
    }
  }
}
