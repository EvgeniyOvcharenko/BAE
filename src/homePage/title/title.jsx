import React from 'react';
import './title.scss';
import OrangeButton from "@src/components/orangeButton/orangeButton";
import iPad from "@src/_img/pictures/iPad.png";
import house from "@src/_img/pictures/House.png";
import holiday from "@src/_img/pictures/Card holiday.png"; 

function Title() {
  return (
    <div className="home__title">
      <div className="home__title-container">
        <h1>Rendering banking</h1>
        <div className="home__title_description">
          <p>Manage your money effortlessly, through personalised tools, free advice and unparalled services.</p>
          <OrangeButton name="Sign up for an account"/>
        </div>
      </div>
      <div className="home__image-container">
        <img className="home__image-container_holiday" src={holiday} alt="1"/>
        <img className="home__image-container_ipad" src={iPad} alt="1"/>
        <img className="home__image-container_house" src={house} alt="1"/>
      </div>
    </div>
  );
}

export default Title;
