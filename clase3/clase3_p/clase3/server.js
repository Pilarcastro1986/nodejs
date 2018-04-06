const http = require('http');
const port = process.env.PORT || '8080' // process viene con node y representa a windows.
const createExpressApp = require('./app/createExpressApp.js');
const app = createExpressApp()

http
.createServer(app)
.listen(port)