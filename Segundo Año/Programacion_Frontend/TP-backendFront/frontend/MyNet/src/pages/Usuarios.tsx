import {useEffect, useState} from 'react';
import { IonPage, IonButton, IonContent, IonList } from '@ionic/react';
import { obtenerUsuarios, obtenerUsuarioUnicio, createUser, deleteUser, updateUser } from '../callback';
const Usuarios: React.FC = () => {
    const [usuarios,setUsuarios] = useState([]);
    const [usuarioSingle, setUsuarioSingle] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            setUsuarios(await obtenerUsuarios());
        }
        getUsers()
    }, [])
    const obtenerUsuario = async (id:any) => {
        setUsuarioSingle(await obtenerUsuarioUnicio(id));
    }
    const crearUsuario = async (username:string, password:string, email:string) => {
        await createUser(username,password,email);
    }
    const borrarUsuario = async (id:number) => {
        await deleteUser(id);
    }
    const actualizarUsuario = async (id:number, username:string, password:string, email:string, rol:string) => {
        await updateUser(id,username,password,email,rol);
    }
    return (
        <IonPage>
            <IonContent>
                <IonList>
                    <div>
                        <li id="listado">
                            {
                                usuarios.map((usuario:any) => (
                                    <ul key={usuario.id}>{usuario['username']}</ul>
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