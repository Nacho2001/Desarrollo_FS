// Consultas que se realizaran a la base
const db = require('../config/db');

// A la lista de usuarios que trae la db, los guarda en arreglos
/*
exports.obtenerUsuarios = async () => {
    const [rows,fields] = await db.execute('select * from usuarios');
    console.log(rows); // Esta linea no mostrará nada, porque al ser una función de callback, se ejecutará al final,
    // Por eso se utiliza un await, pero debe ir acompañado de un async, porque es una función asincronica
    return rows;
}*/

// Obtiene datos del usuario por ID 
exports.getUserById = async (id) => {
    const [rows, fields] = await db.execute('select * from usuarios where id = ?', [id]);
    console.log(rows)
    return rows;
}

