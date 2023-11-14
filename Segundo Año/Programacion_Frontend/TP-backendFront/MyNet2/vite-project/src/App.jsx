import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Muro from './pages/Muro';
import Usuarios from './pages/Usuarios';
import Chat from './pages/Chat';
import { useState } from "react";
import { Menubar } from 'primereact/menubar';
import LogIn from './pages/LogIn';

const App = () => {
  const [pageActiva, setPageActiva] = useState("Home");
  const items2 = [
    {label:'Home', icon:'pi pi-home', command:() => {setPageActiva("Home")}},
    {label:'Muro', icon:'pi pi-bookmark', command:() => {setPageActiva("Muro")}},
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
    <Router>
      <div className="card">
        <Menubar model={items2} className="w-full"/>
        {renderizar()}
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LogIn/>}/>
      </Routes>
    </Router>
  )
}

export default App;