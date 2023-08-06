import React from "react";

export default function PokeCardBlue(){
    let listaAzul=[990,991,992,993,994,995,1006,1008,1010]
    return (
        <div className="card mb-3 bg-primary" style={{"max-width":" 540px"}}>
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