const express = require('express');
const bodyparser = require('body-parser'); // es una libreria de express
const expressWinston = require('express-winston');

const app = express()
.use(expressWinston.logger({ // con los use voy configurando los plugins
})) 

.use(bodyparser.urlencoded({extended : true})) // parea las url
.use(bodyparser.json())
.use('/alumnos' , function(req,res){})
.get('/alumnos' , function(req,res){
    console.log('ejecuto un insert')
})
.post('/alumnos' , function(req,res){
    console.log('ejecuto un ')
})

.put('/alumnos/:id' , function(req,res){
    console.log('ejecuto un insert')
});
// empiezan mis plugins



module.exports =  