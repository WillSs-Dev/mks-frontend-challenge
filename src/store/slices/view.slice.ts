import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';

import { IViewSliceState } from '../../interfaces/state';

const initialState: IViewSliceState = {
  isCartOpen: false,
  isPurchaseFinished: false,
}

export const viewSlice = createSlice({
  name: 'view',
  initialState: {
    value: initialState,
  },
  reducers: {
    openCart: (state) => {
      state.value.isCartOpen = true;
    },
    closeCart: (state) => {
      state.value.isCartOpen = false;
    },
    finishPurchase: (state) => {
      state.value.isPurchaseFinished = true;
    },
  }
});

export const selectCartSidebarState = (state: RootState) => state.view.value.isCartOpen;

export const selectPurchaseFinishedState = (state: RootState) => state.view.value.isPurchaseFinished;

export const { openCart, closeCart, finishPurchase } = viewSlice.actions;

export default viewSlice.reducer;
