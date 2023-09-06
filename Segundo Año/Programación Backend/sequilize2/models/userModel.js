// Extiende la clase model
const {Model, DataTypes} = require('sequelize');

// La clase User hereda los metodos de Model
class User extends Model{}

User.init({
    id:{ // En esta secciondefine los datos que solicita la base. Especificamente, se aplican restrcciones
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }},
    {
        sequelize,
        modelName:'User'
    });

    module.exports = User;