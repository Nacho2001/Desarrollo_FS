const Publicaciones = require("../models/modelPublicaciones");

// Obtener Publicaciones
exports.obtenerPublicaciones = async (req,res) => {
    try {
        const publicaciones = await Publicaciones.findAll()
        res.status(200).json({
            estado:"ok",
            mensaje:"Publicaciones obtenidas",
            publicaciones
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            estado:"error",
            mensaje:`Error al obtener publicaciones: ${error}`
        })
    }
}

// Añadir publicaciones
exports.crearPublicacion = async(req,res) => {
    try {
        const publicacion = await Publicaciones.create(req.body);
        res.status(201).json({
            estado:"ok",
            mensaje:"post realizado exitosamente"
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            estado:"error",
            mensaje:`Error al realizar el post: ${error}`
        })
    }
}

exports.obtenerPublicacionUnica = async (req,res) => {
    try {
        const publicacion = await Publicaciones.findByPk(req.params.id);
        if (publicacion == null){
            res.status(404).json({
                estado:"error",
                mensaje:"No se ha encontrado el post"
            })
        } else {
            res.status(200).json({
                estado:"ok",
                mensaje:"post obtenido exitosamente",
                publicacion
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            estado:"error",
            mensaje:`Error al obtener post: ${error}`
        })
    }
}

// Borrar publicacion
exports.borrarPublicacion = async (req,res) => {
    try{
        const publicacion = await Publicaciones.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({
            estado:"ok",
            mensaje:"Publicación eliminada",
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            estado:"error",
            mensaje:`Error al eliminar publicación`
        })
    }
}

// Actualizar post
exports.actualizarPublicacion = async (req,res) => {
    const idPost = req.params.id;
    const postInfo = req.body;
    const postActualizado = { idPost, ...postInfo }
    try {
        const actualizacionPost = await Publicaciones.update({...postActualizado},{
            where: {
                id:idPost
            }
        })
        res.status(200).json({
            estado:"ok",
            mensaje:"Post actualizado!"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            estado:"error",
            mensaje:`Error actualizando el post: ${error}`
        })
    }

}