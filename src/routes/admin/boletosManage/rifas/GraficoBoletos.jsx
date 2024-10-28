import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './GraficoBoletos.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const GraficoBoletos = ({ confirmados, procesando, disponibles }) => {
  const totalBoletos = confirmados + procesando + disponibles; // Calcular el total de boletos

  const data = {
    labels: ['Confirmados', 'Procesando', 'Disponibles'],
    datasets: [
      {
        label: 'Boletos',
        data: [confirmados, procesando, disponibles],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',  // Azul claro para confirmados
          'rgba(255, 206, 86, 0.6)',   // Amarillo para procesando
          'rgba(75, 192, 192, 0.6)',   // Verde claro para disponibles
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 2,
        hoverOffset: 4, // Efecto de desplazamiento al pasar el mouse
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#333', // Color del texto de la leyenda
          font: {
            size: 14, // Tamaño de la fuente
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} boletos`;
          },
        },
      },
    },
  };

  return (
    <div className="grafico-boletos-contenedor">
      <div className="grafico-boletos-dona">
        <Doughnut data={data} options={options} />
      </div>

      {/* Texto descriptivo al lado del gráfico */}
      <div className="grafico-boletos-info">
        <h4>Detalles de Boletos</h4>
        <p>Total de Boletos: <strong>{totalBoletos}</strong></p>
        <p>Boletos Confirmados: <strong>{confirmados}</strong></p>
        <p>Boletos Procesando: <strong>{procesando}</strong></p>
        <p>Boletos Disponibles: <strong>{disponibles}</strong></p>
      </div>
    </div>
  );
};

export default GraficoBoletos;
