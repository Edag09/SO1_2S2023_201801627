const express = require('express');
const router = express.Router();

const db = require('./Connection');
const bd = require('./Connection');

router.get('/ram', (req, res) => {
    db.query('SELECT ram FROM ram_modules ORDER BY ram_i DESC LIMIT 1', (err, results) => {
        if (err) {
          console.error('Error al ejecutar la consulta:', err);
          res.status(400).send({"message": "Failed connection"});
        }
        
        console.log('Resultados de la consulta:');
        res.json(JSON.parse(results[0].ram))
        console.log(JSON.parse(results[0].ram))
    });
});

router.get('/cpu', (req, res) => {
    bd.query('SELECT cpu FROM cpu_modules ORDER BY cpu_i DESC LIMIT 1', (err, results) => {
         if (err) {
          console.error('Error al ejecutar la consulta:', err);
          res.status(400).send({"message": "Failed connection"});
        }
        console.log('Resultados de la consulta:');
        res.json(JSON.parse(results[0].cpu))
        console.log(JSON.parse(results[0].cpu))
    });
  });


module.exports = router;