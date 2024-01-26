import { useEffect, useRef } from 'react';
import io from 'socket.io-client';

function useSocket(url) {
  const socketRef = useRef();

  useEffect(() => {
    // Creamos una instancia de conexión al socket
    socketRef.current = io(url);

    // Se ejecuta al desmontar el componente o cambiar la URL
    return () => {
      // Desconectamos el socket
      socketRef.current.disconnect();
    };
  }, [url]);

  // Devolvemos la referencia al socket
  return socketRef.current;
}

export default useSocket;
