const http = require('http');
const express = require('express');
const app = require('./app.js');
const port = process.env.PORT  || 8080

http
.createServer(app)
.listen(port)

.on('listening' , function(){
    const addr = this.address();
    console.log(addr);
    const kok = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(kok);
})


.on('error' , function(error){
    switch (error.code) {
        case 'EACCES':
            console.log('No tenes permisos');
            break;
        case 'EADDRIUNSE':
            console.log('puerto ocupado');
            break;
        default:
            throw error;
    }
})
