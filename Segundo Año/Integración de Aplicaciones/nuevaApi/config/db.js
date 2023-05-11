// Enlace a la Base de Datos
const mysql = require('mysql2');
import config from '../config';

const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
})

module.exports = pool.promise()