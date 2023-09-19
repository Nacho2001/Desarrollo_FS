import { useState } from 'react'
import './App.css'

function envioDatos(event){
  event.preventDefault();
  axios.post("http://localhost:4000/usuarios/", { nombreUsuario, contrasenia, email})
  .then((resp) => {
    alert("Datos enviados a la base");
    console.log(resp)
  })
  .catch((error) => {
    alert("Error al cargar los datos");
    console.error(error);
  })
}

function obtenerDatos(event){
  event.preventDefault();
  axios.get("http://localhost:4000/usuarios/")
  .then((resp) => { console.log(resp)})
  .catch((error) => { console.error(error)})
}

function editarDatos(event){
  event.preventDefault();
  axios.get(`http://localhost:4000/usuarios/`)
}
function App() {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <div className='divGen'>
        <form action="">
          <div className='divCampo'>
            <label htmlFor="">Nombre de Usuario</label><br />
            <input type="text" name="nombreUsuario" id="nombreUsuario" value={nombreUsuario} onChange={(event) => {setNombreUsuario(event.target.value)}}/>
          </div>
          <div className='divCampo'>
            <label htmlFor="">Contraseña</label><br />
            <input type="text" name="contrasenia" id="contrasenia" value={contrasenia} onChange={(event) => {setContrasenia(event.target.value)}}/>
          </div>
          <div className='divCampo'>
            <label htmlFor="">Email</label><br />
            <input type="email" name="email" id="email" value={email} onChange={(event) => {setEmail(event.target.value)}}/>
          </div>
          <button className='button' onClick={envioDatos}>Enviar</button>
        </form>
      </div>
    </>
  )
}

export default App
