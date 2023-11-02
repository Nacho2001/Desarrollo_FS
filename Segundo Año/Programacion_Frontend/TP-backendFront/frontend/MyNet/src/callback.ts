import axios from 'axios';

// Obtener usuarios
axios.get("http://localhost:5000/usuarios")
.then((resp) => {
    let users = resp.data.usuarios
    console.log(users)
    return users;
})
.catch((error) => {
    console.error(error)
})

export const obtenerUsuarios =  async () => {
    try {
        const resp =  await axios.get("http://localhost:5000/usuarios");
        const users = resp.data.usuarios;
        return users;
    } catch (error) {
        console.error(error)
    }
}