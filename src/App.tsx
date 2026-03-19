import Footer from './layout/footer/Footer';
import CartLink from './layout/navigation/components/cart-link/CartLink';
import NavigationLinks from './layout/navigation/components/navigation-links/NavigationLinks';
import Search from './layout/navigation/components/search/Search';
import Navigation from './layout/navigation/Navigation';

function App() {
  return (
    <>
      <Navigation>
        <NavigationLinks>
          <CartLink quantity={0} />
        </NavigationLinks>

        <Search categories={[]}/>
      </Navigation>

      <Footer />
    </>
  );
}

export default App;
