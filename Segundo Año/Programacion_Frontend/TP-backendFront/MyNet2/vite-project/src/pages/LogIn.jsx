import {useState} from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import { autenticar, obtenerUsuarioUnicio } from '../callback';

const LogIn = () => {
    const [userData, setUserData] = useState({
        username:"",
        password:""
    })

    const dispatch = useDispatch()
    const [error, setError] = useState("");
    const [inputClass, setInputClass] = useState({
        usernameInput:"",
        passwordInput:""
    })
    const setFormData = (event) => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
    })
    }
    const verificacion2 = async (event) => {
        event.preventDefault();
        console.log(username,password);
        //let auth = await autenticar(username, password);
        //console.log(auth);
    }
    return (
        <div className="justify-content-center">
            <h1>MyNet</h1>
            <form className='flex flex-column w-7 md:w-4 lg:w-2 xl:w-2' onSubmit={verificacion2}>
                <label className='mb-1'>Nombre de usuario</label>
                <InputText name="username" className={inputClass.usernameInput} onChange={(event) => {setFormData(event)}}/>
                <label className='mt-2 mb-1'>Contraseña</label>
                <InputText name="password" type="password" className={inputClass.passwordInput} onChange={(event) => setFormData(event)}/>
                <small className='mt-2'>{error}</small>
                <Button className="mt-3 w-7rem" type="submit" label="Ingresar"/>
            </form>
        </div>
    )
}

export default LogIn;