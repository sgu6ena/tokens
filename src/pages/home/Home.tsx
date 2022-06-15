import {FC} from 'react';
import MainBlock from "../../components/mainBlock/MainBlock";
import PrimaryBlock from "../../components/primaryBlock/PrimaryBlock";

import Faq from "../../components/faq/Faq";
import Layout from "../../components/layout/layout";
import Title from "../../components/heading/Title";
import Secondary from "./secondary";
import {faqData} from "./faq.data";

const Home: FC = () => {
  return (
    <Layout>
      <MainBlock img={'./images/main.png'}>
        <Title>Сертификат<br/>
          электронной <span className={'text-accent'}>подписи</span></Title>
        <div className={'text-secondary'}>Удостоверяющий центр выдает сертификаты электронной подписи
          для организаций и частных лиц.
        </div>
        <div className={'flex justify-center md:justify-start'}>
          <button className={'btn w-fit'}>Получить сертификат</button>
        </div>
      </MainBlock>
      
      
      <PrimaryBlock title={"Что такое электронная подпись?"} image={'./images/aboutService.png'}>
        <p className={'text-main'}>Информация в электронной форме, которая присоединена или иным образом связана
          с другой информацией в электронной форме и которая используется для определения лица, подписывающего
          информацию.</p>
      </PrimaryBlock>
      <Secondary/>
      
      <PrimaryBlock title={'Как получить сертификат электронной подписи?'} image={'./images/arrow_down.png'}>
        <p className={'text-main'}>Для получения сертификата открытого ключа электронной подписи необходимо
          обратиться в Удостоверяющий центр, или его представительство и пройти процедуру регистрации.</p>
        <button className={'btn mt-6 w-fit'}>Получить сертификат</button>
      </PrimaryBlock>
      <div className={'flex flex-col gap-8'}>
        <h3 className={'subtitle'}>Частые вопросы</h3>
        {faqData.map(item => <Faq title={item.title} answer={item.content} key={item.title}/>)}
      </div>
     
    
    </Layout>
  );
};

export default Home;