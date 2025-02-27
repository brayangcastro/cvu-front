import React from 'react';
import './Skills.css'; // Asegúrate de tener este archivo de estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
// Importa las traducciones específicas para Paulina (asegúrate de que el archivo contenga los textos adaptados)
import translations from './translations_pau'; 

// Importar imágenes de tecnologías (ajusta o elimina las que no apliquen)
import AWSIcon from './tecnologias/aws.png';
import JSIcon from './tecnologias/JS.png';
import LinuxIcon from './tecnologias/linux.png';
import MySQLIcon from './tecnologias/mysql.png';
import NodeJSIcon from './tecnologias/nodejs.png';
import ReactIcon from './tecnologias/react.png';
import ChatbotIcon from './tecnologias/chatbot.png';
import OpenaiIcon from './tecnologias/openai.png';
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
            <img src={LinuxIcon} alt="Linux" className="techIcon" />
            {/* Si deseas, puedes reemplazar estos iconos por otros representativos de IoT o hardware */}
          </div>
          <strong>{texts.microcontrollers.title}</strong>
          <p className="skillText">{texts.microcontrollers.description}</p>
        </li>
        <li>
          <div className="techIconContainer">
            <img src={ChatbotIcon} alt="Chatbot" className="techIcon" />
            <img src={OpenaiIcon} alt="OpenAI" className="techIcon" />
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
