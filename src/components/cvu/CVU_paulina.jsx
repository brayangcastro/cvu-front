import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';
import './CVU.css';
import CVUImage from './CVU_pau.png'; // Foto/imagen de Paulina
import SlidingBar from './SlidingBar';
import Experience from './Experience_pau';
import Skills from './Skills_pau';
import translations from './translations_pau'; // Importar las traducciones de Paulina
import MembershipChart from './MembershipChart';
import ChatSection from './ChatSection';
import SalesChart from './SalesChart';
import useLazyLoad from './useLazyLoad'; // Si lo usas en tu proyecto
import DownloadSection from './DownloadSection'; // Sección de descarga de PDF

const CVU = () => {
  const [language, setLanguage] = useState('en'); // Estado para el idioma

  // Maneja el cambio de idioma
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  // Obtiene los textos de acuerdo al idioma seleccionado
  const texts = translations[language];

  return (
    <div>
      {/* Barra superior deslizable con mensaje de bienvenida */}
      <SlidingBar language={language} />

      {/* Selector de idioma (primario) */}
      <div className="languageSelector">
        <label htmlFor="language"></label>
        <select id="language" value={language} onChange={handleLanguageChange}>
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>

     

      <div className="container">
        {/* SECCIÓN 1 (Lateral) */}
        <aside className="section1">
          <div className="photoContainer">
            <img src={CVUImage} alt="Foto de Paulina Guevara" className="photo" />
          </div>
          <section className="contactSection">
            <h1 className="name">Paulina Guevara</h1>
            <p className="role">{texts.role}</p>
            <div className="contactInfo">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <span>(555) 123-4567</span> {/* Ajusta el teléfono real o deja un placeholder */}
            </div>
            <div className="contactInfo">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <span>paulina.guevara@email.com</span>
              {/* Ajusta el email o deja un placeholder */}
            </div>
            <div className="contactInfo" hidden>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <span>Ciudad, Estado (OPCIONAL)</span>
            </div>
          </section>
        </aside>

        {/* SECCIÓN 2 (Principal) */}
        <main className="section2">
          {/* OBJETIVO PROFESIONAL */}
          <section className="section">
            <h2 className="sectionTitle">{texts.objective}</h2>
            <p className="text">{texts.professionalObjective}</p>
          </section>

          {/* HABILIDADES (usa el componente Skills para listarlas) */}
          <Skills language={language} />

          {/* EDUCACIÓN */}
          <section className="section">
            <h2 className="sectionTitle">
              <FontAwesomeIcon icon={faGraduationCap} className="iconTitle" />{' '}
              {texts.education}
            </h2>
            <p className="text">
              <strong>Estudiante de Ingeniería de Software</strong> - Universidad XYZ (2022 – Presente)
            </p>
            {/* Si Paulina tiene algún antecedente de bachillerato o cursos previos, agrégalos aquí */}
            {/* <p className="text">
              <strong>[Otra formación]</strong> - [Periodo]
            </p> */}
          </section>

          {/* EXPERIENCIA (usa el componente Experience para mostrar proyectos colaborativos) */}
          <Experience language={language} />

          {/* SECCIÓN DE DESCARGA (PDF) */}
          <DownloadSection language={language} />
        </main>
      </div>
    </div>
  );
};

export default CVU;
