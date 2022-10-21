import React from 'react';
import './mobileAppList.scss';

function MobileAppList(prop) {
  return (
    <div className="mobile-app_list">
      {prop.mobileAppList.map((text, index) => {
        return (
          <div key={index}>
            <p>{text}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
export default MobileAppList;
