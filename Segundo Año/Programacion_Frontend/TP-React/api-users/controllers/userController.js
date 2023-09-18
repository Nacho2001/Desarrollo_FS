const Usuario = require("../models/userModel");

// Obtiene los datos de todos los usuarios
exports.obtenerUsuarios = async (req,res) => {
    try { // Intenta realizar la consulta con el metodo findAll
        const usuarios = await Usuario.findAll()
        res.status(200).json({ // Si tuvo exito, devuelve todos los datos
            estado:"Ok",
            usuarios
        })
    } catch (error) { // Si no pudo hacerlo, devuelve un error 500 y un mensaje de error
        console.error(error);
        res.status(500).json({
            mensaje:"Error del servidor"
        })
    }
}