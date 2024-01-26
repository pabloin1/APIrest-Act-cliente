import { useState } from "react";

export default function OptionAlumno({alumno2}) {
   const [alumno, setalumno] = useState(alumno2)

   if(!alumno){
      return <p>Cargando</p>
   }
  return (
    <div className="flex items-center gap-y-2 flex-col">
      <p className="text-xl font-mono font-bold">{alumno.nombre + alumno.apellidoPaterno} </p>
      <div className="flex gap-x-4">
      <button className="btn btn-outline btn-accent">Eliminar</button>
      <button class="btn btn-outline btn-success">Agregar</button>
      </div>

    </div>
  );
}
