import React from 'react';
import './sections.scss';
import OrangeButton from '@src/components/orangeButton/orangeButton';

function WhiteSection(prop) {
  const {img, title, text, buttonName} = prop;
  return (
    <div className="white-section">
      <div className="white-section__title">
        <p>{text}</p>
        <h3>{title.first}<br/>{title.second}</h3>
        <OrangeButton name={buttonName} />
      </div>
      <img src={img} alt="" />
    </div>
  );
}

export default WhiteSection;
