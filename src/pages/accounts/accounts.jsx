import React from 'react';
import './accounts.scss';
import WhiteSection from '@src/containers/sections/whiteSection';
import GreySection from '@src/containers/sections/greySection';
import Navigation from '@src/containers/navigation/navigation';
import SupportContent from '@src/containers/supportContent/supportContent';
import bar from '@src/_img/pictures/bar.png';
import production from '@src/_img/photo/production.png';
import flower from '@src/_img/pictures/flower.png';
import navigationAccounts from './navigationListAccounts.js';

function AccountsPage() {
  return (
    <div className="accounts-page">
      <div className="accounts-page__title">
        <WhiteSection
          img={bar}
          title={{
            first: 'Accounts made',
            second: 'for modern life'
          }}
          text={'Bank accounts'}
          buttonName={'Sign up for an account'}
        />
      </div>
      <Navigation button={navigationAccounts} />
      <GreySection
        img={flower}
        title={{
          first: 'The savings account',
          second: 'made for women'
        }}
        text={'Shorouq savings account'}
        buttonName={'Find out more'}
      />
      <WhiteSection
        img={production}
        title={{ first: 'Your salary,', second: 'sorted.' }}
        text={'Salary account'}
        buttonName={'Find out more'}
      />
      <GreySection
        img={bar}
        title={{ first: 'Everyday banking,', second: 'simplified.' }}
        text={'Current account'}
        buttonName={'Find out more'}
      />
      <SupportContent
        title={{
          first: 'Ready to get started?',
          second: 'Apply online today'
        }}
        buttonName={'Sign up for an account'}
      />
    </div>
  );
}
export default AccountsPage;
