import React, { useState } from 'react';
import './ConfirmacionBoletos.css';
import { FaUpload, FaPhone, FaCheck } from 'react-icons/fa';

const ConfirmacionBoletos = () => {
  const [telefono, setTelefono] = useState('');
  const [ticketImage, setTicketImage] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value);
  };

  const handleTicketUpload = (e) => {
    const file = e.target.files[0];
    setTicketImage(file);
  };

  const handleConfirm = () => {
    if (telefono && ticketImage) {
      // Aquí puedes agregar la lógica para enviar los datos al backend y confirmar los boletos
      setIsConfirmed(true);
    } else {
      alert('Por favor, sube tu ticket e ingresa tu teléfono para confirmar.');
    }
  };

  return (
    <div className="confirmacion-boletos-contenedor">
      <h2>Confirmación de Boletos</h2>
      
      {!isConfirmed ? (
        <>
          <div className="upload-ticket">
            <label htmlFor="ticket-upload" className="upload-label">
              <FaUpload className="icon" /> Subir Ticket de Pago
            </label>
            <input
              type="file"
              id="ticket-upload"
              accept="image/*"
              onChange={handleTicketUpload}
              style={{ display: 'none' }}
            />
            {ticketImage && <p className="ticket-info">Ticket subido: {ticketImage.name}</p>}
          </div>

          <div className="telefono-input">
            <FaPhone className="icon" />
            <input
              type="text"
              placeholder="Ingresa tu teléfono"
              value={telefono}
              onChange={handleTelefonoChange}
            />
          </div>

          <button className="btn-confirmar" onClick={handleConfirm}>
            Confirmar Boletos <FaCheck className="icon" />
          </button>
        </>
      ) : (
        <div className="confirmacion-exitosa">
          <h3>¡Tus boletos han sido confirmados!</h3>
          <p>Te hemos enviado una confirmación a tu teléfono.</p>
        </div>
      )}
    </div>
  );
};

export default ConfirmacionBoletos;
