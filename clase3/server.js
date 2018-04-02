const http = require('http')

const port = process.env.PORT || 8080

const app = require('./app/createExpressApp.js')
	
http
.createServer(app)
.listen(port)
.on('listening', function() {
    const addr = this.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
	console.log(bind)
})
.on('error', function(error) {
	if (error.syscall !== 'listen') throw error;
        const addr = this.address() || { port };
        const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
        switch (error.code) {
        case 'EACCES':
            console.log(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.log(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
        }
})