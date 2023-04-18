const {Router} = require('express'); // Obtiene el router del express (enrutador) 
const fs = require('fs'); // Accede a los archivos del sistema
const path = require('path'); // Arbol de directorios de los archivos
const router = Router(); // Define router
const pathData = path.join(__dirname, '/../data/clients.json'); // Obtiene ruta completa hacia el archivo JSON

router.get('/', (req, res) => {
	fs.readFile(pathData, 'utf8', (err,resp) => {
		data = JSON.parse(resp);
		res.status(200).json({
			data
		})
	})
})

module.exports = router