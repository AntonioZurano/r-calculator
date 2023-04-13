// Importar el hook useState y los componentes necesarios
import { useState } from "react";
import "./Styles/App.css";
import Boton from "./Componentes/Boton/Boton";
import BotonClear from "./Componentes/BotonClear/BotonClear";
import Display from "./Componentes/Display/Display"
import { evaluate } from "mathjs";

// Crear la función App
function App() {

  // Crear el estado input y la función para actualizarlo
  const [input, setInput] = useState("");

  // Crear la función que se encarga de concatenar el valor del botón en el input
  const agregarInput = (dato) => {
    setInput(input + dato);
  }

  // Crear la función que se encarga de limpiar el estado input  
  const clearDisplay = () => {
    setInput("");
  }

  // Crear la función que se encarga de evaluar la operación matemática ingresada en input
  const calcularOperacion = () => {
    try {
      if (input) {
        setInput(evaluate(input));
      } else {
        alert("No hay números");
      }
    } catch (error) {
      alert("Operación incorrecta...");
    }
  }

  // Retornar la siguiente estructura HTML y JS
  return (
    <div className="App">
      <div className="container_calculadora">
        <div className="container_display">
          <Display>{input}</Display>
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
          <BotonClear clear={clearDisplay}>Limpiar</BotonClear>
        </div>
      </div>
    </div>
  );
}
// Exportar la función App como componente
export default App;
