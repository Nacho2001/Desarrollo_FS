import React, { useState } from "react";
import './Calculadora.css'
export default function Calculadora(){
    const [nros, setNumeros] = useState({
        nro1:0,
        nro2:0,
        operacion:""
    })
    // La variable que contiene el resultado no puede ser declarado como constante debido a que su valor será modificado
    let [result,setResult] = useState(0)
    const handleInputChange = (event) => {
        setNumeros({
            ...nros,
            // No es necesario utilizar corchetes en el event.target.value, ya que a los strings los tomará como arrays
            [event.target.name]: event.target.value
        })
    }
    const enviarOperacion = (event) => {
        event.preventDefault()
        switch (nros.operacion) {
            case "suma":
                setResult(result = parseFloat(nros.nro1)+parseFloat(nros.nro2))
                break;
            case "resta":
                setResult(result = parseFloat(nros.nro1)-parseFloat(nros.nro2))
                break;
            case "multiplicacion":
                setResult(result = parseFloat(nros.nro1)*parseFloat(nros.nro2))
                break;
            case "division":
                if (nros.nro1 === 0) {
                    setResult(result = "Error, el divisor no puede ser 0")    
                } else {
                    setResult(result = parseFloat(nros.nro1)/parseFloat(nros.nro2))   
                }
                break;
            default:
                setResult(result = "Error, seleccione una operación válida")
                break;
        }
    }
    return (
        <>
        <div className="espacio">
            <form onSubmit={enviarOperacion}>
                <div className="campo">
                    <label>Ingresar primer número</label>
                    <input onChange={handleInputChange} name="nro1"/>
                </div>
                <div className="campo">
                    <label>Ingresar segundo valor</label>
                    <input onChange={handleInputChange} name="nro2"/>
                </div>
                <div className="campo">
                    <label>Seleccione la operación</label>
                    <select onChange={handleInputChange} name="operacion">
                        <option value={""}>Elegir operacion</option>
                        <option value={"suma"}>Suma</option>
                        <option value={"resta"}>Resta</option>
                        <option value={"multiplicacion"}>Multiplicacion</option>
                        <option value={"division"}>Division</option>
                    </select>
                </div>
                <div className="campo">
                    <button type="submit">Calcular</button>
                    <label>Resultado: {result}</label>
                </div>
            </form>
        </div>
        </>
    );
}