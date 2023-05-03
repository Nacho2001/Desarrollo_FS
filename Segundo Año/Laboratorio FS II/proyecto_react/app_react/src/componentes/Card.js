
function Carta(){
    return(
        /*<div className="card col-2 border-primary">
            <div className="card-header" style={{textAlign: "center"}}>Cabezal</div>
            Cuerpo de tarjeta
        </div>*/
        <div className="card bg-danger mb-3" style={{"max-width":"20rem"}}>
            <div className="card-header">Header</div>
            <div className="card-body">
                <h4 className="card-title">Primary card title</h4>
            </div>
        </div>
    );
}

export default Carta;