import React from "react";
import "./Styles/Display.css";
function Display({ children }){
    return(
        <div className="pantalla_cal">
            {children}
        </div>
    );
}
export default Display;