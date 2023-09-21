const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
  const data = { message: 'Estos son datos del servidor.' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Servidor Node.js en ejecución en el puerto ${port}`);
});