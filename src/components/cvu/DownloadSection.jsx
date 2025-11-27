import React, { useState } from 'react';
import './DownloadSection.css';
import translations from './translations';

// Importar PDFs por idioma
import CVSpanish from './pdf/CV_Brayan_Castro_Spanish.pdf';
import CVEnglish from './pdf/CV_Brayan_Castro_English.pdf';

const DownloadSection = ({ language }) => {
  const [showPDF, setShowPDF] = useState(null);
  const texts = translations[language];

  const handleDownload = () => {
    const link = document.createElement("a");

    const fileToDownload = language === "es" ? CVSpanish : CVEnglish;

    link.href = fileToDownload;
    link.download = language === "es"
      ? "CV_Brayan_Castro_ES.pdf"
      : "CV_Brayan_Castro_EN.pdf";

    link.target = "_blank";
    link.click();
  };

  const handlePreview = () => {
    const fileToPreview = language === "es" ? CVSpanish : CVEnglish;
    setShowPDF(fileToPreview);
  };

  return (
    <div className="cv-download-section">
      <h2 className="cv-download-title">{texts.downloadTitle}</h2>
      <p className="cv-download-text">{texts.downloadDescription}</p>

      <button className="cv-download-button" onClick={handleDownload}>
        {texts.downloadButton}
      </button>

      <button className="cv-download-button" style={{ marginLeft: 10 }} onClick={handlePreview}>
        {texts.previewButton}
      </button>

      {showPDF && (
        <div className="cv-download-preview">
          <iframe 
            src={showPDF}
            title={texts.previewTitle}
          />
        </div>
      )}
    </div>
  );
};

export default DownloadSection;
