import React from 'react';
import './SlidingBar.css';  // Importamos el archivo de estilos
import translations from './translations';  // Importamos el archivo de traducciones

const SlidingBar = ({ language }) => {
  const texts = translations[language]; // Obtener los textos según el idioma seleccionado

  return (
    <div className="slidingBarContainer">
      <div className="slidingBarMessage">
        {texts.slidingBarMessage}
      </div>
    </div>
  );
};

export default SlidingBar;
