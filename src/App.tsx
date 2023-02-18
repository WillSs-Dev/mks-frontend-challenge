import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import GlobalStyles from './styles/global';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

const App = () => (
  <>
    <GlobalStyles />
    <RouterProvider router={browserRouter} />
  </>
);

export default App;
