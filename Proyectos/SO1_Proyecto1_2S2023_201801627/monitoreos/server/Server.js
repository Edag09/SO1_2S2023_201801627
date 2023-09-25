const express = require('express');
const cors = require('cors'); // Importa la librería cors
const app = express();
const PORT = process.env.PORT || 4000;

// Importa la configuración de la conexión a la base de datos
const db = require('./Prueba');

// Importa las rutas
const routes = require('./Routes');

app.use(express.json());

// Agrega la configuración de CORS antes de tus rutas
app.use(cors());

// Configura las rutas
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Servidor Node.js en ejecución en el puerto ${PORT}`);
});
