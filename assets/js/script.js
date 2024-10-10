const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load", ()=>{
    preloader.classList.add("remove");
});

// const activeMenu = document.querySelector("[data-header]");

// add event on multiple elements
const addEventOnElements  function (elements, eventType, callback){
    for(let i=0, len=elements.lenght; i<len; i++){
        elements[i].addEventListener(eventType, callback);
    }
}

// Navbar toggler for mobile
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
