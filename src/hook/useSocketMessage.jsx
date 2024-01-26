import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

function useSocketMessages(url) {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    // Creamos una instancia de conexión al socket
    socketRef.current = io(url);

    // Escuchamos el evento de mensaje del servidor
    socketRef.current.on('mensaje', (data) => {
      // Agregamos el mensaje recibido al estado de mensajes
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Se ejecuta al desmontar el componente o cambiar la URL
    return () => {
      // Desconectamos el socket
      socketRef.current.disconnect();
    };
  }, [url]);

  // Función para enviar un mensaje al servidor
  const enviarMensaje = (mensaje) => {
    // Enviando el mensaje al servidor a través del socket
    socketRef.current.emit('mensaje', mensaje);
  };

  return { messages, enviarMensaje };
}

export default useSocketMessages;
