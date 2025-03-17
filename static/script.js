// Aqui solo ando muetrando el codigo de app.py y ando haciendo la animacion de escribir el nombre
function mostrarCodigo() {
    let codigo = document.getElementById("codigo");
    let boton = document.querySelector("button");

    if (codigo.style.display === "none" || codigo.style.display === "") {
        codigo.style.display = "block";
        boton.textContent = "Ocultar Código";
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
    } else {
        codigo.style.display = "none";
        boton.textContent = "Mostrar Código";
    }
}

let elementoEscribiendo = document.getElementById("escribiendo");
let texto = elementoEscribiendo.dataset.nombre;
let nombre = texto === "Desconocido" ? texto : "¡Hola, " + texto + "!";
let i = 0;

function escribir() {
    if (i < nombre.length) {
        elementoEscribiendo.textContent += nombre.charAt(i);
        i++;
        setTimeout(escribir, 100);
    }
}

if (texto === "Desconocido") {
    elementoEscribiendo.classList.add("Desconocido");
}
escribir();