// importa la libreria express
const express = require('express');

const port = process.env.PORT || 3000

// crea el objeto app
const app = express();

// la app responde con Hello world
// a todas las peticiones GET a /
app.get('/', (req, res) => {
  res.send('Hello world');
});

// el server escucha en el puerto 3000
app.listen(port);

