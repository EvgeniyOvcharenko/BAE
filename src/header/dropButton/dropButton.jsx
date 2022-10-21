import React from 'react';
import './dropButton.scss';

function DropButton(prop) {
  return (
    <div className="header__sidebar_dropdown">
      <button>{prop.buttonName} </button>
      <div className="header__dropdown-content">
        {prop.links.map((item, index) => {
          return (
            <a key={index} href={item.link}>
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default DropButton;
