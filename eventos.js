document.getElementById("boton").addEventListener("click", () => 
    alert("Hola! Soy el div")
);


document.getElementById("hola").addEventListener("click", (evento) => {
    alert("Hola!")
    evento.stopPropagation();
});