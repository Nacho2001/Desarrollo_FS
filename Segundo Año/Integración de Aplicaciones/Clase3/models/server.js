const express = require('express');

class Server{
	constructor(){
		this.app = express(); // Este app, será el servidor que estará esperando peticiones
	}
	routes(){
		this.app.use('/', require('../routes/users.js'));
	}
	listen(){ // Inicia el servidor en el puerto 3000 y mostrará un mensaje por pantalla
		this.app.listen(3000, () => {
			console.log('Servidor corriendo en el puerto 3000');
		})
	}
}

module.exports = Server;