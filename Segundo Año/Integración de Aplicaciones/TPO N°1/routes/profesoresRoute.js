//Invoca al express y al router
const express = require('express');
const router = express.Router();
// Invocación del controller
const profesoresController = require('../controllers/profesoresController');

// Rutas:

// Ver todos los profesores de la base
router.get('/profesores',profesoresController.getProfessors)
// solicitar un unico profesor (por ID)
router.get('/profesores/:id',profesoresController.getProfessorByID)
// Añadir profesor
router.post('/profesores',profesoresController.addProfessor)
// Actualizar datos de un profesor
router.put('/profesores/:id',profesoresController.updateProfessor)
// Eliminar profesor
router.delete('/profesores/:id',profesoresController.removeProfessor)