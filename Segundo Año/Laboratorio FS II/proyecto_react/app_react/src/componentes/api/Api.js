import React, { useEffect } from "react";
import PokeCardRed from "./PokeCardRed";
import PokeCardBlue from "./PokeCardBlue";

export default function Api(){
    let listaRoja=[984,985,986,987,988,989,1005,1007,1009];
    let listaAzul=[990,991,992,993,994,995,1006,1008,1010];
    return (
        <div className="ms-3">
        <h3 className="text-light">Pokémon Paradojas</h3>
        {/*listaRoja.forEach(pkid => {
            return <PokeCardRed pkid={pkid} />
        })*/}
        <PokeCardRed pkid={984} />
        {/*<PokeCardBlue/>*/}
        </div>
    )
};
