//Invoca al express y al router
const express = require('express');
const router = express.Router();
// Invocación del controller
const cursosController = require('../controllers/cursosController');

//Rutas:
// Obtener todos los cursos
router.get('/cursos',cursosController.getCourses)
//Obtener un unico curso
router.get('/cursos/:id',cursosController.getCoursesByID)
// Añadir curso
router.post('/cursos',cursosController.addCourse)
// actualizar curso
router.put('/cursos/:id',cursosController.updateCourse)
// Borrar curso
router.delete('/cursos/:id',cursosController.removeCourse)
// Obtener todos los estudiantes de un curso
router.get('/cursos/:id/estudiantes',cursosController.getStudentsCourse)
// Añadir estudiante a un curso
router.post('/cursos/:id/estudiantes/:estudianteId',cursosController.addStudentToCourse)
// Borrar estudiante de un curso
router.delete('/cursos/:id/estudiantes/:estudianteId',cursosController.removeStudentCourse)
