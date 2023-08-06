import React from "react";
import PokeCardRed from "./PokeCardRed";
import PokeCardBlue from "./PokeCardBlue";
import ApiData from "./ApiData";

export default function Api(){
    return (
        <div className="ms-3">
        <h3 className="text-light">Pokémon Paradojas</h3>
        {listaRoja.forEach(pokemon => {
            <PokeCardRed nro={pokemon} />
        })}
        <PokeCardBlue/>
        </div>
    )
};
