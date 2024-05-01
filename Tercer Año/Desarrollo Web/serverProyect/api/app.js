// Dependencias
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// Declaracion de puerto
const PORT = process.env.PORT || 3579

// Datos para la base
server = process.env.SERVERIP;
serverPuerto = process.env.serverPuerto;
serverRuta = process.env.serverRuta;

// Conexion con base de datos mongo
mongoose.connect(`mongodb://${server}.${serverPuerto}/${serverRuta}`, {
    userNewUrlParser: true,
    useInifiedTopology: true
}).then(() => console.log('MongoDB conectada'))
.catch((err) => console.err(err));

// importacion de rutas