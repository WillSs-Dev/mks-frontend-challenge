import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';

import { IViewSliceState } from '../../interfaces/state';

const initialState: IViewSliceState = {
  isCartOpen: true,
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
  }
});

export const selectCartSidebarState = (state: RootState) => state.view.value.isCartOpen;

export const { openCart, closeCart } = viewSlice.actions;

export default viewSlice.reducer;
