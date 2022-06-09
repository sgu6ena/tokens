import {FC} from 'react';
import Layout from "../../components/layout/layout";
import Title from "../../components/heading/Title";

const Downloads: FC = () => {
    return (
        <Layout>
          <div className={"flex justify-center h-96 items-center"}>
            <Title>Загрузки</Title>
          </div>
        </Layout>
    );
};

export default Downloads;