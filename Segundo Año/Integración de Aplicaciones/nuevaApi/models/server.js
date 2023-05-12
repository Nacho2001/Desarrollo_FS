const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

class Server {
    constructor(){
        this.app = express();
        this.routes();
        this.middlewares();
    }
    routes(){
        this.app.use('/api/usuarios', require('./../routes/usuariosRoute'))
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