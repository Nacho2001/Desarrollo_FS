import data from '../data/pokeballs.json';
import TarjetaBola from '../componentes/TarjetaBola';

const Pokeballs = () => {
    const pokeballs = data.pokeballs
    return (
        <>
        {
            pokeballs.map(pokeball =>  <TarjetaBola props={pokeball}/> )
        }
        </>
    )
}

export default Pokeballs;