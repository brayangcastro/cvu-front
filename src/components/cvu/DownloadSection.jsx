import React, { useState } from 'react';
import './DownloadSection.css';
import translations from './translations';  // Importa las traducciones

const urlReporteIndustrial = import.meta.env.VITE_APP_REPORTE_INDUSTRIAL;

const DownloadSection = ({ language }) => {
  const [showPDF, setShowPDF] = useState(false);

  // Obtener los textos según el idioma seleccionado
  const texts = translations[language];

  const handleDownload = () => {
    setShowPDF(true);
  };

  return (
    <div className="download-section">
      <h2>{texts.downloadTitle}</h2>
      <p>{texts.downloadDescription}</p>
      <button className="download-button" onClick={handleDownload}>
        {texts.downloadButton}
      </button>

      {/* Simulación de la vista previa del PDF */}
      {showPDF && (
        <div className="pdf-preview">
          <iframe 
            src={urlReporteIndustrial}
            title={texts.previewTitle}
            width="100%"
            height="300px"
          />
        </div>
      )}
    </div>
  );
};

export default DownloadSection;
