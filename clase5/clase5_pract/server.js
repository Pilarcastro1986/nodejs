const http = require('http')
const port = process.env.PORT || 3002
const app = require('./app.js')
const config  = { db: process.env.MONGODB || 'mongodb://localhost:27017/shop'}
const mongoose = require('mongoose')

mongoose.connection.openUri(config.db, (err, res) => {
    if(err) return console.log(`ERROR ${err}`)
    console.log('conexión establecida')

    http
    .createServer(app)
    .listen(port)
    .on('listening', function(req, res){
        console.log('se conecto con exito')
    })

    .on('error', function(error){
        switch (error.code){
            case 'EACSSES':
            console.log('No tiene persimos');
            break;
            case 'EADDRINUSE':
            console.log('Puerto ocupado')
            break;
            default:
            throw error;
        }
    })
 })
 




