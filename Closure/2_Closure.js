//                                       C L O S U R E

// 2. La función interior puede acceder al scope (contexto) de la función exterior.

// function Saludar(TextoDeSaludo) {
//    return function (nombre) {
//       console.log(TextoDeSaludo + ' ' + nombre);
//    };
// }

// var saludarEnEspañol = Saludar('HOLA');
// //       ------->      function(nombre) {console.log("HOLA" + " " + nombre)}

// var saludarEnIngles = Saludar('HELLO');
// //       ------->     function(nombre) {console.log("HELLO" + " " + nombre)}

// var saludarEnFrances = Saludar('BONJUR');
// /*       ------->      function(nombre) {console.log("BONJUR" + " " + nombre)}*/

// saludarEnEspañol('Florencia');
// saludarEnIngles('Jimena');
// saludarEnFrances('Alejo');
