let openMenu = document.querySelector(".openMenu");
let closeMenu = document.querySelector(".closeMenu");
let menu = document.querySelector(".mobile-nav");
let login = document.querySelector(".buttons__login");
let modalWindow = document.querySelector(".modal");
let closeMenuLogin = document.querySelector(".closeMenuLogin");
let email = document.querySelector("#email");
let discover = document.querySelector(".discover__anchor"); 
let anchor = document.querySelector(".trial__anchor");

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


anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href');
    email.focus();
    console.log(blockID);
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
})

discover.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = discover.getAttribute('href');
    console.log(blockID);
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
})