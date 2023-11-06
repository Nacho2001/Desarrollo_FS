import { IonToolbar, IonTitle,IonHeader } from "@ionic/react";
const Chat: React.FC = () => {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle slot="start">Chat</IonTitle>
                </IonToolbar>
            </IonHeader>
        </>
    )
}

export default Chat;