const express = require('express');
const router = express.Router();
const usuariosController = require('./../controllers/usuariosController');
const {validarCampos}  = require('../middleware/validarCampo');
const { check } = require('express-validator')
// Defino las rutas y derivo al controlador correspondiente

router.get('/', usuariosController.getUsuarios);
router.get('/:id',usuariosController.getUserById);
router.post('/', 
    [
        check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
        check('rol', 'El rol es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').not().isEmpty(),
        validarCampos
    ], usuariosController.addUser);
router.put('/:id',usuariosController.updateUser);
module.exports = router;