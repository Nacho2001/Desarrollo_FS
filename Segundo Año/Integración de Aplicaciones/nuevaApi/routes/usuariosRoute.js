const express = require('express');
const router = express.Router();
const usuariosController = require('./../controllers/usuariosController');
// Defino las rutas y derivo al controlador correspondiente

router.get('/', usuariosController.getUsuarios);
router.get('/:id',usuariosController.getUserById);
router.post('/', usuariosController.addUser);
router.put('/:id',usuariosController.updateUser);
module.exports = router;