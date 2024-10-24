import React, { useState, useEffect } from 'react';
import './ChatSection.css'; // Asegúrate de crear este archivo para los estilos específicos del chat.

const ChatSection = () => {
  const initialMessages = [
    { sender: 'user', text: 'Hola, ¿cómo estás?' },
    { sender: 'ai', text: 'Hola, estoy bien. ¿En qué puedo ayudarte hoy?' },
    { sender: 'user', text: '¿Qué puedes hacer?' },
    { sender: 'ai', text: 'Puedo ayudarte con tareas, responder preguntas, y mucho más.' },
  ];

  const [messages, setMessages] = useState([]);
  const [messageIndex, setMessageIndex] = useState(0);

  // Función para agregar mensajes de forma secuencial
  useEffect(() => {
    if (messageIndex < initialMessages.length) {
      const timeout = setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, initialMessages[messageIndex]]);
        setMessageIndex(prevIndex => prevIndex + 1);
      }, 2000); // Tiempo entre cada mensaje (2 segundos)

      return () => clearTimeout(timeout); // Limpia el timeout cuando el componente se desmonta
    }
  }, [messageIndex]);

  return (
    <section className="content-section">
      <div className="content">
        <div className="text-column">
          <h2>AI Chat Simulation</h2>
          <p>
            Interact with an AI that responds to your queries in real-time. The chat on the right simulates a conversation
            between a user and an AI assistant. You can extend this functionality to handle actual API calls to a chatbot service.
          </p>
        </div>
        <div className="chat-column">
          <div className="chat-window">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === 'user' ? 'user-message' : 'ai-message'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Escribe un mensaje..." />
            <button>Enviar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
