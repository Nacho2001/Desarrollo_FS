import { IonCard, IonCardHeader, IonCardTitle } from "@ionic/react"
import { GifCard } from "../models/gifCard";

const Card: React.FC <GifCard> = ({title, url,id}) => {
    return (
        <>
        <IonCard style={{"alignItems":"center"}}>
            <img alt="" src={url}/>
            <IonCardHeader>
                <IonCardTitle>{title}</IonCardTitle>
            </IonCardHeader>
        </IonCard>
        </>
    )
}

export default Card;