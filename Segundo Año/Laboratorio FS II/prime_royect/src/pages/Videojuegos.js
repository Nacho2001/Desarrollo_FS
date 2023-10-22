import TarjetaVideojuegos from '../componentes/TarjetaVideojuegos';
import data from '../data/videojuegos.json';

const Videojuegos = () => {
    const videojuegos = data.videojuegos;
    return (
        <div className="m-5"> 
            <h2>Lista de Videojuegos Principales</h2>
            <div className='flex flex-wrap flex-column sm:flex-row align-items-center sm:align-items-start'>   
                {videojuegos.map(videojuego => 
                    <div><TarjetaVideojuegos props={videojuego} /></div>
                )}
            </div>
        </div>
    )
}

export default Videojuegos;