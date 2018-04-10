const http = require('http')
const port = process.env.PORT || 8080;
const configRoute = require('./configRoute.js')

const server = http
.createServer(configRoute)
.listen(port)

const io = require('socket.io')(server)
io.on('connection', socket => {
   console.log('user connected')
   console.log(Object.keys(io));
   console.log(Object.keys(socket));
   socket.on('chat message', message => {
       io.emit('chat message', message)
   })
   socket.on('disconnect', () => {
      console.log('user disconnected')
   })
})


.on('error', function(error){
    switch (error.code){
        case 'EACCES':
        console.log('error de permisos')
        break;
        case 'EADDRINUSE':
        console.log('puerto ocupado');
        break;
        default:
        throw error
    }

})