const express = require('express');
const logoutController = require('../controllers/logoutController');
const router = express.Router();

router.post('/', logoutController.destroyToken);

module.exports = router