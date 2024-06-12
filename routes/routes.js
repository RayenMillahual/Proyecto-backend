//enrutar archivos para separar diferentes puntos finales
//API o rutas web. Esto mantiene su código modular y fácil de mantener.
const express = require('express');
const router = express.Router();
const app = express();
const controller = require('../controllers/controller');

// Definir rutas y asignarles controladores
router.get('/', controller.home);

module.exports = router;
