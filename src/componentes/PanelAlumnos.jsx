import React from 'react'
import AddFormAlumno from './AddFormAlumno'

export default function PanelAlumnos() {
  return (
    <div className='w-full px-4 py-4 bg-base-200 h-[19rem] card shadow-xl'>
        <h1 className='w-full text-center mb-4 font-bold font-mono text-3xl'>Panel alumnos</h1>
        <AddFormAlumno/>
        </div>
  )
}
