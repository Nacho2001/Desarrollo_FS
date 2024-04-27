// Importacion librerias
const express = require('express');
const app = express();
const cors = require('cors');

// Datos de acceso a la base
const sequelize = require('./config/db');

// Obtieneel archivo de rutas
const routes = require('./routes/routes');

// Autenticación en la base
sequelize.authenticate()
.then(() => {
    console.log("Conexion con la base exitosa")
})
.catch((error) => {
    console.log(`Error al conectar con la base: ${error}`)
})

// Llamado a los middlewares
app.use(express.json());
app.use(cors());

// Configuración de los endpoints
app.use('/users', routes)

// Define el puerto de la api
const PORT = 3579
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})