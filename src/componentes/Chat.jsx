import { useState } from 'react';
import useSocketMessages from '../hook/useSocketMessage';
import Burbuja from './Burbuja';

export default function Chat() {
  const [mensajeInput, setMensajeInput] = useState('');
  const { messages, enviarMensaje } = useSocketMessages('http://localhost:3001'); // Reemplaza con la URL de tu servidor Socket.IO
console.log(messages)
  const handleInputChange = (event) => {
    setMensajeInput(event.target.value);
  };

  const handleEnviarMensaje = () => {
    if (mensajeInput.trim() !== '') {
      enviarMensaje(mensajeInput);
      setMensajeInput('');
    }
  };

  return (
    <div className="w-full flex flex-col justify-center gap-y-3 mt-">
      <div className="mockup-window border bg-base-300 h-96">
        {/* Aquí irá la conversación */}
        {messages.map((mensaje, index) => (
          <Burbuja key={index} mensaje={mensaje} />
        ))}
      </div>
      <div className="w-full flex gap-x-3">
        <input
          type="text"
          placeholder="Mensajes"
          className="input input-bordered input-success w-full max-w-xs"
          value={mensajeInput}
          onChange={handleInputChange}
        />
        <button className="btn btn-success" onClick={handleEnviarMensaje}>
          Enviar
        </button>
      </div>
    </div>
  );
}
