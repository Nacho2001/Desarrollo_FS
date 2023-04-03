// Crea las rutas a las que dirigira al usuario cuando se conecte
const {Router} = require('express');
const fs = require('fs');
// Path establece la ruta del archivo, libreria para buscar archivos en el servidor
const path = require('path');

const router = Router();
//__dirname va a devolver la ruta completa donde se ubica el archivo
const pathData = path.join(__dirname, '/../data/users.json');
// Responde a la peticion get del usuario
router.get('/', (req,res) => { // req = consulta o todo lo que venga y res = es la respuesta que voy a devolver
	console.log(pathData);

	fs.readFile(pathData, 'utf8', (err,resp) => {
		data => JSON.parse(resp);
		res.status(200).json({
			data
		})
	})
})

router.post('/adduser', (req,res) => {
	const dataUser = req.body;
	fs.readFile(pathData, 'utf0,', (err, resp) => {
		data = JSON.parse(resp);
		data["user4"]=dataUser;
	});
	console.log(data);
	res.status(201).JSON({
		data
	})
})
module.exports = router