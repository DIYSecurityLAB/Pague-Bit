export interface BitcoinPrice {
  usd?: number;
  brl?: number;
  eur?: number;
  cny?: number;
  [key: string]: number | undefined;
}

export interface HistoricalData {
  categories: number[];
  series: number[];
}

export interface BitcoinHistoricalData {
  [key: string]: HistoricalData;
}
