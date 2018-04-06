// el conjunto de todos mis endponts
const express = require('express'); // lo pongo aca y no en server porque quiero que server sea solo para el servidor, cosa de no volver a tocarlo.

module.exports = express()
.use('/api/alumnos', function(req, res){ 
	res.write("Hello World"); 
	res.end();
})
.use('/api/alumnoId', function(req, res){ 
	res.write("Hello Mundo"); 
	res.end();
})
