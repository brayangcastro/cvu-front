import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import translations from './translations';
import NeerdImage from './tecnologias/neerd.png';
import BCIngenieriaImage from './tecnologias/bcingenieria.png';
import PuntoMagicoImage from './tecnologias/magico.png';
import AqquaGym from './tecnologias/aqqua.png';
import TacosKissiImage from './tecnologias/kissi.png';
import KotsalaImage from './tecnologias/kotsala.jpg'; // Imagen de Kotsala
import './Experience.css';

const Experience = ({ language }) => {
  const texts = translations[language].experience;

  return (
    <section className="section">
      <h2 className="sectionTitle">
        <FontAwesomeIcon icon={faBriefcase} className="iconTitle" />
        {translations[language].experienceTitle}
      </h2>

      <div className="experienceItem">
        <img src={BCIngenieriaImage} alt="BCIngeniería" className="experienceImage" />
        <div>
          <h3 className="jobTitle">{texts.bcIngenieria.title}</h3>
          <p className="text">{texts.bcIngenieria.description}</p>
          <button className="viewDemoButton" onClick={() => window.open("https://brayancastro.com/ingebc/home", "_blank")}>
            {texts.viewDemo}
          </button>
        </div>
      </div>

       {/* Nueva experiencia: Kotsala Invernaderos Inteligentes */}
       <div className="experienceItem">
        <img src={KotsalaImage} alt="Kotsala Invernaderos Inteligentes" className="experienceImage" />
        <div>
          <h3 className="jobTitle">{texts.kotsala.title}</h3>
          <p className="text">{texts.kotsala.description}</p>
          <button className="viewDemoButton" onClick={() => window.open("https://brayancastro.com/kotsala", "_blank")}>
            {texts.viewDemo}
          </button>
        </div>
      </div>

      <div className="experienceItem">
        <img src={NeerdImage} alt="Neerd E-Learning" className="experienceImage" />
        <div>
          <h3 className="jobTitle">{texts.neerd.title}</h3>
          <p className="text">{texts.neerd.description}</p>
          <button className="viewDemoButton" onClick={() => window.open("https://neerd.org/", "_blank")}>
            {texts.viewDemo}
          </button>
        </div>
      </div>

      <div className="experienceItem">
        <img src={AqquaGym} alt="Aqqua Gym" className="experienceImage" />
        <div>
          <h3 className="jobTitle">{texts.aqqua.title}</h3>
          <p className="text">{texts.aqqua.description}</p>
          <button className="viewDemoButton" onClick={() => window.open("https://brayancastro.com/gym", "_blank")}>
            {texts.viewDemo}
          </button>
        </div>
      </div>

      <div className="experienceItem">
        <img src={PuntoMagicoImage} alt="PuntoMágico" className="experienceImage" />
        <div>
          <h3 className="jobTitle">{texts.puntoMagico.title}</h3>
          <p className="text">{texts.puntoMagico.description}</p>
          <button className="viewDemoButton" onClick={() => window.open("https://brayancastro.com/magico", "_blank")}>
            {texts.viewDemo}
          </button>
        </div>
      </div>

      <div className="experienceItem">
        <img src={TacosKissiImage} alt="Tacos Kissi" className="experienceImage" />
        <div>
          <h3 className="jobTitle">{texts.tacosKissi.title}</h3>
          <p className="text">{texts.tacosKissi.description}</p>
          <button className="viewDemoButton" onClick={() => window.open("https://brayancastro.com/kissi", "_blank")}>
            {texts.viewDemo}
          </button>
        </div>
      </div>

     
    </section>
  );
};

export default Experience;
