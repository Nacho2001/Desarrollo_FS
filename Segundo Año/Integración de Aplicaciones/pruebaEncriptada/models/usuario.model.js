const db = require('../config/db');

exports.obtenerUsers = async () => {
    const query = 'select * from usuarios';
    const [rows,fields] = await db.execute(query);
    return rows;
}

exports.createUser = async (datos) => {
    const [rows,fields] = await db.execute('insert into usuarios (username, password, email, rol) values ?', [datos.username, datos.password, user.email, user.rol]);
    return rows;
}