import NavBar from '../componentes/Navbar2';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from '../componentes/Footer';
import Videojuegos from "../pages/Videojuegos";
import Regiones from "../pages/Regiones";
import Pokeballs from '../pages/Pokeballs';
import 'primeicons/primeicons.css';
import DexNavLogo from '../componentes/iconos/DexNavLogo';
import PokeballsLogo from '../componentes/iconos/PokeballsLogo';
import RegionesLogo from '../componentes/iconos/Regioneslogo';
import VideojuegosLogo from '../componentes/iconos/VideojuegosLogo';
import SideBar from '../componentes/SideBar';


const Inicio = () => {
    const dexApp = (<DexNavLogo/>)
    const videojuegosLink = (
        <Link to="/">
            <VideojuegosLogo/>
        </Link>
        )
    const regionesLink = (
        <Link to="/regiones">
            <RegionesLogo/>
        </Link>
    )
    const pokeballsLink = (
        <Link to="/pokeballs">
            <PokeballsLogo/>
        </Link>
    )
    const itemsNavBar = [dexApp,videojuegosLink,regionesLink,pokeballsLink]
    return (
        <Router>
            <NavBar props={itemsNavBar}/>
            <div className="flex flex-row">
                <SideBar/>
                <div className='flex flex-column'>
                    <Routes>
                        <Route path="/" element={<Videojuegos/>}/>
                        <Route path="/regiones" element={<Regiones/>}/>
                        <Route path="/pokeballs" element={<Pokeballs/>}/>
                    </Routes>
                </div>
                <SideBar/>
            </div>
            <Footer/>
        </Router>
    )
}

export default Inicio;