//Declaramos articulos con una constante (ya que el precio del articulo no cambia)
const producto1 = "Alimento gatos MichiFeliz x 3 kg";
const precio1 = 600;
const producto2 = "Alimento gatos Catshus x 3 Kg";
const precio2 = 500;
const producto3 = "Alimento gatos Gatimix 9 x 9 Kg";
const precio3 = 1100;
//carrito de compras
let total = 0;
let continuarcompra = true;
function sumar(total, precio) {
  return total + precio;
}
//le mostramos al usuario un saludo cordial y le pedimos una respuesta
let seleccion = prompt(
  "Bienvenido/a a Milu Pet Shop, desea comprar algun producto ingrese si o no?"
);
//si el usuario se equivoca de respuesta le pedimos de nuevo
while (seleccion != "si" && seleccion != "no") {
  alert("Por favor ingresa si o no");
  seleccion = prompt("Si desea comprar algun producto ingrese si o no");
}

if (seleccion == "si") {
  alert("Genial! A contunuacion nuestros productos.");
}
//mostramos el listado al usuario
while (continuarcompra) {
  let userChoice = prompt(
    "Seleccione un producto: 1. " +
      producto1 +
      " - $" +
      precio1 +
      " 2. " +
      producto2 +
      " - $" +
      precio2 +
      " 3. " +
      producto3 +
      " - $" +
      precio3
  );

  if (userChoice == 1) {
    total = sumar(total, precio1);
    console.log("Tu has elegido: " + producto1 + " - $" + precio1);
  } else if (userChoice == 2) {
    total = sumar(total, precio2);
    console.log("Tu has elegido: " + producto2 + " - $" + precio2);
  } else if (userChoice == 3) {
    total = sumar(total, precio3);
    console.log("Tu has elegido: " + producto3 + " - $" + precio3);
  } else {
    alert("Invalido. Por favor, elija un número entre 1 y 3.");
  }
  console.log("Actual total: $" + total);
  let keepShopping = prompt(
    "Queres seguir comprando? Escribe 'si' o 'no'"
  ).toLowerCase();
  if (keepShopping === "no") {
    continuarcompra = false;
  }
}
alert("Total: $" + total);
alert("Gracias por comprar! vuelva prontos.");
