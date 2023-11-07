import {useEffect, useState} from 'react';
import { IonContent, IonList, IonToolbar, IonTitle, IonHeader, IonCard, IonCardContent} from '@ionic/react';
import { obtenerUsuarios, obtenerUsuarioUnicio, createUser, deleteUser, updateUser } from '../callback';
import ItemUsuario from '../components/ItemUsuario';
const Usuarios: React.FC = () => {
    const [usuarios,setUsuarios] = useState([]);
    const [usuarioSingle, setUsuarioSingle] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            setUsuarios(await obtenerUsuarios())
        }
        getUsers()
    }, [])
    const obtenerUsuario = async (id:number) => {
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
        <>
            <IonHeader>
                <IonToolbar style={{
                    "alignItems":"center"
                }}>
                    <IonTitle>Usuarios</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard style={{
                    "marginLeft":"3%",
                    "marginRight":"3%"
                }}>
                    <IonCardContent>
                        <IonList>
                        {
                            usuarios.map((usuario) => (
                                <ItemUsuario usuario={usuario}/>
                            ))
                        }
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </>
    )
}

export default Usuarios;