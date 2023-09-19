// Estiende la clase model ya existente en Sequelize
const {Sequelize, Model, DataTypes} = require("sequelize");
const sequelize = new Sequelize();
// La clase usuario hereda los metodos de Model
class Usuario extends Model{};

// Inicializa clase usuario
Usuario.init({ // Se definen las tablas que tendrá la base de datos y aplica restricciones en los campos
    id:{ // ID de usuario
        type: DataTypes.INTEGER, // tipo de dato nro entero (INT)
        primaryKey: true, // Será clave primaria
        autoIncrement: true // Autoincremental
    },
    nombre_usuario:{ // Nombre de usuario
        type: DataTypes.STRING, // Tipo cadena de caracteres
        allowNull:false, // No puede ser nulo
        unique:true // El valor no puede repetirse
    },
    contraseña:{ // Clave de acceso
        type:DataTypes.STRING, // Tipo cadena de caracteres
        allowNull:false, // Campo obligatorio
    },
    email:{ // email
        type:DataTypes.STRING, // Tipo cadena de caracteres
        allowNull:false, // Es obligatorio
        unique:true // El valor no puede repetirse
    }},
    {
    sequelize,
    modelName:"Usuario" // Indica el nombre del model
});

module.exports = Usuario