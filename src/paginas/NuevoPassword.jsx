import React from 'react'
import { useState, useEffect } from 'react'

import Alerta from '../components/Alerta'
Alerta
import { Link } from 'react-router-dom'

import { useParams } from 'react-router-dom'
import clienteAxios from '../config/axios'

const NuevoPassword = () => {



  const params = useParams()
  console.log(params)
  const {token} = params
  useEffect(() => {
    const comprobarToken = async () =>{
      try {
        await clienteAxios(`/veterinarios/olvide-password/${token}`)
        setAlerta({msg: 'Coloca tu nuevo password'})
        setTokenValido(true)
        
      } catch (error) {
        setAlerta({msg: 'Hubo un error con el enlace', error: true})
      }
    }
    comprobarToken()
  

  }, [])
  

  const [password, setPassword] = useState('')
  // const [confirmarPassword, setConfirmarPassword] = useState('')
   const [alerta, setAlerta] = useState({})
   const [tokenValido, setTokenValido] = useState(false)
   const [confirmarPassword, setConfirmarPassword] = useState('')
  const [claveModificada, setClaveModificada] = useState(false)
  const handleSubmit = async e => {
     e.preventDefault();

    if([password,confirmarPassword].includes('')){

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


    try {
      const url = `/veterinarios/olvide-password/${token}`
      const {data } = await clienteAxios.post(url, {password} )

      setClaveModificada(true
        )
      setAlerta({
        msg: data.msg
      })
    } catch (error) {
      setAlerta({msg: error.response.data.msg, error: true})
    }

  }

  const {msg} = alerta;
  return (
    <>
        <div>
          <h1 className='text-indigo-600 font-black text-6xl'>Restablece tu Contraseña y no pierdas Acceso  con {""}
          <span className='text-black'> Tus Pacientes</span></h1>  
        </div>

        <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
          {msg && <Alerta 
            alerta={alerta}  
          />  }

        {tokenValido && (
          <>

          <form onSubmit={handleSubmit}>
            <div className='my-5' >
              <label className='uppercase text-gray-600 block text-xl font-bold'>
                Contraseña
                  </label>
                    <input
                      type="password"
                      placeholder='Tu Nueva Contraseña'
                      className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                  />
                  <label className='uppercase text-gray-600 block text-xl font-bold'>
                    Confirmar Contraseña
                  </label>
                  <input
                    type="password"
                    placeholder='Confirmar Contraseña'
                    className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
                    value={confirmarPassword}
                    onChange={e => setConfirmarPassword(e.target.value)}
                  />
                  <input
                        type="submit"
                        value="Guardar Nueva Contraseña"
                        className='bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer
                        hover:bg-indigo-800 md:w-auto'
                  />
            </div>

          </form>

       
        </>
            
        )}

        {claveModificada &&
          <nav className='mt-10 lg:flex lg:justify-between'>
          <Link className='block text-center my-5 text-gray-500'
          to='/'>  Inicia Sesion
          </Link>
        </nav>
        }



        </div>

    </>
  )
}

export default NuevoPassword