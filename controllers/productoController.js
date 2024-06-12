const Producto = require('../models/producto');

// Obtener todos los productos
exports.getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

// Obtener un producto por su id
exports.getProductoById = async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await Producto.findByPk(id);
    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

// Crear un nuevo producto
exports.createProducto = async (req, res) => {
  const { nombre, precio, cantidad, categoria } = req.body;
  try {
    const nuevoProducto = await Producto.create({ nombre, precio, cantidad, categoria });
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

// Actualizar un producto por su id
exports.updateProductoById = async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, cantidad, categoria } = req.body;
  try {
    const producto = await Producto.findByPk(id);
    if (producto) {
      await producto.update({ nombre, precio, cantidad, categoria });
      res.json(producto);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

// Eliminar un producto por su id
exports.deleteProductoById = async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await Producto.findByPk(id);
    if (producto) {
      await producto.destroy();
      res.json({ message: 'Producto eliminado' });
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};

//ordenar un prod
exports.getSortedProductos = async (req, res) => {
  const { sortBy } = req.query;
  const validAttributes = ['nombre', 'precio', 'cantidad'];

  if (!validAttributes.includes(sortBy)) {
    return res.status(400).json({ error: 'El parámetro de orden no es válido' });
  }

  try {
    const productos = await Producto.findAll({
      order: [[sortBy, 'ASC']],
    });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos ordenados' });
  }
};
// Filtrar productos
exports.getFilteredProductos = async (req, res) => {
  const { minPrecio, categoria } = req.query;
  const whereClause = {};

  if (minPrecio) {
    whereClause.precio = { [Op.gte]: parseFloat(minPrecio) };
  }
  if (categoria) {
    whereClause.categoria = categoria;
  }

  try {
    const productos = await Producto.findAll({
      where: whereClause,
    });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos filtrados' });
  }
};
