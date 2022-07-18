import {FC} from 'react';
import MainBlock from "../../components/mainBlock/MainBlock";
import PrimaryBlock from "../../components/primaryBlock/PrimaryBlock";

import Faq from "../../components/faq/Faq";
import Layout from "../../components/layout/layout";
import Title from "../../components/heading/Title";
import Secondary from "./secondary";
import {faqData} from "./faq.data";
import {RouteNames} from "../../common/variables/RouteNames";



const Home: FC = () => {
  return (
    <Layout>
      <MainBlock img={'./images/main2.png'}>
        <Title>Сертификат<br/>
          электронной <span className={'text-accent'}>подписи</span></Title>
        <div className={'text-secondary'}>Удостоверяющий центр выдает сертификаты электронной подписи
          для организаций и частных лиц.
        </div>
        <div className={'flex justify-center md:justify-start'}>
          <a href={RouteNames.DOCUMENTS}>      <button className={'btn w-fit'}>Получить сертификат</button></a>
        </div>
      </MainBlock>
      
      
      <PrimaryBlock title={"Что такое электронная подпись?"} image={'./images/aboutService.png'} color={'#F3F3F3'}>
        <p className={'text-main'}>Информация в электронной форме, которая присоединена или иным образом связана
          с другой информацией в электронной форме и которая используется для определения лица, подписывающего
          информацию.</p>
      </PrimaryBlock>
      <Secondary/>
      
      <PrimaryBlock title={'Как получить сертификат электронной подписи?'} image={'./images/arrow_down.png'}>
        <p className={'text-main'}>Для получения сертификата открытого ключа электронной подписи необходимо
          обратиться в Удостоверяющий центр, или его представительство и пройти процедуру регистрации.</p>
        <a href={RouteNames.DOCUMENTS}>  <button className={'btn mt-6 w-fit'}>Получить сертификат</button></a>
      </PrimaryBlock>
      <div className={'flex flex-col gap-6'}>
        <h3 className={'subtitle'}>Частые вопросы</h3>
        {faqData.map(item => <Faq title={item.title} answer={item.content} key={item.title}/>)}
      </div>
     
    
    </Layout>
  );
};

export default Home;