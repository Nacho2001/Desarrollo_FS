import { Card } from 'primereact/card';
import { useState } from "react";
const TarjetaBola = (dataParse) => {
    const datos = dataParse.props.pokeballs
    console.log(datos);
    const [image,setImage] = useState("");
    function ObtenerImagen(){
        import (`../data/pokeballs/${datos.id}.png`)
        .then((image) => {setImage(image.default)})
    }
    /*ObtenerImagen();
    const header = (<img src={image} alt={dataParse.nombre} />);
    return (
        <>
            <Card title={dataParse.nombre} header={header}>
                <p>{dataParse.descripcion}</p><br/>
                <p>Ratio de captura: {dataParse.ratio_captura}</p>
            </Card>
        </>
    )*/
}

export default TarjetaBola;