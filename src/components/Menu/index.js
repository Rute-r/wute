import MenuLink from 'components/MenuLink';
import styles from './Menu.module.css';
import { BiHomeHeart } from 'react-icons/bi';
import { BsPersonHeart } from 'react-icons/bs';

export default function Menu() {
  return (
    <header>
      <nav className={styles.nav}>
        <MenuLink to="/">
          <BiHomeHeart />
          Home
        </MenuLink>
        <MenuLink to="/aboutme">
          <BsPersonHeart />
          About Me
        </MenuLink>
      </nav>
    </header>
  );
}
