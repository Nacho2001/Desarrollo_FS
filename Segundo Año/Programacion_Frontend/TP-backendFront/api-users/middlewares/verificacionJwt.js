// Importa jsonwebtoken para proteger la ruta
const jwt = require('jsonwebtoken');

// Valida si existe el cliente posee un token y si es valido, si no lo es, enviará un mensaje de error
exports.verificacion = (req,res) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).json({
            estado:"Error",
            mensaje:"No se entregado un token"
        })
    } else {
        jwt.verify(token, 'MyNetForever', (err, decoded) => {
            if (err){
                res.status(401).json({
                    estado:"Error",
                    mensaje:"El token no es válido"
                })
            } else {
                req.userId = decoded.userId;
                next();
            }
        })
    }
}