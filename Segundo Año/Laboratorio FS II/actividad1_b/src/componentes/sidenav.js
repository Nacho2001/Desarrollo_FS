import React from "react";

function Sidenav(){
    return(
        <>
        <div style={{"background-color":"LightGray","position":"fixed","right":0, "width":"20%","height":"100%"}}>
            <div>
                <h4 className="text-center">Plataformas incluidas</h4>
                <ul>
                    <li><a href="https://www.fravega.com">Frávega</a></li>
                    <li><a href="https://www.garbarino.com/">Garbarino</a></li>
                    <li><a href="https://www.megatone.net/">Megatone</a></li>
                    <li>Cappelletti Informática SRL</li>
                </ul>
                <h4 className="text-center">Sucursales asociadas</h4>
                <ul>
                    <li>Cipolletti, Rio Negro</li>
                    <li>Neuquén, Neuquén</li>
                    <li>Rosario, Santa Fe</li>
                    <li>Córdoba Capital, Cordoba</li>
                    <li>Buenos Aires, Buenos Aires</li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Sidenav;