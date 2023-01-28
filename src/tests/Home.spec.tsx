import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
    
    const cards = await waitFor(() => screen.getAllByTestId('product-card'));
    const cardButtons = await waitFor(() => screen.getAllByTestId('add-to-cart'));
    
    await expect(productsAPI.getProducts()).resolves.toEqual(mockProducts);
    expect(cards.length).toBe(5);
    expect(cardButtons.length).toBe(5);
  });

  it('The cart sidebar opens and closes', async () => {
    renderWithState(App);

    const cartButton = await waitFor(() => screen.getByTestId('cart-button'));
    const cartSidebar = await waitFor(() => screen.getByTestId('cart-sidebar'));

    // OPEN
    userEvent.click(cartButton);
    await waitFor(() => expect(cartSidebar).toHaveStyle('min-height: 100%'));

    const closeButton = await waitFor(() => screen.getByTestId('close-button'));

    // CLOSE
    userEvent.click(closeButton);
    await waitFor(() => expect(cartSidebar).toHaveStyle('min-height: 0'));
  });

  it('Renders the app, inittialy with no products on the cart', async () => {
    renderWithState(App);

    const cartButton = await waitFor(() => screen.getByTestId('cart-button'));
    const cartSidebar = await waitFor(() => screen.getByTestId('cart-sidebar'));

    userEvent.click(cartButton);
    await waitFor(() => expect(cartSidebar).toHaveContent('Nada no carrinho!'));

    const checkoutTotalValue = await waitFor(() => screen.getByTestId('checkout-total-value'));
    expect(checkoutTotalValue).toHaveTextContent('0');
  });
});
