import IProduct from "../interfaces/products";

const baseUrl = 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products';

export const getProducts = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data.products as IProduct[];
}