const express = require('express');
const bodyParser = require('body-parser');
const alumnosCtrl = require('./controller');
const app = express.Router();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(function(err, req, res, next){
    console.log(error);
})

app.get('/v1/alumnos' , alumnosCtrl.getAlumnos);



module.exports = app