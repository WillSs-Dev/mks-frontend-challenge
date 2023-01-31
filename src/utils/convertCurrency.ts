import currency from 'currency.js';

import { INumberCurrencyResponse } from '../interfaces/currency';

const convertCurrencyToNumber = (stringValue: string): number => {
  // lib sem tipagem 🤷
  const { value } = currency(stringValue) as unknown as INumberCurrencyResponse;
  return value;
};

const convertNumberToCurrency = (numberValue: number): string => {
  const value = currency(numberValue, {
    symbol: 'R$',
    precision: 0,
    separator: '',
  }).format() as string;
  return value;
};

export { convertCurrencyToNumber, convertNumberToCurrency };
