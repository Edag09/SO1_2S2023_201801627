const express = require('express');
const db_conection = require('./Connection.js');
const router = express.Router();

router.get('/ram', (req, res) => {
    const query = "SELECT ram FROM ram_modules ORDER BY ram_i DESC LIMIT 1";
    try{
        db_conection.execute(query, (err, result) => {
            if(err){
                console.log(err);
                res.status(400).json({"message": "Error en la consulta"});
            }else{
                res.status(200).send({"message": "Consulta exitosa", "data": JSON.parse(result[0].content)});
            }
        });
    }catch(e){
        console.log(e);
        res.status(400).json({"message": "Failed Connection"});
    }
});

router.get('/cpu', (req, res) => {
    const query = "SELECT ram FROM cpu_modules ORDER BY cpu_i DESC LIMIT 1";
    try{
        db_conection.execute(query, (err, result) => {
            if(err){
                console.log(err);
                res.status(400).json({"message": "Error en la consulta"});
            }else{
                res.status(200).send({"message": "Consulta exitosa", "data": JSON.parse(result[0].content)});
            }
        });
    }catch(e){
        console.log(e);
        res.status(400).json({"message": "Failed Connection"});
    }
});