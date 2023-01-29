import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';

import { ICartSliceState } from '../../interfaces/state';
import convertCurrencyToNumber from '../../utils/convertCurrency';

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
    },
    increaseItemQuantity: (state, action) => {
      state.value.cartItems = state.value.cartItems.map(item => {
        if (item.id === action.payload.id) {
          const valueToIncrease = convertCurrencyToNumber(item.price as string);
          item.quantity += 1;
          state.value.checkoutValue += valueToIncrease;
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.value.cartItems = state.value.cartItems.map(item => {
        if (item.id === action.payload.id) {
          const valueToDecrease = convertCurrencyToNumber(item.price as string);
          item.quantity -= 1;
          state.value.checkoutValue -= valueToDecrease;
        }
        return item;
      });
    },
  }
});

export const selectCartItems = (state: RootState) => state.cart.value.cartItems;
export const selectCheckoutValue = (state: RootState) => state.cart.value.checkoutValue;

export const { addToCart, removeFromCart, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
