import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import * as productsAPI from '../API/products';
import App from '../App';
import renderWithState from '../utils/renderWithState';

import { mockProducts } from './mocks/data';

let getProductsSpy: jest.SpyInstance;

describe('Assertions on initial page load', () => {
  beforeEach(() => {
    getProductsSpy = jest.spyOn(productsAPI, 'getProducts');
    getProductsSpy.mockResolvedValue(mockProducts);
  });

  afterEach(() => {
    getProductsSpy.mockRestore();
    getProductsSpy.mockReset();
  });

  it('Adds products to the cart and remove them', async () => {
    renderWithState(App);

    const cartButton = await waitFor(() => screen.getByTestId('cart-button'));
    const addToCartButtons = await waitFor(() =>
      screen.getAllByTestId('add-to-cart')
    );

    userEvent.click(addToCartButtons[0]);
    userEvent.click(addToCartButtons[1]);
    userEvent.click(cartButton);

    const cartItems = await waitFor(() => screen.getAllByTestId('cart-item'));
    expect(cartItems.length).toBe(2);

    const removeFirstItemButton = await waitFor(() =>
      screen.getByTestId('remove-0-item-from-cart')
    );
    userEvent.click(removeFirstItemButton);

    expect(cartItems.length).toBe(1);
    expect(removeFirstItemButton).not.toBeInTheDocument();
  });

  it('Increases and decreases the quantity of a product on the cart', async () => {
    renderWithState(App);

    const cartButton = await waitFor(() => screen.getByTestId('cart-button'));
    const addToCartButtons = await waitFor(() =>
      screen.getAllByTestId('add-to-cart')
    );
    const totalValue = await waitFor(() =>
      screen.getByTestId('checkout-total-value')
    );

    userEvent.click(addToCartButtons[0]);
    userEvent.click(addToCartButtons[1]);

    userEvent.click(cartButton);

    expect(totalValue).toHaveTextContent('R$ 30');

    const increaseQuantityButton = await waitFor(() =>
      screen.getByTestId('increase-0-item-quantity')
    );
    const decraseQuantityButton = await waitFor(() =>
      screen.getByTestId('decrease-0-item-quantity')
    );
    userEvent.click(increaseQuantityButton);

    expect(totalValue).toHaveTextContent('R$ 40');

    userEvent.click(decraseQuantityButton);

    expect(totalValue).toHaveTextContent('R$ 30');
  });
});
