const express = require('express');
const router = express.Router();
const productosController = require('./../controllers/productosController');

router.get('/', productosController.getProducts);
router.get('/:id',productosController.getProductById);
router.post('/adduser', productosController.addProduct);
module.exports = router;