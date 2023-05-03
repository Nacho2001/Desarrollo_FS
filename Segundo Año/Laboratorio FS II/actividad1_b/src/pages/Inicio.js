import Navbar from '../componentes/navbar';
import Carousel from '../componentes/carousel';
import Footer from '../componentes/footer';
import Sidenav from '../componentes/sidenav/sidenav';
import React from "react";

function Inicio(){
    return (
        <>
        <div>
            <Navbar/>
            <Sidenav/>
            <div style={{"margin":"1% 0 0 1%"}}>
                <h4>Muestra de artículos:</h4>
                <div className="d-flex justify-content-start" style={{"margin-top":"30px"}}>
                    <Carousel/>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    );
}
export default Inicio;