import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import translations from './translations';  // Importamos las traducciones
import NeerdImage from './tecnologias/neerd.png';
import LEDTechImage from './CVU_pic.jpg';
import MetatronicImage from './CVU_pic.jpg';
import PurpImage from './CVU_pic.jpg';
import BlackzoneImage from './CVU_pic.jpg';
import TacosKissiImage from './tecnologias/kissi.png';
import BCIngenieriaImage from './tecnologias/bcingenieria.png';
import PuntoMagicoImage from './tecnologias/magico.png';
import AqquaGym from './tecnologias/aqqua.png';
import './Experience.css';

const Experience = ({ language }) => {
  const texts = translations[language].experience;  // Obtener los textos según el idioma seleccionado

  return (
    <section className="section">
      <h2 className="sectionTitle">
        <FontAwesomeIcon icon={faBriefcase} className="iconTitle" /> 
        {translations[language].experienceTitle}
      </h2>

      {/* BCIngeniería */}
      <div className="experienceItem">
        <img src={BCIngenieriaImage} alt="BCIngeniería" className="experienceImage" />
        <div>
          <h3 className="jobTitle">{texts.bcIngenieria.title}</h3>
          <p className="text">{texts.bcIngenieria.description}</p>
        </div>
      </div>

      {/* Neerd E-Learning */}
      <div className="experienceItem">
        <img src={NeerdImage} alt="Neerd E-Learning" className="experienceImage" />
        <div>
          <h3 className="jobTitle">{texts.neerd.title}</h3>
          <p className="text">{texts.neerd.description}</p>
        </div>
      </div>
 
      {/* Aqqua Gym */}
      <div className="experienceItem">
        <img src={AqquaGym} alt="AqquaGym" className="experienceImage" />
        <div>
          <h3 className="jobTitle">{texts.aqqua.title}</h3>
          <p className="text">{texts.aqqua.description}</p>
        </div>
      </div>

      {/* PuntoMágico */}
      <div className="experienceItem">
        <img src={PuntoMagicoImage} alt="PuntoMágico" className="experienceImage" />
        <div>
          <h3 className="jobTitle">{texts.puntoMagico.title}</h3>
          <p className="text">{texts.puntoMagico.description}</p>
        </div>
      </div>

      {/* Tacos Kissi */}
      <div className="experienceItem">
        <img src={TacosKissiImage} alt="Tacos Kissi" className="experienceImage" />
        <div>
          <h3 className="jobTitle">{texts.tacosKissi.title}</h3>
          <p className="text">{texts.tacosKissi.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
