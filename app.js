let introduccion = document.getElementById('textoEntrada');
let resultado = document.getElementById('caja_resultado')
let cajaResultado = document.getElementsByClassName('caja_resultado_contenedor')

function limpiar(){
    introduccion.innerHTML = "";
}

function encriptar(){
    console.log(introduccion.value.replaceAll("a", 'boca'))
    console.log(cajaResultado.value);
}

function desencriptar(){
    resultado.innerHTML = "";
}
