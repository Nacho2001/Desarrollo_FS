//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import EstudiantesForm from './componentes/Estudiantesform';

function App() {
  let [title, setTitle] = useState("Elegir un tipo de formulario")
  const activarFormulario = () => {
    let tipoFormulario = document.getElementById("select").value
    let formulario = document.getElementById("formulario")
    switch (tipoFormulario) {
      case "estudiante":
          setTitle(title = "Formulario de estudiante")
        break;
      case "profesor":
        setTitle(title = "Formulario de profesor")
        break;
      case "curso":
        setTitle(title = "Formulario de curso")
        break;
      default:
        break;
    }
  }
  return (
    <>
    <EstudiantesForm/>
    {/*<div className="App">
      <h3 className="mt-2">{title}</h3>
      <div id="formulario" className='d-flex flex-column align-items-center'>
        <div style={{"width":"11%"}}>
          <select id="select" className='form-select mb-3'>
            <option value={"estudiante"}>Estudiante</option>
            <option value={"profesor"}>Profesor</option>
            <option value={"curso"}>Curso</option>
          </select>
        </div>
        <div>
          <button className="btn btn-sm btn-primary" onClick={activarFormulario}>Mostrar</button>
        </div>      
      </div>
  </div>*/}
    </>
  );
}

export default App;
