import React, {useEffect} from 'react';
import './header.scss';
import logo from '@src/_img/header/header_logo.svg';
import location from '@src/_img/header/header_location.svg';
import DropButton from './dropButton/dropButton';
import links from './headerLinks.js';
import { Link } from "react-router-dom";
import { getHeaderMenu } from "@src/api/headerMenu";

 function Header() {
  useEffect(() => {
    getHeaderMenu().then((response) => console.log(response));
  }, []);

  return (
    <div className="header">  
      <div className="header__logo-container">
        <Link to="/"><img className="header__logo" src={logo} alt="" /></Link> 
        <p>Personal</p>
      </div>
      <div className="header__sidebar">
        <DropButton buttonName="Product" links={links.products} />
        <a href="/">Mobile banking</a>
        <DropButton
          buttonName="Services and Support"
          links={links.services}
        />
        <a href="/">عربى</a>
      </div>
      <div>
        <img className="location" src={location} alt="" />
        <button className="header_sign-in">Sign in</button>
        <button className="header_open">Open an account</button>
      </div>
    </div>
  );
}

export default Header;
