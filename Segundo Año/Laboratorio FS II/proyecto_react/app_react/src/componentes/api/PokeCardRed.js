import React from "react";
import { useState } from "react";

export default function PokeCardRed(props){
    const [error,setError] = useState(null);
    const [data, setData] = useState([]);
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${props.pkid}/`)
    .then(res => res.json())
    .then((result) => { setData(result) },
    (error) => {setError(error)} )
    if (error) {
        console.log(error)
    } else {
        let imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pkid}.png`
        console.log(data.flavor_text_entries[1].flavor_text)
        return (
            <div className="card mb-3 bg-danger" style={{"max-width":" 540px"}}>
                <div className="row">
                    <div className="col-4">
                        <img src={imagen} alt="" style={{"height":"200px", "weight":"250px"}}/>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5>{data.name}</h5>
                            <p>Altura: {data.height/10} m Peso: {data.weight/10.0} kg</p>
                            <p>Descripcion:</p>
                            <p>{/*data.flavor_text_entries.flavor_text*/}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};