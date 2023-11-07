import {useEffect, useState} from 'react';
import { IonButton, IonContent, IonList, IonToolbar, IonTitle, IonHeader, IonCard, IonCardContent, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { obtenerUsuarios, obtenerUsuarioUnicio, createUser, deleteUser, updateUser } from '../callback';
import { personOutline } from 'ionicons/icons';
const Usuarios: React.FC = () => {
    const [usuarios,setUsuarios] = useState([]);
    const [usuarioSingle, setUsuarioSingle] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            setUsuarios(await obtenerUsuarios())
        }
        getUsers()
    }, [])
    interface usuario{
        id:number,
        username:string,
        email:string,
        imagen:string,
        rol:string
    }
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
    const AvatarUsuario = (props:any) => {
        let avatar = props['imagen'];
        if (avatar == null || avatar == undefined) {
            return (
                <IonIcon icon={personOutline} size="large"></IonIcon>
            )
        } else {
            return (
                <img src={avatar.imagen} ></img>
            )
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
                        usuarios.map((usuario:usuario) => (
                            <IonItem key={usuario['id']} style={{"marginBottom":"1%"}}>
                                <AvatarUsuario avatar={usuario['imagen']}/>
                                <div style={{"marginLeft":"20px"}}>
                                    <IonLabel>{usuario['username']}</IonLabel>
                                    <IonLabel>{usuario['email']}</IonLabel>
                                </div>
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