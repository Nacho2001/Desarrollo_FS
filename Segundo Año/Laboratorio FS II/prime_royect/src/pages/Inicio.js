import { Menu } from 'primereact/menu';
import NavBar from '../componentes/Navbar2';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import pokeballIcon from "../componentes/iconos/pokeball-icon2.png"
import DexApp from '../pages/DexApp';
import Videojuegos from "../pages/Videojuegos";
import Regiones from "../pages/Regiones";
import Pokeballs from '../pages/Pokeballs';
import 'primeicons/primeicons.css';
import DexNavLogo from '../componentes/iconos/DexNavLogo';

const Inicio = () => {
    const logoXl = ( <Link to="/"><DexNavLogo/></Link> )
    const logoXs = <img src={pokeballIcon} alt="" width="20" height="20"/>
    const starIcon = <i className="pi pi-star-fill"></i>
    const mapIcon = <i className="pi pi-map"></i>
    const dexAppLink = <Link to="/">DexApp</Link>
    const videojuegosLink = <Link to="/videojuegos">{starIcon} Videojuegos</Link>
    const regionesLink = <Link to="/regiones">{mapIcon} Regiones</Link>
    const pokeballsLink = <Link to="/pokeballs">{logoXs}<span>Pokeballs</span></Link>
    const itemsSideBar = [{label:videojuegosLink},{label:regionesLink},{label:pokeballsLink}]
    const elementosNavBar = [{
        icon: logoXl,
        label: dexAppLink
    }]

    return (
        <Router>
            <NavBar props={logoXl}/>
            <Menu style={{"width":"14%", "height":"100%"}} model={itemsSideBar}/>
            <Routes>
                <Route path="/" element={<DexApp/>}/>
                <Route path="/videojuegos" element={<Videojuegos/>}/>
                <Route path="/regiones" element={<Regiones/>}/>
                <Route path="/pokeballs" element={<Pokeballs/>}/>
            </Routes>
        </Router>
    )
}

export default Inicio;