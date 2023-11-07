import {useState, useEffect} from 'react';
import { IonToolbar, IonTitle, IonContent, IonHeader } from '@ionic/react';
import { getUserPosts } from '../callback';

const Publicaciones: React.FC = () => {
    const [user,setUser] = useState("");
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        const obtenerPosts = async (user:string) => {
            setPosts(await getUserPosts(user));
        }
        obtenerPosts(user);
    })

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Mi Muro</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
               {/* Invocar callback de publicaciones y acomodar las tarjetas */} 
            </IonContent>
        </>
    )
}

export default Publicaciones;