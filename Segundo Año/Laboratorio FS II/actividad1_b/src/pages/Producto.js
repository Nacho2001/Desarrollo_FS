import React from "react";
import Navbar from '../componentes/navbar';
import Footer from '../componentes/footer';
import Sidenav from '../componentes/sidenav';
import Card from "../componentes/card";
import silla1 from '../componentes/images/silla1.jpg'
import escritorio1 from '../componentes/images/escritorio1.jpg'
import gabinete1 from '../componentes/images/gabinete1.jpg';
import gabinete2 from '../componentes/images/gabinete2.jpg';
import gabinete3 from '../componentes/images/gabinete3.jpg';

function Productos(){
    return(
        <>
        <div>
        <Navbar/>
        <Sidenav/>
        <div style={{"margin":"1% 0 0 1%"}}>
            <h4>Lista de Productos:</h4>
            <Card imagen={silla1} producto="Silla Gamer Acer Speed Red Speed-GC1200R" link="https://www.garbarino.com/silla-gamer-acer-speed-red-rojo-speed-gc1200r-9610/p"/>
        </div>
        <Footer/>
        </div></>
    );
}

export default Productos;