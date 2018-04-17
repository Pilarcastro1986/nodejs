
const Products = require('../models/productModel')

// ============================================== GET =======================================================
function getProducts(req, res){
    console.log('test');
    res.send('Hola Mundo');
}


// ============================================== POST =======================================================
function postProducts(req, res, next){}

module.exports = { getProducts , postProducts}