const http = require('http');
const port = process.env.PORT || 3003
const app = require('./api/v1/productos/index.js');

http
.createServer(app)
.listen(port)


.on('error', function(error){
    switch (error.code) {
        case 'EACCESS':
        console.log('hay un problema de permisos')
        break;
        case 'EADDRINUSE':
        console.log('el puerto esta ocupado');
        break;
        default:
        throw error;
    }
})

