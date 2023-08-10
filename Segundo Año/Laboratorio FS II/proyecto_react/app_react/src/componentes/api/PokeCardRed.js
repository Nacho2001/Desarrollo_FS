import React from "react";
import { useState } from "react";

export default function PokeCardRed(props){
    const [error,setError] = useState(null);
    const [data, setData] = useState([]);
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pkid}`)
    .then(res => res.json())
    .then((result) => { setData(result) },
    (error) => {setError(error)} )
    if (error) {
        console.log(error)
    } else {
        return (
            <div className="card mb-3 bg-danger" style={{"max-width":" 540px"}}>
                <div className="row">
                    <div className="col-4">
                        <img src="" alt=""/>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5>{data.nombre}</h5>
                            <p>Altura: altura Peso:peso</p>
                            <p>Descripcion</p>
                            <p>descripcion</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};