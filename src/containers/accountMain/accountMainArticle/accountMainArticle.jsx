import React from 'react';
import './accountMainArticle.scss';
import OrangeButton from '@src/components/orangeButton/orangeButton';

function AccountMainArticle(prop) {
  const {title, img, buttonName} = prop;
  return (
    <div className="accounts__main_article">
      <h3>{title}</h3>
      <img src={img} alt=""/>
      <OrangeButton name={buttonName}/>
    </div>
  );
}

export default AccountMainArticle;
