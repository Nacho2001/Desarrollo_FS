import {useState} from 'react';
function Contador(){
    const [contador, setCounter] = useState(0)
    return (
        <div className="card bg-success mb-3" style={{"max-width":"20rem"}}>
            <div className="card-header">Contador: {contador}</div>
            <div className="card-body">
                <button className="btn btn-primary" onClick={() => setCounter(contador+1)}>Pulsame!</button>
                <button className="btn btn-danger" style={{"margin-left":"5px"}}onClick={() => setCounter(contador-1)}>Bajar</button>
                <button className="btn btn-warning" style={{"margin-left":"5px"}}onClick={() => setCounter(contador == 0)}>Restablecer</button>
            </div>
        </div>
    );
}

export default Contador