const botonVerImagenesBlackjack = document.getElementById("ver-imagenes-blackjack");
const botonCerrarGaleriaBlackjack = document.getElementById("cerrar-galeria-blackjack");
const galeriaBlackjack = document.getElementById("galeria-blackjack");


const botonVerImagenesPareja = document.getElementById("ver-imagenes-pareja");
const botonCerrarGaleriaPareja = document.getElementById("cerrar-galeria-pareja");
const galeriaPareja = document.getElementById("galeria-pareja");


const botonVerImagenesNeumscan = document.getElementById("ver-imagenes-neumscan");
const botonCerrarGaleriaNeumscan = document.getElementById("cerrar-galeria-neumscan");
const galeriaNeumscan = document.getElementById("galeria-neumscan");


botonVerImagenesBlackjack.addEventListener("click", () => {

    galeriaBlackjack.classList.add("activa");

    galeriaBlackjack.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


botonCerrarGaleriaBlackjack.addEventListener("click", () => {

    galeriaBlackjack.classList.remove("activa");

});


botonVerImagenesPareja.addEventListener("click", () => {

    galeriaPareja.classList.add("activa");

    galeriaPareja.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


botonCerrarGaleriaPareja.addEventListener("click", () => {

    galeriaPareja.classList.remove("activa");

});


botonVerImagenesNeumscan.addEventListener("click", () => {

    galeriaNeumscan.classList.add("activa");

    galeriaNeumscan.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


botonCerrarGaleriaNeumscan.addEventListener("click", () => {

    galeriaNeumscan.classList.remove("activa");

});