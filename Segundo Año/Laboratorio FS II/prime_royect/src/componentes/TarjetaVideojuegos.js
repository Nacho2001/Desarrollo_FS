import { Card } from 'primereact/card';
import { useState } from 'react';
import 'primeflex/primeflex.css';

const TarjetaVideojuegos = (data) => {
    const videojuego = data.props;
    console.log(videojuego);
    const [imagen,setImagen] = useState("");
    const header = (
        <>
            <img src={imagen} alt={videojuego.nombre} width="90%" height="90%"/>
        </>
    );
    const titulo = (<label>{videojuego.nombre}</label>)
    function ObtenerPortada(){
        import(`../data/videojuegos/${videojuego.id}.png`)
        .then((imagen) => {setImagen(imagen.default)});
    }
    ObtenerPortada();
    return (
        <div className='card m-2 w-20rem'>
            <Card header={header} title={titulo}>
                <div><b>Año de lanzamiento</b>: {videojuego.año_lanzamiento}</div>
                <div><b>Consola:</b> {videojuego.consola}</div>
                <div><b>Generación:</b> {videojuego.generación}</div>
                <div><b>Región de la historia:</b> {videojuego.region}</div>
            </Card>
        </div>
    )
}

export default TarjetaVideojuegos;