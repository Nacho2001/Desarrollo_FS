import React, {useEffect, useState} from "react";
function EstudiantesForm(){
    const [error,setError] = useState(null)
    const [isLoaded,setIsLoaded] = useState(false)
    const [estudiantes,setEstudiantes] = useState([])
    useEffect(() => {
        fetch("ruta")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true)
                setEstudiantes(result)
            }
        )
    }, [])
    if (error) {
        console.log(error)
    } else if (!isLoaded) {
        console.log("cargando...")
    } else {
       //return ()
    }
    const cargarEstudiante = (event) => {
        event.preventDefault()

    }
    return (
        <>
            <form className="d-flex flex-column align-items-center" onSubmit={cargarEstudiante}>
                <div className="text-center mb-3">
                    <label>Nombre</label>
                    <input type="text" className="form-control" name="nombre"/>
                </div>
                <div className="text-center mb-3">
                    <label>Edad</label>
                    <input type="number" className="form-control" name="edad"/>
                </div>
                <div className="text-center mb-3">
                    <label>Grado</label>
                    <input type="text" className="form-control" name="grado"/>
                </div>
                <button className="btn btn-success" type="submit">Enviar</button>
            </form>
            <table className="table-dark">
                <thead>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Grado</th>
                </thead>
                <tbody>
                </tbody>
            </table>
        </>
    )
}

export default estudiantesForm;