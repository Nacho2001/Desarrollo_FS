import { IonToolbar, IonTitle } from "@ionic/react";
const Chat: React.FC = () => {
    return (
        <>
            <IonToolbar>
                <IonTitle slot="start">MyNet</IonTitle>
                <IonTitle>Chat</IonTitle>
            </IonToolbar>
        </>
    )
}

export default Chat;