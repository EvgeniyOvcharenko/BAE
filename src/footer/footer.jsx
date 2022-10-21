import React from 'react';
import './footer.scss';
import logo from '@src/_img/footer/footerLogo.svg';
import FooterContent from './footerContent/footerContent';
import footerList from './footerList.js';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <img src={logo} alt="" />
        <div className="footer__list">
          {footerList.map((item, index) => {
            return (
              <FooterContent
                key={index}
                title={item.title}
                list={item.list}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
