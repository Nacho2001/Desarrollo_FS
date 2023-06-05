import React from 'react';
import logo from '../logo.svg';
import Carta from './Card.js'
import Contador from './contadorClicks';
function Inicio(){
    return (
        <div className="App">
            <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Contador />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
}

export default Inicio;