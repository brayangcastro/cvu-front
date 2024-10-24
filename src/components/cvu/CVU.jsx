import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faLaptopCode, faGraduationCap, faBriefcase, faServer, faMicrochip, faCloud, faRobot, faLock } from '@fortawesome/free-solid-svg-icons';
import './CVU.css';  // Importamos los estilos
import CVUImage from './CVU_pic.jpg';
import NeerdImage from './CVU_pic.jpg';
import LEDTechImage from './CVU_pic.jpg';
import MetatronicImage from './CVU_pic.jpg';
import PurpImage from './CVU_pic.jpg';
import SlidingBar from './SlidingBar';  // Importar la barra superior
import Experience from './Experience';  // Importar la sección de experiencia
import Skills from './Skills';  // Importar la sección de experiencia

// Importación de imágenes de tecnologías
import AWSIcon from './tecnologias/aws.png';
import JSIcon from './tecnologias/JS.png';
import LinuxIcon from './tecnologias/linux.png';
import MySQLIcon from './tecnologias/mysql.png';
import NodeJSIcon from './tecnologias/nodejs.png';
import PythonIcon from './tecnologias/python.png';
import ReactIcon from './tecnologias/react.png';
import TSIcon from './tecnologias/TS.png';

import Chatbot from './tecnologias/chatbot.png';

import Openai from './tecnologias/openai.png';
import AmazonLinux from './tecnologias/awslinux.png';

const CVU = () => {
  return (
    <div>
      <SlidingBar />  {/* Añadir la barra superior */}
      <div className="container">
        {/* Barra lateral */}
        <aside className="sidebar">
          <div className="photoContainer">
            <img src={CVUImage} alt="Foto de perfil" className="photo" />
          </div>
          <section className="contactSection">
            <h1 className="name">Brayan Castro</h1>
            <p className="role">Ingeniero en Mecatrónica</p>
            <div className="contactInfo">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <span>(662) 1495980</span>
            </div>
            <div className="contactInfo">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <span>brayan-castro@hotmail.com</span>
            </div>
            <div className="contactInfo">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <span>Guasave, Sinaloa CP81020</span>
            </div>
          </section>
        </aside>

        {/* Sección principal */}
        <main className="mainContent">
          <section className="section">
            <h2 className="sectionTitle">Objetivo Profesional</h2>
            <p className="text">
              Mi objetivo es participar en el desarrollo de tecnología innovadora que marque la diferencia en la industria. Busco involucrarme en proyectos de vanguardia que utilicen las últimas tecnologías para crear soluciones escalables y disruptivas. Estoy comprometido con generar resultados que no solo sean rentables, sino que también tengan un impacto significativo. Mi enfoque está en aprender continuamente y colaborar con equipos que busquen llevar la tecnología al siguiente nivel, contribuyendo tanto al éxito empresarial como a mi crecimiento personal y profesional.
            </p>
          </section>

          

          <Skills /> 

          <section className="section">
            <h2 className="sectionTitle">
              <FontAwesomeIcon icon={faGraduationCap} className="iconTitle" /> 
              Educación
            </h2>
            <p className="text"><strong>Ingeniería en Mecatrónica</strong> - ITESM-CSN (2008 – 2013)</p>
            <p className="text"><strong>Técnico en Informática</strong> - CETIS 108 (2005 – 2008)</p>
          </section>

          {/* Componente de experiencia profesional */}
          <Experience /> {/* Aquí importamos el componente de experiencia */}

        </main>
      </div>
    </div>
  );
};

export default CVU;
