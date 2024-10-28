// CuentaRegresiva.js
import React, { useEffect, useState } from 'react';
import './CuentaRegresiva.css';

const CuentaRegresiva = ({ fechaEvento }) => {
  const [timeLeft, setTimeLeft] = useState({});

  // Función para calcular el tiempo restante hasta el evento
  const calculateTimeLeft = () => {
    const now = new Date();
    const eventDate = new Date(fechaEvento);
    const difference = eventDate - now;

    if (difference > 0) {
      const timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
      setTimeLeft(timeLeft);
    } else {
      setTimeLeft({});
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, [fechaEvento]);

  return (
    <div className="countdown-timer">
      {Object.keys(timeLeft).length > 0 ? (
        <>
          <h3>Faltan</h3>
          <div className="countdown">
            <div>{timeLeft.dias} <span>días</span></div>
            <div>{timeLeft.horas} <span>horas</span></div>
            <div>{timeLeft.minutos} <span>minutos</span></div>
            <div>{timeLeft.segundos} <span>segundos</span></div>
          </div>
        </>
      ) : (
        <h3>¡El evento ha comenzado!</h3>
      )}
    </div>
  );
};

export default CuentaRegresiva;
