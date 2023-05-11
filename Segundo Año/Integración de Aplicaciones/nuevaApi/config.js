const config = require('dotenv');

config();
// En esta sección solamente se estan definiendo las credenciales, no se esta realizando l conexión aun.
// Esto hace que los datos no se muestren de forma literal, es decir que no queden expuestos
export default{
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
}