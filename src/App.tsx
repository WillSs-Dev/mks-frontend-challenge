import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import GlobalStyles from './styles/global';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

const App = () => (
  <>
    <GlobalStyles />
    <RouterProvider router={router} />
  </>
);

export default App;
