//declaramos contantes en objetos dentro de un array
const productos = [
  { Nombre: "Alimento de gato", precio: 200 },
  { Nombre: "Alimento de Perro", precio: 400 },
  { Nombre: "Piedritas", precio: 500 },
  { Nombre: "juguete", precio: 300 },
];
//creamos una variable carrito para acumular los productos
let carrito = [];
//una variable para que el usuario elija el articulo
let seleccion = prompt("Hola desea comprar algun articulo si o no?");

while (seleccion != "si" && seleccion != "no") {
  alert("Error, por favor ingresa si o no");
  seleccion = prompt("Hola  desea comprar algun articulo si o no?");
}
