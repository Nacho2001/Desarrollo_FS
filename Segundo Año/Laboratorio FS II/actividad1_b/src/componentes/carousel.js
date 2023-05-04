import React from "react";
import silla1 from './images/silla1.jpg'
import escritorio1 from './images/escritorio1.jpg'
import gabinete1 from './images/gabinete1.jpg';
import gabinete2 from './images/gabinete2.jpg';
import gabinete3 from './images/gabinete3.jpg';

function Carousel(){
    return(
        <div id="coleccion" className="carousel slide carousel-fade text-center" style={{"width":"500px", "height":"350px"}}>
            <div className="carousel-item active">
                <img src={gabinete1} className="d-block w-70" alt="gabinete1" width="500px" height="350px"/>
                Pc Gamer Gfast X-500 Rookie I5
            </div>
            <div className="carousel-item">
                <img src={gabinete2} className="d-block w-70" alt="gabinete2" width="500px" height="350px"/>
                Pc Banghó Gamer GM Carbide Core i3
            </div>
            <div className="carousel-item">
                <img src={gabinete3} className="d-block w-70" alt="gabinete3" style={{"margin-left":"25%"}} width="250px" height="350px"/>
                Gabinete Gamer IQUAL CM-2802
            </div>
            <div className="carousel-item">
                <img src={silla1} className="d-block w-70" style={{"margin-left":"25%"}} alt="gabinete3" width="250px" height="350px"/>
                Silla Gamer Acer Speed Red Speed-GC1200R
            </div>
            <div className="carousel-item">
                <img src={escritorio1} className="d-block w-70" style={{"margin-left":"15%"}} alt="gabinete3" width="70%" height="30%"/>
                Escritorio Pc Gamer Iqual Za-hc-z Led Rgb
            </div>
            <button className="carousel-control-prev bg-primary" style={{"width":"50px;", "height":"75px", "margin-top":"100px"}} type="button" data-bs-target="#coleccion" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next bg-primary" style={{"width":"50px;", "height":"75px", "margin-top":"100px"}} type="button" data-bs-target="#coleccion" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>

        </div>
    );
}

export default Carousel;