/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const logo = document.querySelector("#mainLogo")

window.addEventListener("scroll", function() {

    let y = this.scrollY;


    if(y>100) {
        logo.src="./assets/logoMec-ex.png";
    }
    if(y<=100) {
        logo.src="./assets/logoMex-exwhite.png";
    }
})