class DispositivosEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        return this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        return this._marca = marca;
    }
}
class Raton extends DispositivosEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return  `Raton: [ ID: ${this._idRaton}, TipoEntrada: ${this.tipoEntrada}, Marca: ${this.marca}]`;
    }
}
class Teclado extends DispositivosEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [ ID: ${this._idTeclado}, TipoEntrada: ${this.tipoEntrada}, Marca: ${this._marca}]`;
    }
}
class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Monitor: [ ID: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}]`;
    }
}
class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n  ${this._monitor} \n  ${this._teclado} \n  ${this._raton}`;
    }
}
class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadora = [];
    }
    get idOrden(){
        return this._idOrden;
    }  
    agregarComputadura(computadora){
        this._computadora.push(computadora); 
    }
    mostrarOrden(){
        let computadoraOrden = "";
        for(let computadora of this._computadora){
            computadoraOrden += `\n ${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadoraOrden}`)
    }
    toString(){
        return 
    }
}
//Objetos de la clase raton
let raton1 = new Raton("USB", "MSI");
console.log(raton1.toString());
let raton2 = new Raton("BlooTooth", "Ziyou Lang");
console.log(`${raton2}`);
//Objetos de la clase teclado
let teclado1 = new Teclado("BlooTooth", "HP");
console.log(teclado1.toString());
let teclado2 = new Teclado("USB", "GameFactor");
console.log(`${teclado2}`);
//Objetos de la clase monitor
let monitor1 = new Monitor("Gateway", "22");
console.log(monitor1.toString());
let monitor2 = new Monitor("MSI", "28");
console.log(`${monitor2}`);
//objetos de la clase computadora
let computador1 = new Computadora("Acer", monitor1, teclado1, raton1);
console.log(computador1.toString());
let computador2 = new Computadora("Dell", monitor2, teclado2, raton2);
console.log(`${computador2}`);
//Objetos de la clase orden
let orden1 = new Orden();
orden1.agregarComputadura(computador1);
orden1.agregarComputadura(computador2);
orden1.mostrarOrden(orden1);

let orden2 = new Orden();
orden2.agregarComputadura(computador2);
orden2.agregarComputadura(computador1);
orden2.mostrarOrden(orden2);