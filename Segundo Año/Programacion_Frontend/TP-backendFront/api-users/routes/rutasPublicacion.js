const express = require("express");
const router = express.Router();
const controladorPost = require("../controllers/controladorPublicaciones");

// Rutas de publicaciones

// Obtener publicaciones
router.get('/', controladorPost.obtenerPublicaciones);

// Añadir publicacion
router.post('/', controladorPost.crearPublicacion);

// obtener unica publicacion
router.get('/:id', controladorPost.obtenerPublicacionUnica);

// Borrar publicacion
router.delete('/:id', controladorPost.borrarPublicacion);

// actualizar publicacion
router.put('/:id', controladorPost.actualizarPublicacion);

module.exports = router