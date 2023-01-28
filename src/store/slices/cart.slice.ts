import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';

import { ICartSliceState } from '../../interfaces/state';

const initialState: ICartSliceState = {
  checkoutValue: 0,
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: initialState,
  },
  reducers: {
    addToCart: (state, action) => {
      state.value.cartItems.push(action.payload);
      state.value.checkoutValue += action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.value.cartItems = state.value.cartItems.filter(item => item.id !== action.payload.id);
      state.value.checkoutValue -= action.payload.price;
    }
  }
});

export const selectCartItems = (state: RootState) => state.cart.value.cartItems;

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
