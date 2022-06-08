import React from 'react';
import Header from "./components/navigation/header/Header";
import MainBlock from "./components/mainBlock/MainBlock";
import PrimaryBlock from "./components/primaryBlock/PrimaryBlock";
import SecondaryBlock from "./components/secondaryBlock/SecondaryBlock";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="flex flex-col gap-20" >
        <Header/>
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
        <Footer/>
    </div>
  );
}

export default App;
