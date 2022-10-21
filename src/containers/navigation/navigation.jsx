import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';
import arrow from '../../_img/mobileApp/mobileAppArray.svg';

let offset = 0;

function handlerMovePrev(){
  const sliderLine = document.querySelector(".slider-field");
  
    offset += 100;
    sliderLine.style.right = offset + "px";
  
}

function handlerMoveNext(){
  const sliderLine = document.querySelector(".slider-field");
 
    offset -= 100;
    sliderLine.style.right = offset + "px";
  
}

function Navigation(prop) {
  const [windowWidth, setWindowWidth] = useState(30);
  function controllersPlace() {
    setWindowWidth(
      document.querySelector('.navigation__button-container')
        .offsetWidth
    );
    if (window.innerWidth <= 1080) {
      document.querySelector('.navigation_next-slide').style.right =
        1080 + 30 - windowWidth + 'px';
    } else {
      document.querySelector('.navigation_next-slide').style.right =
        1440 - 30 - windowWidth + 'px';
    }
  }

  useEffect(() => {
    window.addEventListener('resize', controllersPlace);
    return () =>
      window.removeEventListener('resize', controllersPlace);
  });

  return (
    <div className="navigation">
      <div className="navigation__button-container">
        <div>
          <button className="navigation_prev-slide" onClick={() => handlerMovePrev()}><img className="navigation_prev-slide__location" src={arrow} alt="" /></button>
        </div>
        <ul className="slider-field">
          {prop.button.map((item, index) => {
            return (
              <li className="slider-item" key={index}>
                <Link to={item.href}>
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <button className="navigation_next-slide" onClick={() => handlerMoveNext()}><img className="navigation_next-slide__location" src={arrow} alt="" /></button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
