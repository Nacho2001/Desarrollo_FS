import React, {useState, useEffect} from "react";
import axios from 'axios';

export const Lista = () => {
    const [lista, setLista] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/api/users')
        .then((answer) => {
            setLista(answer.data.users);
        })
        .catch((error) => {
            alert("No se han obtenido los datos, anda pa ya bobo");
            console.log(error);
        })
    }, []);
    return (
        <>
        <h1>Lista de usuarios</h1>
        <ul>
            {lista.map((usuario) => {
                <li key={usuario.id}>{usuario.username}</li>
            })}
        </ul>
        </>
    )
}