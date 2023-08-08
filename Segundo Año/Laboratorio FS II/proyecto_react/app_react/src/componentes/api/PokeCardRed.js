import React from "react";

export default function PokeCardRed(props){
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