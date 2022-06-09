import {FC} from "react";
import styles from "./Header.module.scss"
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import Contacts from "../contacts/Contacts";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Logo/>
        <Menu/>
        <Contacts/>
      </nav>
    </header>
  );
};

export default Header;