import React, { useRef } from 'react';
import './LandingPage.css'; 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import SlidingBar from './SlidingBar';
import MembershipChart from './MembershipChart';
import PowerControl from './PowerControl';
import ChatSection from './ChatSection';
import SalesChart from './SalesChart';
import useLazyLoad from './useLazyLoad';  // Importa el hook personalizado
import DownloadSection from './DownloadSection';  // Importar la nueva sección de descarga de PDF

const LandingPage = () => {
  const powerControlRef = useRef(null);
  const membershipChartRef = useRef(null);
  const chatSectionRef = useRef(null);
  const salesChartRef = useRef(null);
  const videoSectionRef = useRef(null);  // Ref para el video

  const isPowerControlVisible = useLazyLoad(powerControlRef);
  const isMembershipChartVisible = useLazyLoad(membershipChartRef);
  const isChatSectionVisible = useLazyLoad(chatSectionRef);
  const isSalesChartVisible = useLazyLoad(salesChartRef);
  const isVideoVisible = useLazyLoad(videoSectionRef);  // Lazy loading para el video

  return (
    <div className="landing-container">
      <SlidingBar />

        {/* Sección de descarga de PDF */}
        <DownloadSection />

      {/* Sección de Power Control */}
      <section ref={powerControlRef}>
        {isPowerControlVisible && <PowerControl />}
      </section>
      {/* Sección de Power Control */}
      <section ref={powerControlRef}>
        {isPowerControlVisible && <PowerControl />}
      </section>
      {/* Sección de Power Control */}
      <section ref={powerControlRef}>
        {isPowerControlVisible && <PowerControl />}
      </section>

      {/* Sección de Gráfico de Membresías */}
      <section ref={membershipChartRef}>
        {isMembershipChartVisible && <MembershipChart />}
      </section>

      {/* Sección de Chat */}
      <section ref={chatSectionRef}>
        {isChatSectionVisible && <ChatSection />}
      </section>

      {/* Sección de Gráfico de Ventas */}
      <section ref={salesChartRef}>
        {isSalesChartVisible && <SalesChart />}
      </section>

      {/* Sección con video expandido */}
      <section ref={videoSectionRef} className="video-section">
        {isVideoVisible && (
          <iframe
            className="full-video"
            src="https://www.youtube.com/embed/DOKXIYaHiRM?autoplay=1&mute=1&loop=1&playlist=DOKXIYaHiRM"
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        )}
      </section>

      {/* Sección con imagen expandida */}
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
    </div>
  );
};

export default LandingPage;
