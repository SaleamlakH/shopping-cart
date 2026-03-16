import Footer from './layout/footer/Footer';
import CartLink from './layout/navigation/components/cart-link/CartLink';
import Navigation from './layout/navigation/Navigation';

function App() {
  return (
    <>
      <Navigation>
        <CartLink quantity={0} />
      </Navigation>

      <Footer />
    </>
  );
}

export default App;
