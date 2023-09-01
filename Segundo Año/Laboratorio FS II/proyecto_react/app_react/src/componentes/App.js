import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Inicio from './Inicio';
import Calculadora from './calculadora';
import Api from './api/Api';
import Notas from './Notas';
function App() {
  return (
    <>
    <Router >
      <nav className="navbar navbar-expand-lg navbar-dark bg-success" style={{"margin-bottom": "10px"}}>
        <Link to="/" className='navbar-brand' style={{"margin-left":"1%"}}>Inicio</Link>
        <button class="navbar-toggler" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/calculadora" className='nav-link'>Calculadora</Link>
            </li>
            <li class="nav-item active">
              <Link to="/api" className='nav-link'>Api</Link>
            </li>
            <li class="nav-item active">
              <Link to="/notas" className='nav-link'>Notas</Link>
            </li>
          </ul>
        </div>
      </nav>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/calculadora' element={<Calculadora/>}/>
          <Route path='/api' element={<Api/>}/>
          <Route path="/notas" element={<Notas/>}/>
        </Routes>
    </Router>
    </>
  )

}

export default App;
