import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PrimeReactProvider } from 'primereact/api'

//theme
import "primereact/resources/themes/lara-dark-blue/theme.css";

// dependencias adicionales
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
        
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>,
)
