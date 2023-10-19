import { Menu } from 'primereact/menu';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Habilidades from "../pages/Habilidades";
import Regiones from "../pages/Regiones";
import Pokeballs from '../pages/Pokeballs';
import pokeballImage from './iconos/pokeball-icon.png';
import { Image } from 'primereact/image';
import 'primeicons/primeicons.css';
        
const SideBar = () => {
    const starIcon = <i className="pi pi-star-fill"></i>
    const mapIcon = <i className="pi pi-map"></i>
    const pokeballIcon = <Image src={pokeballImage} alt="" height="20" width="20"/>
    const habilidadesLink = <Link to="/habilidades">{starIcon} Habilidades</Link>
    const regionesLink = <Link to="/regiones">{mapIcon} Regiones</Link>
    const pokeballsLink = <Link to="/pokeballs">{pokeballIcon} Pokeballs</Link>
    const items = [{label:habilidadesLink},{label:regionesLink},{label:pokeballsLink}]
    return (
        <Router>
            <Menu style={{"width":"14%", "height":"100%"}} model={items}/>
            <Routes>
                <Route path="/habilidades" element={<Habilidades/>}/>
                <Route path="/regiones" element={<Regiones/>}/>
                <Route path="/pokeballs" element={<Pokeballs/>}/>
            </Routes>
        </Router>
    )
} 

export default SideBar;