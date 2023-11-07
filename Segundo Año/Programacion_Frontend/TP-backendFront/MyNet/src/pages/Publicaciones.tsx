import { IonToolbar, IonTitle, IonContent, IonHeader } from '@ionic/react';
const Publicaciones: React.FC = () => {
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