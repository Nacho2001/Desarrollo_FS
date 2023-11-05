import {IonItem, IonLabel, IonAvatar, IonIcon} from '@ionic/react';
import { personCircleOutline } from 'ionicons/icons'; 
const UserItem: React.FC = (usuario:object) => {
    return (
        <IonItem>
            <IonAvatar aria-hidden="true" slot="start">
                <IonIcon icon={personCircleOutline}></IonIcon>
                <IonLabel>{}</IonLabel>
            </IonAvatar>
        </IonItem>
    )
}

export default UserItem;