import { useLoaderData } from 'react-router';
import type { Product } from '../../components/product-card/ProductCard';
import ProductCard from '../../components/product-card/ProductCard';

function ProductPage() {
  const products: Product[] = useLoaderData();

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductPage;
