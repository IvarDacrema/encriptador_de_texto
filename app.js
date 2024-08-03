let introduccion = document.getElementById('textoEntrada');
let contenedorPadre = document.getElementById('contenedor_padre');
let imagen = document.getElementById('id_resultado_img');
let texto = document.getElementById('id_resultado_texto');
let resultado = document.getElementById('contenedor_resultado');
let cajaResultado = document.getElementsByClassName('caja_resultado_contenedor');
let addEtiqueta = document.createElement("textarea");
let addBoton = document.createElement("button");
let textoCopiado = "";
let textoResultado = "";
let contenidoRespuesta = "";
let controlDeEntrada = 0;

// Tabla de mapeo de vocales a otros caracteres
let mapasCambio = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}

//Tabla de mapeo de vocales con tilde
let mapaLetrasTilde= {
    'á': 'a',
    'é': 'e',
    'í': 'i',
    'ó': 'o',
    'ú': 'u'
}

//Funcion para invertir las llaves y valores para desencriptar
function permutarValores(mapasCambio) {
    let permutado = {};
    for (let clave in mapasCambio) {
        if (mapasCambio.hasOwnProperty(clave)) {
            permutado[mapasCambio[clave]] = clave;
        }
    }
    return permutado;
}

//Expresión regular para coincidir con todas las vocales
let letrasCambiar = /[aeiou]/g;

//Expresión regular para coincidir con todas las vocales con tilde
let letrasTilde = /[áéíóú]/g;

//Expresion para coincidir con las palabras claves
let letrasEncriptadas = /ai|enter|imes|ober|ufat/g;

function limpiar(){
    //borra el contenido de la caja donde se introduce el texto que queremos encriptar al hacer click en ella
    introduccion.innerHTML = "";
}

function encriptar(){
    if(controlDeEntrada==0){
        const textSinTildes = introduccion.value.replaceAll(letrasTilde, (match) => {
            // Reemplazamos cada vocal según la tabla de mapeo
            return mapaLetrasTilde[match];
          });
        //guarda el texto modificado con replaceAll en texto resultado
        const textoMinusculas = textSinTildes.toLowerCase();
        textoResultado = textoMinusculas.replaceAll(letrasCambiar, (match) => {
            // Reemplazamos cada vocal según la tabla de mapeo
            return mapasCambio[match];
          });
        //añade a addEtiqueta el atributo class para poder modificarlo en el css
        addEtiqueta.setAttribute('class', 'texto_area_respuesta');
        //se crea el contenido que va a tener el textarea creado en las variables
        contenidoRespuesta = document.createTextNode(textoResultado);
        //se le introduce el texto creado a la etiqueta textarea
        addEtiqueta.appendChild(contenidoRespuesta);
        //remplaza la imagen de la caja de respuestas con nuestro textarea con el texto encriptado
        resultado.replaceChild(addEtiqueta, imagen);
        //añado todos los atributos necesarios
        addBoton.setAttribute('class', 'boton_copiar');
        addBoton.setAttribute('id', 'boton');
        addBoton.setAttribute('onclick', 'copiar()');
        //se edita el valor que muestra el boton
        addBoton.innerHTML = "Copiar";
        //se muestra lo encriptado
        resultado.replaceChild(addBoton, texto);
    } 
    if(controlDeEntrada>0){
        //borramos el contenido del textarea
        addEtiqueta.innerHTML = "";
        //se crea nuevo contenido para mostrar en textarea respuesta
        textoResultado = introduccion.value.replaceAll(letrasCambiar, (match) => {
            // Reemplazamos cada vocal según la tabla de mapeo
            return mapasCambio[match];
          });
        contenidoRespuesta = document.createTextNode(textoResultado);
        //se añade a el contenido nuevo a textarea respuesta
        addEtiqueta.appendChild(contenidoRespuesta);
        addBoton.innerHTML = "Copiar";
    }
    //suma al contador para que no vuelva a hacer el replazo de los hijos del nodo y solo haga la encriptacion
    controlDeEntrada++;
}

function desencriptar(){
    addBoton.innerHTML = "Copiar";
    //borramos el contenido del textarea
    addEtiqueta.innerHTML = "";
    //obtenemos el mapa invertido
    let mapaInvertido = permutarValores(mapasCambio);
    //se crea nuevo contenido para mostrar en textarea respuesta desencriptada
    textoResultado = introduccion.value.replaceAll(letrasEncriptadas, (match) => {
        // Reemplazamos cada cadena encriptada según el mapa invertido
        return mapaInvertido[match];
    });
    //se añade a el contenido nuevo a textarea respuesta
    addEtiqueta.appendChild(document.createTextNode(textoResultado));
}

function copiar(){
    navigator.clipboard.writeText(addEtiqueta.innerHTML)
    .then(() => {
        console.log('Texto copiado')
    })
    .catch(err => {
        console.error('Error al copiar:', err)
    })
    addBoton.innerHTML = "Copiado";
}
