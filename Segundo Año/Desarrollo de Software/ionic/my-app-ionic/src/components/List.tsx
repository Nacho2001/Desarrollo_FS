import { IonList, IonItem, IonLabel } from "@ionic/react";
import Card from "./Card";
import { GifCard } from "../models/gifCard";
const List: React.FC = () => {
        const gifLibrary:GifCard[] = [
            {
                title:"Messi",
                url:"https://media.tenor.com/mZx1fN9sNCoAAAAd/messi.gif",
                id:1
            },
            {
                title:"Scaloni",
                url:"https://media.tenor.com/k6UzqqpXdUgAAAAC/scaloni-lionel-scaloni.gif",
                id:2
            },
            {
                title:"Maradona",
                url:"https://j.gifs.com/KZNkVl.gif",
                id:3
            },
            {
                title:"Di Maria",
                url:"https://i.gifer.com/origin/30/3016b144b66c297af0eeb9cabebe108e.gif",
                id:4
            }
        ]
    return (
        <>
            <IonList>
                {
                    gifLibrary.map((gifData) => (
                        <IonItem key={gifData.id}>
                            <Card title={gifData.title} url={gifData.url} id={gifData.id}/>
                        </IonItem> 
                    ))
                }             
            </IonList>
        </>
    )
}

export default List;