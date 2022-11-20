import React from 'react'
import { useState, useEffect } from 'react'
import Alerta from './Alerta'
import UsePaciente from '../hooks/UsePacientes'

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState("")
    const [sintomas, setSintomas] = useState('')

    const [alerta, setAlerta] = useState({})

    const [id, setId] = useState(null)

    const { pacientes } = UsePaciente()
    console.log(pacientes)


    const {guardarPaciente, paciente, eliminarPaciente} = UsePaciente()
    console.log(paciente)

    useEffect(() => {
        if(paciente?.nombre){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
            setNombre(paciente.nombre)
            setId(paciente._id)

        }
      
    
    }, [paciente])
    



    const handleSubmit = e => {
        e.preventDefault()

        //validar formulario
        if([nombre,propietario,email,fecha,sintomas].includes('')){
            setAlerta({
                msg: 'Todos los mensajes son obligatorios',
                error: true
            })

            return;
        }

       
        setAlerta({})
        guardarPaciente({nombre,propietario,email,fecha,sintomas, id})
    


            setNombre('')
            setPropietario('')
            setEmail('')
            setFecha('')
            setSintomas('')
            setNombre('')
            setId('')
    }

    const {msg} = alerta


    
  return (
    <>
        <h2  className='font-black text-3xl text-center'>Administrador de Pacientes</h2>
       <p className='text-xl mt-5 mb-10 text-center font-bold'>
          Añade tus  Pacientes y {""}
          <span className='text-indigo-600 font-bold'>Administralos</span>

        </p>
     
        <form  

            onSubmit={handleSubmit}
            className='bg-white py-10 px-5 mb-10 lg:mb-0 rounded  shadow-md'
        >
       
            <div className="mb-5">
                <label htmlFor='nombre' 
                className='text-gray-700 uppercase font-bold'

                >
                    Nombre Mascota
                </label>
                <input
                    id="mascota"
                    type="text"
                    placeholder="Nombre de la mascota"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
                
            </div>
            <div className="mb-5">
                <label htmlFor='propietario' 
                className='text-gray-700 uppercase font-bold'
                >
                    Nombre Propietario
                </label>
                <input
                    id="propietario"
                    type="text"
                    placeholder="Nombre de Propietario"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={propietario}
                    onChange={e => setPropietario(e.target.value)}
                />
                
            </div>
            <div className="mb-5">
                <label htmlFor='email' 
                className='text-gray-700 uppercase font-bold'
                >
                    Email Propietario
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email de Propietario"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                
            </div>
            <div className="mb-5">
                <label htmlFor='fecha' 
                className='text-gray-700 uppercase font-bold'
                >
                    Fecha de Alta
                </label>
                <input
                    id="fehcha"
                    type="date"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={fecha}
                    onChange={e => setFecha(e.target.value)}
                />
                
            </div>
            <div className="mb-5">
                <label htmlFor='sintomas' 
                className='text-gray-700 uppercase font-bold'
                >
                    Sintomas
                </label>
                <textarea
                    id="sintoma"

                    placeholder="Describir Sintomas"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-3'
                    value={sintomas}
                    onChange={e => setSintomas(e.target.value)}
                />

            {msg &&
            <Alerta alerta={alerta}/> }
                
            </div>
            <input
                  type="submit"
                  value={ id ? "Guardar Cambios" : "Agregar Paciente"}
                  className='bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer
                  hover:bg-indigo-800 md:w-auto
                  cursor-pointer
                  transition-colors'
                  
              />
        </form>
    
    

   </>
  )
}

export default Formulario