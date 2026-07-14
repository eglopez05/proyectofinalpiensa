/*==================================================
    RUTA POR UNA CUENCA SIN TRABAJO INFANTIL
    main.js
==================================================*/

/*==============================
    LOADER
==============================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});


/*==============================
    NAVBAR SCROLL
==============================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "#ffffff";
        navbar.style.padding = "12px 70px";
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";

        document.querySelectorAll(".menu a").forEach(link => {
            link.style.color = "#222";
        });

        document.querySelector(".logo span").style.color = "#0A6EBD";

    } else {

        navbar.style.background = "rgba(255,255,255,.10)";
        navbar.style.boxShadow = "none";
        navbar.style.padding = "18px 70px";

        document.querySelectorAll(".menu a").forEach(link => {
            link.style.color = "#ffffff";
        });

        document.querySelector(".logo span").style.color = "#ffffff";

    }

});


/*==============================
    SCROLL SUAVE
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*==============================
    EFECTO APARICIÓN
==============================*/

const elementos = document.querySelectorAll(".card, .titulo");

const aparecer = () => {

    const alto = window.innerHeight;

    elementos.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;

        if (posicion < alto - 120) {

            elemento.classList.add("mostrar");

        }

    });

};

window.addEventListener("scroll", aparecer);

aparecer();


/*==============================
    BOTÓN VOLVER ARRIBA
==============================*/

const boton = document.createElement("button");

boton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

boton.id = "btnTop";

document.body.appendChild(boton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        boton.classList.add("activo");

    } else {

        boton.classList.remove("activo");

    }

});

boton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==============================
    EFECTO HERO
==============================*/

const heroTitulo = document.querySelector(".hero h1");

heroTitulo.animate(

    [

        { opacity: 0, transform: "translateY(-40px)" },

        { opacity: 1, transform: "translateY(0)" }

    ],

    {

        duration: 1200,

        easing: "ease"

    }

);


/*==============================
    EFECTO BOTONES
==============================*/

const botones = document.querySelectorAll(".btn");

botones.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});


/*==============================
    PARALLAX HERO
==============================*/

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero-img");

    hero.style.transform = `translateY(${window.scrollY * 0.25}px) scale(1.1)`;

});


/*==============================
    MENSAJE CONSOLA
==============================*/

console.log("Proyecto Trabajo Infantil - PIENSA");