// Primero, siempre se importa la libreria de React
import React from 'react';
// El reactDOM que se utilizara para renderizar el componente
import ReactDOM from 'react-dom/client';
// Importa el componente del archivo homeApp.jsx
import {App} from './homeApp.jsx';
// Los estilos para que sean globales se aplican desde el main
import './style.css';

// Obtiene el id del DOM y renderiza el componente en el div vacio
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App nota="Atómico, se dice atómico"/>
    </React.StrictMode>
)