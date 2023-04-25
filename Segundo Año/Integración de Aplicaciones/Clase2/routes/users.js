// Crea las rutas a las que dirigira al usuario cuando se conecte
const {Router} = require('express');
const fs = require('fs');
// Path establece la ruta del archivo, libreria para buscar archivos en el servidor
const path = require('path');
const { openStdin } = require('process');

const router = Router();
//__dirname va a devolver la ruta completa donde se ubica el archivo
const pathData = path.join(__dirname, '/../data/users.json');
// Responde a la peticion get del usuario
router.get('/', (req,res) => { // req = consulta o todo lo que venga y res = es la respuesta que voy a devolver

	fs.readFile(pathData, 'utf8', (err,resp) => {
		data = JSON.parse(resp);
		res.status(200).json({
			data
		})
	})
})

router.post('/adduser', (req,res) => {
	const dataUser = req.body;
	fs.readFile(pathData, 'utf8,', (err, resp) => {
		data = JSON.parse(resp);
		data["user4"]=dataUser;
	});
	res.status(201).JSON({
		data
	})
})

router.put('/:id', (req,res) => {
	//peticion put
	// localhost/api/user/1
	// body -> Datos a actualizar
	//se obtiene el parámetro en el endpoint, en este caso el id
	const idUser = req.params.id
	let pos = -1; // Posicion donde se ubica el elemento buscado, se asigna el valor -1 para entregar un valor
	// consultar si el id existe
	fs.readFile(pathData, 'utf8', (err, resp) => {
		data = JSON.parse(resp);
		data.forEach((user,index) => {
			if(user.id == idUser){
				pos = index;
				return
			}
		});
		if(pos!=-1){
			const {name, password, profession} = req.body
			data[pos].name = name;
			data[pos].password = password;
			data[pos].profession = profession;
			res.status(200).json({
				data
			})
		}else{
			res.status(404).json({
				msg: `No existe el usuario con id: ${idUser}`
			})
		}
	});
})

router.delete('/delete/:id', (req,res) => {
	const usuarioID = req.params.id;
	let pos = -1;
	fs.readFile(pathData, 'utf8', (err, resp) => {
		data = JSON.parse(resp)
		data.forEach((user,index) => {
			if(user.id == usuarioID){
				pos = index;
				return
			}
		});
		if(pos!=-1){
			data[pos] = null;
			res.status(200).json({
				data
			})
		}else{
			res.status(404).json({
				msg: `No existe el usuario con id: ${usuarioID}`
			})
		}
	})
	
})

module.exports = router