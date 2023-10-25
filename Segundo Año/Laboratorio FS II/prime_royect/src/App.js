import React from "react";
import { PrimeReactProvider } from 'primereact/api'
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import Inicio from "./pages/Inicio";

function App(){
  return (
    <PrimeReactProvider>
      <Inicio/>
    </PrimeReactProvider>
  );
}

export default App;