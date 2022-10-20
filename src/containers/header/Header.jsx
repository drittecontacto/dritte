import React from 'react';
// import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import dritte from '../../assets/dritte.png'
import dritte3D from '../../assets/dritte3d.tif'
import people from '../../assets/people.png';
import onlyFans from "../../assets/Onlyfans-Logo.png"
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">DriTTe</h1>
      <p> Agencia digital dedicada a la gestion y expasion de tu negocio de contenido exclusivo.</p>
      <p>Somos profesionales con experiencia previa en el rubro y contamos con las herramientas exactas para colaborar contigo</p>


{/*     
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div> */}

      <div className="gpt3__header-content__people">
        <img src={people}/>
        <p>5+ personas se contactaron con nosotros</p>
      </div>
      {/* <div className="onlyFans-img">
      <img src={onlyFans} width="400px" height="300px" ></img>
    </div> */}
    </div>
   

    <div className="gpt3__header-image">
      <img src={dritte} className="gpt3__dritte-image"/>
    </div>
  </div>
);

export default Header;
