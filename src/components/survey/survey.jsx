import React, { useState } from "react";
import "./survey.css";

const Survey = () => {
  const questions = [
    { question: "1. ¿Cuál es tu tipo de música favorita?", options: ["Rock", "Pop", "Jazz", "Clásica"] },
    { question: "2. ¿Qué prefieres para vacaciones?", options: ["Playa", "Montaña", "Ciudad", "Campo"] },
    { question: "3. ¿Cuál es tu plataforma de streaming favorita?", options: ["Netflix", "HBO", "Disney+", "Amazon Prime"] },
    { question: "4. ¿Cuál es tu pasatiempo favorito?", options: ["Leer", "Deportes", "Videojuegos", "Viajar"] },
    { question: "5. ¿Qué tipo de comida prefieres?", options: ["Italiana", "Mexicana", "China", "Mediterránea"] }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState(Array(questions.length).fill(null));

  const handleOptionChange = (option) => {
    const updatedResponses = [...responses];
    updatedResponses[currentQuestion] = option;
    setResponses(updatedResponses);

    // Avanza automáticamente si selecciona respuesta, pero permite avance manual con "Siguiente"
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300); // Retraso pequeño para suavizar el cambio
    } else if (currentQuestion === questions.length - 1) {
      handleSubmit();
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    alert("¡Encuesta enviada! Gracias por tu participación.");
    console.log("Respuestas:", responses);
  };

  return (
    <div className="survey-container">
      <h2>Encuesta de Preferencias</h2>
      <div className="question-container fade-in">
        <h3 className="question">{questions[currentQuestion].question}</h3>
        <div className="options">
          {questions[currentQuestion].options.map((option, i) => (
            <label key={i} className="option">
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={option}
                checked={responses[currentQuestion] === option}
                onChange={() => handleOptionChange(option)}
              />
              {option}
              <span className="checkmark"></span>
            </label>
          ))}
        </div>
      </div>
      <div className="button-container">
        {currentQuestion > 0 && (
          <button className="previous-btn" onClick={handlePrevious}>Anterior</button>
        )}
        {currentQuestion < questions.length - 1 && (
          <button className="next-btn" onClick={handleNext} disabled={responses[currentQuestion] === null}>
            Siguiente
          </button>
        )}
        {currentQuestion === questions.length - 1 && (
          <button className="submit-btn" onClick={handleSubmit} disabled={responses[currentQuestion] === null}>
            Enviar Encuesta
          </button>
        )}
      </div>
    </div>
  );
};

export default Survey;
