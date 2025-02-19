import { BitcoinPrice, BitcoinHistoricalData } from '../entities/BitcoinPrice.entity';

export interface IBitcoinPriceRepository {
  getCurrentPrice(currencies: string[]): Promise<BitcoinPrice>;
  getHistoricalData(currencies: string[], timePeriod: string): Promise<BitcoinHistoricalData>;
}
