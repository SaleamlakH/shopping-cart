import cartIcon from '/src/assets/shopping-cart.svg';
import style from './cart-link.module.css';
import { Link } from 'react-router';

function CartLink({ quantity }: { quantity: number }) {
  return (
    <div className={style.cart}>
      <Link to="/cart" aria-label={`cart ${quantity} items`}>
        <img aria-hidden src={cartIcon} alt="" />
        <span className={style.quantity}>{quantity}</span>
      </Link>
    </div>
  );
}

export default CartLink;
