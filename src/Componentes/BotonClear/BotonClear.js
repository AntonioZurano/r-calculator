import React from "react";
import "./BotonClear.css";
function BotonClear({ children, clear }){
    return(
        <div className="botonClear" onClick={clear}>
            {children}
        </div>
    );
}
export default BotonClear;