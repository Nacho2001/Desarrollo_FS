import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './componentes/navbar';
import About from './pages/About';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Productos from './pages/Producto';

function App() {
  return (
    <>
      <Router>
        <Inicio/>
        <Routes>
          <Route path='/contact' Component={Contacto}></Route>
          <Route path='/product' Component={Productos}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/' Component={Inicio}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
