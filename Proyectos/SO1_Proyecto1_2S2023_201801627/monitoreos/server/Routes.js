const express = require('express');
const router = express.Router();

const db = require('./Prueba');
const bd = require('./Prueba');

router.get('/ram', (req, res) => {
    db.query('SELECT ram FROM ram_modules ORDER BY ram_i DESC LIMIT 1', (err, results) => {
        if (err) {
          console.error('Error al ejecutar la consulta:', err);
          res.status(500).json({ error: 'Error al obtener los usuarios' });
          return;
        }
      
        res.json(results[0].ram);
        console.log('Resultados de la consulta:');
        console.log(results[0].ram);
    });
});

router.get('/cpu', (req, res) => {
  bd.query('SELECT cpu FROM cpu_modules ORDER BY cpu_i DESC LIMIT 1', (err, results) => {
      if (err) {
        console.error('Error al ejecutar la consulta:', err);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
        return;
      }
    
      res.json(results[0].cpu);
      console.log('Resultados de la consulta:');
      console.log(results[0].cpu);
  });
});

module.exports = router;