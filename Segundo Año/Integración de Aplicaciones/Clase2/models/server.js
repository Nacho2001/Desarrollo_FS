const express = require('express');
const cors = require('cors');

class Server{
	constructor(){ // Inicializa el servidor
		this.app = express(); // Este app, será el servidor que estará esperando peticiones
		this.middlewares();
		this.routes();
	}

	middlewares(){
		// Middleware que almacena y devuelve los datos en JSON
		this.app.use(express.json());
		this.app.use(cors());
	}
	routes(){
		this.app.use('/api/user', require('../routes/users.js'));
		this.app.use('/api/products', require('../routes/product_routes.js'));
		this.app.use('/api/clients', require('../routes/client_routes.js'));
	}
	listen(){ // Inicia el servidor en el puerto 3000 y mostrará un mensaje por pantalla
		this.app.listen(3000, () => {
			console.log('Servidor corriendo en el puerto 3000');
		})
	}
}

module.exports = Server;