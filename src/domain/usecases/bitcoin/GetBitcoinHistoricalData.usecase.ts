import { BitcoinHistoricalData } from '../../entities/BitcoinPrice.entity';
import { IBitcoinPriceRepository } from '../../repositories/IBitcoinPriceRepository';

export class GetBitcoinHistoricalDataUseCase {
  constructor(private bitcoinPriceRepository: IBitcoinPriceRepository) {}

  async execute(
    currencies: string[],
    timePeriod: string,
  ): Promise<BitcoinHistoricalData> {
    return await this.bitcoinPriceRepository.getHistoricalData(
      currencies,
      timePeriod,
    );
  }
}
