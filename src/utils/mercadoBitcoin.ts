const MERCADO_BITCOIN_API_BASE_URL = 'https://www.mercadobitcoin.net/api';

export const getBitcoinPriceMercadoBitcoin = async () => {
  try {
    const response = await fetch(`${MERCADO_BITCOIN_API_BASE_URL}/BTC/ticker`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch Bitcoin price from Mercado Bitcoin: ${response.status}`
      );
    }
    const data = await response.json();
    return {
      brl: parseFloat(data.ticker.last),
    };
  } catch (error) {
    console.error('Error in getBitcoinPriceMercadoBitcoin:', error);
    return null;
  }
};

// A função de dados históricos não é mais necessária; portanto, mantemos apenas um placeholder.
export const getBitcoinHistoricalDataMercadoBitcoin = async () => {
  return {};
};
