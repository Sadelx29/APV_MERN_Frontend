import {useState} from 'react'
import AdminNav from '../components/AdminNav'
import Alerta from '../components/Alerta'




export const CambiarPassword = () => {
  const [alerta, setAlerta] = useState({})
  const [password, setPassword] = useState({
    passwordNuevo : '',
    passwordActual : ''
  })

  const handleSubmit = async e => {
    e.preventDefault()

    console.log()

    if(Object.values(password).some(campo => campo === '')){
      setAlerta({
        msg: 'todos los campos son obligatorios',
        error: true
      })
      return
    }

    if(password.passwordNuevo.length<6){
      setAlerta({
        msg: 'la clave debe tener mas de 6 caracteres',
        error: true
      })
      return
    }

  
  }
  const {msg} = alerta


  return (

    
    <>
      <AdminNav/>
      
      <h2 className='font-black text-3xl text-center mt-10'>Cambiar Password</h2>
      <p className='text-xl mt-5 mb-10 text-center'>Modifica tu {""} <span className='text-indigo-600  font-bold'>Password</span></p>

      <div className='flex justify-center'>
        <div className='w-full md:w-1/2 bg-white shadow rounded-lg p-5'>

        {msg && <Alerta 
            alerta={alerta}  
          />  } 
          <form
          
            onSubmit={handleSubmit}
          >
       
          <div className='my-3'>
            <label className='uppercase font-bold text-gray-600 '>Password</label>
            <input
              type="password"
              className='border bg-gray-50 w-full p-2 mt-5 rounded-lg'
              name="pwd_actual"

              onChange={e => setPassword({
                ...password,
                [e.target.name] : e.target.value
              })}


            />
          </div>
          <div className='my-3'>
            <label className='uppercase font-bold text-gray-600 '>Nuevo Password</label>
            <input
              type="password"
              className='border bg-gray-50 w-full p-2 mt-5 rounded-lg'
              name="pwd_nuevo"

              onChange={e => setPassword({
                ...password,
                [e.target.name] : e.target.value
              })}


            />
          </div>
          <input
                type="submit"
                value="Guardar Cambios"
                className='bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer
                hover:bg-indigo-800 '
            />
          </form>
        </div>
      </div>
    </>
  )
}
