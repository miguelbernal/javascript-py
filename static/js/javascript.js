// function de js
//    parametros
//     para mostrar un mensaje de texto
//alert('Hola');
console.log('Hola'); // sentencia 1
console.error('Errorrrrrr');// sentencia 2
console.warn('Warning ......'); // sentencia 3
// Manipulacion del DOM (Document Object Model) comentario
document.write('<h1>Hola</h1>'); // sentencia 4
document.getElementById('mensajes').innerHTML="<h2>Mensajes</h2>";
document.getElementById('mensajes2').innerHTML="<h3>Mensajes 2</h3>";
document.getElementById("mensajes").style.color = "yellow";
document.getElementById("mensajes").style.backgroundColor = "blue";

// variables (cambian su valor o contenido)
var nombre = "Juan"; // string
var edad = 25; // integer
var estudia = true; // boolean
var estatura = 1.75; // float, decimal
var fecha = new Date(); // date

document.write(nombre + " tiene " + edad + " y estudia " + estudia + " con una estatura de " + estatura + " en la fecha de " + fecha);
document.write("<br>");
document.write(typeof(nombre));
document.write(typeof(edad));
document.write(typeof(estudia));
document.write(typeof(estatura));
document.write(typeof(fecha));
document.write("<br>");
nombre = "Jose";
document.write(nombre + " tiene " + edad + " y estudia " + estudia + " con una estatura de " + estatura + " en la fecha de " + fecha);
document.write("<br>");
document.write(`${nombre} tiene ${edad} años y estudia ${estudia} con una estatura de ${estatura}  en la fecha de  ${fecha}`);
document.write("<br>");

// constante (no puede cambiar su contendio)
const PI = 3.1415;
document.write(PI);
document.write("<br>");
// estructura
try { // intentar
    PI = 3.14;    
} catch (error) { // capturar -> si hay un error (excepcion) lo captura
    console.error("No se puede asignar otro valor a una constante.");
    document.write("No se puede asignar otro valor a una constante.");
}
document.write("<br>");
document.write(PI);
document.write("<br>");
document.write("sentencias<br>");
document.write("sentencias<br>");
document.write("sentencias<br>");
document.write("sentencias<br>");
// vectores
//                0      1      2        -> indices
let alumnos = ["Juan","Ana","Jose"]; // -> valores -> length = 3
document.write(alumnos); 
document.write("<br>");
document.write(alumnos[1]);
document.write("<br>");
// objectos
var empleado = {
    nombre: "Juan", // atributos o variables
    apellido: "Gonzalez",
    saludar: function(){ // metodos o funciones
        return "Hola "+empleado.nombre + " " + empleado.apellido+"<br>";
    }
} 
// array de objetos
var empleados = [];
empleados.push(empleado);
empleados.push(empleado);
empleados.push(empleado);

document.write(empleado.nombre + " " + empleado.apellido);
document.write("<br>");
document.write(empleado.saludar());
document.write("<br>");
document.write(empleados);
document.write("<br>");

// Estructura de control
// if
edad = 12;
if (edad >= 18) { // si es cierto hace lo que esta entre los parentesis
    document.write("Eres mayor de edad");
} else { // si no es cierto muestra el siguiente mensaje
    document.write("Eres menor de edad");
}
document.write("<br>");
var dia = 10
// switch
switch (dia) {
    case 1:
        document.write("Domingo");
        break;
    case 2:
        document.write("Lunes");
        break;
    case 3:
        document.write("Martes");
        break;
    
    default:
        document.write("Dia erroneo");
        break;
}
document.write("<br>");
// ciclicas
// for
for (let i = 0; i < empleados.length; i++) {
    document.write(JSON.stringify(empleados[i]));
    document.write("<br>");
}
// for each
empleados.forEach(empleado => {
    document.write(JSON.stringify(empleado));
    document.write("<br>");
});

// while
var i = 0;
document.write("empleados.length = "+empleados.length);
while (i < empleados.length) {
    document.write(JSON.stringify(empleados[i]));
    document.write("<br>");
    i++;
}

// do while
i = 100;
do {
    document.write(JSON.stringify(empleados[i]));
    document.write("<br>");
    i++;
} while (i < empleados.length);
// try catch
const resultado = 100 / 0;
try {
    resultado = 1;    
} catch (error) {
    document.write('resultado es una constante<br>');
}
document.write("resultado = "+resultado);
document.write("<br>");

document.write("Continua el programa ...");
// Llamar a una api (programa del lado del servidor)
fetch('https://jsonplaceholder.typicode.com/users')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    myJson.forEach(user => {
        //document.write(JSON.stringify(user));
        document.write(user.id + " - " + user.name + " - " + user.username);
        document.write("<br>");
    });
  });