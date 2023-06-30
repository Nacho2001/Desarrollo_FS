// Defino las rutas
// Requiere express
const express = require('express');
const router = express.Router();

router.get('/', require('../controllers/usuario.controller').getUsers)
router.post('/', require('../controllers/usuario.controller').addUser)

// Exporta el router
module.exports = router;