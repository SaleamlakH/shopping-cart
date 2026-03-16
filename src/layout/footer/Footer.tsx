import Logo from '../navigation/components/logo/Logo';
import style from './footer.module.css';

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.logo}>
        <Logo />
        {/* description */}
        <p className={style.description}>
          Shopping Cart is where you get quality products
        </p>
      </div>

      {/* copy right  */}
      <div className={style.copyright}>
        &copy; {new Date().getFullYear()} Shopping Cart, All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
