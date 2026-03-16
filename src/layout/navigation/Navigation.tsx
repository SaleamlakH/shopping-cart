import type { ReactNode } from 'react';
import style from './navigation.module.css';
import Logo from './components/logo/Logo';
import NavigationLinks from './components/navigation-links/NavigationLinks';

function Navigation({ children }: { children: ReactNode }) {
  return (
    <nav className={style.nav}>
      <Logo />
      <NavigationLinks>{children}</NavigationLinks>
    </nav>
  );
}

export default Navigation;
