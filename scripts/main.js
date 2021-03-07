let openMenu = document.querySelector(".openMenu");
let closeMenu = document.querySelector(".closeMenu");
let menu = document.querySelector(".mobile-nav");
let login = document.querySelector(".buttons__login");
let modalWindow = document.querySelector(".modal");
let closeMenuLogin = document.querySelector(".closeMenuLogin");

function openMobMenu(){
    menu.style.display = "block";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
}

function closeMobMenu(){
    menu.style.display = "none";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
}


openMenu.addEventListener("click", openMobMenu);
closeMenu.addEventListener("click", closeMobMenu);

login.addEventListener("click", () => modalWindow.style.display = "flex");
closeMenuLogin.addEventListener("click", () => modalWindow.style.display = "none");