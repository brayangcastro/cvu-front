import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import NeerdImage from './CVU_pic.jpg';
import LEDTechImage from './CVU_pic.jpg';
import MetatronicImage from './CVU_pic.jpg';
import PurpImage from './CVU_pic.jpg';
import BlackzoneImage from './CVU_pic.jpg';
import TacosKissiImage from './CVU_pic.jpg';
import BCIngenieriaImage from './CVU_pic.jpg';
import PuntoMagicoImage from './CVU_pic.jpg';
import DeportivoAhumadaImage from './CVU_pic.jpg';
import './CVU.css';

const Experience = () => {
  return (
    <section className="section">
      <h2 className="sectionTitle">
        <FontAwesomeIcon icon={faBriefcase} className="iconTitle" /> 
        Experiencia Profesional
      </h2>

      {/* BCIngeniería */}
      <div className="experienceItem">
        <img src={BCIngenieriaImage} alt="BCIngeniería" className="experienceImage" />
        <div>
          <h3 className="jobTitle">BCIngeniería - Fundador y Desarrollador de Proyectos de Ingeniería (Actualidad)</h3>
          <p className="text">
            Desarrollo de módulos de sensado y control para la industria utilizando tecnologías como Modbus, RS232, y señales 
            analógicas y digitales. Implementación de visualizaciones tridimensionales en tiempo real basadas en datos de sensores, 
            con alertas automáticas enviadas por WhatsApp ante eventos críticos.
          </p>
        </div>
      </div>

      {/* Neerd E-Learning */}
      <div className="experienceItem">
        <img src={NeerdImage} alt="Neerd E-Learning" className="experienceImage" />
        <div>
          <h3 className="jobTitle">Neerd E-Learning - Desarrollador de Software AI (2023 – 2024)</h3>
          <p className="text">
            Desarrollo de visualizaciones interactivas con React y dashboards en tiempo real. 
            Implementación de API de OpenAI para el procesamiento de datos en AWS, integrando 
            metodologías estudiadas por psicólogos expertos para plataformas de orientación vocacional.
          </p>
        </div>
      </div>

      {/* PuntoMágico */}
      <div className="experienceItem">
        <img src={PuntoMagicoImage} alt="PuntoMágico" className="experienceImage" />
        <div>
          <h3 className="jobTitle">PuntoMágico - Desarrollador de Punto de Venta (2023)</h3>
          <p className="text">
            Desarrollo de un sistema de punto de venta adaptado para negocios de productos diversos, con un sistema de captura 
            fácil de productos y ventas eficientes.
          </p>
        </div>
      </div>

      {/* LED Technology Development */}
      <div className="experienceItem">
        <img src={LEDTechImage} alt="LED Technology Development" className="experienceImage" />
        <div>
          <h3 className="jobTitle">LED Technology Development S.A. de C.V. - Consultor de Desarrollo de Dispositivos (2017)</h3>
          <p className="text">
            Consultoría en el desarrollo de dispositivos para activación UV y aplicación de biofilms de quitosano en plantas TIF.
          </p>
        </div>
      </div>

      {/* Metatronic LED.MX */}
      <div className="experienceItem">
        <img src={MetatronicImage} alt="Metatronic LED.MX" className="experienceImage" />
        <div>
          <h3 className="jobTitle">Metatronic LED.MX - Gerente de Proyectos de Automatización del Hogar (2014 – 2016)</h3>
          <p className="text">
            Gestión de proyectos avanzados de automatización del hogar, incluyendo el desarrollo 
            de productos como interruptores, sensores de presencia, control de iluminación RGB y 
            sistemas de control por voz.
          </p>
        </div>
      </div>

      {/* Purp */}
      <div className="experienceItem">
        <img src={PurpImage} alt="Purp" className="experienceImage" />
        <div>
          <h3 className="jobTitle">Purp - Software de Gestión de Inventario de Almacenes (2022)</h3>
          <p className="text">
            Desarrollo de un sistema en línea para la gestión de pallets y lotes en un almacén 
            de granos y semillas.
          </p>
        </div>
      </div>

      {/* Blackzone.mx */}
      <div className="experienceItem">
        <img src={BlackzoneImage} alt="Blackzone.mx" className="experienceImage" />
        <div>
          <h3 className="jobTitle">Blackzone.mx - Integración Shopify, Chatbot y Sistema de Reservaciones (2023)</h3>
          <p className="text">
            Implementación de una página web con Shopify integrada con un chatbot y un sistema 
            de administración de reservaciones, pagos y membresías.
          </p>
        </div>
      </div>

      {/* Tacos Kissi */}
      <div className="experienceItem">
        <img src={TacosKissiImage} alt="Tacos Kissi" className="experienceImage" />
        <div>
          <h3 className="jobTitle">Tacos Kissi - Desarrollador de Software Comandero (2023)</h3>
          <p className="text">
            Desarrollo de un software comandero para restaurantes con una interfaz intuitiva y amigable.
          </p>
        </div>
      </div>

      {/* Deportivo Ahumada */}
      <div className="experienceItem">
        <img src={DeportivoAhumadaImage} alt="Deportivo Ahumada" className="experienceImage" />
        <div>
          <h3 className="jobTitle">Deportivo Ahumada - Sistema de Gestión de Torneos (2023)</h3>
          <p className="text">
            Desarrollo de un sistema para la gestión de torneos, alumnos y productos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
