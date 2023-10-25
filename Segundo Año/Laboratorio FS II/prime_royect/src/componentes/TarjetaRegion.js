import { Card } from 'primereact/card';
import 'primeflex/primeflex.css';
import { useState } from 'react';
const TarjetaRegion = (data) => {
    const region = data.props
    const [mapa1, setMapa1] = useState("");
    function ObtenerMapas(){
        import (`../data/mapas/${region.id}/mapa.png`)
        .then((mapa1) => {setMapa1(mapa1.default)})
    }
    ObtenerMapas();
    const titulo = (
        <span>
            <label>{region.nombre}</label>
        </span>
    )
    return (
        <Card title={titulo} className="mt-4">
            <div className="flex md:flex-row xl:flex-row flex-column">
                <div className="md:w-6 xl:w-4">
                    <img alt="" src={mapa1} className="w-12 md:w-11 xl:w-11"/>
                </div>
                <div className='flex flex-column md:w-6 xl:w-6'>
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