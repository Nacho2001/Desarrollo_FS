import { IonButtons, IonButton,IonTitle, IonToolbar, IonIcon, IonLabel } from "@ionic/react";
import { exitOutline, globeOutline, albumsOutline,peopleCircleOutline, chatbubblesOutline } from 'ionicons/icons';
const ToolbarInicio: React.FC = () => {
    return (
        <>
            <IonToolbar>
                
                <IonButtons slot="start">
                <IonTitle>MyNet</IonTitle>
                    <IonButton href="/">
                        <IonIcon icon={globeOutline} size="large"></IonIcon>
                        <IonLabel style={{"marginLeft":"5%"}}>Inicio</IonLabel>
                    </IonButton>
                    <IonButton href="/posts">
                        <IonIcon icon={albumsOutline} size="large"></IonIcon>
                        <IonLabel style={{"marginLeft":"5%"}}>Mis Posts</IonLabel>
                    </IonButton>
                    <IonButton href="/usuarios">
                        <IonIcon icon={peopleCircleOutline} size="large"></IonIcon>
                        <IonLabel style={{"marginLeft":"5%"}}>Usuarios</IonLabel>
                    </IonButton>
                    <IonButton href="/chat">
                        <IonIcon icon={chatbubblesOutline} size="large"></IonIcon>
                        <IonLabel style={{"marginLeft":"5%"}}>Chat</IonLabel>
                    </IonButton>
                </IonButtons>
                <IonButtons slot="end">
                    <IonButton>
                        <IonIcon icon={exitOutline} size="large"></IonIcon>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </>
    )
}

export default ToolbarInicio;