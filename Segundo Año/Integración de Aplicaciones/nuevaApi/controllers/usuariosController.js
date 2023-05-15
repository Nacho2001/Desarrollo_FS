const usuarioModel = require('./../models/usuariosModel')

exports.getUsuarios = async (req,res) => { // En esta parte no se hace la conexion a la base de datos, los datos ya se recibieron
    // Obtiene los datos del modelo
    try {
        const usuarios = await usuarioModel.obtenerUsuarios(); // Llama al metodo del model que realiza la consulta
        // Si todo sale bien, entrega los datos y responde un OK
        res.status(200).json({
            success:true,
            data:usuarios
        })
    } catch (error) { // Si hay un error, lo captura y lo muestra por consola
        console.error(error)
        res.status(500).json({
            sucess:false,
            message: 'Ocurrio un error al obtener los datos'
        })
    }
}

exports.getUserById = async(req,res) => {
    // Obtiene el ID enviado ddesde la ruta
    const idUser = req.params.id;
    try {
        const usuario = await usuarioModel.getUserById(idUser)
        if(!usuario[0]){ // Si no encuentra el usuario, devolverá un mensaje de error
            res.status(404).json({
                success:false,
                mgs:`No existe usuario con el id: ${idUser}`
            })
        }
        res.status(200).json({
            success:true,
            data:usuario
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            sucess:false,
            message: 'Ocurrio un error al obtener los datos'
        })
    }
}