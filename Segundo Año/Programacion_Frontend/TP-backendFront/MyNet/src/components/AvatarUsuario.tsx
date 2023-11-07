import { IonIcon } from "@ionic/react";
import { propsUsuario, usuario } from "../interfaces"
import { personOutline } from "ionicons/icons";

const AvatarUsuario = (props:propsUsuario) => {
    let usuario = props['usuario'];
    let avatar = usuario['imagen'];
    if ( avatar == null || avatar == undefined || avatar == ""){
        return (
            <IonIcon icon={personOutline} size="large"></IonIcon>
        )
    } else {
        <img src={avatar}></img>
    }
}

export default AvatarUsuario