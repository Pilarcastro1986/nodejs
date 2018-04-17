const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');

const app = express()
.use(bodyParser.urlencoded({extended: true}))
.use(bodyParser.json())

.get('/api/celulares' , controller.getPhones)
.get('/api/celulares/:phoneId', controller.getPhone)
.post('/api/celulares', controller.postPhone)
.delete('/api/celulares/:phoneId' , controller.deletePhone)

.use((error, req, res, next) => {
    res.status(error.status || 500).send('Se produjo un error')
})

module.exports = app;