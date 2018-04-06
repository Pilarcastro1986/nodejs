//1er forma
const miFuncion = function(){
    var a = 23; // vive solo dentro de la funcion
    console.log('Hola');
}
miFuncion();

//2da - puedo llamarla desde cualquier lado. no necesariamente al final.
otraFuncion()
function otraFuncion(){
    console.log('Chau');
}

/*creacion objeto -  min 29
var nombreAlumno = "Pilar";
var dni = 23;
var codigo = 2;
var nombreCurso = 'PHP';
*/

const alumno1 = {
    nombre: 'Pilar',
    dni : '23',
}

console.log(alumno1.nombre);

const curso = {
    codigo: 2,
    nombre:"php"
}

//funciones anonimas - min 32

var a = (function(){
    var alumno
    console.log('fn anonima');
    return 45
}());

const alumno = {
    inscribir : function(mensaje){ //el valor de mensaje viene de afuera
        console.log(mensaje);
        console.log(arguments);
    }
}
alumno.inscribir("este es un mensaje");

const alumno2 = {
    inscribir : function(arguments){ //el valor de mensaje viene de afuera
        console.log(arguments[0]);
    }
}
alumno2.inscribir("este es un mensaje" , 23 , true);

const c = "hola";
c.charAt(2);
console.log(c);

const alumno3 = {
    nombre: 'Onje',
    dni : '23',
}

console.log(alumno3["nombre"]);

const w ="nombre";
console.log(alumno3[w]);

// fecha min 1.06

const d = new Date();
console.log(d);


// arrays
const r = [12,34,56,64];
console.log(r[2]);

//clouseres 1:11
const f = function(){
    var a = "hola";
    var g = function(){
        console.log(a);
    }
    return g
}
var t = f;
t()
/*console.log(2+4);
{
    var miVariable = 5;
}

console.log(miVariable);

{
   let otraVariable = 34;
}

console.log(otraVariable);
const otraVariableMas = 45; */
