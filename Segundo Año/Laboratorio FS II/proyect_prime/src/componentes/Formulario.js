import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import "./formulario.css";

const Formulario = () => {
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email,setEmail] = useState("");

    const enviarDatos = (event) => {
        event.preventDefault();
        axios.post("http://localhost:5000/usuarios", {username, password, email})
        .then(() => {
          alert("Datos enviados a la base");
          obtenerDatos();
        })
        .error((error) => {
          alert("Error al enviar los datos")
          console.error(error);
        })
      }

    return (
        <form className="formulario">
            <div className="input">
                <label>Nombre de usuario</label>   
                <InputText type="text" onChange={(event) => { setUsername(event.target.value)}} />
            </div>
            <div className="input">
                <label>Contraseña</label>
                <InputText type="password" onChange={(event) => { setPassword(event.target.value)}} />
            </div>
            <div className="input">
                <label>Email</label>
                <InputText type="email" onChange={(event) => { setEmail(event.target.value)}} />
            </div>
            <button className="boton" onClick={enviarDatos}>Send</button>
        </form>
    )
}

export default Formulario;