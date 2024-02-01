let hora = 12;
let mensaje;

// Mi codigo
if( hora >= 6 && hora <= 11){
    console.log("Buenos dias");
}else if(hora >= 12 && hora <= 18){
    console.log("Buenas tardes");
}else if(hora >= 19 && hora <= 24){
    console.log("Buenas noches");
}else if(hora >= 0 && hora < 6){
    console.log("Durmiendo");
}else{
    console.log("Valor incorrecto");
}

// El del profesor
if( hora >= 6 && hora <= 11){
    mensaje = "Buenos dias";
}else if(hora >= 12 && hora <= 18){
    mensaje = "Buenas tardes";
}else if(hora >= 19 && hora <= 24){
    mensaje = "Buenas noches";
}else if(hora >= 0 && hora < 6){
    mensaje = "Durmiendo";
}else{
    mensaje = "Valor incorrecto";
}
console.log(mensaje);