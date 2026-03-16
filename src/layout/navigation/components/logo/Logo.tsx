import { Link } from 'react-router';
import style from './logo.module.css';
import logo from '/public/shopping-bag.svg';

function Logo() {
  return (
    <div className={style.logo}>
      <Link to="/" aria-label="Shopping cart home">
        <img src={logo} alt="" data-testid="logo-img" />
        <span className={style['logo-text']}>Shopping Cart</span>
      </Link>
    </div>
  );
}

export default Logo;
