const jwt = require('jsonwebtoken');

exports.destroyToken = async (req,res) => {
    let userToken = req.headers.token;
    userToken = null;
    try {
        // Responde al cliente con el token destruido
    } catch (error) {
        // Muestra el error por consola
        // Retorna el error 500
    }
}