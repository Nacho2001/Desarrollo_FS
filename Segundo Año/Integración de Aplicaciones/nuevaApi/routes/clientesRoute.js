const express = require('express');
const router = express.Router();
const clienteController = require('./../controllers/clientesController');

router.get('/',clienteController.getClients);
router.get('/:id',clienteController.getClientByID);
router.post('/addclient',clienteController.addClient);