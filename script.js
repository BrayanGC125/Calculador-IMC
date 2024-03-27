/*Crea una función que calcule el índice de masa corporal (IMC)
de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.*/
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
    asignarTextoElemento ("p","Ingrese todos sus datos abajo");
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



function reiniciarJuego () {
    condicionesIniciales();
    limpiarCaja();
    
}

function calcularImc () {
    peso = parseFloat (document.getElementById ("datosUsuarioPeso").value);
    altura = parseFloat (document.getElementById ("datosUsuarioAltura").value);    
    
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



function limpiarCaja() {
    let valorCaja = document.querySelector ("#datosUsuarioAltura").value = "";
    let valorCaja1 = document.querySelector ("#datosUsuarioPeso").value = "";
    document.querySelector ("#reiniciar").setAttribute("disabled" ,"true");
}

condicionesIniciales();

