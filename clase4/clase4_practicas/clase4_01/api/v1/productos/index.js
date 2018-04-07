const express = require('express');
const bodyParser = require('body-parser');
const ctrlProducts = require('./controller/controllerProducts');

const app = express()
.use(bodyParser.urlencoded({extended: true}))
.use(bodyParser.json())
.use((req, res, next) => {
    debugger
    req.educacionit = "Carlos"
    return next()
})
.get('api/v1/productos' , ctrlProducts.getProducts)
.post('api/v1/productos' , ctrlProducts.postProducts)


module.exports = app;