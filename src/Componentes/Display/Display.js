import React from "react";
import "./Display.css";
function Display({ children }){
    return(
        <div className="pantalla_cal">
            {children}
        </div>
    );
}
export default Pantalla;