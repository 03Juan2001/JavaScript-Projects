//Clase padre
class Personas{
    //Metodo estatico
    static contadorPersonas = 0;
    //Constructor de la clase padre
    constructor(nombre, apellido, edad){
        this._idPersona = ++ Personas.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona(){
        return this._idPersona;
    }1
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        return this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        return this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        return this._edad = edad;
    }
    toString(){
        return `${super.toString()} ${this.idPersona} ${this._nombre}  ${this._apellido} ${this._edad}`;
    }
}
//Clase hija1
class Empleados extends Personas{
    //Metdodo estatico
    static contadorEmpleado = 0;
    //Constructor de la clase hija empleado
    constructor(nombre, apellido, edad, sueldo){
        super (nombre, apellido, edad)
        this._idEmpleado = ++ Empleados.contadorEmpleado;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        return this._sueldo = sueldo;
    }
    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this.sueldo}`;
    }
}
//Class hija2
class Clientes extends Personas{
    //Metodo static
    static contadorClientes = 0;
    //Constructor de la clase Cliente
    constructor(nombre, apellido, edad ,fechaRegistro){
        super(nombre, apellido, edad)
        this._idCliente = ++Clientes.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        return this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return `${super.toString()}, ${this._idCliente} ${this._fechaRegistro}`;
    }
}
//Creacion de la instancia del objeto y su respectiva impresion
let persona1 = new Personas("Juan", "Perez", 18);
console.log(persona1.toString());
let persona2 = new Personas("Carlos", "Avila", 23);
console.log(persona2.toString());
//Creacion de la instancia del objeto y su respectiva impresion
let empleado1 = new Empleados("Karla", "Gomez", "25", 5000)
console.log(empleado1.toString());
let empleado2 = new Empleados("Laura", "Gutierrez", "25", 5000)
console.log(empleado2.toString());
//Creacion de la instancia del objeto y su respectiva impresion
let cliente1 = new Clientes("Miguel", "Cervantes", 30, new Date());
console.log(cliente1.toString());
let cliente2 = new Clientes("Alexis", "Rodiguez", 22, new Date());
console.log(cliente2.toString());