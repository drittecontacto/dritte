import React, { useState } from 'react';
import { RiCloseLine,RiMenu3Line } from "react-icons/ri";
import logo from '../../logo.svg';
import dritte from '../../assets/dritte.png'
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={dritte} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Inicio</a></p>
          {/* <p><a href="#wgpt3">Sobre nosotros</a></p> */}
          <p><a href="#wgpt3">Servicios</a></p>
          <p><a href="#connect">Contacto</a></p>
          {/* <p><a href="#blog">Library</a></p> */}
        </div>
      </div>
      {/* <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div> */}
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Inicio</a></p>
            {/* <p><a href="#wgpt3">Sobre nosotros</a></p> */}
            <p><a href="#possibility">Servicios</a></p>
            <p><a href="#features">Contacto</a></p>
          </div>
          {/* <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div> */}
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
