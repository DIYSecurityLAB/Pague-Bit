import {
  BitcoinHistoricalData,
  BitcoinPrice,
} from '../../domain/entities/BitcoinPrice.entity';

const MERCADO_BITCOIN_API_BASE_URL = 'https://www.mercadobitcoin.net/api';

export class MercadoBitcoinDataSource {
  async getCurrentPrice(): Promise<BitcoinPrice> {
    try {
      const response = await fetch(
        `${MERCADO_BITCOIN_API_BASE_URL}/BTC/ticker`,
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch Bitcoin price from Mercado Bitcoin: ${response.status}`,
        );
      }
      const data = await response.json();
      return {
        brl: parseFloat(data.ticker.last),
      };
    } catch (error) {
      console.error('Error in getBitcoinPriceMercadoBitcoin:', error);
      throw error;
    }
  }

  async getHistoricalData(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _timePeriod: string = '7d',
  ): Promise<BitcoinHistoricalData> {
    try {
      const now = Math.floor(Date.now() / 1000);
      const from = now - 7 * 24 * 60 * 60;
      const historicalData = {
        categories: [] as number[],
        series: [] as number[],
      };

      // Fetch data for each day in parallel
      const days = Array.from({ length: 8 }, (_, i) => {
        const date = new Date((from + i * 24 * 60 * 60) * 1000);
        return {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate(),
          timestamp: date.getTime(),
        };
      });

      const results = await Promise.allSettled(
        days.map(async ({ year, month, day, timestamp }) => {
          const response = await fetch(
            `${MERCADO_BITCOIN_API_BASE_URL}/BTC/day-summary/${year}/${month}/${day}`,
          );
          if (!response.ok) {
            throw new Error(
              `Failed to fetch day-summary for ${year}-${month}-${day}`,
            );
          }
          const data = await response.json();
          return {
            timestamp,
            price: parseFloat(data.closing),
          };
        }),
      );

      // Process successful results
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          historicalData.categories.push(result.value.timestamp);
          historicalData.series.push(result.value.price);
        } else {
          console.error(
            `Failed to fetch data for day ${index}:`,
            result.reason,
          );
        }
      });

      // Sort by timestamp
      const sortedIndices = historicalData.categories
        .map((_, index) => index)
        .sort(
          (a, b) => historicalData.categories[a] - historicalData.categories[b],
        );

      historicalData.categories = sortedIndices.map(
        (i) => historicalData.categories[i],
      );
      historicalData.series = sortedIndices.map(
        (i) => historicalData.series[i],
      );

      // If we have less than 2 points, try to get at least the current price
      if (historicalData.series.length < 2) {
        const currentPrice = await this.getCurrentPrice();
        if (currentPrice.brl) {
          historicalData.categories = [Date.now()];
          historicalData.series = [currentPrice.brl];
        }
      }

      return { brl: historicalData };
    } catch (error) {
      console.error('Error in getBitcoinHistoricalDataMercadoBitcoin:', error);
      throw error;
    }
  }
}
