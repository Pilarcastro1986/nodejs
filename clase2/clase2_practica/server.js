const http = require('http');
const app = require('./app.js')

console.log(Object.keys(http));


http
.createServer(app) 
.listen(8080);


