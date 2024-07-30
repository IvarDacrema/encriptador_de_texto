let introduccion = document.getElementById('textoEntrada');
let contenedorPadre = document.getElementById('contenedor_padre');
let imagen = document.getElementById('id_resultado_img');
let texto = document.getElementById('id_resultado_texto');
let resultado = document.getElementById('contenedor_resultado');
let cajaResultado = document.getElementsByClassName('caja_resultado_contenedor');
let addEtiqueta = document.createElement("textarea");
let textoCopiado = "";
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
        //se crea el contenido que va a tener el textarea creado en las variables
        let contenidoRespuesta = document.createTextNode(textoResultado);
        //se le introduce el texto creado a la etiqueta textarea
        addEtiqueta.appendChild(contenidoRespuesta);
        //remplaza la imagen de la caja de respuestas con nuestro textarea con el texto encriptado
        resultado.replaceChild(addEtiqueta, imagen);
        //añade boton
        let addBoton = document.createElement("button");
        addBoton.setAttribute('class', 'boton_copiar');
        addBoton.setAttribute('id', 'boton');
        addBoton.setAttribute('onclick', 'copiar()');
        addBoton.innerHTML = "Copiar";
        resultado.replaceChild(addBoton, texto);
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
    //borramos el contenido del textarea
    addEtiqueta.innerHTML = "";
    //se crea nuevo contenido para mostrar en textarea respuesta desencriptada
    textoResultado = document.createTextNode(introduccion.value.replaceAll("boca", 'a'));
    //se añade a el contenido nuevo a textarea respuesta
    addEtiqueta.appendChild(textoResultado);
}

function copiar(){
    navigator.clipboard.writeText(addEtiqueta.innerHTML)
    .then(() => {
        console.log('Texto copiado')
    })
    .catch(err => {
        console.error('Error al copiar:', err)
    })
}
