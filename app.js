let introduccion = document.getElementById('textoEntrada');
let contenedorPadre = document.getElementById('contenedor_padre')
let imagen = document.getElementById('id_resultado_img');
let texto = document.getElementById('id_resultado_texto')
let resultado = document.getElementById('contenedor_resultado')
let cajaResultado = document.getElementsByClassName('caja_resultado_contenedor')
let textoResultado = "";

function limpiar(){
    introduccion.innerHTML = "";
}

function encriptar(){
    textoResultado = introduccion.value.replaceAll("a", 'boca');
    resultado.innerHTML = "";
    let respuestaResultado = document.createElement("textarea");
    respuestaResultado.setAttribute('id', 'textoAreaRespuesta')
    let contenidoRespuesta = document.createTextNode(textoResultado);
    respuestaResultado.appendChild(contenidoRespuesta);
    document.body.insertBefore(respuestaResultado, resultado);
    console.log(contenidoRespuesta)
}

function desencriptar(){
    textoResultado = introduccion.value.replaceAll("a", 'boca');
    let addEtiqueta = document.createElement("textarea");
    addEtiqueta.setAttribute('class', 'texto_area_respuesta')
    texto.setAttribute('hidden', '')
    let contenidoRespuesta = document.createTextNode(textoResultado);
    addEtiqueta.appendChild(contenidoRespuesta);
    console.log(addEtiqueta);
    resultado.replaceChild(addEtiqueta, imagen);
    console.log(contenidoRespuesta)
}
