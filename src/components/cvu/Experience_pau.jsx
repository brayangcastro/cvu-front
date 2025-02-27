import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import translations from './translations_pau'; // Traducciones adaptadas para Paulina
import BCIngenieriaImage from './tecnologias/bcingenieria.png'; // Imagen representativa de su colaboración
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
        <img
          src={BCIngenieriaImage}
          alt="Colaboración en Proyectos con BCIngeniería"
          className="experienceImage"
        />
        <div>
          <h3 className="jobTitle">{texts.bcIngenieria.title}</h3>
          <p className="text">{texts.bcIngenieria.description}</p>
          <button
            className="viewDemoButton"
            onClick={() => window.open("https://example.com", "_blank")}
          >
            {texts.viewDemo}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
