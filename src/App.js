import { useState } from "react";
import "./App.css";
import Boton from "./Componentes/Boton/Boton";
import BotonClear from "./Componentes/BotonClear/BotonClear";
import Pantalla from "./Componentes/Pantalla/Pantalla";
import { evaluate } from "mathjs";
function App() {

  const [input, setInput] = useState("");

  const agregarInput = (dato) =>{
    setInput(input + dato);
  }
  const clearPantalla = () =>{
    setInput("");
  }
  const calcularOperacion = () =>{
    try {
      if(input){
        setInput(evaluate(input));
      }else{
        alert("No hay números");
      }
    } catch (error) {
      alert("Operación incorrecta...");
    }
  }
  return (
    <div className="App">
      <div className="container_calculadora">
        <div className="container_pantalla">
          <Pantalla>{input}</Pantalla>
        </div>
        <div className="container_botones_cal">
          <div className="fila">
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={calcularOperacion}>=</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
          </div>
        </div>
        <div className="container_botonClear">
          <BotonClear clear={clearPantalla}>Limpiar</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;