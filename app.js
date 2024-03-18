/*Crea una función que calcule el índice de masa corporal (IMC)
de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.*/

//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Calcula tu IMC";
let peso = 0;
let altura = 0;
let resultadoImc = 0;
let textoImc = 0;

function asignarTextoElemento(elemento,texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function condicionesIniciales () {
    asignarTextoElemento ("h1","Calcula tu IMC");
    asignarTextoElemento ("p","Ingresa tu peso en Kg");
    peso = 0 ;
    altura = 0;


}

function alertaImc() {
    if (resultadoImc < 18.5) {
        textoImc = "Bajo peso";
    } else {
        if (resultadoImc < 25) {
            textoImc = "Peso saludable";
        } else if (resultadoImc < 30) {
                textoImc = "Sobrepeso";
        } else {
            textoImc = "Obesidad";
        }
    }
}

function ingresoDeDatosPeso () {
    peso = parseFloat (document.getElementById ("datosUsuario").value);
    limpiarCaja()
    if (peso > 0) {
        asignarTextoElemento ("p","Ingresa tu estatura");
        console.log (peso);
        document.querySelector ("#peso").setAttribute("disabled" ,"true");
    }
    return peso;
}

function ingresoDeDatosAltura () {
    altura = parseFloat (document.getElementById ("datosUsuario").value);
    limpiarCaja()
    if (altura > 0) {
        console.log (altura);
        document.querySelector ("#altura").setAttribute ("disabled" ,"true");
    }
    return altura;
}

function calcularImc () {
    resultadoImc = (peso / (altura * altura));
    alertaImc();
    console.log (resultadoImc);
    if (resultadoImc > 0){
        document.querySelector ("#reiniciar").removeAttribute("disabled");
        
        asignarTextoElemento ("p",`Su IMC es ${resultadoImc.toFixed(1)} lo que indica que su peso esta en la categoría de ${textoImc.bold()}`);
    } else {
        alert ("Valores no encontrados");
    }
    
}

function reiniciarJuego () {
    condicionesIniciales();
    limpiarCaja();
    document.querySelector ("#peso").removeAttribute ("disabled");
    document.querySelector ("#altura").removeAttribute ("disabled");
    document.querySelector ("#reiniciar").setAttribute ("disabled" ,"true");

}

function limpiarCaja() {
    let valorCaja = document.querySelector ("#datosUsuario").value = "";
}

condicionesIniciales();

