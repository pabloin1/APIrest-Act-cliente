import React from "react";
import PanelAlumnos from "../componentes/PanelAlumnos";
import ListAlumno from "../componentes/ListAlumno";
import Notificacion from "../componentes/Notificacion";
import useLongPolling from "../hook/useLongPolling";
import UserConects from "../componentes/UserConects";
import useSocketMessages from "../hook/useSocketMessage";
import Chat from "../componentes/Chat";


export default function Home() {
    const data = useLongPolling("http://localhost:3000/API/alumno/notificacion");

  return  <div className="w-full">
    <Notificacion mostrarNotificacion={data}/>
    
 

    <div className="w-full flex">

    <div className="flex flex-col gap-y-9 w-[56z%]">
    <PanelAlumnos/>
    <ListAlumno/>
    </div>


    <div className="w-full flex-col flex items-end px-8">
     <UserConects/>
    </div>

    </div>
     
    </div>
}
