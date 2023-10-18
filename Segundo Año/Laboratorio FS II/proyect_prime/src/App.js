import React, { useEffect } from "react";
import { PrimeReactProvider } from 'primereact/api'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Navbar from "./componentes/Navbar";
        
function App(){
  return (
    <PrimeReactProvider>
      <Navbar/>
    </PrimeReactProvider>
  );
}

export default App;