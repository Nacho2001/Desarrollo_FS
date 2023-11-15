import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import {PrimeReactProvider} from 'primereact/api';

const store = createStore()
ReactDOM.createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
    <Provider>
      <App />
    </Provider>
  </PrimeReactProvider>,
)
