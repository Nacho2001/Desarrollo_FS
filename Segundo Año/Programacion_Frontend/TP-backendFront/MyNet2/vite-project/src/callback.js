import axios from 'axios';


export const autenticar = async (username, password) => {
    try {
        let res = await axios.post("http://localhost:5000/login", {username, password})
        return res
    } catch (error) {
        return error.response
    }
}
export const obtenerUsuarios =  async () => {
    try {
        const resp =  await axios.get("http://localhost:5000/usuarios");
        const users = resp.data.usuarios;
        return users;
    } catch (error) {
        console.error(error)
    }
}

export const obtenerUsuarioUnicio = async(username) => {
    try {
        const resp = await axios.get(`http://localhost:5000/usuarios/${username}`)
        // La respesta del servidor es un array, por lo tanto, se extrae el usuario desde la posición 0.
        const usuario = resp.data.usuarioBuscado[0];
        return usuario;
    } catch (error) {
        console.error(error);
    }
}

export const createUser = async (username, password, email) => {
    let rol = "usuario"
    try {
        const res = await axios.post("http://localhost:5000/usuarios", {username, password, email, rol })
        return res
    } catch (error) {
        console.error(error)
    }
}

export const deleteUser = async (id) => {
    try {
        await axios.delete("http://localhost:5000/usuarios/"+id)
    } catch (error) {
        console.error(error)
    }
}

export const updateUser = async (id, username, password, email, rol) => {
    try {
        const resp = await axios.put(`http://localhost:5000/usuarios/${id}`, {username, password, email, rol})
    } catch (error) {
        console.error(error);
    }
}

export const getPosts = async () => {
    try {
        const resp = await axios.get("http://localhost:5000/publicaciones")
        const posts = resp.data.publicaciones
        return posts;
    } catch (error) {
        console.error(error)
    }
}

export const getUniquePost = async (id) => {
    try {
        const resp = await axios.get("http://localhost:5000/publicaciones"+id)
        const post = resp.data.publicacion
        return post
    } catch (error) {
        console.error(error);
    }
}

export const getUserPosts = async (user) => {
    try {
        const resp = await axios.get(`http://localhost:5000/publicaciones/usuarios/${user}`);
        const posts = resp.data.publicaciones
        return posts
    } catch (error) {
        console.error(error);
    }
} 

export const addPost = async (titulo,cuerpo,usuario,fecha) => {
    try {
        await axios.post("http://localhost:5000/publicaciones", {titulo,cuerpo,usuario,fecha})
    } catch (error) {
        console.error(error)
    }
}

export const deletePost = async (id) => {
    try {
        await axios.delete("http://localhost:5000/publicaciones/"+id)
    } catch (error) {
        
    }
}

export const updatePost = async (id, titulo, cuerpo, usuario, fecha) => {
    try {
        await axios.put(`http://localhost:5000/publicaciones/${id}`,{titulo,cuerpo,usuario,fecha})
    } catch (error) {
        console.error(error)
    }
}

// Obtener publicaciones filtradas por fecha
export const getPostsBetweenDates = async (fecha1, fecha2) => {
    try {
        await axios.get(`http://localhost:5000/publicaciones/${fecha1}/${fecha2}`)
    } catch (error) {
        console.error(error)
    }
}

// Busca las publicaciones de un usuario especifico, entre las fecha seleccionadas
export const getUserPostsBetweenDates = async (usuario,fecha1,fecha2) => {
    try {
        await axios.get(`http://localhost5000/usuarios/${usuario}/${fecha1}/${fecha2}`)
    } catch (error) {
        console.error(error)
    }
}