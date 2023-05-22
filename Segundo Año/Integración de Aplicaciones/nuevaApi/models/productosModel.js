// Consultas que se realizaran a la base
const db = require('../config/db');

exports.getProducts() = async () => {
    const [rows,fields] = await db.execute('select * from productos');
    return rows;
}

exports.getProductByID() = async (id) => {
    const [rows, fields] = await db.execute('select * from productos where id = ?', [id])
    return rows;
}

exports.addProduct() = async (product) => {
    const [rows, fields] = await db.execute('insert into productos(nombre, cantidad, categoria, precio, marca, código) values ?', [product])
    return rows;
}