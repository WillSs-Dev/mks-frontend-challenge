import { screen, waitFor } from '@testing-library/react';

import * as productsAPI from '../API/products';
import App from '../App';
import renderWithState from '../utils/renderWithState';

import { mockProducts } from './mocks/data';

let getProductsSpy: jest.SpyInstance;

describe('Assertions on initial page load', () => {

  beforeEach(() => {
    getProductsSpy = jest.spyOn(productsAPI, 'getProducts')
    getProductsSpy.mockResolvedValue(mockProducts);
});

  afterEach(() => {
    getProductsSpy.mockRestore();
    getProductsSpy.mockReset();
});

  it('Renders the app', async () => {
    renderWithState(App);
    await expect(productsAPI.getProducts()).resolves.toEqual(mockProducts);

    const cards = await waitFor(() => screen.getAllByTestId('product-card'));
    const cardButtons = await waitFor(() => screen.getAllByTestId('add-to-cart'));

    expect(cards.length).toBe(5);
    expect(cardButtons.length).toBe(5);
  });
});
