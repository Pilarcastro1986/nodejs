const express = require('express');
const bodyParser = require('body-parser');
const app = express.Router();
const ctrlProducts = require('./controller/controllerProducts');


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use((req, res, next) => {
    req.educacionit = "Carlos"
    return next()
})
app.get('api/v1/productos' , ctrlProducts.getProducts);
app.post('api/v1/productos' , ctrlProducts.postProducts);


module.exports = app;