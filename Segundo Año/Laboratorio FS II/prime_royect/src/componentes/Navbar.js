import React from "react";
import { Menubar } from "primereact/menubar";
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import 'primeicons/primeicons.css';
import DexApp from "../pages/DexApp";
import Habilidades from "../pages/Habilidades";
import Regiones from "../pages/Regiones";
import Personajes from "../pages/Personajes";

const Navbar = () => {
    const habilidadesLink = <Link to="/habilidades">Habilidades</Link>
    const regionesLink = <Link to="/regiones">Regiones</Link>
    const personajesLink = <Link to="/personajes">Personajes</Link>
    const dexAppLink = <Link to="/">DexApp</Link>
    const logo = <img/>
    const elementos = [{
        label: dexAppLink,
        icon: ""
    },{
        label: habilidadesLink,
        icon: PrimeIcons.STAR_FILL
    },{
        label: regionesLink,
        icon:''
    },{
        label: personajesLink,
        icon: PrimeIcons.USER
    }]
    return (
        <>
            <Router>
                <Menubar model={elementos}/>
                <Routes>
                    <Route path="/" element={<DexApp/>}/>
                    <Route path="/habilidades" element={<Habilidades/>}/>
                    <Route path="/regiones" element={<Regiones/>}/>
                    <Route path="/personajes" element={<Personajes/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default Navbar;