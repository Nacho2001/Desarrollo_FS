const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Usuario = new Schema({
    nombreUsuario: { type: String },
    contrasenia: { type: String },
    email: { type: String },
    rol: { type: String },
    activo: { type: Boolean, default: 1 }
})

