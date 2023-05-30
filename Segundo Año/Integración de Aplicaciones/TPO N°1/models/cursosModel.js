// Invoca al archivo db con los datos de logueo
const db = require('../config/db');

// Archivo con consultas a realizar en "cursos"

// Obtener todos los cursos
exports.getCourse() = async () => {
    const [rows,fields] = await db.execute("select * from cursos");
    return rows;
}

// Obtener curso por id
exports.getCourseByID() = async (id) => {
    const [rows, fields] = await db.execute("select * from cursos where id = ?", [id]);
    return rows;
}

// Añadir curso
exports.addCourse() = async (course) => {
    const [rows,fields] = await db.execute(`insert into cursos(nombre, descripcion) values = ("${course.nombre}","${course.descripcion}")`)
    return rows;
}

// Eliminar curso específico
exports.removeCourse() = async (id) => {
    const [rows,fields] = await db.execute("delete * from cursos where id = ?", [id]);
    return rows;
}

// Editar curso
exports.updateCourse() = async(course) => {
    const [rows, fields] = await db.execute("update cursos set nombre = ?, descripcion = ? where id = ?", [course.nombre,course.descripcion,course.id]);
    return rows;
}