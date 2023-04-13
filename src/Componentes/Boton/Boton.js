//importamos React y el archivo de estilos Boton.css.
import React from "react";
import "./Styles/Boton.css";

//declaramos la función Boton que recibe como parámetros los hijos y la función manejadora de clics.
function Boton({ children, manejarClic}){

    //declaramos la función esOperador que verifica si el valor es un operador y lo retorna.
    const esOperador = (value) =>{
        return isNaN(value) && value !== "=" && value !== "." ? "operador" : "";
    }

    //retornamos el componente Boton con las propiedades className y onClick.
    return(
        <div className={`boton_cal ${esOperador(children)}`.trim()} onClick={() =>{manejarClic(children)}}>
            {children}
        </div>
    );
}

//exportamos la función Boton como componente default.
export default Boton;
