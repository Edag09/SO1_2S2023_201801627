const mysql = require('mysql2');

module.exports = connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 33064,
    password: "090799",
    database: "modules"
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos.');
});