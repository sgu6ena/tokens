import {FC, ReactNode} from 'react';
import styles from "./heading.module.scss"

const Title:FC<{children:ReactNode}> = ({children}) => {
    return (
        <div className={styles.title}>
            {children}
        </div>
    );
};

export default Title;