import React from "react";
import "./Pantalla.css";
function Pantalla({ children }){
    return(
        <div className="pantalla_cal">
            {children}
        </div>
    );
}
export default Pantalla;