const http = require('http');
const port = process.env.PORT || 3002
const app = require('./app')
const mongoose = require('mongoose')
const config  = { db: process.env.MONGODB || 'mongodb://localhost:27017/phones'}


mongoose.connection.openUri(config.db, (err, res) => {
    if(err) return console.log(`ERROR ${err}`)
    console.log('conexión establecida')
    http
    .createServer(app)
    .listen(port)
    .on('listening', function(){
        console.log('se conenecto con exito')
    })
    .on('error', function(error){
        switch (error.code) {
            case 'EADDRINUSE':
            console.log('el puerto esta en uso')
            break;
            case 'EACCES':
            console.log('Ha ocurrido un error de permisos')
            break;
            default:
            throw error;
        }
    })
})

