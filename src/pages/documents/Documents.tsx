import {FC} from 'react';
import Layout from "../../components/layout/layout";
import Title from "../../components/heading/Title";
import {ReactComponent as DocumentIcon} from "../../assets/images/document.svg";
import styles from './document.module.scss'
import {documents} from "./documents.data";

const Documents: FC = () => {
  return (
    <Layout>
      <div className={"flex justify-center  items-center title"}>
        <Title>Документы</Title>
      </div>
      <div>
        {documents.map(doc=>(
          
            <a href={doc.link} target={"__blank"}
               className={styles.link}>
              <DocumentIcon className={styles.icon}/>
              <span>{doc.title}</span></a>
        ))}
      </div>
    
    </Layout>
  );
};

export default Documents;