// Importamos las librerías necesarias para realizar las pruebas.
import { render, screen } from '@testing-library/react';

// Importamos el componente a testear.
import App from './App';

// Definimos la prueba.
test('renders learn react link', () => {

  // Hacemos el renderizado del componente App.
  render(<App />);

  // Obtenemos el elemento que contiene el texto 'learn react'.
  const linkElement = screen.getByText(/learn react/i);

  // Verificamos que el elemento obtenido existe en el documento.
  expect(linkElement).toBeInTheDocument();
});
 