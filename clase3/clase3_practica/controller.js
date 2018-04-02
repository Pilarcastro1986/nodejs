
const app = require('./app.js')

function getAlumnos(req, res){
    res.write('Hola mundo');
    res.end();
}

module.exports = {getAlumnos}