import React from "react";
import Navbar from '../componentes/navbar';
import Footer from '../componentes/footer';
import Sidenav from '../componentes/sidenav';

function Contacto(){
    return(
    <>
    <div>
        <Navbar/>
        <Sidenav/>
        <div className="d-flex flex-column" style={{"margin":"1% 0 0 1%"}}>
            <h3>Enviar consulta o reclamo</h3>
            <div className="col-3 d-flex flex-column" style={{"margin-bottom":"1%"}}>
                <label>Nombre completo</label>
                <input className="form-control"/>
            </div>
            <div className="col-3 d-flex flex-column" style={{"margin-bottom":"1%"}}>
                <label>Email</label>
                <input type="email" className="form-control" />
            </div>
            <div className="col-3 d-flex flex-column" style={{"margin-bottom":"1%"}}>
                <label>Mensaje</label>
                <textarea className="form-control"/>
            </div>
            <button type="button" class="btn btn-success" style={{"width":"5%"}}>Enviar</button>
        </div>
        <Footer/>
    </div>
    </>        
    );
}

export default Contacto;