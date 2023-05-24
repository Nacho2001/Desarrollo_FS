const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize ('tienda','root','', {
    host:'localhost',
    dialect:'mysql'
})

/* Modelos */
/* usar models.js */
// Las definiciones generalmente se hacen en mayuscula

const Cliente2 = sequelize.define('Cliente2', {
    nombre:{
        type: DataTypes.STRING,
        allowNull:false
    },
    apellido:{
        type: DataTypes.STRING,
        allowNull: false
    },
    edad:{
        type: DataTypes.INTEGER
    },
    activo:{
        type:DataTypes.BOOLEAN,
        defaultValue: true
    },
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    dni:{
        type:DataTypes.INTEGER,
        unique:true,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:true
    }
});

// Sincronizar el modelo con la base de datos
(async () => {
    try {
        await sequelize.sync({alter:true});
        console.log("Modelo sincronizado correctamente con la base de datos");
    } catch (error) {
        console.log("Error al sincronizar el modelo: ", error)
    }
})();
// No posee el await porque se utilizó directamente, no se lo llamó desde otro lado
const newCliente = Cliente2.create({
    nombre:'Nacho',
    apellido:'Migoni',
    edad:22,
    activo:true,
    dni:43285976,
    email:'nachomigoni@gmail.com'
});
/* Fin modelo */
(async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexion a la base de datos exitosa")
    } catch (error) {
        console.error("Error al conectar a la base de datos", error)
    }
})();