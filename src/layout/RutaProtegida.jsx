import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import UseAuth from '../hooks/UseAuth'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const RutaProtegida = () => {
    const {auth , cargando} = UseAuth()
    if(cargando) return "cargando"
    console.log(auth)
    console.log(cargando)

  return (
    <>
       
        <Header/>
            
                 {auth?._id ? (
                    <main className='container mx-auto mt-10'>
                        <Outlet/>
                    </main>
                ) :     <Navigate to='/'/>}  
            
        <Footer/>
    </>
  )
}

export default RutaProtegida