export interface BitcoinPrice {
  usd?: number;
  brl?: number;
}

export interface HistoricalData {
  categories: number[];
  series: number[];
}

export interface BitcoinHistoricalData {
  [key: string]: {
    categories: number[];
    series: number[];
  };
}
