const express = require('express');
const bodyParser = require('body-parser');
const app = express.Router();
const ctrl = require('./controller.js');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function(err,req,res,next){
    console.log(error.message);
})

app.get('/v1/productos' , ctrl.getProducts);

module.exports = app;


