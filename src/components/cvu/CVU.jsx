import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './CVU.css';
import CVUImage from './CVU_pic.jpg'; 
import SlidingBar from './SlidingBar';
import Experience from './Experience';
import Skills from './Skills';
import translations from './translations'; // Importar las traducciones
import MembershipChart from './MembershipChart'; 
import ChatSection from './ChatSection';
import SalesChart from './SalesChart';
import useLazyLoad from './useLazyLoad';  // Importa el hook personalizado
import DownloadSection from './DownloadSection';  // Importar la nueva sección de descarga de PDF

const CVU = () => {
  const [language, setLanguage] = useState('en'); // Estado para el idioma

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value); // Cambiar el idioma seleccionado
  };

  const texts = translations[language]; // Obtener los textos según el idioma seleccionado

  return (
    <div>
      <SlidingBar language={language} /> {/* Añadir la barra superior */}

      {/* Selector de idioma */}
      <div className="languageSelector">
        <label htmlFor="language"></label>
        <select id="language" value={language} onChange={handleLanguageChange}>
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>

     

      <div className="container">
        {/* Sección 1 */}
        <aside className="section1">
          <div className="photoContainer">
            <img src={CVUImage} alt="Foto de perfil" className="photo" />
          </div>
          <section className="contactSection">
            <h1 className="name">Brayan Castro</h1>
            <p className="role">{texts.role}</p> {/* Texto dinámico */}
            <div className="contactInfo">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <span>(687) 1731093</span>
            </div>
            <div className="contactInfo">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <span>brayan-castro@hotmail.com</span>
            </div>
            <div className="contactInfo" hidden>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <span>Guasave, Sinaloa CP81020</span>
            </div>
          </section>
        </aside>

        {/* Sección 2 */}
        <main className="section2">
          <section className="section">
            <h2 className="sectionTitle">{texts.objective}</h2>
            <p className="text">{texts.professionalObjective}</p>
          </section>

          <Skills language={language} />

          <section className="section">
            <h2 className="sectionTitle">
              <FontAwesomeIcon icon={faGraduationCap} className="iconTitle" /> 
              {texts.education}
            </h2>
            <p className="text"><strong>Ingeniería en Mecatrónica</strong> - ITESM-CSN (2008 – 2013)</p>
            <p className="text"><strong>Técnico en Informática</strong> - CETIS 108 (2005 – 2008)</p>
          </section>

          <Experience language={language} />
          
          <DownloadSection language={language} />
        </main>
      </div>
    </div>
  );
};

export default CVU;
