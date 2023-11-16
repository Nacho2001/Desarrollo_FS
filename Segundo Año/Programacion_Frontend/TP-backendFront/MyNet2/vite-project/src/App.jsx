import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
import Home from './pages/Home';
import Muro from './pages/Muro';
import Usuarios from './pages/Usuarios';
import Chat from './pages/Chat';
import { useState } from "react";
import { Menubar } from 'primereact/menubar';
import LogIn from './pages/LogIn';
import { useDispatch, useSelector } from 'react-redux';
import { setCredenciales } from './store';

const App = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.credencialesUsuario.credencialesUsuario)
  const [pageActiva, setPageActiva] = useState("Home");
  const items2 = [
    {label:'Home', icon:'pi pi-home', command:() => {setPageActiva("Home")}},
    {label:'Muro', icon:'pi pi-bookmark', command:() => {setPageActiva("Muro")}},
    {label:'Usuarios', icon:'pi pi-users', command:() => {setPageActiva("Usuarios")}},
    {label:'Chat', icon:'pi pi-comment', command:() => {setPageActiva("Chat")}},
    {label:'Salir', icon:'pi pi-sign-out', command: () => {logout}}
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

  const checkLogin = () => {
    if (userData.username == "") {
      return (
        <LogIn/>
      )
    } else { 
      return (
        <div>
          <Menubar model={items2} className="w-full"/>
          {renderizar()}
        </div>
      )
    }
  }

  const logout = () => {
    let texto = "Se cerrará la sesión"
    if (confirm(texto) == true) {
      dispatch(setCredenciales("",""))
      return <LogIn/>
    }
  }

  return (
    <div>
      {checkLogin()}
    </div>
  )
}

export default App;