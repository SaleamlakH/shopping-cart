import { Outlet, useLocation } from 'react-router';
import Footer from './layout/footer/Footer';
import CartLink from './layout/navigation/components/cart-link/CartLink';
import NavigationLinks from './layout/navigation/components/navigation-links/NavigationLinks';
import Search from './layout/navigation/components/search/Search';
import Navigation from './layout/navigation/Navigation';

function App() {
  const location = useLocation();

  return (
    <>
      <Navigation>
        <NavigationLinks>
          <CartLink quantity={0} />
        </NavigationLinks>

        {location.pathname === '/products' && <Search categories={[]} />}
      </Navigation>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
