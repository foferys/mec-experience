/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const logo = document.querySelector("#mainLogo")
const navLink = document.querySelectorAll(".nav-link")
const menu = document.querySelector(".offcanvas")
const backBlack = document.querySelector(".offcanvas-backdrop")
const contattiBut = document.querySelector("#contattiBut")

window.addEventListener("scroll", function() {

    let y = this.scrollY;


    if(y>100) {
        logo.src="./assets/logoMec-ex.png";
    }
    if(y<=100) {
        logo.src="./assets/logoMex-exwhite.png";
    }
})

function closeMenu() {
    //prendo il bottone dopo aver cliccato perché altrimenti non lo vede visto che all'inizio l'elemento non è presente
    const backBlack = document.querySelector(".offcanvas-backdrop")
    menu.classList.remove("show");

    navLink.forEach(element => {
        element.classList.remove("active");
    });
    contattiBut.classList.add("active");


    if(backBlack) {

        backBlack.style.display = "none"
    }
}