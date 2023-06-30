const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

class Server {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }
    listen(){
        this.app.listen(3000, () => {
            console.log("Servidor corriendo en puerto 3000")
        })
    }
    routes(){
        this.app.use('/api/user', require ('./../routes/usuario.route.js'))
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(cors()); // Sirve para no realizar peticiones de un mismo origen (Es solamente para desarrollo)
        this.app.use(morgan()); // Muestra los mensajes por consola
    }
}

module.exports = Server