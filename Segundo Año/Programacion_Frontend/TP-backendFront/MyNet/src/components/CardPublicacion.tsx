import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from "@ionic/react";
import { propsPublicacion, imagenPublicacion } from "../interfaces";


const ImagenPost = (props:imagenPublicacion) => {
    let imagen = props['imagen']
    if (imagen == "" || imagen == null || imagen == undefined) {
        return (
            <img src={imagen}></img>
        )
    } else {
        return (
            <></>
        )
    }
}
const CardPublicacion = (props:propsPublicacion) => {
    let post = props['publicacion']
    return (
        <IonCard>
            <IonCardHeader>
                <ImagenPost imagen={post['imagen']} />
                <IonCardTitle>{post['titulo']}</IonCardTitle>
                <IonCardSubtitle>{post['usuario']}, {post['fecha']}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{post['cuerpo']}</IonCardContent>
        </IonCard>
    )
}

export default CardPublicacion;