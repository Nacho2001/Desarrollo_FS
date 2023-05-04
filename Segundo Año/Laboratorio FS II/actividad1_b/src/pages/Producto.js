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
            <div className="d-flex align-items-start">
                <Card imagen={silla1} producto="Silla Gamer Acer Speed Red Speed-GC1200R" link="https://www.garbarino.com/silla-gamer-acer-speed-red-rojo-speed-gc1200r-9610/p"/>
                <Card imagen={escritorio1} producto="Escritorio Pc Gamer Iqual Za-hc-z Led Rgb" link="https://www.garbarino.com/escritorio-pc-gamer-iqual-za-hc-z-led-rgb-soporte-auricular-6975/p"/>
                <Card imagen={gabinete1} producto="Pc Gamer Gfast X-500 Rookie I5" link="https://www.casadelaudio.com/ofertas/tecnologia/informatica/pc-de-escritorio/computadora-gfast-x-500-rookie-intel-core-i5?gclid=EAIaIQobChMI8fHFybLa_gIVChXUAR00pgZOEAQYBCABEgIb5fD_BwE"/>
                <Card imagen={gabinete2} producto="Pc Banghó Gamer GM Carbide Core i3" link="https://www.fravega.com/p/pc-bangho-gamer-gm-carbide-core-i3-gtx1050ti-8gb-480gb-windows-11-50040500/"/>
                <Card imagen={gabinete3} producto="Gabinete Gamer IQUAL CM-2802" link="https://www.megatone.net/producto/gabinete-gamer-iqual-cm-2802-vidrio-templado-7-coolers-rgb_MKT0010EBX/"/>
            </div>
        </div>
        <Footer/>
        </div></>
    );
}

export default Productos;