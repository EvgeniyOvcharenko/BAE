import React from 'react';
import './sections.scss';
import OrangeButton from '@src/components/orangeButton/orangeButton';

function GreySection(prop) {
  const {img, title, text, buttonName} = prop;
  return (
    <div className="grey-section">
      <img src={img} alt="" />
      <div className="grey-section__title">
        <p>{text}</p>
        <h3>{title.first}<br/>{title.second}</h3>
        <OrangeButton name={buttonName} />
      </div>
    </div>
  );
}

export default GreySection;
