import TarjetaRegion from '../componentes/TarjetaRegion.js'
import data from '../data/regiones.json';
const Regiones = () => {
    const regiones = data.regiones;
    return (
        <div className="m-4">
            <h4>Lista de Regiones principales</h4>
            {
                regiones.map(region => <TarjetaRegion props={region}/>)
            }
        </div>
    )
}

export default Regiones;