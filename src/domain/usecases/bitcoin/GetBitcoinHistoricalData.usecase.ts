import { IBitcoinPriceRepository } from '../../repositories/IBitcoinPriceRepository';
import { BitcoinHistoricalData } from '../../entities/BitcoinPrice.entity';

export class GetBitcoinHistoricalDataUseCase {
  constructor(private bitcoinPriceRepository: IBitcoinPriceRepository) {}

  async execute(currencies: string[], timePeriod: string): Promise<BitcoinHistoricalData> {
    return await this.bitcoinPriceRepository.getHistoricalData(currencies, timePeriod);
  }
}
