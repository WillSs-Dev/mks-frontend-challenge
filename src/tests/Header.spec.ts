import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import * as productsAPI from '../API/products';
import App from '../App';
import renderWithState from '../utils/renderWithState';

import { mockProducts } from './mocks/data';

let getProductsSpy: jest.SpyInstance;

describe('Products card list interaction', () => {
  beforeEach(() => {
    getProductsSpy = jest.spyOn(productsAPI, 'getProducts');
    getProductsSpy.mockResolvedValue(mockProducts);
  });

  afterEach(() => {
    getProductsSpy.mockRestore();
    getProductsSpy.mockReset();
  });

  it('Cart button displays the correct values', async () => {
    renderWithState(App);

    const cartButton = screen.getByTestId('cart-button');

    expect(cartButton).toHaveTextContent('0');

    const addToCartButtons = await waitFor(() =>
      screen.getAllByTestId('add-to-cart')
    );

    await userEvent.click(addToCartButtons[0]);
    await userEvent.click(addToCartButtons[1]);

    expect(cartButton).toHaveTextContent('2');

    await userEvent.click(cartButton);

    const removeFirstItemButton = await waitFor(() =>
      screen.getByTestId('remove-0-item-from-cart')
    );

    await userEvent.click(removeFirstItemButton);

    const closeCartButton = await waitFor(() =>
      screen.getByTestId('close-cart-button')
    );

    await userEvent.click(closeCartButton);

    expect(cartButton).toHaveTextContent('1');
  });
});