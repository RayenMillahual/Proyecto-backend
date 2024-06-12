// sirve como punto de entrada para tu aplicación.
const express = require('express');
const app = express();
const port = 3000;

// Middleware para analizar cuerpos de solicitudes JSON
app.use(express.json());

// Importar rutas
const routes = require('./controllers/routes/routes');
app.use('/', routes);

app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
