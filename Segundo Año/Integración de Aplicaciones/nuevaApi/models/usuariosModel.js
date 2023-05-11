// Consultas que se realizaran a la base
const db = require('../config/db');

// A la lista de usuarios que trae la db, los guarda en arreglos
obtenerUsuarios = async () => {
    const [rows,fields] = await db.execute('select * from usuarios');
    console.log(rows); // Esta linea no mostrará nada, porque al ser una función de callback, se ejecutará al final,
    // Por eso se utiliza un await, pero debe ir acompañado de un async, porque es una función asincronica
    return rows;
}