import React, { useState, useEffect, useRef } from 'react';
import './ChatSection.css'; // Asegúrate de tener los estilos

const ChatSection = () => {
  const initialMessages = [
    { sender: 'user', text: 'Hola, ¿cómo estás?' },
    { sender: 'ai', text: 'Hola, estoy bien. ¿En qué puedo ayudarte hoy?' },
    { sender: 'user', text: '¿Qué puedes hacer?' },
    { sender: 'ai', text: 'Puedo ayudarte con tareas, responder preguntas, y mucho más.' },
  ];

  const [messages, setMessages] = useState([]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Pausa la conversación cuando el usuario interactúa
  const [newMessage, setNewMessage] = useState(''); // Maneja el mensaje que el usuario escribe
  const chatWindowRef = useRef(null); // Referencia para el autoscroll

  // Función para agregar mensajes de forma secuencial
  useEffect(() => {
    if (messageIndex < initialMessages.length && !isPaused) {
      const timeout = setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, initialMessages[messageIndex]]);
        setMessageIndex(prevIndex => prevIndex + 1);
      }, 2000); // Tiempo entre cada mensaje (2 segundos)

      return () => clearTimeout(timeout); // Limpia el timeout cuando el componente se desmonta
    } else if (messageIndex >= initialMessages.length && !isPaused) {
      // Reinicia la conversación si todos los mensajes ya fueron mostrados
      const resetTimeout = setTimeout(() => {
        setMessages([]); // Borra los mensajes
        setMessageIndex(0); // Reinicia el índice
      }, 5000); // Espera 5 segundos antes de reiniciar la conversación

      return () => clearTimeout(resetTimeout); // Limpia el timeout del reinicio
    }
  }, [messageIndex, isPaused]); // Se actualiza si `messageIndex` o `isPaused` cambian

  // Función para manejar el auto-scroll cada vez que hay un nuevo mensaje
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]); // Se ejecuta cada vez que `messages` cambie

  // Manejar el enfoque del campo de entrada
  const handleInputFocus = () => {
    setIsPaused(true); // Pausa la conversación cuando el campo esté enfocado
  };

  // Manejar cuando se sale del campo de entrada
  const handleInputBlur = () => {
    setIsPaused(false); // Reanuda la conversación cuando se pierde el foco
  };

  // Manejar cambios en el campo de entrada
  const handleInputChange = (e) => {
    setNewMessage(e.target.value); // Actualiza el valor del mensaje nuevo
  };

  // Manejar el envío del mensaje cuando se presiona "Enter"
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Función para procesar palabras clave en el mensaje del usuario
  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const userMessage = { sender: 'user', text: newMessage };
      setMessages(prevMessages => [...prevMessages, userMessage]);

      // Verificar si el mensaje contiene la palabra clave "menu"
      if (newMessage.toLowerCase() === 'menu') {
        const botResponse = {
          sender: 'ai',
          text: '1. Ventas\n2. Clientes\n3. Cortes',
        };

        // Responder automáticamente después de un segundo
        setTimeout(() => {
          setMessages(prevMessages => [...prevMessages, botResponse]);
        }, 1000);
      }

      setNewMessage(''); // Limpiar el campo de entrada
      setIsPaused(true); // Pausar la conversación si el usuario manda un mensaje
    }
  };

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
          <div className="chat-window" ref={chatWindowRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === 'user' ? 'user-message' : 'ai-message'}`}
              >
                {msg.text.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              value={newMessage}
              onChange={handleInputChange}
              onFocus={handleInputFocus}  // Detiene la conversación al enfocar
              onBlur={handleInputBlur}    // Reanuda la conversación al desenfocar
              onKeyPress={handleKeyPress} // Detecta cuando se presiona "Enter"
            />
            <button onClick={handleSendMessage}>Enviar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
