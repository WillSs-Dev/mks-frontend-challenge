import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '../store';

const renderWithState = (App: React.FC) => {
  return render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default renderWithState;
