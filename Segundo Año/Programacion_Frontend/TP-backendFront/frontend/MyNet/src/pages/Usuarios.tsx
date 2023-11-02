import {useEffect, useState} from 'react';
import axios from 'axios';
import { IonPage, IonLabel, IonContent, IonList } from '@ionic/react';
import UserItem from '../components/UserItem';
import { obtenerUsuarios } from '../callback';
const Usuarios: React.FC = () => {
    const [usuarios,setUsuarios] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            setUsuarios(await obtenerUsuarios());
        }
        getUsers();
    }, [])
    return (
        <IonPage>
            <IonContent>
                <IonList>
                    <div>
                        <li id="listado">
                            {
                                usuarios.map((usuario:any) => (
                                    <ul>{usuario['username']}</ul>
                                ))
                            }
                        </li>
                    </div>
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Usuarios;