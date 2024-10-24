import React from 'react';
import './Skills.css';  // Asegúrate de importar este archivo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

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

const Skills = () => {
  return (
    <section className="section">
      <h2 className="sectionTitle">
        <FontAwesomeIcon icon={faLaptopCode} className="iconTitle" /> 
        Habilidades Técnicas
      </h2>
      <ul className="skillList">
        <li>
          <div className="techIconContainer">
            <img src={NodeJSIcon} alt="Node.js" className="techIcon" />
            <img src={MySQLIcon} alt="MySQL" className="techIcon" />
          </div>
          <strong>Backend:</strong>
          <p className="skillText">
            Desarrollo de sistemas escalables con Node.js, Express, y MySQL, incluyendo sistemas de puntos de venta.
          </p>
        </li>
        <li>
          <div className="techIconContainer">
            <img src={ReactIcon} alt="React" className="techIcon" />
            <img src={JSIcon} alt="JavaScript" className="techIcon" />
          </div>
          <strong>Frontend:</strong>
          <p className="skillText">
            Desarrollo de interfaces dinámicas con React para optimizar la experiencia del usuario.
          </p>
        </li>
        <li>
          <div className="techIconContainer">
            <img src={PythonIcon} alt="Python" className="techIcon" />
            <img src={LinuxIcon} alt="Linux" className="techIcon" />
          </div>
          <strong>Microcontroladores y Raspberry Pi:</strong>
          <p className="skillText">
            Programación y gestión de sensores y controles con Modbus, RS232, y 4-20 mA.
          </p>
        </li>
        <li>
          <div className="techIconContainer">
            <img src={Chatbot} alt="Chatbot" className="techIcon" />
            <img src={Openai} alt="OpenAI" className="techIcon" />
          </div>
          <strong>Integración de APIs y Chatbots:</strong>
          <p className="skillText">
            Creación de chatbots de WhatsApp con IA, integrando APIs como OpenAI.
          </p>
        </li>
        <li>
          <div className="techIconContainer">
            <img src={AWSIcon} alt="AWS" className="techIcon" />
            <img src={AmazonLinux} alt="Amazon Linux" className="techIcon" />
          </div>
          <strong>Despliegue en AWS:</strong>
          <p className="skillText">
            Configuración y manejo de instancias en AWS para aplicaciones de Node.js y React.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
