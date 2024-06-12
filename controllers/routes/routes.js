// routes/index.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

// Definir rutas y asignarles controladores
router.get('/', controller.home);

module.exports = router;
