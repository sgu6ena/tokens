import {FC} from 'react';
import {headerMenu} from "./menu.data";
import {NavLink} from "react-router-dom";

import styles from "./Menu.module.scss"

const Menu: FC = () => {
  return (
    <ul className={styles.list}>
      {headerMenu.map(item => (
        <li key={item.link} className={styles.item}>
          <NavLink to={item.link} className={isActive =>
            isActive ? styles.active : styles.inactive}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;