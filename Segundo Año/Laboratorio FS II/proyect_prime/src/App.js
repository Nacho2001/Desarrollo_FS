import React, { useEffect } from "react";
import { PrimeReactProvider } from 'primereact/api'
import "primereact/resources/themes/lara-light-indigo/theme.css";

        
function App(){
  return (
    <PrimeReactProvider>
      <InputText></InputText>
    </PrimeReactProvider>
  );
}

export default App;
