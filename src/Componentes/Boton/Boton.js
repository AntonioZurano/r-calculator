import React from "react";
import "./Boton.css";
function Boton({ children, manejarClic}){
    const esOperador = (value) =>{
        return isNaN(value) && value!=="=" && value!=="." ? "operador" : "";
    }
    return(
        <div className={`boton_cal ${esOperador(children)}`.trim()} onClick={() =>{manejarClic(children)}}>
            {children}
        </div>
    );
}
export default Boton;