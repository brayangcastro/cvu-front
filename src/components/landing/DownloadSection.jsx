import React, { useState } from 'react';
import './DownloadSection.css'; // Estilos para la sección

const DownloadSection = () => {
  const [showPDF, setShowPDF] = useState(false);

  const handleDownload = () => {
    // Simular el botón de descarga de PDF
    setShowPDF(true);
  };

  return (
    <div className="download-section">
      <h2>Download PDF Report</h2>
      <p>
        Click the button below to simulate downloading a report. The PDF will be displayed for preview.
      </p>
      <button className="download-button" onClick={handleDownload}>
        Download Report
      </button>

      {/* Simulación de la vista previa del PDF */}
      {showPDF && (
        <div className="pdf-preview">
          <iframe 
           src="http://localhost/cvu-front/src/components/landing/pdf/CVU_en.pdf"
            title="PDF Report"
            width="100%"
            height="800px"
          />
        </div>
      )}
    </div>
  );
};

export default DownloadSection;
