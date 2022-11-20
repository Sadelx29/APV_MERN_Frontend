import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/axios'


export const Registrar = () => {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmarPassword, setConfirmarPassword] = useState('')
  const [alerta, setAlerta] = useState({})


  const handleSubmit = async e => {
    e.preventDefault();

    if([nombre,email,password,confirmarPassword].includes('')){

      setAlerta({msg: 'Hay Campos vacios', error: true})

      return;
    }

    if(password !== confirmarPassword){

      setAlerta({msg: 'Las contraseñas son diferentes', error: true})
      return;
    }

    if(password.length < 6){
      setAlerta({msg: 'Su contraseña es muy corta, tiene que tener al menos 6 caracteres', error: true})
      return;
    }


    console.log('todo bien')

    setAlerta({})

    ///CREAR USUARIO EN LA API


    try {

     await clienteAxios.post('/veterinarios', {nombre, email, password})

     setAlerta({msg: 'Creado Exitosamente, revisa tu email', error: false})


    } catch (error) {
      setAlerta({msg: error.response.data.msg, error: true})
    }



    
  }

  const {msg} = alerta;

  return (
    <>
        <div>
            <h1 className='text-indigo-600 font-black text-6xl'>Crea tu Cuenta y Aministra tus <span className='text-black'>Pacientes</span></h1>
        </div>


        <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>

         {msg && <Alerta 
            alerta={alerta}  
          />  }
           
          <form 
         
            onSubmit={handleSubmit}
          >

              
              <div className='my-5' >
 
              <label className='uppercase text-gray-600 block text-xl font-bold'>
                    Nombre
                  </label>
                  <input
                    type="nombre"
                    placeholder='Tu nombre'
                    className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                  />  
                  <label className='uppercase text-gray-600 block text-xl font-bold'>
                          Email
                  </label>
                  <input
                          type="email"
                          placeholder='Email de Registro'
                          className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                  />
                  <label className='uppercase text-gray-600 block text-xl font-bold'>
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder='Tu Password'
                    className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <label className='uppercase text-gray-600 block text-xl font-bold'>
                    Confirmar Password
                  </label>
                  <input
                    type="password"
                    placeholder='Confirmar Password'
                    className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
                    value={confirmarPassword}
                    onChange={e => setConfirmarPassword(e.target.value)}
                  />
              </div>
              <input
                  type="submit"
                  value="Crear Cuenta"
                  className='bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer
                  hover:bg-indigo-800 md:w-auto'
              />
          </form>

          <nav className='mt-10 lg:flex lg:justify-between'>
          <Link className='block text-center my-5 text-gray-500'
          to='/'>Ya tienes una cuenta?  Inicia Sesion
          </Link>

          <Link className='block text-center my-5 text-gray-500'
          to='/olvide-password'>Olvide mi Password
          </Link>
        </nav>
        </div>   
        

    
    </>
  )
}
