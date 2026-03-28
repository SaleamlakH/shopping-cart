import { useState, type ChangeEvent } from 'react';
import style from './product-card.module.css';

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
    <article className={style.card} aria-labelledby="title">
      <img className={style['product-img']} src={product.image} alt="" />
      <h2 id="title" className={style.title}>
        {product.title}
      </h2>
      <p className={style.description}>{product.description}</p>
      <p className={style.price}>
        <span className={style.hidden}>Price: </span>
        {product.price}
      </p>

      <fieldset className={style.fieldset}>
        <legend className={style.hidden}>quantity</legend>
        <button
          className={style['decrease-btn']}
          aria-label="decrease quantity"
          onClick={decrement}
        >
          -
        </button>
        <input
          className={style.input}
          type="number"
          name="quantity"
          value={quantity}
          min={1}
          onChange={handleChange}
        />
        <button
          className={style['increase-btn']}
          aria-label="increase quantity"
          onClick={increment}
        >
          +
        </button>
      </fieldset>

      <button className={style['submit-btn']}>Add To Cart</button>
    </article>
  );
}

export default ProductCard;
