
const express = require('./app.js');


function getProducts(req, res){
    res.write('hola mundooo');
    res.end();
}

module.exports = {getProducts}