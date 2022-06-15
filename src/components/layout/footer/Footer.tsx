import React, {FC} from 'react';
import Logo from "../logo/Logo";
import Contacts from "../contacts/Contacts";
import styles from "./Footer.module.scss"
import classNames from "classnames";
const Footer: FC = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={classNames(styles.wrapper,'container')}>
          <Logo/>
          <Contacts/>
        </div>
      </div>
      <div className={styles.text}>
        IDC. Удостоверяющий центр. Все права защищены. 2022.
      </div>
    </footer>
  );
};

export default Footer;