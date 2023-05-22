// Consultas que se realizaran a la base
const db = require('../config/db');

exports.getClients = async () => {
    const [rows,fields] = await db.execute('select * from clientes');
    return rows;
}

exports.getClientByID = async (id) => {
    const [rows, fields] = await db.execute('select * from clientes where id = ?', [id])
    return rows;
}

exports.addClient = async (client) => {
    const [rows, fields] = await db.execute('insert into clientes(nombre, cantidad, categoria, precio, marca, código) values ?', [client])
    return rows;
}