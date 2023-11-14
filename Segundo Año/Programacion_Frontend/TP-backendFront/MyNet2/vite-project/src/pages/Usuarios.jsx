import { useState, useEffect } from "react";
import { obtenerUsuarios } from "../callback";
import CardUsuarios from "../components/CardUsuarios";
const Usuarios = () => {
    const [usuarios,setUsuarios] = useState([]);
    useEffect(() => {
        const buscarUsuarios = async () => {
            setUsuarios(await obtenerUsuarios());
        }
        buscarUsuarios();
    }, [])
    return (
        <>
            <h2>Lista de Usuarios</h2>
            <ul>
                {
                    usuarios.map((usuario) => (
                        <CardUsuarios usuario={usuario} />
                    ))
                }
            </ul>
        </>
    )
}

export default Usuarios;