import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import cartReducer from '../store/slices/cart.slice';
import viewReducer from '../store/slices/view.slice';

const renderWithState = (App: () => JSX.Element) => {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
      view: viewReducer,
    },
  });
  return render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default renderWithState;
