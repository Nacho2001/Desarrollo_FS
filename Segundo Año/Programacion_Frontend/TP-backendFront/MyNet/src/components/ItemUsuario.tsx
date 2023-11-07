import { IonItem, IonLabel } from "@ionic/react";
import { propsUsuario } from "../interfaces";
import AvatarUsuario from "./Avatarusuario";

const ItemUsuario = (props:propsUsuario) => {
    let usuario = props['usuario'];
    return (
        <IonItem key={usuario['id']} style={{"marginBottom":"1%"}}>
            <AvatarUsuario usuario={usuario}/>
            <div style={{"marginLeft":"20px"}}>
                <IonLabel>{usuario['username']}</IonLabel>
                <IonLabel>{usuario["email"]}</IonLabel>
            </div>
        </IonItem>
    )
}

export default ItemUsuario;