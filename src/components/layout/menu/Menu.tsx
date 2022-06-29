import {FC} from 'react';
import {headerMenu} from "./menu.data";
import {NavLink, useLocation} from "react-router-dom";

import styles from "./Menu.module.scss"
import classNames from "classnames";


const Menu: FC = () => {
  let {pathname} = useLocation();
  
  return (<>{}
      <ul className={styles.list}>
        {headerMenu.map(item => (
          <li key={item.link} className={styles.item}>
            <NavLink to={item.link}
                     className={item.link === pathname ? classNames(styles.active) : classNames(styles.inactive)}
                     end>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;