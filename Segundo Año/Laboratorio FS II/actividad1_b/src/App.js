import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './componentes/navbar';
import About from './pages/About';
import Inicio from './pages/Inicio';

function App() {
  return (
    <>
      <Router>
        <Inicio/>
        <Routes>
          <Route path='/about' Component={About}></Route>
          <Route path='/' Component={Inicio}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
