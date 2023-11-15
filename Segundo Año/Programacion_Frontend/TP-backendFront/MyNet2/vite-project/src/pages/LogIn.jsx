import {useState} from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import { autenticar, obtenerUsuarioUnicio } from '../callback';

const LogIn = (props) => {
    let username = props.credenciales.username;
    let password = props.credenciales.password;

    const [error, setError] = useState("");
    const [inputClass, setInputClass] = useState({
        usernameInput:"",
        passwordInput:""
    })
    const setDatosFormulario = (event) => {
        /*setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })*/
        event.target.name = event.target.value
    }
    const verificacion = async (event) => {
        event.preventDefault()
        let response = await obtenerUsuarioUnicio(username);
        if (response == undefined) {
            setError("Error: No existe el usuario ingresado")
            setInputClass({
                usernameInput:"p-invalid",
                passwordInput:""
            })
        } else {
            if (password != password) {
                setError("Error: La contraseña es incorrecta"),
                setInputClass({
                    usernameInput:"",
                    passwordInput:"p-invalid"
                })
            } else {
                setError("Login exitoso")
            }
        }
    }
    const verificacion2 = async (event) => {
        event.preventDefault();
        let auth = await autenticar(username, password);
        console.log(auth);
    }
    return (
        <div className="justify-content-center">
            <h1>MyNet</h1>
            <form className='flex flex-column w-7 md:w-4 lg:w-2 xl:w-2' onSubmit={verificacion2}>
                <label className='mb-1'>Nombre de usuario</label>
                <InputText name="username" className={inputClass.usernameInput} onChange={(event) => {setDatosFormulario(event)}}/>
                <label className='mt-2 mb-1'>Contraseña</label>
                <InputText name="password" type="password" className={inputClass.passwordInput} onChange={(event) => setDatosFormulario(event)}/>
                <small style={{}} className='mt-2'>{error}</small>
                <Button className="mt-3 w-7rem" type="submit" label="Ingresar"/>
            </form>
        </div>
    )
}

export default LogIn;