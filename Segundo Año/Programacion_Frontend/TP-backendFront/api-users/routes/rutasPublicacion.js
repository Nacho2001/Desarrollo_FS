const express = require("express");
const router = express.Router();
const controladorPost = require("../controllers/controladorPublicaciones");

// Importa la funcion verficacion para controlar los tokens
const checkJWT = require('../middlewares/verificacionJwt');

// Rutas de publicaciones

// Obtener publicaciones
router.get('/', checkJWT.verificacion, controladorPost.obtenerPublicaciones);

// Añadir publicacion
router.post('/', checkJWT.verificacion, controladorPost.crearPublicacion);

// obtener unica publicacion
router.get('/:id', checkJWT.verificacion, controladorPost.obtenerPublicacionUnica);

// Borrar publicacion
router.delete('/:id', checkJWT.verificacion, controladorPost.borrarPublicacion);

// actualizar publicacion
router.put('/:id', checkJWT.verificacion, controladorPost.actualizarPublicacion);

// Obtener publicaciones de un usuario
router.get('/usuarios/:usuario', checkJWT.verificacion, controladorPost.obtenerPublicacionDeUsuario);

// Obtener publicaciones entre fechas
router.get('/:fecha1/:fecha2', checkJWT.verificacion, controladorPost.obtenerPostsEntrefechas);

// buscar publicaciones de un usuario entre fechas
router.get('/usuarios/:usuario/:fecha1/:fecha2', checkJWT.verificacion, controladorPost.obtenerPostsUsuariosEntrefechas);

module.exports = router