import { useState, useEffect } from 'react';

const useLongPolling = (endpoint, interval = 5000) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(endpoint);
      const newData = await response.json();
      console.log("datos",newData)
      setData(newData);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  useEffect(() => {
    let pollTimer;

    const poll = async () => {
      await fetchData();
      pollTimer = setTimeout(poll, interval);
    };

    poll(); // Inicia el primer polling al montar el componente

    // Limpia el temporizador cuando el componente se desmonta
    return () => {
      clearTimeout(pollTimer);
    };
  }, [endpoint, interval]);

  return data;
};

export default useLongPolling;
