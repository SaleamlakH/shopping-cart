import { useState, type ChangeEvent } from 'react';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => ++prev);

  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => --prev);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const number = Number(e.target.value);
    if (number >= 1) setQuantity(number);
  };

  return (
    <article aria-labelledby="title">
      <img src={product.image} alt="" />
      <h2 id="title">{product.title}</h2>
      <p>{product.description}</p>
      <p>
        <span>Price: </span>
        {product.price}
      </p>

      <fieldset>
        <legend>quantity</legend>
        <button aria-label="decrease quantity" onClick={decrement}>
          -
        </button>
        <input
          type="number"
          name="quantity"
          value={quantity}
          min={1}
          onChange={handleChange}
        />
        <button aria-label="increase quantity" onClick={increment}>
          +
        </button>
      </fieldset>

      <button>Add To Cart</button>
    </article>
  );
}

export default ProductCard;
