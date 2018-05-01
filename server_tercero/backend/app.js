
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const app = express()

.use(bodyParser.urlencoded({extended:true}))
.use(bodyParser.json())

.get('/api/juegos' , controller.getJuegos)
.post('/api/juegos', controller.postJuegos)
.get('/api/juegos/:id' , controller.getJuego)
.delete('/api/juegos/:id' , controller.deleteJuego)


.use(function (error,req,res,next){
    console.log(error);
    res.status(error.status || 500).send('Se produjo un error')

});

module.exports = app;

