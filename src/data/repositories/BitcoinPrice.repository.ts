import { IBitcoinPriceRepository } from '../../domain/repositories/IBitcoinPriceRepository';
import { BitcoinPrice, BitcoinHistoricalData } from '../../domain/entities/BitcoinPrice.entity';
import { CoinGeckoDataSource } from '../datasources/CoinGecko.datasource';
import { MercadoBitcoinDataSource } from '../datasources/MercadoBitcoin.datasource';

const CACHE_KEY = 'bitcoin_price_data';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export class BitcoinPriceRepository implements IBitcoinPriceRepository {
  private coinGeckoDataSource: CoinGeckoDataSource;
  private mercadoBitcoinDataSource: MercadoBitcoinDataSource;

  constructor() {
    this.coinGeckoDataSource = new CoinGeckoDataSource();
    this.mercadoBitcoinDataSource = new MercadoBitcoinDataSource();
  }

  private getCachedData(): { prices: BitcoinPrice, historical: BitcoinHistoricalData, timestamp: number } | null {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (!cached) return null;
      
      const data = JSON.parse(cached);
      if (Date.now() - data.timestamp > CACHE_DURATION) {
        localStorage.removeItem(CACHE_KEY);
        return null;
      }
      
      return data;
    } catch (error) {
      console.error('Error reading cache:', error);
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
  }

  private setCachedData(prices: BitcoinPrice, historical: BitcoinHistoricalData) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        prices,
        historical,
        timestamp: Date.now()
      }));
    } catch (error) {
      console.error('Error writing to cache:', error);
    }
  }

  async getCurrentPrice(currencies: string[]): Promise<BitcoinPrice> {
    const errors: Error[] = [];
    
    // Try CoinGecko first
    try {
      const prices = await this.coinGeckoDataSource.getCurrentPrice(currencies);
      this.setCachedData(prices, {});
      return prices;
    } catch (error) {
      console.error('CoinGecko getCurrentPrice failed:', error);
      errors.push(error as Error);
    }

    // Try Mercado Bitcoin for BRL
    if (currencies.includes('brl')) {
      try {
        const prices = await this.mercadoBitcoinDataSource.getCurrentPrice();
        this.setCachedData(prices, {});
        return prices;
      } catch (error) {
        console.error('Mercado Bitcoin getCurrentPrice failed:', error);
        errors.push(error as Error);
      }
    }

    // Try cache as last resort
    const cached = this.getCachedData();
    if (cached) {
      return cached.prices;
    }

    // If all fails, throw the first error
    throw errors[0] || new Error('Failed to fetch Bitcoin price from all sources');
  }

  async getHistoricalData(currencies: string[], timePeriod: string): Promise<BitcoinHistoricalData> {
    const errors: Error[] = [];
    
    // Try CoinGecko first
    try {
      const data = await this.coinGeckoDataSource.getHistoricalData(currencies, timePeriod);
      this.setCachedData({}, data);
      return data;
    } catch (error) {
      console.error('CoinGecko getHistoricalData failed:', error);
      errors.push(error as Error);
    }

    // Try Mercado Bitcoin for BRL
    if (currencies.includes('brl')) {
      try {
        const data = await this.mercadoBitcoinDataSource.getHistoricalData(timePeriod);
        this.setCachedData({}, data);
        return data;
      } catch (error) {
        console.error('Mercado Bitcoin getHistoricalData failed:', error);
        errors.push(error as Error);
      }
    }

    // Try cache as last resort
    const cached = this.getCachedData();
    if (cached && cached.historical) {
      return cached.historical;
    }

    // If all fails, throw the first error
    throw errors[0] || new Error('Failed to fetch Bitcoin historical data from all sources');
  }
}
