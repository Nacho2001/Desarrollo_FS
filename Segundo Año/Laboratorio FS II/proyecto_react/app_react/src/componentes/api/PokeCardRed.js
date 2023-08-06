import { useState } from "react";
import React, { useEffect } from "react";


export default function PokeCardRed(){
    let listaRoja=[984,985,986,987,988,989,1005,1007,1009]
    const [error,setError] = useState(null);
    const [items, setItems] = useState([]);
    listaRoja.forEach(pokemon => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
        .then(res = res.json())
        .then((result) => { setItems(result) },
        (error) => {setError(error)} )
    });
    return (
        <div className="card mb-3 bg-danger" style={{"max-width":" 540px"}}>
            <div className="row">
                <div className="col-4">
                    <img src="" alt=""/>
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5>Nombre</h5>
                        <p>Altura: altura Peso:peso</p>
                        <p>Descripcion</p>
                        <p>descripcion</p>
                    </div>
                </div>
            </div>
        </div>
    )
};