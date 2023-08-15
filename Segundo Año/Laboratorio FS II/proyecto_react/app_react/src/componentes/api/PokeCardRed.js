import React from "react";
import { useState } from "react";

export default function PokeCardRed(props){
    let id = props.pkid
    const [error,setError] = useState(null);
    const [data, setData] = useState([]);
    const [desc, setDesc] = useState([]);
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then((result) => { setData(result) },
    (error) => {setError(error)}, [] )
    if (error) {
        console.log(error)
    } else {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then(res => res.json())
        .then((result) => {setDesc(result)}, [])
        let imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        return (
            <div className="card mb-3 bg-danger" style={{"max-width":" 540px"}}>
                <div className="row">
                    <div className="col-4">
                        <img src={imagen} alt="" style={{"height":"200px","weight":"200px"}}/>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h3>{data.name}</h3>
                            <ul>
                                <li>Altura: {data.height/10} M </li>
                                <li>Peso: {data.weight/10} Kg</li>
                                <li>Descripcion: </li>
                                {/*desc.flavor_text_entries[0].flavor_text*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};