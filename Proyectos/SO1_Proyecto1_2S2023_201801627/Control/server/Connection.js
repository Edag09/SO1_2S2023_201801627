const mysql = require('mysql2');

module.exports = connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 33066,
    password: "090799",
    database: "modules"
});