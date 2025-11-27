import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import translations from './translations';

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
import GoIcon from './tecnologias/goicon.png';
import ESP32Icon from './tecnologias/esp32.png';

const Skills = ({ language }) => {
  const texts = translations[language];

  return (
    <section className="cv-skill-section">

      <h2 className="cv-skill-title">
        <FontAwesomeIcon icon={faLaptopCode} /> &nbsp;
        {texts.skillsTitle}
      </h2>

      <ul className="cv-skill-list">

        <li className="cv-skill-card">
          <div className="cv-skill-icons">
            <img src={NodeJSIcon} className="cv-skill-icon" alt="" />
            <img src={MySQLIcon} className="cv-skill-icon" alt="" />
            <img src={GoIcon} className="cv-skill-icon" alt="" />
          </div>
          <strong className="cv-skill-name">{texts.backend.title}</strong>
          <p className="cv-skill-text">{texts.backend.description}</p>
        </li>

        <li className="cv-skill-card">
          <div className="cv-skill-icons">
            <img src={ReactIcon} className="cv-skill-icon" alt="" />
            <img src={JSIcon} className="cv-skill-icon" alt="" />
          </div>
          <strong className="cv-skill-name">{texts.frontend.title}</strong>
          <p className="cv-skill-text">{texts.frontend.description}</p>
        </li>

        <li className="cv-skill-card">
          <div className="cv-skill-icons">
            <img src={PythonIcon} className="cv-skill-icon" alt="" />
            <img src={LinuxIcon} className="cv-skill-icon" alt="" />
            <img src={ESP32Icon} className="cv-skill-icon" alt="" />
          </div>
          <strong className="cv-skill-name">{texts.microcontrollers.title}</strong>
          <p className="cv-skill-text">{texts.microcontrollers.description}</p>
        </li>

        <li className="cv-skill-card">
          <div className="cv-skill-icons">
            <img src={Openai} className="cv-skill-icon" alt="" />
            <img src={Chatbot} className="cv-skill-icon" alt="" />
          </div>
          <strong className="cv-skill-name">{texts.apis.title}</strong>
          <p className="cv-skill-text">{texts.apis.description}</p>
        </li>

        <li className="cv-skill-card">
          <div className="cv-skill-icons">
            <img src={AWSIcon} className="cv-skill-icon" alt="" />
            <img src={AmazonLinux} className="cv-skill-icon" alt="" />
          </div>
          <strong className="cv-skill-name">{texts.aws.title}</strong>
          <p className="cv-skill-text">{texts.aws.description}</p>
        </li>

      </ul>
    </section>
  );
};

export default Skills;
