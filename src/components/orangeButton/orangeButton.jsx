import React from 'react';
import './orangeButton.scss';
import array from "@src/_img/orangeButton_array.svg";

function OrangeButton(prop) {
  return (
    <button className="orange-button">
      <span>{prop.name}</span>
      <img src={array} alt=""/>
    </button>
  );
}

export default OrangeButton;
