import React from "react";
// Dispatch: Acción que modifica el valor del estado en tiempo real
// Async await, espera a que lleguen los datos para realizar la proxima accion
export default function Notas(){
    return (
        <div style={{"width":"200px","height":"75px", "align-items":"center"}} className="">
            <label>Titulo de nota</label>
            <input className="form-control"/>
        </div>
    );
};