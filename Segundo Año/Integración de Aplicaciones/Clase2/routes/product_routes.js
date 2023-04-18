const {Router} = require('express'); // Obtiene el router del express (enrutador) 
const fs = require('fs'); // Accede a los archivos del sistema
const path = require('path'); // Arbol de directorios de los archivos
const router = Router(); // Define router
const pathData = path.join(__dirname, '/../data/products.json'); // Obtiene ruta completa hacia el archivo JSON

// Obtener todos los elementos
router.get('/', (req, res) => {
	fs.readFile(pathData, 'utf8', (err,resp) => {
		data = JSON.parse(resp);
		res.status(200).json({
			data
		})
	})
})
// Enviar elemento
router.post('/addproduct/:id', (req,res) => {
	const id = req.params.id
	fs.readFile(pathData, 'utf8', (err, resp) => {
		const dataClient = req.body
		data = JSON.parse(resp);
		data[id] = dataClient;
		res.status(201).json({
			data
		})
	})
})
// Busca producto por id
router.get('/myproduct/:id', (req, res) => {
	const id = req.params.id
	fs.readFile(pathData, 'utf8', (err,resp) => {
		dataFull = JSON.parse(resp);
		data = dataFull[id]
		res.status(200).json({
			data
		})
	})
})
// Actualizar elemento
router.put('/update/:id', (req,res) => {
	const id = req.params.id
	fs.readFile(pathData,'utf8', (err,resp) => {
		const dataProduct = req.body
		data = JSON.parse(resp);
		data[id] = dataProduct;
		res.status(200).json({
			data
		})
	})
})
//Borrar elemento
router.delete('/delete/:id', (req,res) => {
	const id = req.params.id
	fs.readFile(pathData, 'utf8', (err,resp) => {
		dataFull = JSON.parse(resp);
		data = dataFull[id];
		res.status(200).json({
			data : null
		})
	})
})

module.exports = router