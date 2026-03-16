import { Link } from 'react-router';
import style from './logo.module.css';
import logo from '/public/shopping-bag.svg';

function Logo() {
  return (
    <div className={style.logo}>
      <Link to="/">
        <img src={logo} alt="Shopping cart logo" />
        <span className={style['logo-text']}>Shopping Cart</span>
      </Link>
    </div>
  );
}

export default Logo;
