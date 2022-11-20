import React from 'react'
import { Link } from 'react-router-dom'
import UseAuth from '../hooks/UseAuth'

export const Header = () => {
  const {cerrarSesion} = UseAuth()
  return (
    <>
        <header className='py-10 bg-indigo-600'>
          <div className='container mx-auto flex justify-between items-center flex-col lg:flex-row'>
            <h1 className='font-bold text-2xl text-indigo-200 text-center'>
              Administrador de pacientes  de <span className='text-white  font-black' >Veterinaria</span>
            </h1>
            <nav className='flex flex-col lg:flex-row gap-4 mt-5 lg:mt-0 items-center'>
               <Link to='/admin' className='text-white text-sm uppercase font-bold'>Pacientes</Link>
               <Link to='/admin/perfil' className='text-white text-sm uppercase font-bold'>Perfil</Link>

               <button className='text-white text-sm uppercase font-bold'
               onClick={cerrarSesion}>
              Cerrar Sesion
            </button>
            </nav>
    
          </div>

        </header>
    </>
  )
}
