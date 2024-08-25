const botonEncriptar = document.querySelector(".botonencriptar");
const botonDesencriptar = document.querySelector(".botondesencriptar");
const munieco = document.querySelector("#muñeco");
const contenedor = document.querySelector("#mensajeencriptado");
const resultado = document.querySelector("#mensaje");
const btnCopiar = document.querySelector(".boton-copiar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
btnCopiar.addEventListener("click", copiarTexto);
function encriptar() {
    ocultarAdelante();
    const cajatexto = recuperarTexto();
    resultado.value = encriptarTexto(cajatexto);
    if (cajatexto !== "") {
        ocultarImagen();
    } else {
        mostrarImagen();
    }
}

function desencriptar() {
    ocultarAdelante();
    const cajatexto = recuperarTexto();
    const textoDesencriptado = desencriptarTexto(cajatexto);
    resultado.value = textoDesencriptado;
    
    if (textoDesencriptado !== "") {
        ocultarImagen();
    } else {
        mostrarImagen();
    }
}

function recuperarTexto() {
    const cajatexto = document.querySelector("#Texto");
    return cajatexto.value;
}

function ocultarAdelante() {
    ocultarImagen(); 
    contenedor.classList.remove("ocultar");
}

function ocultarImagen() {
    munieco.style.display = "none";
}

function mostrarImagen() {
    munieco.style.display = "block";
}

function encriptarTexto(mensaje) {
    return mensaje.replace(/e/g, "enter")
                  .replace(/i/g, "imes")
                  .replace(/a/g, "ai")
                  .replace(/o/g, "ober")
                  .replace(/u/g, "ufat");
}

function desencriptarTexto(mensaje) {
    return mensaje.replace(/enter/g, "e")
                  .replace(/imes/g, "i")
                  .replace(/ai/g, "a")
                  .replace(/ober/g, "o")
                  .replace(/ufat/g, "u");
}

function copiarTexto() {
    const contenido = resultado.value;
    navigator.clipboard.writeText(contenido).then(() => {
        console.log("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}