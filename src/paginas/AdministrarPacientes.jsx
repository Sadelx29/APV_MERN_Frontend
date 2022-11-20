import React from 'react'
import Formulario from '../components/Formulario'
import ListadoPacientes from '../components/ListadoPacientes'
import { useState } from 'react'


export const AdministrarPacientes = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  return (
    <>
        <div className='flex flex-col md:flex-row'>


        <button
          type="button"
          className='bg-indigo-700 p-3 mx-10 rounded-xl text-white uppercase font-bold  hover:cursor-pointer
                  hover:bg-indigo-800 
                  cursor-pointer
                  transition-colors
                  mb-10
                  md:hidden'
                  onClick={() =>{setMostrarFormulario(!mostrarFormulario)}}

        > {mostrarFormulario ? 'Ocultar Formulario' : ' Mostrar Formulario '} </button>
      
          <div className={`${mostrarFormulario ? 'block' : 'hidden'   } md:block md:w-1/2 lg:w-2/5`}>
            <Formulario/>
          </div>

          <div className='md:w-1/2 lg:w-2/5'>
            <ListadoPacientes/>
          </div>
        </div>
    </>
  )
}
