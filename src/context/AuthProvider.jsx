import React, {useState, createContext, useEffect} from "react";
import clienteAxios from "../config/axios";
import { Link } from "react-router-dom";

const AuthContext = createContext()



const AuthProvider = ({children}) =>{

  const [cargando, setCargando] = useState(true)

    const [auth, setAuth] = useState({})

    useEffect(() => {

        const autenticarUsuario = async ( ) =>{
  
          const token = localStorage.getItem('token')
          console.log(token)
  
          if(!token) {
            setCargando(false)
            return;
          };
          
          const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
          }

          try {
            const { data} = await clienteAxios.get('/veterinarios/perfil', config)
            console.log(data)
            setAuth(data)
          } catch (error) {
            console.log(error.response.data.msg)
            setAuth({})
          }

          setCargando(false)
        }
  
        autenticarUsuario()
      
  
      }, [])


     const cerrarSesion = () => {
       localStorage.removeItem('token')
       setAuth({})
       
     }


     const actualizarPerfil = async datos => {
      console.log(datos)

       const token = localStorage.getItem('token')
       if(!token) {
         setCargando(false)
         return;
       };
      
       const config = {
        headers: {
            "Content-Type": "application/json",
             Authorization: `Bearer ${token}`
         }
       }

       try {
         const url = `/veterinarios/perfil/${datos._id}`
         const {data} = await clienteAxios.put(url,datos, config)
         console.log(data)
         return{
          msg: 'almacenado correctamente'
         }

       } catch (error) {
         return {
          msg: error.response.data.msg,
          error: true
         }
       }
      
     }

    return(

        <AuthContext.Provider
        value={{
                auth,
                setAuth,
                cargando,
                  cerrarSesion,
                  actualizarPerfil
            }}
            >
            

            {children}
        </AuthContext.Provider>

    )


}


export {
    AuthProvider
}

export default AuthContext