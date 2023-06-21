import React, { useState } from "react";
import './Calculadora.css'
export default function Calculadora(){
    return (
        <>
        <div className="campo">
            <label>Ingresar primer número</label>
            <input id="nro1"></input>
            <label>Ingresar segundo valor</label>
            <input id="nro2"></input>
            <label>Seleccione la operación</label>
            <label>Resultado:</label>
        </div>
        </>
    );
}