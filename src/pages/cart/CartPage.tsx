import { useEffect, useState } from 'react';
import type { Product } from '../../components/product-card/ProductCard';
import ProductCard from '../../components/product-card/ProductCard';
import { useOutletContext } from 'react-router';
import type { OutletContextType } from '../../App';

function CartPage() {
  const context = useOutletContext<OutletContextType>();
  if (!context) throw new Error('CartContext not found');

  const { cart } = context;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const newProducts = await Promise.all(
        cart.products.map(({ id }) =>
          fetch(`https://fakestoreapi.com/products/${id}`).then((response) =>
            response.json()
          )
        )
      );

      setProducts(newProducts);
    };

    loadProducts();
  }, [cart.products]);

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

export default CartPage;
