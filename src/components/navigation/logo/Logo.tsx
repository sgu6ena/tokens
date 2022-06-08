import {FC} from 'react';
import styles from "./Logo.module.scss"
import {ReactComponent as LogoImage} from "../../../assets/images/logo.svg";
import {Link} from "react-router-dom";

const Logo:FC = () => {
    return (
        <div className={styles.logo}>

            <LogoImage/>
            <div className={styles.text}>
                <div>УДОСТОВЕРЯЮЩИЙ</div>
                <div>ЦЕНТР</div>
            </div>
        </div>
    );
};

export default Logo;