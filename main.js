let primaryNav = document.querySelector(".nav-bar");
let navToggle = document.querySelector(".nav-toggle");
let close = document.querySelector(".toggle-close");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false"){
        
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        close.style.display = "block";
        navToggle.style.display = "none";
    } else if (visibility === "true"){
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        close.style.display = "none";
        navToggle.style.display = "block";
    }
})

close.addEventListener('click', () =>{
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "true"){
        
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        close.style.display = "none";
        navToggle.style.display = "block";
    } else if (visibility === "true"){
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        close.style.display = "block";
        navToggle.style.display = "none";
    }
})