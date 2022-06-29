import {FC} from 'react';
import Layout from "../../components/layout/layout";
import Title from "../../components/heading/Title";
import {ReactComponent as DocumentIcon} from "../../assets/images/document.svg";
import styles from './document.module.scss'

const Documents: FC = () => {
  return (
    <Layout>
      <div className={"flex justify-center  items-center title"}>
        <Title>Документы</Title>
      </div>
      <div>
        <p>
          <a href="/docs/instrukciya_polzovatelya_dlya.pdf" target={"__blank"}
             className={styles.link}>
            <DocumentIcon className={styles.icon}/>
            <span>Инструкция пользователя для программы IDC Управление ключами</span>
          </a>
        </p>
        <p>
          <a href="/docs/instrukciya_po_polucheniyu_ser1.pdf" target={"__blank"}
             className={styles.link}>
            <DocumentIcon className={styles.icon}/>
            <span>Инструкция по получению сертификата открытого ключа для юридические лиц</span></a></p>
        <p>
          <a href="/docs/instrukciya_po_polucheniyu_ser.pdf" target={"__blank"}
             className={styles.link}>
            <DocumentIcon className={styles.icon}/>
            <span>Инструкция по получению сертификата открытого ключа для физических лиц</span>
          </a>
        </p>
        <p>
          <a href="/docs/instrukciya_po_organizacii_par.pdf" target={"__blank"}
             className={styles.link}>
            <DocumentIcon className={styles.icon}/>
            <span>Инструкция по организации парольной защиты</span>
          </a>
        </p>
        <p>
          <a href="/docs/instrukciya_po_organizacii_ant.pdf" target={"__blank"}
             className={styles.link}>
            <DocumentIcon className={styles.icon}/>
            <span>Инструкция по организации антивирусной защиты</span>
          </a>
        </p>
        <p>
          <a href="/docs/instrukciya_operatora_dlya_pro.pdf" target={"__blank"}
             className={styles.link}>
            <DocumentIcon className={styles.icon}/>
            <span>Инструкция оператора для программы IDC: CA менеджер</span>
          </a>
        </p>
        <p>
          <a href="/docs/instrukciya_operatora_dlya_pro.pdf" target={"__blank"}
             className={styles.link}>
            <DocumentIcon className={styles.icon}/>
            <span>Инструкция оператора для программы IDC: CA менеджер</span>
          </a>
        </p>
      </div>
    
    </Layout>
  );
};

export default Documents;