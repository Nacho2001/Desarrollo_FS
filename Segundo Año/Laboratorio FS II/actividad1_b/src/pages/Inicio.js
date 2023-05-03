import Navbar from '../componentes/navbar';
import Carousel from '../componentes/carousel';
import Footer from '../componentes/footer';
import Sidenav from '../componentes/sidenav';
import React from "react";

function Inicio(){
    return (
        <>
        <div>
            <Navbar/>
            <Sidenav/>
            <div style={{"margin":"1% 0 0 1%"}}>
                <h4>Muestra de artículos:</h4>
                <div style={{"margin-top":"30px", "position":"fixed","left":200}}>
                    <Carousel/>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    );
}
export default Inicio;