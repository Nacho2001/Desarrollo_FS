// Dependencias
const mongoose = require('mongoose');
require('dotenv').config({
    // Path de archivo .env
    path: `../.env`
})

// Datos para la base
serverIp = process.env.SERVERIP;
serverPuerto = process.env.serverPuerto;
serverRuta = process.env.serverRuta;