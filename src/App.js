// src/App.js
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

// Mock data for demonstration
const initialAlumnos = [
  { id: 1, nombre: 'Juan', apellidoPaterno: 'Pérez', apellidoMaterno: 'Gómez', matricula: '12345', edad: 20, password: 'password123' },
  { id: 2, nombre: 'María', apellidoPaterno: 'López', apellidoMaterno: 'Hernández', matricula: '67890', edad: 22, password: 'secret789' },
  // ... add more data as needed
];

const App = () => {
  const [alumnos, setAlumnos] = useState(initialAlumnos);
  const [newAlumno, setNewAlumno] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    matricula: '',
    edad: '',
    password: '',
  });

  const handleAddAlumno = () => {
    setAlumnos([...alumnos, { id: alumnos.length + 1, ...newAlumno }]);
    setNewAlumno({
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      matricula: '',
      edad: '',
      password: '',
    });
  };

  const handleDeleteAlumno = (id) => {
    const updatedAlumnos = alumnos.filter((alumno) => alumno.id !== id);
    setAlumnos(updatedAlumnos);
  };

  const handleUpdateAlumno = (id, updatedAlumno) => {
    const updatedAlumnos = alumnos.map((alumno) =>
      alumno.id === id ? { ...alumno, ...updatedAlumno } : alumno
    );
    setAlumnos(updatedAlumnos);
  };

  // UseEffect to simulate real-time chat updates
  useEffect(() => {
    // Simulate chat updates here
  }, []);

  return (
    <div className="flex p-8">
      {/* Alumnos Panel */}
      <div className="w-1/2 p-4 border border-gray-300 mr-4">
        <h2 className="text-2xl font-bold mb-4">Panel de Alumnos</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nombre"
            value={newAlumno.nombre}
            onChange={(e) => setNewAlumno({ ...newAlumno, nombre: e.target.value })}
            className="p-2 border border-gray-300 mr-2"
          />
          <input
            type="text"
            placeholder="Apellido Paterno"
            value={newAlumno.apellidoPaterno}
            onChange={(e) => setNewAlumno({ ...newAlumno, apellidoPaterno: e.target.value })}
            className="p-2 border border-gray-300 mr-2"
          />
          <input
            type="text"
            placeholder="Apellido Materno"
            value={newAlumno.apellidoMaterno}
            onChange={(e) => setNewAlumno({ ...newAlumno, apellidoMaterno: e.target.value })}
            className="p-2 border border-gray-300 mr-2"
          />
          <input
            type="text"
            placeholder="Matrícula"
            value={newAlumno.matricula}
            onChange={(e) => setNewAlumno({ ...newAlumno, matricula: e.target.value })}
            className="p-2 border border-gray-300 mr-2"
          />
          <input
            type="text"
            placeholder="Edad"
            value={newAlumno.edad}
            onChange={(e) => setNewAlumno({ ...newAlumno, edad: e.target.value })}
            className="p-2 border border-gray-300 mr-2"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={newAlumno.password}
            onChange={(e) => setNewAlumno({ ...newAlumno, password: e.target.value })}
            className="p-2 border border-gray-300 mr-2"
          />
          <button onClick={handleAddAlumno} className="p-2 bg-blue-500 text-white">
            Agregar
          </button>
        </div>
        <ul>
          {alumnos.map((alumno) => (
            <li key={alumno.id} className="flex justify-between items-center mb-2">
              <div>
                <strong>{alumno.nombre} {alumno.apellidoPaterno} {alumno.apellidoMaterno}</strong> - Matrícula: {alumno.matricula} - Edad: {alumno.edad}
              </div>
              <div>
                <button
                  onClick={() => handleDeleteAlumno(alumno.id)}
                  className="p-2 bg-red-500 text-white mr-2"
                >
                  Eliminar
                </button>
                <button
                  onClick={() => {
                    const updatedNombre = prompt('Ingrese el nuevo nombre:', alumno.nombre);
                    const updatedApellidoPaterno = prompt('Ingrese el nuevo apellido paterno:', alumno.apellidoPaterno);
                    const updatedApellidoMaterno = prompt('Ingrese el nuevo apellido materno:', alumno.apellidoMaterno);
                    const updatedMatricula = prompt('Ingrese la nueva matrícula:', alumno.matricula);
                    const updatedEdad = prompt('Ingrese la nueva edad:', alumno.edad);
                    const updatedPassword = prompt('Ingrese la nueva contraseña:', alumno.password);

                    handleUpdateAlumno(alumno.id, {
                      nombre: updatedNombre,
                      apellidoPaterno: updatedApellidoPaterno,
                      apellidoMaterno: updatedApellidoMaterno,
                      matricula: updatedMatricula,
                      edad: updatedEdad,
                      password: updatedPassword,
                    });
                  }}
                  className="p-2 bg-green-500 text-white"
                >
                  Actualizar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Panel */}
      <div className="w-1/2 p-4 border border-gray-300">
        <h2 className="text-2xl font-bold mb-4">Panel de Chat en Tiempo Real</h2>
        {/* Add your chat component here */}
      </div>
    </div>
  );
};

export default App;
