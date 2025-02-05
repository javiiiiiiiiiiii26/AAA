function abrirCarta() {
    document.querySelector(".carta-frontal").style.display = "none";
    document.querySelector(".carta-contenido").style.display = "block";
}

function respuesta(opcion) {
    if (opcion === "Sí") {
        alert("💖Te amo muchísimo mi amor");
    } else {
        alert("😢... igual te amo ");
    }
}
