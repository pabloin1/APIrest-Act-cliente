import React from 'react'
import Chat from '../componentes/Chat'
export default function Alumnos() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <h1 className='w-full text-center text-3xl font-bold font-mono'>Alumnos</h1>
        <Chat/>
    </div>
  )
}
