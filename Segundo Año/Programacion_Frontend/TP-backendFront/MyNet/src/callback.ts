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

export const getUniquePost = async (id:number) => {
    try {
        const resp = await axios.get("http://localhost:5000/publicaciones"+id)
        const post = resp.data.publicacion
        return post
    } catch (error) {
        console.error(error);
    }
}

export const getUserPosts = async (user:string) => {
    try {
        const resp = await axios.get(`http://localhost:5000/publicaciones/usuarios/${user}`);
        const posts = resp.data.publicaciones
        return posts;
    } catch (error) {
        console.error(error);
    }
} 

export const addPost = async (titulo:string,cuerpo:string,usuario:string,fecha:Date) => {
    try {
        await axios.post("http://localhost:5000/publicaciones", {titulo,cuerpo,usuario,fecha})
    } catch (error) {
        console.error(error)
    }
}

export const deletePost = async (id:number) => {
    try {
        await axios.delete("http://localhost:5000/publicaciones/"+id)
    } catch (error) {
        
    }
}

export const updatePost = async (id:number, titulo:string, cuerpo:string, usuario:string, fecha:Date) => {
    try {
        await axios.put(`http://localhost:5000/publicaciones/${id}`,{titulo,cuerpo,usuario,fecha})
    } catch (error) {
        console.error(error)
    }
}