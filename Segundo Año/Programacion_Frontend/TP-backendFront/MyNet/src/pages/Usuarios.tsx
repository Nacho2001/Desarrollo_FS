import {useEffect, useState} from 'react';
import { IonButton, IonContent, IonList, IonToolbar, IonTitle, IonHeader, IonCard, IonCardContent, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { obtenerUsuarios, obtenerUsuarioUnicio, createUser, deleteUser, updateUser } from '../callback';
import { personOutline } from 'ionicons/icons';
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
    const AvatarUsuario = (avatar:any) => {
        if (avatar == null) {
            <IonIcon icon={personOutline} size="large"></IonIcon>
        } else {
            <img src="${}"></img>
        }
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
                        usuarios.map((usuario:any) => (
                            <IonItem key={usuario.id}>
                                <AvatarUser avatar={usuario.avatar}/>
                                <IonLabel>{usuario['username']}</IonLabel>
                                <IonLabel>{usuario['email']}</IonLabel>
                            </IonItem>
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