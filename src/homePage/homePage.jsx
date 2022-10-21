import React from 'react';
import './homePage.scss';
import Title from './title/title';
import Navigation from '@src/containers/navigation/navigation';
import CreditCards from '@src/containers/creditCards/creditCards';
import GreySection from '@src/containers/sections/greySection';
import WhiteSection from '@src/containers/sections/whiteSection';
import bar from '@src/_img/pictures/bar.png';
import exclusive from '@src/_img/photo/exclusive.png';
import house from "@src/_img/pictures/House.png";
import SupportContent from '@src/containers/supportContent/supportContent';
import navigationHome from "./navigationListHome.js";

function HomePage() {
  return (
    <div className="home">
      <Title />
      <Navigation button={navigationHome}/>
      <CreditCards buttonName="Find your card" />
      <GreySection
        img={bar}
        title={{ first: 'Everyday banking,', second: 'simplified.' }}
        text={'Current account'}
        buttonName={'Find out more'}
      />
      <WhiteSection
        img={house}
        title={{ first: 'Moving house', second: 'made simple' }}
        text={'Mortgage'}
        buttonName={'Find out more'}
      />
      <GreySection
        img={exclusive}
        title={{
          first: 'Exclusive services',
          second: 'just for women'
        }}
        text={'Shorouq banking exclusives'}
        buttonName={'Find out more'}
      />
      <SupportContent
        title={{
          first: 'Ready to get started?',
          second: 'Apply online now'
        }}
        buttonName={'Sign up for an account'}
      />
    </div>
  );
}

export default HomePage;
