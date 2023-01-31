export interface INumberCurrencyResponse {
  intValue: number;
  p: number;
  s: {
    decimal: string;
    precision: number;
    separator: string;
    symbol: string;
  };
  value: number;
}
