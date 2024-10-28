// BoletosSeleccionados.js
import React from 'react';
import './BoletosSeleccionados.css';

const BoletosSeleccionados = ({ boletosSeleccionados, total, onProcessPurchase }) => {
  return (
    <div className="resumen-seleccion">
      <h2>Boletos Seleccionados</h2>
      <div className="seleccion-grid">
        {boletosSeleccionados.map((boleto, index) => (
          <div key={index} className="boleto-seleccionado">
            <span>Boleto #{boleto.Numero}</span>
          </div>
        ))}
      </div>
      <h3 className="mt-4">Total: ${total.toFixed(2)}</h3>
      {boletosSeleccionados.length > 0 && (
        <button className="btn-procesar mt-4" onClick={onProcessPurchase}>
          Procesar Compra
        </button>
      )}
    </div>
  );
};

export default BoletosSeleccionados;
