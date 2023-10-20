import { Card } from 'primereact/card';
import {useState} from "react";

const TarjetaBola = (props) => {
    const [image,setImage] = useSate("");
    function ObtenerImagen(){
        import (`../data/pokeballs/${props.id}.png`)
        .then((image) => {setImage(image.default)})
    }
    ObtenerImagen();
    const header = (<img src={image} alt={props.nombre} />);
    return (
        <>
            <Card title={props.nombre} header={header}>
                <p>{props.descripcion}</p><br/>
                <p>Ratio de captura: {props.ratio_captura}</p>
            </Card>
        </>
    )
}

export default TarjetaBola;