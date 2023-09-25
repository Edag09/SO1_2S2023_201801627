const express = require('express');
const cors = require('cors');
const {json} = require('express');

const app = express();

app.use(cors());
app.use(json());

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});