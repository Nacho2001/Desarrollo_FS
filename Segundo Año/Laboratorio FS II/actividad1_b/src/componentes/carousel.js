import React from "react";
import gabinete1 from './gabinete1.jpg';
import gabinete2 from './gabinete2.jpg';
import gabinete3 from './gabinete3.jpg';

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
                <img src={gabinete3} className="d-block w-70" alt="gabinete3" width="500px" height="350px"/>
                Gabinete Gamer Iqual Cm-2801 Templado Fuente
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