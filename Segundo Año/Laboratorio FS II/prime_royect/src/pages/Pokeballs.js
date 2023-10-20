import data from '../data/pokeballs.json';
import TarjetaBola from '../componentes/Card';

const Pokeballs = () => {
    console.log(data);
    return (
        <>
            <TarjetaBola props={data}/>
        </>
    )
}

export default Pokeballs;