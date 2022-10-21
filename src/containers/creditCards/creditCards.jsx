import React from 'react';
import './creditCards.scss';
import OrangeButton from "@src/components/orangeButton/orangeButton";
import cards from '@src/_img/creditCards/cards.png';

function CardSection(prop) {
  return (
    <div className="card-section">
      <div className="card-section__title">
        <p>Compare credit cards</p>
        <h2>Credit cards<br/> tailored to you</h2>
        <OrangeButton width="303px" name={prop.buttonName}/>
      </div>
      <img src={cards} alt="" />
    </div>
  );
}

export default CardSection;
