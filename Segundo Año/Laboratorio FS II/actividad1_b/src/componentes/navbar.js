import { Link } from "react-router-dom";
import React from "react";

function Navbar(){
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-secondary navbar-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Inicio</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/about" class="nav-link" aria-current="page">Acerca de</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" class="nav-link" aria-current="page">Contacto</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/product" class="nav-link" aria-current="page">Productos</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
    );
};

export default Navbar;