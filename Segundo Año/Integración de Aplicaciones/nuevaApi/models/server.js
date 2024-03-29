const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

class Server {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }
    routes(){
        this.app.use('/api/usuarios', require('./../routes/usuariosRoute'));
        //this.app.use('/api/clientes', require('./../routes/clientesRoute'));
        //this.app.use('/api/productos', require('./../routes/productosRoute'));
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan());
    }
    listen(){
        this.app.listen(3000, () => {
            console.log("Servidor ejecutandose en puerto 3000");
        })
    }
}

module.exports = Server