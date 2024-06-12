const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Definir las rutas para los productos
router.get('/productos', productoController.getAllProductos);
router.get('/productos/:id', productoController.getProductoById);
router.post('/productos', productoController.createProducto);
router.put('/productos/:id', productoController.updateProductoById);
router.delete('/productos/:id', productoController.deleteProductoById);

module.exports = router;

// Ruta para obtener productos ordenados
router.get('/productos/ordenados', productoController.getSortedProductos);

// Ruta para obtener productos filtrados
router.get('/productos/filtrados', productoController.getFilteredProductos);
