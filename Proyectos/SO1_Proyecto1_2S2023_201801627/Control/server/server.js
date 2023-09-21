const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hola, este es tu servidor Node.js');
});

app.listen(port, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${port}`);
});