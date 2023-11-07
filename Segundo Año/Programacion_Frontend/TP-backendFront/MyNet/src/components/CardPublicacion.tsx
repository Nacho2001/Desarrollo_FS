import { IonCard, IonCardHeader, IonCardSubtitle, IonIcon, IonCardTitle, IonCardContent } from "@ionic/react";

interface publicacion{
    id:number,
    titulo:string,
    cuerpo:string,
    imagen:string,
    usuario:string,
    fecha:string
}
interface props{
    publicacion:publicacion
}

interface imagen{
    imagen:string
}
const ImagenPost = (props:imagen) => {
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
const CardPublicacion = (props:props) => {
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