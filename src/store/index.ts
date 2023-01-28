import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './slices/cart.slice';
import viewReducer from './slices/view.slice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    view: viewReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
