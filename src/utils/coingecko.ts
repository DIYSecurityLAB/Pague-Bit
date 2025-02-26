const COINGECKO_API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const getBitcoinPrice = async (
  currencies: string[] = ['brl', 'usd'],
) => {
  try {
    const currenciesString = currencies.join(',');
    const response = await fetch(
      `${COINGECKO_API_BASE_URL}/simple/price?ids=bitcoin&vs_currencies=${currenciesString}`,
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch Bitcoin price: ${response.status}`);
    }
    const data = await response.json();
    const prices: { [key: string]: number } = {};
    currencies.forEach((currency) => {
      prices[currency] = data.bitcoin[currency];
    });
    return prices;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getBitcoinHistoricalData = async () => {
  return {};
};
