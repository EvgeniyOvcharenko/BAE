import React from 'react';
import './mobileAppBanner.scss';
import chart from '@src/_img/mobileApp/chart.png';
import OrangeButton from '@src/components/orangeButton/orangeButton';
import MobileAppList from './mobileAppList/mobileAppList';

const mobileAppList = [
  'One tap payments',
  'Manage cards',
  'Siri integration'
];

function MobileApp() {
  return (
    <div className="mobile-banner">
      <div className="mobile-banner__title">
        <p>Mobile banking app</p>
        <h2>
          All your finances at
          <br />
          your fingertips
        </h2>
      </div>
      <div className="mobile-banner__analytics">
        <div className="mobile-banner__analytics_content">
          <hr className="mobile-banner__analytics_top-hr" />
          <h4> Account analytics</h4>
          <p>
            See what you’ve spent this month, and stay up to date
            
            on your transactions and learn your spending habits to
            
            save and spend smarter.
          </p>
          <hr />
          <MobileAppList mobileAppList={mobileAppList} />
          <div className="mobile-banner__analytics_buttons">
            <OrangeButton name="iOS download" />
            <OrangeButton name="Android download" />
          </div>
        </div>
        <img src={chart} alt="" />
      </div>
    </div>
  );
}
export default MobileApp;
