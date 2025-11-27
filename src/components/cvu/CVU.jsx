import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import './CVU.css';
import PhotoModal from "./PhotoModal";


import CVUImage from './CVU_pic.jpg';
import SlidingBar from './SlidingBar';
import Experience from './Experience';
import Skills from './Skills';
import translations from './translations';
import DownloadSection from './DownloadSection';

const CVU = () => {
  const [language, setLanguage] = useState('en');
  const texts = translations[language];

  return (
    <div className="cvu-page">

      <SlidingBar language={language} />

      {/* Selector idioma */}
      <div className="cvu-lang">
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>

      <div className="cvu-layout">

        {/* SIDEBAR */}
        <aside className="cvu-sidebar">
        
<div className="cvu-photoBox">
  <PhotoModal src={CVUImage} alt="Foto de perfil" />
</div>


          <div className="cvu-sidebarText">
            <h1 className="cvu-name">Brayan Castro</h1>
            <p className="cvu-role">{texts.role}</p>

            <div className="cvu-contact">
              <FontAwesomeIcon icon={faPhone} className="cvu-icon" />
              <span>(687) 1731093</span>
            </div>

            <div className="cvu-contact">
              <FontAwesomeIcon icon={faEnvelope} className="cvu-icon" />
              <span>brayancastro900113@gmail.com</span>
            </div>

            <div className="cvu-contact hide">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="cvu-icon" />
              <span>Guasave, Sinaloa</span>
            </div>
          </div>
        </aside>

        {/* CONTENIDO PRINCIPAL */}
        <main className="cvu-main">

          <section className="cvu-section">
            <h2 className="cvu-title">{texts.objective}</h2>
            <p className="cvu-text">{texts.professionalObjective}</p>
          </section>

         <section className="cvu-section">
  <h2 className="cvu-title">
    <FontAwesomeIcon icon={faGraduationCap} className="cvu-titleIcon" />
    {texts.education}
  </h2>

  {texts.educationList.map((item, index) => (
    <div key={index} className="cvu-education-block">
      <p className="cvu-text">
        <strong>{item.title}</strong> — {item.school} ({item.period})
      </p>

      <ul className="cvu-education-list">
        {item.details.map((detail, i) => (
          <li key={i}>{detail}</li>
        ))}
      </ul>
    </div>
  ))}
</section>


          <Skills language={language} />



          

          <Experience language={language} />

          <DownloadSection language={language} />

        </main>
      </div>
    </div>
  );
};

export default CVU;
