import Formulario from "./componentes/Formulario";
import React, { useEffect } from "react";
import axios from 'axios';

function App() {
  let usuarios = [];
  const obtenerDatos = () => {
    const resp = axios.get("http://localhost:5000/usuarios")
    .then(
      usuarios = resp.data.usuarios
    )
    .error( console.error(error))
  }

  useEffect(() => {
    obtenerDatos();
  })
  return (
    <div className="App">
      <h3>Lista de usuarios</h3>
      <Formulario/>    
    </div>
  );
}

export default App;
