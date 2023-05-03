import React from "react";
import gabinete1 from './gabinete1.jpg';
import gabinete2 from './gabinete2.jpg';
import gabinete3 from './gabinete3.jpg';

function Carousel(){
    return(
        <div id="coleccion" className="carousel slide carousel-fade" style={{"width":"200px", "height":"100px"}}>
            <div className="carousel-item active">
                <img src={gabinete1} className="d-block w-70" alt="gabinete1" width="200px" height="100px"/>
            </div>
            <div className="carousel-item">
                <img src={gabinete2} className="d-block w-70" alt="gabinete2" width="200px" height="100px"/>
            </div>
            <div className="carousel-item">
                <img src={gabinete3} className="d-block w-70" alt="gabinete3" width="200px" height="100px"/>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#coleccion" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next bg-primary" type="button" data-bs-target="#coleccion" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>
    );
}

export default Carousel;