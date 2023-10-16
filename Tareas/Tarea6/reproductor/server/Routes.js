const express = require('express');
const router = express.Router();

const db = require('./Connection');

router.get('/', (req, res) => {
    // Usar ZRANGE para obtener álbumes desde Redis
    db.ZRANGE('morat', '0', '-1', (error, data) => {
        if (error) {
            console.error('Error al consultar álbumes en Redis:', error);
            res.status(500).send('Error al obtener los álbumes');
            return;
        }

        const albums = data.map((album) => JSON.parse(album));
        res.json(albums);
    });
});
module.exports = router;