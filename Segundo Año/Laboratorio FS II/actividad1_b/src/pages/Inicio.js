import Navbar from '../componentes/navbar';
import Carousel from '../componentes/carousel';
import React from "react";

function Inicio(){
    return (
        <>
        <div>
            <Navbar/>
            <div style={{"margin":"10px 0 0 10px"}}>
                Galeria de Imagenes
                <div className="align-self-center" style={{"margin-top":"10px"}}>
                    <Carousel/>
                </div>
            </div>
        </div>
        </>
    );
}
export default Inicio;