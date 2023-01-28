import IProduct from '../interfaces/product';

export const baseUrl =
  'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=name&orderBy=DESC';

const getProducts = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data.products as IProduct[];
};

export { getProducts };
