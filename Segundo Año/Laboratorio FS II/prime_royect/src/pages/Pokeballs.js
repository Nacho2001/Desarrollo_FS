import fs from 'fs';
import TarjetaBola from '../componentes/Card';

const Pokeballs = () => {
    const data = fs.readFileSync('../data/pokeballs.json');
    const dataParse = JSON.parse(data);
    return (
        <>
            <TarjetaBola props={dataParse}/>
        </>
    )
}

export default Pokeballs;