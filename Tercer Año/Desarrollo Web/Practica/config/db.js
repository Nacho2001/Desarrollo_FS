const {Sequelize} = require('sequelize');
require('dotenv').config({
    // Path de archivo .env
    path: `../.env`
})
console.log(process.env.dbDatabase);
const sequelize = new Sequelize(
    // Base de datos
    //`${process.env.dbDatabase}`,
    "api",
    "apiAdmin",
    // Username
    //`${process.env.dbUser}`,
    "b77qf::4h68r",
    // Password
    //`${process.env.dbPassword}`,
    {
        // Ubicacion de la base de datos
        host: process.env.dbIP,
        // Motor de DB
        dialect: 'mysql'
    }
)

module.exports = sequelize