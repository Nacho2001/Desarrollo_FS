import {useState} from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import { createUser } from '../callback';
import { useDispatch, useSelector } from 'react-redux';
import { setCredenciales } from '../store';

const Register = ({registro}) => {
    const dispatch = useDispatch();
    const [registrado, setRegistrado] = useState(false)
    const [userData, setUserData] = useState({
        username:"",
        password:"",
        email:""
    })
    const [inputClass, setInputClass] = useState("")
    const [error, setError] = useState("");
    let message = "Ya posee un usuario?"
    const setFormData = (event) => {
        setUserData({
            ...userData,
            [event.target.id] : event.target.value
        })

    }
    const cambioEstadoRegistro = () => {
        registro(true)
    }
    const registrar = async (event) => {
        event.preventDefault();
        const peticion = await createUser(userData.username,userData.password,userData.email)
        switch (peticion.status) {
            case 200:
                setError(peticion.data.mensaje)
                setInputClass("p-invalid");
            case 201:
                message="Registro exitoso! Inicie sesión"
                setError("");
                setInputClass("");
                setRegistrado(true)
            default:
                //setError("No se ha podido ingresar por un error desconocido")
                console.log(peticion.data.mensaje)
        }
    }
    const onLogin = () => {
        dispatch(setCredenciales(userData.username, userData.password, true))
    }
    const loginButton = () => {
        console.log(registrado)
        if(registrado == false){
            return (
                <Button id="loginButton" className="mt-1 w-10rem" type="submit" label="Iniciar Sesión" severity="info" onClick={cambioEstadoRegistro}/>
            )
        }else{
            return (
                <Button id="loginButton" className="mt-1 w-10rem" type="submit" label="Iniciar Sesión" severity="info" onClick={onLogin}/>
            )
        }
    }
    return (
        <div className='flex justify-content-center'>
            <form className='flex flex-column w-12 align-items-center' onSubmit={registrar}>
                <h1>MyNet: Registro</h1>
                <div className='flex flex-column'>
                    <label className='mb-1'>Nuevo nombre de usuario</label>
                    <InputText id="username" name="formCampo" className={inputClass} value={userData.username} onChange={(event) => {setFormData(event)}}/>
                </div>
                <div className='flex flex-column'>
                    <label className='mb-1 mt-2'>Email</label>
                    <InputText id="email" type="email" name="formCampo" value={userData.email} onChange={(event) => {setFormData(event)}}/>
                </div>
                <div className='flex flex-column'>
                    <label className='mb-1 mt-2'>Nueva Contraseña</label>
                    <InputText id="password" type="password" name="formCampo" value={userData.password} onChange={(event) => {setFormData(event)}}/>
                </div>
                <small className='mt-2' style={{"color":"#CD5C5C"}}>{error}</small>
                    <Button id="registerButton" className="mt-3 mb-4 w-7rem" type="submit" severity="success" label="Registrar"/>
                    {message}
                    {loginButton}
            </form> 
        </div>
    )
}

export default Register;