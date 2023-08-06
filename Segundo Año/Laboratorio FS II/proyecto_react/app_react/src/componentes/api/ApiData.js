import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function ApiData(){
    const [error,setError] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon-species/793/")
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result);
            },
            (error) => {
                setError(error);
            }
        )
    }, [])
    if (error){
        return <div>Error: {error.message}</div>
    } else {
        return (
            <div>Nombre: {items.name}</div>
        )
    }
}