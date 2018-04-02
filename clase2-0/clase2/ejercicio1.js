//funcion ppal
 function ejercicio1(){
 	debugger
 	const array = [];
	const keys = Object.keys(arguments) // el object.keys es un metodo que recorre el objeto argumento y me devuelve un array con los titulos de cada argumento ["0", "1", "2", "3"]
	for(let i = 0; i < keys.length ; i++){ // recorro el array que me creo y que guarde en keys.
		if(typeof arguments[i] == 'function'){ //si es de tipo funcion
			array.push(arguments[i]); // que lo pushe dentro de mi array vacio llamado array.
		}
	for (let i = 0; i < array.length ; i++) { // recorro ese array para que vaya ejecutando las funciones que encuentre
			array[i](); // ejecuta la funcion que encuentres
		}
	}
}


// tengo que decirle que haga publico este archivo para que otros puedan acceder
module.exports = ejercicio1;
//modulo es una parte de mi sistema. 
// Es un objeto de node que representa al modulo que ES este archivo. Luego del = pongo el nombre de la variable que quieo hacer publica
