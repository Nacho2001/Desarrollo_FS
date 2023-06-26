const {response} = require('express')
const {validationResult} = require('express-validator')
const validarCampos = (req,res = response, next) => {
    const errores = validationResult(req);
    if(!errores.isEmpty()){ // Errores es un array de errores, si este esta vacio, no entrará en el if
        return res.status(400).json({
            ok:false,
            errors: errores.mapped()
        });
    }
    next() // Una vez que los datos se han validado, llamará al next, y continuará
}
module.exports = {validarCampos}