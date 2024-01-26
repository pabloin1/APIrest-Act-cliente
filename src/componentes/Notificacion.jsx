import React, { useState, useEffect } from 'react';

export default function Notificacion({ mostrarNotificacion }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Cuando la prop mostrarNotificacion cambia a true, muestra la notificación y después de 2 segundos la oculta
    if (mostrarNotificacion) {
      setVisible(true);
      const timeoutId = setTimeout(() => {
        setVisible(false);
      }, 2000);

      // Limpia el temporizador cuando el componente se desmonta o la prop cambia
      return () => clearTimeout(timeoutId);
    }
  }, [mostrarNotificacion]);

  // Si el estado visible es false, no renderiza el componente
  if (!visible) {
    return null;
  }

  return (
    <div role="alert" className="alert shadow-lg absolute z-50 top-04 w-72 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <div>
        <h3 className="font-bold">Nuevo mensaje</h3>
        <div className="text-xs">Usuario Eliminado</div>
      </div>
    </div>
  );
}
