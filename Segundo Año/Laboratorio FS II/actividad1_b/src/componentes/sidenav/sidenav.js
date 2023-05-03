import React from "react";

function Sidenav(){
    return(
        <>
        <div style={{"background-color":"LightGray","position":"fixed","right":0, "width":"20%","height":"100%"}}>
            <div className="d-flex justify-content-around">
                <h5>Lista de proveedores</h5>
            </div>
        </div>
        </>
    );
}

export default Sidenav;