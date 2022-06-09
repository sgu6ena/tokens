import {FC} from 'react';
import styles from "./Logo.module.scss"
import {ReactComponent as LogoImage} from "../../../assets/images/logo.svg";
import {Link} from "react-router-dom";
import {RouteNames} from "../../../common/variables/RouteNames";


const Logo: FC = () => {
  return (
    <Link to={RouteNames.HOME} className={styles.logo}>
      <LogoImage/>
      <div className={styles.text}>
        <div>УДОСТОВЕРЯЮЩИЙ</div>
        <div>ЦЕНТР</div>
      </div>
    </Link>
  );
};

export default Logo;