
/*Escribir una función que reciba N argumentos. Iterando sobre los argumentos, Si solo si el 
tipo de dato del argumento es ¨function¨ almacenar dicho argumento dentro de un array 
(declarado dentro del cuerpo de la function). 
Iterar finalmente sobre el array declarado, ejecutando cada una de las funciones, 
teniendo en cuenta posibles errores en las funciones almacenadas.

var a = function(){
    var b = [];
    for(var i = 0 ; i < arguments.length ; i++){
        if(typeof arguments[i] == 'number'){
            b.push(arguments[i]);
        }
    console.log('b', b);
    }
}
a('Pilar', 54 , 30, 87, function(){})*/
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

//parte que usa la fn ppal.
ejercicio1('Pilar', 54 , 30, 87 , function(){console.log('HOLA')}); //no tengo que ejecutar esa funcion


// como separar un archivo en node.

palabra requiere---es una funcion que ya esta creada.


