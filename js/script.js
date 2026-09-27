/* ==================== GALERÍA BLACK JACK ==================== */

const botonBlackjack =
    document.getElementById("ver-imagenes-blackjack");

const galeriaBlackjack =
    document.getElementById("galeria-blackjack");

const cerrarBlackjack =
    document.getElementById("cerrar-galeria-blackjack");


if (botonBlackjack && galeriaBlackjack) {

    botonBlackjack.addEventListener("click", () => {

        galeriaBlackjack.classList.add("activa");

        galeriaBlackjack.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}


if (cerrarBlackjack && galeriaBlackjack) {

    cerrarBlackjack.addEventListener("click", () => {

        galeriaBlackjack.classList.remove("activa");

    });

}


/* ==================== GALERÍA PAREJA ==================== */

const botonPareja =
    document.getElementById("ver-imagenes-pareja");

const galeriaPareja =
    document.getElementById("galeria-pareja");

const cerrarPareja =
    document.getElementById("cerrar-galeria-pareja");


if (botonPareja && galeriaPareja) {

    botonPareja.addEventListener("click", () => {

        galeriaPareja.classList.add("activa");

        galeriaPareja.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}


if (cerrarPareja && galeriaPareja) {

    cerrarPareja.addEventListener("click", () => {

        galeriaPareja.classList.remove("activa");

    });

}


/* ==================== GALERÍA NEUMSCAN ==================== */

const botonNeumscan =
    document.getElementById("ver-imagenes-neumscan");

const galeriaNeumscan =
    document.getElementById("galeria-neumscan");

const cerrarNeumscan =
    document.getElementById("cerrar-galeria-neumscan");


if (botonNeumscan && galeriaNeumscan) {

    botonNeumscan.addEventListener("click", () => {

        galeriaNeumscan.classList.add("activa");

        galeriaNeumscan.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}


if (cerrarNeumscan && galeriaNeumscan) {

    cerrarNeumscan.addEventListener("click", () => {

        galeriaNeumscan.classList.remove("activa");

    });

}


/* ==================== FORMULARIO DE CONTACTO ==================== */

const formulario =
    document.getElementById("contact-form");

const mensajeFormulario =
    document.getElementById("form-message");


if (formulario) {

    formulario.addEventListener("submit", (event) => {

        event.preventDefault();


        const nombre =
            document.getElementById("nombre").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const asunto =
            document.getElementById("asunto").value.trim();

        const mensaje =
            document.getElementById("mensaje").value.trim();


        if (
            nombre === "" ||
            email === "" ||
            asunto === "" ||
            mensaje === ""
        ) {

            mensajeFormulario.textContent =
                "Por favor, completa todos los campos.";

            mensajeFormulario.style.display = "block";

            return;

        }


        const correoDestino =
            "salvatierraelkin87@gmail.com";


        const asuntoCorreo =
            encodeURIComponent(asunto);


        const cuerpoCorreo =
            encodeURIComponent(
                "Nombre: " + nombre +
                "\nCorreo: " + email +
                "\n\nMensaje:\n" + mensaje
            );


        const enlaceCorreo =
            "mailto:" +
            correoDestino +
            "?subject=" +
            asuntoCorreo +
            "&body=" +
            cuerpoCorreo;


        window.location.href = enlaceCorreo;


        mensajeFormulario.textContent =
            "Abriendo tu aplicación de correo...";

        mensajeFormulario.style.display = "block";

    });

}