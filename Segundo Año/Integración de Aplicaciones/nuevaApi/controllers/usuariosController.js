const usuarioModels = require('./../models/usuariosModel')

exports.getUsuarios = async (req,res) => { // En esta parte no se hace la conexion a la base de datos, los datos ya se recibieron
    // Obtiene los datos del modelo
    try {
        const usuarios = await usuarioModels.obtenerUsuarios(); // Llama al metodo del model que realiza la consulta
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