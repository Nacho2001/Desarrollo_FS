import {useEffect, useState} from 'react';
import axios from 'axios';
import { IonPage, IonLabel, IonContent, IonList } from '@ionic/react';
import UserItem from '../components/UserItem';
const Usuarios: React.FC = () => {
    //const [usuarios,setUsuarios] = useState([]);
    let usuarios: Object[] = []
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
            users.map((user: Object) => (
                usuarios.push(user)
            ))
        }
        obtenerUsuarios();
    }, [])
    return (
        <IonPage>
            <IonContent>
                <IonList>
                    {   
                        /*usuarios.map(user => (
                            <UserItem user={user}/>
                        ))*/
                    }
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Usuarios;