import currency from 'currency.js';

import ICurrencyResponse from '../interfaces/currency';

const convertCurrencyToNumber = (stringValue: string) => {
                                          // lib sem tipagem 🤷
  const { value } = currency(stringValue) as unknown as ICurrencyResponse;
  return value;
}

export default convertCurrencyToNumber;
