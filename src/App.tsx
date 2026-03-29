import { Outlet, useLocation } from 'react-router';
import Footer from './layout/footer/Footer';
import CartLink from './layout/navigation/components/cart-link/CartLink';
import NavigationLinks from './layout/navigation/components/navigation-links/NavigationLinks';
import Search from './layout/navigation/components/search/Search';
import Navigation from './layout/navigation/Navigation';
import { useState } from 'react';

export interface Cart {
  id: number;
  userId: number;
  products: { id: number; quantity: number }[];
}

export interface OutletContextType {
  cartItemsQuantity: {
    [key: number]: number;
  };
  addToCart: ({ id, quantity }: Cart['products'][number]) => void;
}

function App() {
  const location = useLocation();
  const [cart, setCart] = useState<Cart>({ id: 1, userId: 1, products: [] });

  // map cart.products into {[id]: quantity}
  const cartItemsQuantity: OutletContextType['cartItemsQuantity'] = cart.products.reduce(
    (items, { id, quantity }) => {
      items[id] = quantity;
      return items;
    },
    {} as OutletContextType['cartItemsQuantity']
  );

  // get total items in cart
  const numCartItems = cart.products.reduce(
    (sum, { quantity }) => sum + quantity,
    0
  );

  const addToCart: OutletContextType['addToCart'] = ({
    id,
    quantity,
  }: Cart['products'][number]) => {
    setCart((prev) => {
      const products: Cart['products'] = prev.products;
      const existing = products.find((product) => product.id === id);

      if (existing) {
        const newProducts = products.map((product) => {
          if (product.id === id) {
            return { ...product, quantity };
          }

          return product;
        });

        return { ...prev, products: newProducts };
      }

      return { ...prev, products: [...products, { id, quantity }] };
    });
  };

  return (
    <>
      <Navigation>
        <NavigationLinks>
          <CartLink quantity={numCartItems} />
        </NavigationLinks>

        {location.pathname === '/products' && <Search categories={[]} />}
      </Navigation>

      <main>
        <Outlet context={{ cartItemsQuantity, addToCart }} />
      </main>

      <Footer />
    </>
  );
}

export default App;
