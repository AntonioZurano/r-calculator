import React from 'react';
import ReactDOM from 'react-dom/client';

// Importamos el archivo CSS correspondiente
import './Styles/normalize.css';
import './Styles/index.css';

// Importamos el componente App desde el archivo App.js
import App from './App';

// Creamos un elemento raíz para renderizar nuestra aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizamos el componente App dentro del modo estricto de React
// a través del elemento raíz creado anteriormente
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


