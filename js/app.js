//=========================

// LOADER

//=========================

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    loader.style.opacity="0";

    setTimeout(()=>{

        loader.style.display="none";

    },700);

});

//=========================

// NAVBAR

//=========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    header.classList.toggle("scrolled",window.scrollY>40);

});

//=========================

// PROGRESS BAR

//=========================

const progress=document.getElementById("progress");

window.addEventListener("scroll",()=>{

    const total=

    document.documentElement.scrollHeight-

    document.documentElement.clientHeight;

    const progreso=(window.scrollY/total)*100;

    progress.style.width=progreso+"%";

});

//=========================

// BOTON SUBIR

//=========================

const topBtn=document.getElementById("top");

window.addEventListener("scroll",()=>{

    if(window.scrollY>350){

        topBtn.classList.add("show");

    }

    else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

//=========================

// MENU RESPONSIVE

//=========================

const menu=document.querySelector(".menu");

const icon=document.querySelector(".menu-icon");

icon.addEventListener("click",()=>{

    menu.classList.toggle("active");

});