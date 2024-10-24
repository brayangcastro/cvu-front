import React, { useState, useEffect } from 'react';
import './LandingPage.css'; // Importa los estilos
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import SlidingBar from './SlidingBar';  // Importar la barra superior
import MembershipChart from './MembershipChart'; // Importa el nuevo gráfico
import PowerControl from './PowerControl'; // Importa el componente de control de potencia
import ChatSection from './ChatSection'; // Importa el componente del chat
import SalesChart from './SalesChart'; // Importa el nuevo componente de gráfico de ventas



const LandingPage = () => {

 
 
 
  return (
    <div className="landing-container">
      <SlidingBar /> {/* Añadir la barra superior */}
      <PowerControl />
      
      <MembershipChart />  {/* Aquí se muestra el gráfico circular */}

      <ChatSection /> {/* Aquí se muestra la sección del chat */}
    
      <SalesChart /> {/* Aquí se muestra el gráfico de ventas */}
    

      {/* Sección con video expandido */}
      <section className="video-section">
        <iframe
          className="full-video"
          src="https://www.youtube.com/embed/DOKXIYaHiRM?autoplay=1&mute=1&loop=1&playlist=DOKXIYaHiRM"
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </section>

      <section className="image-section">
        <img src="https://via.placeholder.com/1600x900" alt="Software Overview" className="full-image" />
      </section>

      {/* Sección con imagen y texto en columnas */}
      <section className="content-section">
        <div className="content">
          <div className="text-column">
            <h2>Innovative Features</h2>
            <p>
              Discover the cutting-edge functionalities of our software that help automate, simplify, and optimize your processes.
              Our intuitive design and powerful backend make it the best tool for your business.
            </p>
          </div>
          <div className="image-column">
            <img src="https://via.placeholder.com/600x400" alt="Feature Image" />
          </div>
        </div>
      </section>

      {/* Otra sección con imagen expandida */}
      <section className="image-section">
        <img src="https://via.placeholder.com/1600x900" alt="Another View" className="full-image" />
      </section>

      {/* Sección con imagen y texto en columnas */}
      <section className="content-section reverse">
        <div className="content">
          <div className="image-column">
            <img src="https://via.placeholder.com/600x400" alt="Feature Image" />
          </div>
          <div className="text-column">
            <h2>Seamless Integration</h2>
            <p>
              Our software integrates seamlessly with your existing infrastructure, allowing you to get started quickly with minimal effort.
              Stay connected with all the tools you already use.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
