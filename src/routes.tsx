import App from './App';
import ProductPage from './pages/products/ProductPage';
import { productLoader } from './pages/products/products.loader';
import type { RouteObject } from 'react-router';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/products',
        element: <ProductPage />,
        loader: productLoader,
      },
    ],
  },
];

export default routes;
