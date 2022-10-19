import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    {/* <div className="gpt3__whatgpt3-feature">
      <Feature title="" text="Tenemos las habilidades, tecnicas y conocimientos necesarios para aumentar tus ventas tanto a nivel regional como mundial de acuerdo a tus objetivos." />
    </div> */}
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">¿Que ofrecemos?</h1>
      <p>Tenemos las habilidades, tecnicas y conocimientos necesarios para aumentar tus ventas tanto a nivel regional como mundial de acuerdo a tus objetivos.</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Privacidad" text="Nos interesa tu integridad por lo que mantenemos privacidad absoluta acerca de tu persona" />
      <Feature title="Seguridad" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Confianza" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestiae commodi reprehenderit vel in amet, delectus natus ipsum? Aspernatur nam quia voluptate tempora nulla officia libero facere optio voluptas eius." />
      <Feature title="Profesionalidad" text="Entendemos lo importante que es el esfuerzo que ya pusiste en tu trabajo. Por eso nos esmeramos en tener la mejor comunicacion con vos para brindarte el mejor servicio de acuerdo a tus necesidades." />
    </div>
  </div>
);

export default WhatGPT3;
