const jwt = require('jsonwebtoken');
const controladorUsuario = require("./controladorUsuario")

exports.autenticacion = async (req,res) => {
    const {username, password} = req.body
    try {
        // Busca el usuario ingresado en la base de datos
        const usuario = await controladorUsuario.obtenerUsuarioUnico(username)
        // Si no existe, retorna un error "Credenciales incorrectas"
        if (!usuario){
            res.status(401).json({
                estado:"Error",
                mensaje:"Nombre de Usuario o Contraseña incorrectos"
            })
        } else {
            // Verifica la contraseña del usuario, si no es igual tambien retorna un error
            if (usuario.password != password){
                res.status(401).json({
                    estado:"Error",
                    mensaje:"Nombre de Usuario o Contraseña incorrectos"
                })
            } else {
                // Crea el token para el cliente si las credenciales son correctas
                const token = jwt.sign({userID: usuario.id}, 'MyNetForever', { expiresIn: '2h'})
                res.json({token})
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            estado:"Error",
            mensaje:"Error del servidor"
        })
    }
}