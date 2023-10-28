import { Card } from 'primereact/card';
import { useState } from "react";
import 'primeflex/primeflex.css';
        
const TarjetaBola = (dataParse) => {
    const pokeball = dataParse.props;
    const [image,setImage] = useState("");
    function ObtenerImagen(){
        import (`../data/pokeballs/${pokeball.id}.png`)
        .then((image) => {setImage(image.default)})
    }
    ObtenerImagen();
    const titulo = (
        <span>
            <label>{pokeball.nombre}</label>
            <img src={image} width='60px' height='60px' style={{"marginBottom":"-20px"}}/>
        </span>
    )
    return (
        <div style={{"margin":"2%"}}>
            <Card title={titulo}>
                <div >
                    <div>
                        <p>{pokeball.descripcion}.</p>
                        <p>Ratio de captura: {pokeball.ratio_captura}</p>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default TarjetaBola;