//FABRICA DE OBJETOS POR CLASES
class Producto {
  constructor(id, nombre, tamanio, precio, stock, imagen) {
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.tamanio = `'${tamanio}'`;
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);
    this.imagen = imagen
  }
  //METODO SUMAR IVA - APLICAR DESCUENTO - RESTARLE STOCK
  sumaIva() {
    this.precio = `$${this.precio * 1.21}`;
    console.log(`al precio se le incluyo el IVA`);
  }
  descuentoDiez() {
    this.precio = `$${this.precio * 0.9}`;
    console.log(`felicitaciones se aplicó el descuento conseguido`);
  }
  restaStock() {
    this.stock = this.stock--;
    console.log(`el stock de ${this.nombre} ha sido actualizado`);
  }
}
//INSTANCIAR O CREAR CARGA DE OBJETOS MANUAL PARA LA FABRICA
const producto0 = new Producto(0, `MINIBOX`, `SMALL`, 2500, 36,`minibox`);
const producto1 = new Producto(1, `MINIBLACK`, `MEDIUM`, 3500, 48,`miniblack`);
const producto2 = new Producto(2, `BLACKBOX`, `BIG`, 5500, 57,`blackbox`);
const producto3 = new Producto(3, `CLASSICBOX`, `BIG`, 4300, 23,`classicbox`);
const producto4 = new Producto(4, `BUBBLEBALLOON`, `BIG`, 1200, 32,`bubbleballoon`);
const producto5 = new Producto(5, `BOUQUET`, `ROSES`, 5900, 17,`bouquetroses`);
const producto6 = new Producto(6, `BOUQUET`, `ASTROMELIAS`, 4000, 12,`bouquetastromelias`);
const producto7 = new Producto(7, `CANDYBOX`, `BIG`, 0000, 30,`candybox`);
const producto8 = new Producto(8, `DRYNKBOX`, `BIG`, 0000, 9,`drynkbox1`);
//ARRAY OBJETOS CARGADOS Y PASADOS POR FABRICA
const productos = [
  producto0,
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8,
];
// console.log(productos);

//CARDS
let sectionCartas = document.getElementById("sectionCartas");
for(const e of productos){
    let carta = document.createElement("div");
    carta.className="card col-md-3";
    carta.innerHTML = `
      <div class="card" style="width: 12rem;">
        <img src="./image/${e.imagen}.jpg" class="card-img-top" alt="imagen de producto ${e.id}">
        <div class="card-body">
          <h5 class="card-title">${e.nombre}</h5>
          <p class="card-text">Precio: $ ${e.precio}</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
    `;
    sectionCartas.append(carta);
}


//ACTIVO FUNCION SUMAR IVA PARA TABLA
for(const e of productos){
  e.sumaIva();
}

btnSeleccion.addEventListener(`click`, activaSeleccion);
function activaSeleccion(){
  //LISTAR PRODUCTOS
  let listaProductos = `Lista de productos\n`;
  for (e of productos){
    listaProductos += `${e.id} - ${e.nombre} - $ ${e.precio}\n`;
  }
  //SELECCIONAR PRODUCTOS
  let seleccionProductos = parseInt(prompt(`Ingrese el NRO de su producto\n${listaProductos}`));
    if (isNaN(seleccionProductos)){
      seleccionProductos = prompt(`El NRO del producto dije`);
    }
    //BUSQUEDA DE PRODUCTOS ELEGIDO
    const eligeProductos  = productos.find(e => e.id === seleccionProductos);
    alert(`Usted selecciono el producto ${eligeProductos.nombre} por tan solo $ ${eligeProductos.precio} con iva incluido`);
  }

//TABLA
//TOMAR CONTENEDOR PARA TABLA 
let sectionTabla = document.getElementById("sectionTabla");
//CREAR TABLE Y TBODY
let tabla = document.createElement("table");
tabla.className="table table-striped";//aplicar estilo bootstrap para la tabla
let tablaBody = document.createElement("tbody");

//FOR OF RECORRE ARRAY Y DEVUELVE UNO A UNO SUS OBJETOS (+= INYECTANDO Y AGREGANDO)
//CREAR ESTRUCTURA Y CARGA DE LA TABLA
for(const e of productos){
    tablaBody.innerHTML += `
        <tr>
            <td>${e.id}</td>
            <td>${e.nombre}</td>
            <td>${e.tamanio}</td>
            <td>$ ${e.precio}</td>
        </tr>
    `;
}
tabla.append(tablaBody);
sectionTabla.append(tabla);
