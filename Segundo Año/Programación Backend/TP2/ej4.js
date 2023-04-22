class Producto{
    constructor(nombre, marca, codigo, precio){
        this.nombre = nombre,
        this.marca = marca,
        this.codigo = codigo,
        this.precio = precio
    }
    crearProducto(){
        let producto = { nombre: this.nombre, marca: this.marca, codigo: this.codigo, precio: this.precio }
        return producto;
    }
}

class Carrito{
    constructor(numero_compra, cliente, caja){
        this.numero_compra = numero_compra,
        this.cliente = cliente,
        this.caja = caja,
        this.fecha = new Date();
    }
    listaProductos = [];
    añadirElemento(producto){
        this.listaProductos.push(producto)
        console.log("Producto añadido al carrito")
    }
    calculaPrecio(){
        let precioFinal = 0
        this.listaProductos.forEach(item => {
            precioFinal= precioFinal+item.precio
        });
        console.log("El costo total es de : $"+precioFinal)
    }
    recorreCarrito(){
        console.log("Cliente: "+this.cliente+", Número de compra: "+this.numero_compra+", Caja: "+this.caja)
        console.log("Resumen: ")
        
        this.listaProductos.forEach(item => {
            console.log(item.nombre+", "+"$"+item.precio)
        });
    }
}

jamon = new Producto("Jamon cocido", "Luz azul", 5574, 750).crearProducto();
queso = new Producto("Queso", "La paulina", 8231, 800).crearProducto();
tapas_empanadas = new Producto("Tapas de empanadas", "La salteña", 2937, 400).crearProducto();
compra = new Carrito(5000, "Marta", 7)
compra.añadirElemento(jamon);
compra.añadirElemento(queso);
compra.añadirElemento(tapas_empanadas);
compra.recorreCarrito();
compra.calculaPrecio();