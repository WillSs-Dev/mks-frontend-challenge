import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store';

const renderWithState = (App: () => JSX.Element) => {
  return render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default renderWithState;
