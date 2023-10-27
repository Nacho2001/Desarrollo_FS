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
    const dexAppLink = <Link to="/">DexApp</Link>
    const videojuegosLink = (
        <Link to="/videojuegos">
            <i className="pi pi-star-fill mr-1" style={{ fontSize: '1.3rem' }}></i>
            <span>Videojuegos</span>
        </Link>
        )
    const regionesLink = (
        <div>
            <Link to="/regiones">
                <i className="pi pi-map mr-1" style={{ fontSize: '1.3rem' }}></i>
                <span>Regiones</span>
            </Link>
        </div>
    )
    const pokeballsLink = (
        <Link to="/pokeballs">
            <div className="">
                <img src={pokeballIcon} alt="" width="30" height="30"/>
                <div>Pokeballs</div>
            </div>
        </Link>
    )
    const itemsSideBar = [{label:videojuegosLink},{label:regionesLink},{label:pokeballsLink}]
    return (
        <Router>
            <NavBar props={logoXl}/>
            <div className="flex flex-row">
                <Menu style={{"width":"14%", "height":"100%"}} model={itemsSideBar}/>
                <div className='flex flex-column'>
                    <Routes>
                        <Route path="/" element={<DexApp/>}/>
                        <Route path="/videojuegos" element={<Videojuegos/>}/>
                        <Route path="/regiones" element={<Regiones/>}/>
                        <Route path="/pokeballs" element={<Pokeballs/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default Inicio;