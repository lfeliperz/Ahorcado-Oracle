//Selectores
let palabras = ["ALURA", "ORACLE", "ONE", "HTML", "JAVASCRIPT"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";

//Palabra Secreta
function escogerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    console.log(palabraSecreta)
}

//Iniciar Juego
function iniciarJuego(){
    document.getElementById("iniciar-juego").style.display = "none";
    escogerPalabraSecreta()
    dibujarCanvas()
    dibujarLinea()
}