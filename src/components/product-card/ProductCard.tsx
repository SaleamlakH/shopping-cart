import { useState, type ChangeEvent } from 'react';
import style from './product-card.module.css';
import { useOutletContext } from 'react-router';
import type { OutletContextType } from '../../App';

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
  const context = useOutletContext<OutletContextType>();
  if (!context) throw new Error('CartContext not found');

  const { cartItemsQuantity, addToCart } = context;
  const [quantity, setQuantity] = useState(cartItemsQuantity[product.id] || 1);

  const increment = () => {
    setQuantity((prev) => ++prev);
    addToCart({ id: product.id, quantity: quantity + 1 });
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => --prev);
      addToCart({ id: product.id, quantity: quantity - 1 });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const number = Number(e.target.value);
    if (number >= 1) {
      setQuantity(number);
      addToCart({ id: product.id, quantity: number });
    }
  };

  const handleAddToCart = () => {
    addToCart({ id: product.id, quantity });
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

      {cartItemsQuantity[product.id] ? (
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
      ) : (
        <button onClick={handleAddToCart} className={style['submit-btn']}>
          Add To Cart
        </button>
      )}
    </article>
  );
}

export default ProductCard;
