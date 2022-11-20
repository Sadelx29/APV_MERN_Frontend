import React, {useContext} from "react";

import PacientesContext from "../context/PacientesProvider";


const UsePacientes = () => {

    return useContext(PacientesContext)

}


export default UsePacientes