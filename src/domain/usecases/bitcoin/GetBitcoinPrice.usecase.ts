import { BitcoinPrice } from '../../entities/BitcoinPrice.entity';
import { IBitcoinPriceRepository } from '../../repositories/IBitcoinPriceRepository';

export class GetBitcoinPriceUseCase {
  constructor(private bitcoinPriceRepository: IBitcoinPriceRepository) {}

  async execute(currencies: string[]): Promise<BitcoinPrice> {
    return await this.bitcoinPriceRepository.getCurrentPrice(currencies);
  }
}
