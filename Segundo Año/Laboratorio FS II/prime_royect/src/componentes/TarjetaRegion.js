import { Card } from 'primereact/card';
import 'primeflex/primeflex.css';
import { useState } from 'react';
import { Carousel } from 'primereact/carousel';
const TarjetaRegion = (data) => {
    const region = data.props
    const [mapa1, setMapa1] = useState("");
    const [mapa2, setMapa2] = useState("");
    function ObtenerMapas(){
        import (`../data/mapas/${region.id}/mapa.png`)
        .then((mapa1) => {setMapa1(mapa1.default)})
        import (`../data/mapas/${region.id}/mapa_v.png`)
        .then((mapa2) => {setMapa2(mapa2.default)})
    }
    ObtenerMapas();
    const titulo = (
        <span>
            <label>{region.nombre}</label>
        </span>
    )
    const itemsCarousel = [mapa1,mapa2];
    const mapa = (imagen) => {
        return (
            <img alt="" src={imagen} width="100%" height="100%"/>
        )
    }
    return (
        <Card title={titulo} className="mt-4">
            <div className="flex sm:flex-column md:flex-column lg:flex-row flex-column">
                <div style={{"width":"100%","height":"80%"}} className="align-items-center">
                    <Carousel value={itemsCarousel} itemTemplate={mapa} circular autoplayInterval={3000}/>
                </div>
                <div className='flex flex-column'>
                    <p><b>Descripción:</b> {region.descripcion}</p>
                    <p className="-mt-1"><b>Generación:</b> {region.generacion}</p>
                    <p className="-mt-1"><b>Pokémon Iniciales:</b> {region.iniciales}</p>
                    <p className="-mt-1"><b>Profesor:</b> {region.profesor}</p>
                    <p className="-mt-1"><b>Villanos:</b> {region.villanos}</p>
                    <p className="-mt-1"><b>Pokémon legendarios insignia:</b> {region.legendarios_insignia}</p>
                </div>
            </div>
        </Card>
    )
}

export default TarjetaRegion;