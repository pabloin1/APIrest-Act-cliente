import React, { useState } from 'react';
import loginAl from '../services/user/loginAlumno';
import { useNavigate } from 'react-router-dom';
export default function LoginAlumno() {

   
  const [matricula, setMatricula] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleMatriculaChange = (event) => {
    setMatricula(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
        const data = await loginAl(matricula,password);
 
        localStorage.setItem("token",data.token)
       navigate("/alumnos")   
          console.log("Se vino")
    }catch(error){
     alert("Correo incorrecto"
     )
    }
   

  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Bienvenido estimado alumno</h1>
          <p className="py-6">Bienvenido de nuevo! Inicia sesión para comenzar tu viaje educativo.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Matricula</span>
              </label>
              <input
                type="text"
                placeholder="Matricula"
                className="input input-bordered"
                value={matricula}
                onChange={handleMatriculaChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Contraseña"
                className="input input-bordered"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
