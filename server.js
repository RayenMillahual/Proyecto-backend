const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const sequelize = require('./config/database');
const productoRoutes = require('./routes/productoRoutes');
require('dotenv').config();

const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors()); // Configurar CORS para permitir todas las solicitudes
app.use(morgan('dev')); // Utilizar Morgan para el registro de solicitudes HTTP

// Rutas
app.use('/api', productoRoutes);

// Sincronizar la base de datos
sequelize.sync()
  .then(() => {
    console.log('Base de datos y tablas creadas');
  }).catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
//modulo http de node
//const http = require('http');
//método de Node.js que crea un servidor HTTP.
// servidor recibe una solicitud (req)
//y debe enviar una respuesta (res).
//const server = http.createServer((req, res) => {
    //res.writeHead establece encabezados de la respuesta HTTP.
//El 1er argumento 200 es el código de estado HTTP que indica que la solicitud fue exitosa.
//El 2do argumento { 'Content-Type': 'text/html' } especifica que el tipo de contenido de la respuesta es HTML.
   // res.writeHead(200, { 'Content-Type': 'text/html' });

    // escribir el contenido de la respuesta que se enviará al cliente.
    //un encabezado de nivel 1 (<h1>) con el texto
    //"¡Hola, Servidor HTTP de Node.js!".
    //res.write('<h1>Hello, Node.js HTTP Server!</h1>');
    //completa la res HTTP y la envia de vuelta al cliente.
   // res.end();
//});
// Start the server
//server.listen(port, () => {
 //   console.log(`Node.js HTTP server is running on port ${port}`);
//});
//Le digo al servidor que empiece a escuchar las solicitudes del puerto
//si alguien hace una solicitud al servidor en ese puerto,está listo
//para responder y mostrará un mensaje en la consola