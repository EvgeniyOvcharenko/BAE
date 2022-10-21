import React from 'react';
import './footerContent.scss';

function FooterContent(prop) {
  const { title, list } = prop;
  return (
    <div className="footer__list_item">
        <h4>{title}</h4>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default FooterContent;
