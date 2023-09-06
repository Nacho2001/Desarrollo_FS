const  {Sequelize} = require('sequelize');

// Crea una instacia de sequelize con la base de datos
const sequelize = new Sequelize(
    'database_name',
    'username',
    'password',
    {
        host:'localhost',
        dialect:'mysql'
    })

    module.exports = sequelize;