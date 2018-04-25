
const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller')


const app = express()
.use(bodyParser.urlencoded({extended: true}))
.use(bodyParser.json())



.get('/api/peliculas' , ctrl.getPeliculas)

.use(function (error,req,res,next){
    console.log(error);
    res.status(error.status || 500).send('Se produjo un error')

});



module.exports = app;