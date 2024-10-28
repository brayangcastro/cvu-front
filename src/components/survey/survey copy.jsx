import React, { useState } from "react";
import "./Survey.css";

const Survey = () => {
  const questions = [
    { question: "1. ¿Cuál es tu tipo de música favorita?", options: ["Rock", "Pop", "Jazz", "Clásica"] },
    { question: "2. ¿Qué prefieres para vacaciones?", options: ["Playa", "Montaña", "Ciudad", "Campo"] },
    { question: "3. ¿Cuál es tu plataforma de streaming favorita?", options: ["Netflix", "HBO", "Disney+", "Amazon Prime"] },
    { question: "4. ¿Cuál es tu pasatiempo favorito?", options: ["Leer", "Deportes", "Videojuegos", "Viajar"] },
    { question: "5. ¿Qué tipo de comida prefieres?", options: ["Italiana", "Mexicana", "China", "Mediterránea"] }
  ];

  const [responses, setResponses] = useState(Array(questions.length).fill(null));

  const handleOptionChange = (questionIndex, option) => {
    const updatedResponses = [...responses];
    updatedResponses[questionIndex] = option;
    setResponses(updatedResponses);
  };

  const handleSubmit = () => {
    alert("¡Encuesta enviada! Gracias por tu participación.");
    console.log("Respuestas:", responses);
  };

  return (
    <div className="survey-container">
      <h2>Encuesta de Preferencias</h2>
      {questions.map((q, index) => (
        <div key={index} className="question-container">
          <h3 className="question">{q.question}</h3>
          <div className="options">
            {q.options.map((option, i) => (
              <label key={i} className="option">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={responses[index] === option}
                  onChange={() => handleOptionChange(index, option)}
                />
                {option}
                <span className="checkmark"></span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <button className="submit-btn" onClick={handleSubmit}>Enviar Encuesta</button>
    </div>
  );
};

export default Survey;
