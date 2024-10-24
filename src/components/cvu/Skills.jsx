import React, { useState } from 'react';
import './Skills.css';  // Asegúrate de importar este archivo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import translations from './translations';  // Importar las traducciones

// Importar imágenes de tecnologías
import AWSIcon from './tecnologias/aws.png';
import JSIcon from './tecnologias/JS.png';
import LinuxIcon from './tecnologias/linux.png';
import MySQLIcon from './tecnologias/mysql.png';
import NodeJSIcon from './tecnologias/nodejs.png';
import PythonIcon from './tecnologias/python.png';
import ReactIcon from './tecnologias/react.png';
import Chatbot from './tecnologias/chatbot.png';
import Openai from './tecnologias/openai.png';
import AmazonLinux from './tecnologias/awslinux.png';

const Skills = ({ language }) => {
  // Obtener los textos de las traducciones según el idioma seleccionado
  const texts = translations[language];

  return (
    <section className="section">
      <h2 className="sectionTitle">
        <FontAwesomeIcon icon={faLaptopCode} className="iconTitle" />
        {texts.skillsTitle}
      </h2>
      <ul className="skillList">
        <li>
          <div className="techIconContainer">
            <img src={NodeJSIcon} alt="Node.js" className="techIcon" />
            <img src={MySQLIcon} alt="MySQL" className="techIcon" />
          </div>
          <strong>{texts.backend.title}</strong>
          <p className="skillText">{texts.backend.description}</p>
        </li>
        <li>
          <div className="techIconContainer">
            <img src={ReactIcon} alt="React" className="techIcon" />
            <img src={JSIcon} alt="JavaScript" className="techIcon" />
          </div>
          <strong>{texts.frontend.title}</strong>
          <p className="skillText">{texts.frontend.description}</p>
        </li>
        <li>
          <div className="techIconContainer">
            <img src={PythonIcon} alt="Python" className="techIcon" />
            <img src={LinuxIcon} alt="Linux" className="techIcon" />
          </div>
          <strong>{texts.microcontrollers.title}</strong>
          <p className="skillText">{texts.microcontrollers.description}</p>
        </li>
        <li>
          <div className="techIconContainer">
            <img src={Chatbot} alt="Chatbot" className="techIcon" />
            <img src={Openai} alt="OpenAI" className="techIcon" />
          </div>
          <strong>{texts.apis.title}</strong>
          <p className="skillText">{texts.apis.description}</p>
        </li>
        <li>
          <div className="techIconContainer">
            <img src={AWSIcon} alt="AWS" className="techIcon" />
            <img src={AmazonLinux} alt="Amazon Linux" className="techIcon" />
          </div>
          <strong>{texts.aws.title}</strong>
          <p className="skillText">{texts.aws.description}</p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
