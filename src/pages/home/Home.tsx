import  {FC} from 'react';
import MainBlock from "../../components/mainBlock/MainBlock";
import PrimaryBlock from "../../components/primaryBlock/PrimaryBlock";
import SecondaryBlock from "../../components/secondaryBlock/SecondaryBlock";
import Faq from "../../components/faq/Faq";
import Layout from "../../components/layout";

const Home: FC = () => {
    return (
        <Layout>
            <MainBlock>ГЛАВНЫЙ блок</MainBlock>
            <PrimaryBlock> какая-то главная информация </PrimaryBlock>
            <SecondaryBlock>какая-то не главная информация</SecondaryBlock>
            <SecondaryBlock>какая-то не главная информация</SecondaryBlock>
            <SecondaryBlock>какая-то не главная информация</SecondaryBlock>
            <SecondaryBlock>какая-то не главная информация</SecondaryBlock>
            <SecondaryBlock>какая-то не главная информация</SecondaryBlock>
            <PrimaryBlock> какая-то главная информация </PrimaryBlock>
            <Faq/>
            <Faq/>
            <Faq/>
            <Faq/>
        </Layout>
    );
};

export default Home;