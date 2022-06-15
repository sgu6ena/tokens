import {FC} from "react";
import styles from './secondary.module.scss'

type Props = {
    children?: React.ReactNode
    image?: string,
    text?: string | React.ReactNode
};

const SecondaryBlock: FC<Props> = ({children, image, text}) => {
    return (
        <div className={styles.secondary} style={{}}>
            <div className={styles.row}>
                <div className={styles.children}>{children}</div>
                <div className={styles.imgWrapper}>
                    <img src={image} alt={'электронная подпись'}/>
                </div>
            </div>
            <div className={styles.text}>{text && text}</div>
        </div>
    );
};

export default SecondaryBlock;