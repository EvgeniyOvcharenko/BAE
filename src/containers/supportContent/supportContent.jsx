import React from 'react';
import './supportContent.scss';
import OrangeButton from '@src/components/orangeButton/orangeButton';

function SupportContent(prop) {
  const {title, buttonName} = prop;
  return (
    <div className="support-content">
        <h2>{title.first}<br/>{title.second}</h2>
        <OrangeButton name={buttonName} />
    </div>
  );
}

export default SupportContent;
