// Crea las rutas a las que dirigira al usuario cuando se conecte
const {Router} = require('express');

const router = Router();

// Responde a la peticion get del usuario
router.get('/', (req,res) => { // req = consulta o todo lo que venga y res = es la respuesta que voy a devolver
	res.send("Hola mundo cruel!!");
})

module.exports = router