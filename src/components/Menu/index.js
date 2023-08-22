import MenuLink from 'components/MenuLink';
import styles from './Menu.module.css';

export default function Menu() {
  return (
    <header>
      <nav>
        <MenuLink>Home</MenuLink>
        <MenuLink>About Me</MenuLink>
      </nav>
    </header>
  );
}
