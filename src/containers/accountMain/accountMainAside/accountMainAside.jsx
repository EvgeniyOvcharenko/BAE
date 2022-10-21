import React from 'react';
import './accountMainAside.scss';

function accountMainAside(prop) {
  const { topSection, middleSection, bottomSection } = prop.aside;
  const { passport, document } = bottomSection.card;
  return (
    <div className="accounts__main_aside">
      <hr />
      <div className="accounts__main_aside_top-section">
        <h3>{topSection.title}</h3>
        <p>{topSection.text}</p>
      </div>
      <div className="accounts__main_aside_middle-section">
        {middleSection.map((item, index) => {
          return (
            <div key={index}>
              <h3>{item.title}</h3>
              <ul>
                {item.list.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="accounts__main_aside_bottom-section">
        <h3>{bottomSection.title}</h3>
        <div>
          <img
            src={passport.img.passport}
            alt=""
          />
          <p>{passport.text}</p>
        </div>
        <div>
          <img
            src={document.img.document}
            alt=""
          />
          <p>{document.text}</p>
        </div>
      </div>
    </div>
  );
}

export default accountMainAside;
