import React from "react";
import { Menubar } from "primereact/menubar";
import { BrowserRouter as Link } from 'react-router-dom';
import { Image } from 'primereact/image';

const Navbar = () => {
    const habilidadesLink = <Link to="/habilidades">Habilidades</Link>
    const regionesLink = <Link to="/regiones">Regiones</Link>
    const personajesLink = <Link to="/personajes">Personajes</Link>
    const dexAppLink = <Link to="/">DexApp</Link>
    const logo = <Image src="iconos/pokeball-icon.png" alt="" height="20" width="20"/>
    const elementos = [{
        icon: logo,
        label: dexAppLink
    },{
        label: habilidadesLink,
        icon: 'pi pi-start-fill'
    },{
        label: regionesLink,
        icon:'pi pi-map'
    },{
        label: personajesLink,
        icon: 'pi pi-fw pi-users'
    }]
    return (
        <Menubar model={elementos}/>
    )
}

export default Navbar;