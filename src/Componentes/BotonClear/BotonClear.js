//Importar el paquete React desde la biblioteca "react"
import React from "react";
//Importar el archivo CSS "BotonClear.css"
import "./Styles/BotonClear.css";
function BotonClear({ children, clear }){
    return(
        <div className="botonClear" onClick={clear}>
            {children}
        </div>
    );
}
//Exportar la función BotonClear para poder ser utilizada en otros archivos.
export default BotonClear;