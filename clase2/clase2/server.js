//PARTE 2

const http = require('http');
const app = require('./app.js')


http
.createServer(app) // el app es mi funcion
.listen(8080)
.on('listening' , function(){ // se ejecuta cuando termino todo elproceso de la cola.
	console.log('El servidor esta andando y ya finalizo')
})
.on('error', function(){ // c
	console.log('Ocurrio un error')
})



/*

/*----------------------------------------------------------------------------------------------------------*


//PARTE 1
// este archivo es el servidor, es el ppal. desde aqui inicializa la app asique lo cambio en el package json (node server.js)
// Tiene que estar en la raiz.

//si cuando hago un requiere no le pongo entre parentesis el ./ le estoy diciendo que vaya a buscar esa libreria a node
const http = require('http');

const app = http.createServer(function(req, res){ // como el  create server tarda en ejecutarse se pone un callback. req request res response.
	//req es el requerimiento, valor de entrada : todos los datos del alumno. y res es la respuesta : "el alumno se inscribio"
	//if(req.url == /alumno)
	res.write("Hello World"); // como respuesta escribi heelo eorld y terminalo 
	res.end();
})

app.listen(8080) // le indico el puerto

// loopevent -- pedo aprovechar al maximo el cp
// truco con console.log(Object.keys(http)) puedo ver todas las propiedades que tiene el http o cualquier otra cosa


*/