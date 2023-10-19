import React from "react";
import { Menubar } from "primereact/menubar";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Image } from 'primereact/image';
import pokeballIcon from './iconos/pokeball-icon.png';
import DexApp from '../pages/DexApp';

const Navbar = () => {
    const dexAppLink = <Link to="/">DexApp</Link>
    const logo = <Image src={pokeballIcon} alt="" height="20" width="20"/>
    const elementos = [{
        icon: logo,
        label: dexAppLink
    }]
    return (
        <Router>
            <Menubar model={elementos}/>
            <Routes>
                <Route path="/" element={<DexApp/>}/>
            </Routes>
        </Router>
        
    )
}

export default Navbar;