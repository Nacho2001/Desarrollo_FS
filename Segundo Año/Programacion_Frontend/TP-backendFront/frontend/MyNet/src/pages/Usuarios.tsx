import {useEffect, useState} from 'react';
import axios from 'axios';
import { IonPage, IonLabel, IonContent } from '@ionic/react';
const Usuarios: React.FC = () => {
    const [usuarios,setUsuarios] = useState([]);
    const callbackUsuarios = async () => {
        try {
            const resp = await axios.get("http://localhost:5000/usuarios")
            let listado = resp.data.usuarios;
            return listado;
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        const obtenerUsuarios = async () => {
            let users = await callbackUsuarios();
            users.map((user: never) => (
                usuarios.push(user)
            ))
        }
        
        //obtenerUsuarios();
    }, [])
    return (
        <IonPage>
            <IonContent>
                <IonLabel>Contenido</IonLabel>
            </IonContent>
        </IonPage>
    )
}

export default Usuarios;