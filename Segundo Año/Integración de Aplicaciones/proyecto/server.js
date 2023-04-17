const express = require('express');
const cors = require('cors');

class Server{
    constructor(){ // Declara los metodos
        this.app = express()
        this.middlewares()
        this.routes()
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }
    rutas(){
        this.app.use('/clientes', require('./rutas/clientes.js'));
        this.app.use('/productos', require('./rutas/productos.js'));
    }
    escucha(){
        this.app.listen(5000, () => {
            console.log("Servidor corriendo en el puerto 5000");
        })
    }
}

module.exports = Server