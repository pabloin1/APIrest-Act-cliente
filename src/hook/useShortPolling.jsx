import { useState, useEffect } from 'react';

export default function useShortPolling(url, delay = 1500) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (error) {
        setError(error);
      }
    };

    const interval = setInterval(fetchData, delay);

    // Limpiar el intervalo cuando el componente se desmonte o cuando cambie la URL
    return () => clearInterval(interval);
  }, [url, delay]);

  return { data, error };
}

