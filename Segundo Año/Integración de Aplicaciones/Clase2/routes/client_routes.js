const {Router} = require('express'); // Obtiene el router del express (enrutador) 
const fs = require('fs'); // Accede a los archivos del sistema
const path = require('path'); // Arbol de directorios de los archivos
const router = Router(); // Define router
const pathData = path.join(__dirname, '/../data/clients.json'); // Obtiene ruta completa hacia el archivo JSON
//import '../helps/verificarEmail.js';

router.get('/', (req, res) => {
	fs.readFile(pathData, 'utf8', (err,resp) => {
		data = JSON.parse(resp);
		res.status(200).json({
			data
		})
	})
})

// Enviar elemento
router.post('/addclient/:id', (req,res) => {
	const id = req.params.id
	fs.readFile(pathData, 'utf8', (err, resp) => {
		const dataClient = req.body
		data = JSON.parse(resp);
		dataClient.email = checkEmail(dataClient.email)
		data[id] = dataClient;
		res.status(201).json({
			data
		})
	})
})
// Busca producto por id
router.get('/myclient/:id', (req, res) => {
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
		const dataClient = req.body
		data = JSON.parse(resp);
		data[id] = dataClient;
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
		dataFull[id] = null;
		res.status(200).json({
			dataFull
		})
	})
})
function checkEmail(mail){
    let posicionArroba = "";
    for (let index = 0; index < mail.length; index++) {
        const element = mail[index];
        if(element == "@"){
            posicionArroba = index;
        }
    }
    if(posicionArroba == ""){
        console.log("Error: No se ingreso una direccion de email válida")
        mail = null
    }else{
        let dominio = mail.substring(posicionArroba+1,mail.length);
        if(dominio == "gmail.com" | dominio == "yahoo.com.ar" | dominio == "hotmail.com"){
            console.log("Email válido")
        }else{
            mail = null
            console.log("Error: El dominio del email no es un dominio permitido (yahoo,gmail,hotmail)")
        }
    }
	return mail
}

module.exports = router