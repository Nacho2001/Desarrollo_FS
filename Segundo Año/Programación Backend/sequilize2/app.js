const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const sequelize = require('./config/db');

const userRoutes = require('./routes/userRoute');

const cors = require('cors');
//Configuracion de la base de datos
sequelize.authenticate()
.then(() => {
    console.log("Conexion exitosa con la DB!!")
})
.catch((error) => {
    console.error(`Error al conectar con la DB: ${error}`)
});

// llamado a los middlewares
app.use(cors());
app.use(morgan());

app.use(express.json());
app.use(cors());
// Configuracion de rutas
app.use('/api', userRoutes);


// Inicio en puerto determinado
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})