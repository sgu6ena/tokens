import {FC} from 'react';
import Layout from "../../components/layout/layout";
import Title from "../../components/heading/Title";

const Documents: FC = () => {
    return (
        <Layout>
             <div className={"flex justify-center  items-center title"}>
               <Title>Документы</Title>
             </div>
         <p><a href="">Инструкция пользователя для программы IDC Управление ключами</a></p>
         <p><a href="">Инструкция по получению сертификата открытого ключа для юридические лиц</a></p>
         <p><a href="">Инструкция по получению сертификата открытого ключа для физических лиц</a></p>
         <p><a href="">Инструкция по организации парольной защиты</a></p>
         <p><a href="">Инструкция по организации антивирусной защиты</a></p>
         <p><a href="">Инструкция оператора для программы IDC: CA менеджер</a></p>
        </Layout>
    );
};

export default Documents;