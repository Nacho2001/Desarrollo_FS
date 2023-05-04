import React from "react";

function Card(props){
    return (
        <>
        <div className="card text-center" style={{"width":"15%","margin":"1% 0 0 0.7%"}}>
            <img className="card-img-top" src={props.imagen} alt="" style={{"width":"50%", "height":"10%","margin-left":"25%"}}/>
            <div className="card-body">
                <p className="card-text">{props.producto}</p>
                <a href={props.link} class="btn btn-primary">Ir a la tienda</a>
            </div>
        </div>
        </>
    );
}
export default Card;