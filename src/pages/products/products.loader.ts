import type { Product } from '../../components/product-card/ProductCard';

export async function productLoader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const category = url.searchParams.get('category');
  const query = url.searchParams.get('q');

  const response = await fetch('https://fakestoreapi.com/products');

  if (!response.ok) {
    throw new Error('Failed to fetch products', {});
  }

  const products: Product[] = await response.json();

  // filter products
  if (category || query) {
    return products.filter((product) => {
      const matchCategory = category ? product.category === category : true;
      const matchQuery = query
        ? [product.title, product.category, product.description].some((value) =>
            value.toLowerCase().includes(query.toLowerCase())
          )
        : true;

      return matchCategory && matchQuery;
    });
  }

  return products;
}
