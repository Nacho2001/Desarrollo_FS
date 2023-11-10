import { IonTextarea, IonLabel, IonInput } from "@ionic/react"
const formPost = () => {
    return (
        <div>
            <div>
                <IonLabel>Título</IonLabel>
                <IonInput></IonInput>
            </div>
            <div>
                <IonLabel>Imagen</IonLabel>
                <IonTextarea></IonTextarea>
            </div>
            <div>
                <IonLabel>Contenido</IonLabel>
                <IonTextarea></IonTextarea>
            </div>
            
        </div>
    )
}