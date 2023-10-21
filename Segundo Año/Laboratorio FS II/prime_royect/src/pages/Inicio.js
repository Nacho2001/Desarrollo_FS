import { Menu } from 'primereact/menu';
import { Menubar } from "primereact/menubar";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Image } from 'primereact/image';
import pokeballIcon from "../componentes/iconos/pokeball-icon.png"
import DexApp from '../pages/DexApp';
import Habilidades from "../pages/Habilidades";
import Regiones from "../pages/Regiones";
import Pokeballs from '../pages/Pokeballs';
import 'primeicons/primeicons.css';

const Inicio = () => {
    const logo = <Image src={pokeballIcon} alt="" height="20" width="20"/>
    const starIcon = <i className="pi pi-star-fill"></i>
    const mapIcon = <i className="pi pi-map"></i>
    const dexAppLink = <Link to="/">DexApp</Link>
    const habilidadesLink = <Link to="/habilidades">{starIcon} Habilidades</Link>
    const regionesLink = <Link to="/regiones">{mapIcon} Regiones</Link>
    const pokeballsLink = <Link to="/pokeballs">{logo}<span>Pokeballs</span></Link>
    const itemsSideBar = [{label:habilidadesLink},{label:regionesLink},{label:pokeballsLink}]
    const elementosNavBar = [{
        icon: logo,
        label: dexAppLink
    }]

    return (
        <Router>
            <Menubar model={elementosNavBar}/>
            <Menu style={{"width":"14%", "height":"100%"}} model={itemsSideBar}/>
            <Routes>
                <Route path="/" element={<DexApp/>}/>
                <Route path="/habilidades" element={<Habilidades/>}/>
                <Route path="/regiones" element={<Regiones/>}/>
                <Route path="/pokeballs" element={<Pokeballs/>}/>
            </Routes>
        </Router>
    )
}

export default Inicio;