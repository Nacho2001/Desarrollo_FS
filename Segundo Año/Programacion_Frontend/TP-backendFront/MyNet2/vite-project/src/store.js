import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: {}
})

const setCredenciales = (username, password) => ({
    type:'CREDENCIALES',
    payload: {username, password}
})

const estadoInicial = {
    credencialesUsuario: {
        username: '',
        password: ''
    }
}

// Completar reducer