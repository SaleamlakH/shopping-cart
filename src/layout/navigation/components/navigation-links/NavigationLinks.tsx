import { Link } from 'react-router';
import type { ReactNode } from 'react';
import style from './navigation-links.module.css';

function NavigationLinks({ children }: { children: ReactNode }) {
  return (
    <div className={style.pages}>
      <div className={style.links}>
        <Link to="/products">Products</Link>
      </div>

      {children}
    </div>
  );
}

export default NavigationLinks;
