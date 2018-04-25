const http = require('http');
const port = process.env.PORT || 3002;
const mongoose = require('mongoose');
const config = {db: process.env.MONGODB || 'mongodb://localhost:27017/peliculas' }
const app = require('./app');


mongoose.connection.openUri(config.db, (err , res) => {
    if(err) return console.log(`Se produjooo un error ${err}`)
        console.log('Conexion exitosa');
    

    http
    .createServer(app)
    .listen(port)
    .on('error', function(error){
        switch (error.code) {
            case 'EADDRINUSE':
            console.log('Este puerto esta ocupado');
            break;
            case 'EACCES':
            console.log('No tiene persimos, o hay un conflicto con ellos');
            break;
            default:
            throw error;
         }
    })
})




// mongoose.connection.openUri(config.db, (err, res) => {
//     if(err) return console.log(`ERROR ${err}`)
//     console.log('conexión establecida')
//     http
//     .createServer(app)
//     .listen(port)
//     .on('error', function(error){
//         switch (error.code) {
//             case 'EADDRINUSE':
//             console.log('el puerto esta en uso')
//             break;
//             case 'EACCES':
//             console.log('Ha ocurrido un error de permisos')
//             break;
//             default:
//             throw error;
//         }
//     })
// })