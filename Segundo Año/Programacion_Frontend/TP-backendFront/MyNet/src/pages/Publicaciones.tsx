import { IonToolbar, IonTitle, IonPage, IonContent, IonHeader } from '@ionic/react';
const Publicaciones: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle slot="start">MyNet</IonTitle>
                    <IonTitle>Mi Muro</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            </IonContent>
        </IonPage>
    )
}

export default Publicaciones;