import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Inicio from './Inicio';

function App() {
  return (
    <>
    <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <Link to="/" className='navbar-brand' style={{"margin-left":"1%"}}>Inicio</Link>
        <button class="navbar-toggler" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/calculadora" className='nav-link'>Calculadora</Link>
            </li>
          </ul>
        </div>
      </nav>
        <Routes>
          <Route path='/' element={<Inicio/>} />
        </Routes>
    </Router>
    </>
  );

}

export default App;
