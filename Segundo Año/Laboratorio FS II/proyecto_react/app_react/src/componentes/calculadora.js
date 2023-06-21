import React, { useState } from "react";
import './Calculadora.css'
export default function Calculadora(){
    const [nros, modNumeros] = useState({
        nro1:0,
        nro2:0,
        resultado:0
    })
    const handleInputChange = (event) => {
        modNumeros({
            ...nros,
            [event.target.name]: [event.target.value]
        })
    }
    const enviarOperacion = (event) => {
        event.preventDefault()
        
    }
    return (
        <>
        <div className="campo">
            <form onSubmit={enviarOperacion}>
                <label>Ingresar primer número</label>
                <input onChange={handleInputChange} name="nro1"/>
                <label>Ingresar segundo valor</label>
                <input onChange={handleInputChange} name="nro2"/>
                <label>Seleccione la operación</label>
                <select>INgresar opc</select>
                <button type="submit">Calcular</button>
                <label>Resultado:{resultado}</label>
            </form>
        </div>
        </>
    );
}