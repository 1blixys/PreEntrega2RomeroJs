const bebidas = [
  { id: 1, name: "Coca", price: 1000 },
  { id: 2, name: "Sprite", price: 900 },
  { id: 3, name: "Fanta", price: 850 },
  { id: 4, name: "Pepsi", price: 950 },
  { id: 5, name: "Aquarius", price: 800 },
  { id: 6, name: "Agua", price: 750 },
];

function stringBebidas(arregloBebidas) {
  let stringBebidas = "";
  arregloBebidas.forEach((item) => {
    stringBebidas +=`${item.id} - ${item.name} $${item.price}\n`;
  });
  return stringBebidas;
}

function elegirBebida() {
  let opcion;
  let bebidaElegida;
  do {
    opcion = parseInt(
      prompt("Elija la bebida que desea comprar:\n" + stringBebidas(bebidas))
    );
    bebidaElegida = bebidas.find((bebida) => bebida.id === opcion);
    if (bebidaElegida === undefined)
      alert("Bebida invalida. Intente nuevamente.");
  } while (bebidaElegida === undefined);
  alert(
    `Compro una ${bebidaElegida.name} por $${bebidaElegida.price}. ¡Gracias por su compra!`
  );
}

function mostrarBebidas(arregloBebidas) {
  alert(stringBebidas(arregloBebidas));
}

function buscarBebida() {
  let nombre = prompt("Ingrese el nombre de la bebida que desea comprar:");
  let bebidaEncontrada = bebidas.find((bebida) => bebida.name.toLowerCase() == nombre.toLowerCase());
  if (bebidaEncontrada) {
    alert(`Se encontro la bebida ${nombre} en el catálogo.`);
  } else {
    alert(`La bebida ${nombre} no se encontró en el catálogo.`);
  }
}

function buscarPorPrecio() {
  let precioMaximo = parseInt(
    prompt("Ingrese el precio máximo para el filtrado")
  );

  let bebidasFiltradas = bebidas.filter(
    (bebida) => bebida.price <= precioMaximo
  );

  mostrarBebidas(bebidasFiltradas)
}

function main(){
  let continuar = true
  do{
    let opcion = prompt("Menu Principal\n1.Mostrar Bebidas\n2.Elija la bebida que desea comprar\n3.Buscar bebida en el catalogo\n4.Buscar bebida por precio maximo\n\n0.Salir");
    switch(opcion){
      case "1":
        mostrarBebidas(bebidas);
        break;
      case "2":
        elegirBebida();
        break;
      case "3":
        buscarBebida();
        break;
      case "4":
        buscarPorPrecio();
        break;
      default:
        continuar = false;
        break;
    }
    
  }while(continuar)
}

main()






















