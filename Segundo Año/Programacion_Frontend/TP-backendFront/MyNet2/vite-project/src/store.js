import { configureStore } from '@reduxjs/toolkit';

export const setCredenciales = (username, password) => ({
    type:'CREDENCIALES',
    payload: {username, password}
})

const estadoInicial = {
    credencialesUsuario: {
        username: '',
        password: ''
    }
}

 const usuarioReducer = (state = estadoInicial, action) => {
    switch(action.type) {
        case 'CREDENCIALES':
            console.log(state.credencialesUsuario)
        default:
            return state;
    }
}

export default configureStore({
    reducer: {
        credencialesUsuario: usuarioReducer
    }
})