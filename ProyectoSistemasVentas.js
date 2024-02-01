//Clase padre
class Producto{
    //Metodo estatico
    static contadorProducto = 0;
    //Constructor
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        return this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        return this.precio = precio;
    }
    toString(){
        return `idProducto: ${this.idProducto}, nombre: ${this._nombre}, precio: ${this.precio}`;
    }
}
//Clase hija
class Orden{
    //metodo estatico
    static contadorOrdenes = 0;
    //Proudctos maximos
    static get MaxOrden(){
        return 5;
    }
    //Constructor
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados=0; 
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProductos(producto){
        if(this._productos.length < Orden.MaxOrden ){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++]= productos;
        }else{
            console.log("Maximo de ordenes permitidas");
        }
    }
    calcularTotal(){
        let totalventa = 0;
        for(let producto of this._productos){
            totalventa += producto.precio; //totalVenta = totalVenta + producto.precio
        }
        return totalventa;
    }
    mostrarOrden(){
        let productoOrden = "";
        for(let productos of this._productos){
            productoOrden += '\n' + productos.toString() + "} ";
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productoOrden}`);
    }
}

let producto1 = new Producto("Pantalon", 200);
let producto2 = new Producto("Camisa", 100);

let orden1 = new Orden();
orden1.agregarProductos(producto1);
orden1.agregarProductos(producto2);

orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto("Cinturon", 50)
orden2.agregarProductos(producto3);
orden2.agregarProductos(producto1);
orden2.agregarProductos(producto2);

orden2.mostrarOrden();
