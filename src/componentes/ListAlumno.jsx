import { useEffect, useState } from "react";
import OptionAlumno from "./OptionAlumno";
import getAllUser from "../services/user/getAllUser";

export default function ListAlumno() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const traerDatos = async () => {
      let data = await getAllUser();
      setAlumnos(data.alumno);
   
    };
    traerDatos();
  }, []);

  return (
    <div className="w-[53%] px-4 py-4 bg-base-200 h-[19rem] card shadow-xl'">
      <h1 className="font-bold font-mono text-2xl text-center">Lista de alumno </h1>
      <div className="flex flex-col overflow-y-auto mt-6 gap-y-10">
        {alumnos
          ? alumnos.map((e) => (
          
              <OptionAlumno key={e.id} alumno2={e} />
            ))
          : <div></div>}
      </div>
    </div>
  );
}
