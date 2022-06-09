import {FC} from 'react';
import Layout from "../../components/layout/layout";
import Title from "../../components/heading/Title";

const Documents: FC = () => {
    return (
        <Layout>
             <div className={"flex justify-center h-96 items-center title"}>
               <Title>Документы</Title>
             </div>
        </Layout>
    );
};

export default Documents;