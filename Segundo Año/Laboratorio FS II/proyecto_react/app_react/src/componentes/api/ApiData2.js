import React from "react";
import { useState } from "react";

export default function ApiData(props){
    const [error,setError] = useState(null);
    const [items, setItems] = useState([]);
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
    .then(res = res.json())
    .then((result) => { setItems(result) },
    (error) => {setError(error)} )
}