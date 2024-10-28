import React, { useState } from "react";
import "./PhoneVerification.css";

const PhoneVerification = () => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState(["", "", "", ""]);
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handlePhoneChange = (e) => setPhone(e.target.value);

  const handleCodeChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 3) {
      document.getElementById(`code-input-${index + 1}`).focus();
    }
  };

  const sendCode = () => {
    if (phone.length === 10) {
      setIsCodeSent(true);
      alert("Código enviado a tu celular.");
    } else {
      alert("Por favor ingresa un número de celular válido.");
    }
  };

  const verifyCode = () => {
    if (code.join("").length === 4) {
      alert("Código verificado. ¡Bienvenido!");
    } else {
      alert("Por favor completa el código de verificación.");
    }
  };

  // Detect Enter key to trigger actions
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (!isCodeSent) {
        sendCode();
      } else {
        verifyCode();
      }
    }
  };

  return (
    <div className="phone-verification-container">
      <h2>Verificación de Celular</h2>
      {!isCodeSent ? (
        <div className="input-container">
          <label htmlFor="phone">Número de Celular</label>
          <input
            type="tel"
            id="phone"
            placeholder="Ingresa tu número de celular"
            value={phone}
            onChange={handlePhoneChange}
            onKeyDown={handleKeyDown} // Trigger sendCode on Enter
            maxLength="10"
          />
          <button className="send-code-btn" onClick={sendCode}>
            Enviar Código
          </button>
        </div>
      ) : (
        <div className="code-container">
          <label>Código de Verificación</label>
          <div className="code-inputs">
            {code.map((digit, index) => (
              <React.Fragment key={index}>
                <input
                  type="text"
                  id={`code-input-${index}`}
                  className="code-input"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleCodeChange(e.target.value, index)}
                  onKeyDown={handleKeyDown} // Trigger verifyCode on Enter
                />
                {index < 3 && <span className="dash">-</span>}
              </React.Fragment>
            ))}
          </div>
          <button className="verify-code-btn" onClick={verifyCode}>
            Verificar Código
          </button>
        </div>
      )}
    </div>
  );
};

export default PhoneVerification;
