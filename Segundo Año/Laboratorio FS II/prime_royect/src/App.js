import React, { useEffect } from "react";
import { PrimeReactProvider } from 'primereact/api'
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import Navbar from "./componentes/Navbar";
import DexApp from "../pages/DexApp";
import Habilidades from "../pages/Habilidades";
import Regiones from "../pages/Regiones";
import Personajes from "../pages/Personajes";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App(){
  return (
    <PrimeReactProvider>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<DexApp/>}/>
            <Route path="/habilidades" element={<Habilidades/>}/>
            <Route path="/regiones" element={<Regiones/>}/>
            <Route path="/personajes" element={<Personajes/>}/>
        </Routes>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;