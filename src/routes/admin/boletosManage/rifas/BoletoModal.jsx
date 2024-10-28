import React, { useState } from 'react';
import './BoletoModal.css';
import { FaUser, FaPhone, FaEnvelope, FaTicketAlt } from 'react-icons/fa'; // Añadir el icono de boleto

const BoletoModal = ({ boletosSeleccionados, total, onClose, onPurchase }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    celular: '',
    correo: ''
  });
  const [closing, setClosing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onPurchase();
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
    }, 300);
  };

  return (
    <div className={`modal-custom-overlay ${closing ? 'custom-fade-out' : ''}`}>
      <div className={`modal-custom-content ${closing ? 'custom-scale-out' : ''}`}>
        <h2>Resumen de tu compra</h2>
        
        {/* Contenedor scrollable para los boletos seleccionados */}
        <div className="custom-seleccion-grid-wrapper">
          <h3>Boletos Seleccionados:</h3>
          <div className="custom-seleccion-grid">
            {boletosSeleccionados.map((boleto, index) => (
              <div key={index} className="custom-boleto-seleccionado">
                <FaTicketAlt className="icono-boleto" /> {/* Icono de boleto */}
                <span>Boleto #{boleto.Numero}</span> {/* Mostramos el número del boleto */}
              </div>
            ))}
          </div>
        </div>

        <h3>Total a pagar: ${total.toFixed(2)}</h3>

        <h3>Datos del Comprador</h3>
        <div className="custom-form-group">
          <FaUser className="custom-icon" />
          <input 
            type="text" 
            name="nombre" 
            placeholder="Nombre Completo" 
            value={formData.nombre} 
            onChange={handleChange} 
            className="custom-input"
          />
        </div>
        <div className="custom-form-group">
          <FaPhone className="custom-icon" />
          <input 
            type="text" 
            name="celular" 
            placeholder="Celular" 
            value={formData.celular} 
            onChange={handleChange}
            className="custom-input"
          />
        </div>
        <div className="custom-form-group">
          <FaEnvelope className="custom-icon" />
          <input 
            type="email" 
            name="correo" 
            placeholder="Correo Electrónico" 
            value={formData.correo} 
            onChange={handleChange}
            className="custom-input"
          />
        </div>

        <button className="custom-btn-procesar" onClick={handleSubmit}>Confirmar Compra</button>
        <button className="custom-btn-cerrar" onClick={handleCloseModal}>Cerrar</button>
      </div>
    </div>
  );
};

export default BoletoModal;
