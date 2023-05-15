const express = require('express');
const router = express.Router();
const usuariosController = require('./../controllers/usuariosController');
// Defino las rutas y derivo al controlador correspondiente

router.get('/', usuariosController.getUsuarios);
router.get('/:id',usuariosController.getUserById)
module.exports = router;