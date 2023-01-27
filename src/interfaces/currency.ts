export default interface ICurrencyResponse {
  intValue: number;
  p: number;
  s: {
    decimal: string;
    precision: number;
    separator: string;
    symbol: string;
  };
  value: string | number;
}
