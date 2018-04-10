
const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./ctrl');



const app = express()
.use(bodyParser.urlencoded({ extended : true }))
.use(bodyParser.json())


.use(express.static('./public'))
.get('/api/v1/libros', ctrl.getBooks)
.post('/api/v1/libros' , ctrl.postBooks)
.delete('/api/v1/:id' , ctrl.deleteBook)

 





module.exports =  app