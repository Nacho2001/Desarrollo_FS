import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
import Home from './pages/Home';
import Muro from './pages/Muro';
import Usuarios from './pages/Usuarios';
import Chat from './pages/Chat';
import {TabMenu} from "primereact/TabMenu";
import { useState } from "react";
import { Menubar } from 'primereact/menubar';

const App = () => {
  const [pageActiva, setPageActiva] = useState("Home");
  const items2 = [
    {label:'Home', icon:'pi pi-home', command:() => {setPageActiva("Home")}},
    {label:'Muro', icon:'pi pi-bookmark', command:() => {setPageActiva("Muro"); console.log(pageActiva)}},
    {label:'Usuarios', icon:'pi pi-users', command:() => {setPageActiva("Usuarios")}},
    {label:'Chat', icon:'pi pi-comment', command:() => {setPageActiva("Chat")}},
    {label:'Salir', icon:'pi pi-sign-out'}
]
  const renderizar = () => {
    switch (pageActiva) {
      case "Home":
        return <Home/>;
      case "Muro":
        return <Muro/>;
      case "Usuarios":
        return <Usuarios/>;
      case "Chat":
        return <Chat/>;
      default:
        return <Home/>;
    }
  }
  return (
    <div className="card">
      <Menubar model={items2} className="w-full"/>
      {renderizar()}
    </div>
  )
}

export default App;