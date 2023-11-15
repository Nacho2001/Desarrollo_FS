// Importa express, router y el controller de usuario
const express = require('express');
const router = express.Router();
const controladorUsuario = require('../controllers/controladorUsuario');

// Importa la funcion verficacion para controlar los tokens
const checkJWT = require('../middlewares/verificacionJwt');

// Define rutas a las consultas del controller

// Obtener usuarios
router.get('/', checkJWT.verificacion, controladorUsuario.obtenerUsuarios);

// Crear usuario nuevo
router.post('/', checkJWT.verificacion, controladorUsuario.crearUsuario);

// Obtener usuario por Username
router.get('/:usuario', checkJWT.verificacion, controladorUsuario.obtenerUsuarioUnico);

// Borrar usuario
router.delete('/:id', checkJWT.verificacion, controladorUsuario.borrarUsuario);

// Actualizar usuario
router.put('/:id', checkJWT.verificacion, controladorUsuario.actulizarUsuario);

module.exports = router