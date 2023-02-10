//declaramos contantes en objetos dentro de un array
const productos = [
  { Nombre: "alimento gato", precio: 200 },
  { Nombre: "alimento Perro", precio: 400 },
  { Nombre: "piedritas", precio: 500 },
  { Nombre: "juguete", precio: 300 },
];
//constante para definir el nombre de el usuario
const nombreUsuario = prompt("Bienvenido, por favor ingresa tu nombre.");
//creamos una variable carrito para acumular los productos
let carrito = [];
//una variable de las elecciones del usuario
let seleccion = prompt(
  "Hola" + " " + nombreUsuario + ", " + "desea comprar algun articulo si o no?"
);

//bucle de seleccion
while (seleccion != "si" && seleccion != "no") {
  alert("Error, por favor ingresa si o no");
  seleccion = prompt("Hola desea comprar algun articulo si o no?");
}

if (seleccion == "si") {
  alert("Genial!, a continuacion nuestra lista de productos.");
  let todoslosProductos = productos.map(
    (productos) => productos.Nombre + " " + productos.precio + "$"
  );
  alert(todoslosProductos.join(" - "));
} else if (seleccion == "no") {
  alert("Gracias por visitarnos, hasta pronto!");
}
//si el usuario sigue la compra, se suman los articulos al carrito
while (seleccion != "no") {
  let productos = prompt("Agrega un producto a tu carrito");
  let precio = 0;

  if (
    productos == "alimento gato" ||
    productos == "alimento perro" ||
    productos == "piedritas" ||
    productos == "juguete"
  ) {
    switch (productos) {
      case "alimento gato":
        precio = 200;
        break;
      case "alimento perro":
        precio = 400;
        break;
      case "piedritas":
        precio = 500;
        break;
      case "juguete":
        precio = 300;
        break;
      default:
        break;
    }
    let unidades = parseInt(prompt("Cuantas unidades desea llevar"));
    carrito.push({ productos, unidades, precio });
    console.log(carrito);
  } else {
    alert("no tenemos ese producto");
  }

  seleccion = prompt("Desea seguir comprando, ingrese si o no?");
  //si el usuario desea terminar su compra lo despedimos y mostramos el total por consola.
  while (seleccion == "no") {
    alert("Gracias por su compra, vuelva prontos!");
    carrito.forEach((carritoFinal) => {
      console.log(
        `producto: ${carritoFinal.productos}, 
        unidades: ${carritoFinal.unidades}, 
        Total a pagar por Producto ${
          carritoFinal.unidades * carritoFinal.precio
        }`
      );
    });
    break;
  }
}
// mostramos total y saludamos cordialmente.
const total = carrito.reduce((ecc, el) => ecc + el.precio * el.unidades, 0);
console.log(
  `Gracias` +
    " " +
    nombreUsuario +
    " " +
    `por comprar.. El total a pagar es: ${total}`
);
