
const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./ctrl');

const app = express()
.use(bodyParser.urlencoded({ extended : true }))
.use(bodyParser.json())


.use(express.static('./public'))
.get('/api/v1/libros', ctrl.getBooks)
.get('/api/v1/:id', ctrl.getBook)
.delete('/api/v1/:id' , ctrl.deleteBook)
.post('/api/v1/libros' , ctrl.postBooks)

.use((error, req, res, next) => {
    res.status(error.status || 500).send('Se produjo un error')
})

module.exports =  app