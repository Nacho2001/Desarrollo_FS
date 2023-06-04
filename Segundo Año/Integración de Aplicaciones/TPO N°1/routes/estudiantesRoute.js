//Invoca al express y al router
const express = require('express');
const router = express.Router();
// Invocación del controller
const estudiantesController = require('../controllers/estudiantesController');

// Rutas:

// Ver todos los estudiantes de la base
router.get('/estudiantes',estudiantesController.getStudents)
// solicitar un unico estudiante (por ID)
router.get('/estudiantes/:id',estudiantesController.getStudentByID)
// Añadir estudiante
router.post('/estudiantes',estudiantesController.addStudent)
// Actualizar datos de estudiante
router.put('/estudiantes/:id',estudiantesController.updateStudent)
// Eliminar un estudiante
router.delete('/estudiantes/:id',estudiantesController.removeStudent)
// Ver cursos de un estudiante
router.get('/estudiantes/:id/cursos',estudiantesController.getCoursesOfStudent)