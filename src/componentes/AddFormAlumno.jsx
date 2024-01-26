import React from "react";
import Input from "./Input";

export default function AddFormAlumno() {
  return (
    <div className="flex flex-col gap-y-5">
        <div className="flex justify-between">
          <Input name={"nombre"}/>
          <Input name={"Apellido paterno"}/>
          <Input name={"Apellido materno"}/>
        </div>
        <div className="flex justify-between">
          <Input name={"Matricula"}/>
          <Input name={"Pasword"}/>
      
        </div>
   
   <div className="w-full flex items-center justify-center mt-6">
   <button class="btn btn-active btn-primary btn-wide">Crear</button>
   </div>

    </div>
  );
}
