import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import translations from './translations';

import ChatbotYaImage from './tecnologias/chatbotya.jpg';
import TuContaImage from './tecnologias/tucontaLogo-azul.png';
import RoboCallImage from './tecnologias/robocall.png';
import MonitorIoTImage from './tecnologias/monitor_volt.png';
import KotsalaImage from './tecnologias/kotsala.jpg';

import './Experience.css';

const Experience = ({ language }) => {
  const texts = translations[language].experience;

  return (
    <section className="cv-exp-section">
      
      <h2 className="cv-exp-title">
        <FontAwesomeIcon icon={faBriefcase} /> &nbsp;
        {translations[language].experienceTitle}
      </h2>

      {/* ChatbotYa */}
      <div className="cv-exp-item">
        <img src={ChatbotYaImage} alt="ChatbotYa" className="cv-exp-image" />
        <div>
          <h3 className="cv-exp-title-role">{texts.chatbotya.title}</h3>
          <p className="cv-exp-text">{texts.chatbotya.description}</p>

          <button className="cv-exp-demo-btn"
            onClick={() => window.open("https://chatbotya.com", "_blank")}>
            {texts.viewDemo}
          </button>
        </div>
      </div>

      {/* TuConta */}
      <div className="cv-exp-item">
        <img src={TuContaImage} alt="TuContaOnline" className="cv-exp-image" />
        <div>
          <h3 className="cv-exp-title-role">{texts.tuconta.title}</h3>
          <p className="cv-exp-text">{texts.tuconta.description}</p>
       
        <button className="cv-exp-demo-btn"
            onClick={() => window.open("https://demo.tucontaenlinea.com", "_blank")}>
            {texts.viewDemo}
          </button>
           </div>
      </div>

      {/* RoboCall */}
      <div className="cv-exp-item">
        <img src={RoboCallImage} alt="RoboCall" className="cv-exp-image" />
        <div>
          <h3 className="cv-exp-title-role">{texts.robocall.title}</h3>
          <p className="cv-exp-text">{texts.robocall.description}</p>
        </div>
      </div>

      {/* Monitor IoT */}
      <div className="cv-exp-item">
        <img src={MonitorIoTImage} alt="Monitor IoT" className="cv-exp-image" />
        <div>
          <h3 className="cv-exp-title-role">{texts.monitorIoT.title}</h3>
          <p className="cv-exp-text">{texts.monitorIoT.description}</p>

          <button className="cv-exp-demo-btn"
            onClick={() => window.open("https://brayancastro.com/monitor", "_blank")}>
            {texts.viewDemo}
          </button>
            <button className="cv-exp-demo-btn"
            onClick={() => window.open("https://brayancastro.com/ingebc", "_blank")}>
            {texts.viewDemo2}
          </button>
        </div>
      </div>

      {/* Kotsala */}
      <div className="cv-exp-item">
        <img src={KotsalaImage} alt="Kotsala" className="cv-exp-image" />
        <div>
          <h3 className="cv-exp-title-role">{texts.kotsala.title}</h3>
          <p className="cv-exp-text">{texts.kotsala.description}</p>

          <button className="cv-exp-demo-btn"
            onClick={() => window.open("https://brayancastro.com/kotsala", "_blank")}>
            {texts.viewDemo}
          </button>
        </div>
      </div>

    </section>
  );
};

export default Experience;
