import { Link } from "react-router-dom";
import React from "react";

function Navbar(){
    return (
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-primary">
            <div class="container-fluid">
                <Link to="/" className="navbar-brand"><h4>Inicio</h4></Link>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/about" class="nav-link" aria-current="page">Acerca de</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
    );
};

export default Navbar;