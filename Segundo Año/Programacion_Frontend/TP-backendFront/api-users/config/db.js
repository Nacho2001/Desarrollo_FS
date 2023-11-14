const {Sequelize} = require('sequelize');

// Datos de la DB para acceder con Squelize

const sequelize = new Sequelize(
    "mynet",
    "sequelizeUser",
    "sequelizeUser",
    {
        host:"192.168.56.106",
        dialect:"mysql"
    }
)

module.exports = sequelize;