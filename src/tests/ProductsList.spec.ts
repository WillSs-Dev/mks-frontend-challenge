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

  it('Adds products to the cart and remove them', async () => {
    renderWithState(App);

    const addToCartButtons = await waitFor(() =>
      screen.getAllByTestId('add-to-cart')
    );

    await userEvent.click(addToCartButtons[0]);
    await userEvent.click(addToCartButtons[1]);

    const cartButton = await waitFor(() => screen.getByTestId('cart-button'));
    const cartItems = await waitFor(() => screen.getAllByTestId('cart-item'));

    await userEvent.click(cartButton);

    const totalValue = await waitFor(() =>
      screen.getByTestId('checkout-total-value')
    );

    expect(totalValue).toHaveTextContent('Total:R$30.00');
    expect(cartItems.length).toBe(2);

    const removeFirstItemButton = await waitFor(() =>
      screen.getByTestId('remove-0-item-from-cart')
    );
    await userEvent.click(removeFirstItemButton);

    await waitFor(() => {
      const updatedCartItems = screen.getAllByTestId('cart-item');
      expect(updatedCartItems.length).toBe(1);
    });

    expect(removeFirstItemButton).not.toBeInTheDocument();
  });

  it('Increases and decreases the quantity of a product on the cart', async () => {
    renderWithState(App);

    const cartButton = await waitFor(() => screen.getByTestId('cart-button'));
    const addToCartButtons = await waitFor(() =>
      screen.getAllByTestId('add-to-cart')
    );

    await userEvent.click(addToCartButtons[0]);
    await userEvent.click(addToCartButtons[1]);

    await userEvent.click(cartButton);

    const totalValue = await waitFor(() =>
      screen.getByTestId('checkout-total-value')
    );

    expect(totalValue).toHaveTextContent('Total:R$30.00');

    const increaseQuantityButton = await waitFor(() =>
      screen.getByTestId('increase-0-item-quantity')
    );
    const decraseQuantityButton = await waitFor(() =>
      screen.getByTestId('decrease-0-item-quantity')
    );
    await userEvent.click(increaseQuantityButton);

    expect(totalValue).toHaveTextContent('Total:R$40.00');

    await userEvent.click(decraseQuantityButton);

    expect(totalValue).toHaveTextContent('Total:R$30.00');
  });

  it('Finishes the purchase', async () => {
    renderWithState(App);

    const addToCartButtons = await waitFor(() =>
      screen.getAllByTestId('add-to-cart')
    );

    await userEvent.click(addToCartButtons[0]);
    await userEvent.click(addToCartButtons[1]);

    const cartButton = await waitFor(() => screen.getByTestId('cart-button'));
    await userEvent.click(cartButton);

    const finishPurchaseButton = await waitFor(() =>
      screen.getByTestId('finish-purchase-button')
    );

    await userEvent.click(finishPurchaseButton);

    expect(finishPurchaseButton).toHaveTextContent('Compra finalizada!');
  });
});
