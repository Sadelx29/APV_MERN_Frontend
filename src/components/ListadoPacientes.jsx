import React, {useState} from 'react'
import UsePacientes from '../hooks/UsePacientes'
import Paciente from './Paciente'
// import Alerta from './Alerta'


const ListadoPacientes = () => {

  const {pacientes} = UsePacientes()
  console.log(pacientes)
  // const [alerta, setAlerta] = useState({})


  //     setAlerta({
  //           msg: 'Guardado Exitosamente'
  //       })

  //       setTimeout(function(){
  //           setAlerta({})
   
  //       }, 2000);

  
  // const {msg} = alerta

  return (
    <>

     {pacientes.length ? (
      <>
       

        <h2  className='font-black text-3xl text-center'>Listado de Pacientes</h2>

        <p className='text-xl mt-5 mb-10 text-center font-bold'>
          Administra tus  {""}
          <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>

        </p>

        {/* {msg &&
            <Alerta alerta={alerta}/> } */}

        {pacientes.map( paciente => (
          <Paciente
            key={paciente._id}
            paciente={paciente}
          />
        ))}
      </>
    ) : (
      <>
      <h2  className='font-black text-3xl text-center'>No Hay Pacientes</h2>
      <p className='text-xl mt-5 mb-10 text-center'>
          Administra tus  {""}
          <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>

        </p>
      </>
    )} 
    
      {/* {pacientes.length ?  
      (
        <> 
        <h2  className='font-black text-3xl text-center'>Listado de Pacientes</h2>

        <p className='text-xl mt-5 mb-10 text-center'>
          Administra tus  {""}
          <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>

        </p>
        {pacientes.map(paciente => {
          <Paciente
            key={paciente._id}
            paciente={paciente}
          />
        })}
        </>
      )
      : 
      (

        <>
        <h2  className='font-black text-3xl text-center'>No Hay Pacientes</h2>

        <p className='text-xl mt-5 mb-10 text-center'>
          Comienza Agregando Pacientes {""}
          <span className='text-indigo-600 font-bold'>Para que se muestren en este Lugar</span>

        </p>

        </>
        
      )} */}
    </>
  )
}

export default ListadoPacientes