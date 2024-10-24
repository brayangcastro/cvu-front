import React, { useState, useEffect } from 'react';
import './PowerControl.css'; // Importa los estilos

const PowerControl = () => {
  const [isOn, setIsOn] = useState(false); // Estado para encendido/apagado

  // Alterna el estado de encendido/apagado cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOn(prevState => !prevState); // Cambia el estado
    }, 3000); // Cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando se desmonta
  }, []);

  const handlePowerOn = () => {
    setIsOn(true); // Cambia el estado a encendido
  };

  const handlePowerOff = () => {
    setIsOn(false); // Cambia el estado a apagado
  };

  return (
    <div className="power-control-container">
      <div className="buttons-column">
        <button className="power-button on" onClick={handlePowerOn}>
          Encender
        </button>
        <button className="power-button off" onClick={handlePowerOff}>
          Apagar
        </button>
      </div>
      <div className="indicator-column">
        <div className={`indicator ${isOn ? 'on' : 'off'}`}>
          {isOn ? 'Encendido' : 'Apagado'}
        </div>
      </div>
      <div className="led-column">
        <div className={`led ${isOn ? 'led-on' : 'led-off'}`}></div>
      </div>
    </div>
  );
};

export default PowerControl;
