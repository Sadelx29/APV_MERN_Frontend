import {BrowserRouter, Route, Routes} from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"
import RutaProtegida from "./layout/RutaProtegida"
import  {Login}  from "./paginas/Login"
import {Registrar} from "./paginas/Registrar"
import {OlvidePassword} from "./paginas/OlvidePassword"
import {ConfirmarCuenta} from "./paginas/ConfirmarCuenta"
import NuevoPassword from "./paginas/NuevoPassword"
import { AuthProvider } from "./context/AuthProvider"
import { AdministrarPacientes } from "./paginas/AdministrarPacientes"
import {PacientesProvider} from "./context/PacientesProvider"
import { EditarPerfil } from "./paginas/EditarPerfil"
import { CambiarPassword } from "./paginas/CambiarPassword"

// import Registrar from "./paginas/Registrar"

function App() {




    
    return (
      <BrowserRouter>
        <AuthProvider>
          <PacientesProvider>
            <Routes>
              <Route path="/" element={<AuthLayout/>}>
                  <Route index element={<Login/>} />
                  <Route path="registrar" element={<Registrar/>}/>
                  <Route path="olvide-password" element={<OlvidePassword/>}/>
                  <Route path="olvide-password/:token" element={<NuevoPassword/>}/>
                  <Route path="confirmar/:id" element={<ConfirmarCuenta/>}/>
              </Route>
              <Route path="/admin" element={<RutaProtegida/>}>
                <Route index element={<AdministrarPacientes/>}/>
                <Route path="perfil" element={<EditarPerfil/>}/>
                <Route path="cambiar-password" element={<CambiarPassword/>}/>
              </Route>
            </Routes>
          </PacientesProvider>
        </AuthProvider>
      </BrowserRouter>
    )
}

export default App
