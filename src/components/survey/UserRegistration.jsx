import React, { useState } from "react";
import "./UserRegistration.css";

const UserRegistration = () => {
  const [formData, setFormData] = useState({ name: "", lastName: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.lastName && formData.email.includes("@")) {
      alert("Registro completado exitosamente");
    } else {
      alert("Por favor completa todos los campos con información válida.");
    }
  };

  return (
    <div className="registration-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ingresa tu nombre"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="lastName">Apellido</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Ingresa tu apellido"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingresa tu correo electrónico"
          value={formData.email}
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">Registrarse</button>
      </form>
    </div>
  );
};

export default UserRegistration;
