import axios from 'axios';

export const obtenerUsuarios =  async () => {
    try {
        const resp =  await axios.get("http://localhost:5000/usuarios");
        const users = resp.data.usuarios;
        return users;
    } catch (error) {
        console.error(error)
    }
}

export const obtenerUsuarioUnicio = async(id:number) => {
    try {
        const resp = await axios.get("http://localhost:5000/usuarios/"+id)
        const usuario = resp.data.usuario;
        console.log(usuario)
        return usuario;
    } catch (error) {
        console.error(error);
    }
}

export const createUser = async (username:string, password:string, email:string) => {
    try {
        await axios.post("http://localhost:5000/usuarios", {username, password, email })
    } catch (error) {
        console.error(error)
    }
}

export const deleteUser = async (id:number) => {
    try {
        await axios.delete("http://localhost:5000/usuarios/"+id)
    } catch (error) {
        console.error(error)
    }
}

export const updateUser = async (id:number, username:string, password:string, email:string, rol:string) => {
    try {
        const resp = await axios.put(`http://localhost:5000/usuarios/${id}`, {username, password, email, rol})
        console.error(resp);
    } catch (error) {
        console.error(error);
    }
}