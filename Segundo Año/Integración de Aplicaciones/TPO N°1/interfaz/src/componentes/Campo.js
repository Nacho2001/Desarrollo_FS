import React from "react";

function Campo({nombres}){
    return (
    <div className="d-flex flex-column">
        <label>{nombres.nombreCampo}</label>
        <input type="text" className="form-control" name="${id}" />
    </div>
    )
}

export default Campo;