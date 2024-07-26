let introduccion = document.getElementById('textoEntrada');
let contenedorPadre = document.getElementById('contenedor_padre')
let imagen = document.getElementById('id_resultado_img');
let texto = document.getElementById('id_resultado_texto')
let resultado = document.getElementById('contenedor_resultado')
let cajaResultado = document.getElementsByClassName('caja_resultado_contenedor')
let addEtiqueta = document.createElement("textarea");
let textoResultado = "";
let controlDeEntrada = 0;

function limpiar(){
    //borra el contenido de la caja donde se introduce el texto que queremos encriptar al hacer click en ella
    introduccion.innerHTML = "";
}

function encriptar(){
    if(controlDeEntrada==0){
        //guarda el texto modificado con replaceAll en texto resultado
        textoResultado = introduccion.value.replaceAll("a", 'boca');
        //añade a addEtiqueta el atributo class para poder modificarlo en el css
        addEtiqueta.setAttribute('class', 'texto_area_respuesta');
        //añade el atributo hidden a los mensajes que estan debajo de la imagen en la caja de respuesta para que no se vea a la hora de apretar el boton encriptar
        texto.setAttribute('hidden', '');
        //se crea el contenido que va a tener el textarea creado en las variables
        let contenidoRespuesta = document.createTextNode(textoResultado);
        //se le introduce el texto creado a la etiqueta textarea
        addEtiqueta.appendChild(contenidoRespuesta);
        //remplaza la imagen de la caja de respuestas con nuestro textarea con el texto encriptado
        resultado.replaceChild(addEtiqueta, imagen);
    } 
    if(controlDeEntrada>0){
        //borramos el contenido del textarea
        addEtiqueta.innerHTML = "";
        //se crea nuevo contenido para mostrar en textarea respuesta
        textoResultado = document.createTextNode(introduccion.value.replaceAll("a", 'boca'));
        //se añade a el contenido nuevo a textarea respuesta
        addEtiqueta.appendChild(textoResultado);
    }
    //suma al contador para que no vuelva a hacer el replazo de los hijos del nodo y solo haga la encriptacion
    controlDeEntrada++;
}

function desencriptar(){
    
}
