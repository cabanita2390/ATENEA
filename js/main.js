const abrirMenu = document.querySelector("#abrirMenu");
const cerrarMenu = document.querySelector("#cerrarMenu");
const navbarMenu = document.querySelector("#navbarMenu");
const developerHead = document.querySelector("#developerHead");

abrirMenu.addEventListener("click", () => {
    console.log("Clic en abrir");
    navbarMenu.classList.add("nav-visible");
    developerHead.classList.add("developer-head-mobile");
});

cerrarMenu.addEventListener("click", () => {
    console.log("Clic en cerrar");
    navbarMenu.classList.remove("nav-visible");
    developerHead.classList.remove("developer-head-mobile");
});