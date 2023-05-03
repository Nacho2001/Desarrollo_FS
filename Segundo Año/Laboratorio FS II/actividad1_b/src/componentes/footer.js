import React from "react";

function Footer(){
    return(
        <>
        <div className="bg-secondary text-white" style={{"position":"fixed", "width":"100%","bottom":0, "height":"15%"}}>
            <div style={{"margin-left":"10px"}}>
                <div className="col-6">
                    <h5>Autor del sitio</h5>
                    Ignacio Migoni: 22 años, Administrador de sistemas, estudiante de Programación, coleccionista y revendedor de artículos gamers.
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;