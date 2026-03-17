import type { ReactNode } from 'react';
import style from './navigation.module.css';
import Logo from './components/logo/Logo';

function Navigation({ children }: { children: ReactNode }) {
  return (
    <nav className={style.nav}>
      <Logo />
      {children}
    </nav>
  );
}

export default Navigation;
