let menu_icon = document.querySelector(".menu");
let nav = document.querySelector(".nav-bar");

menu_icon.addEventListener("click", ()=>{
    menu_icon.classList.add("icon-move");

    nav.classList.add("slide");
})

let cross_icons = document.querySelector("#cross-icon");

cross_icons.addEventListener("click", ()=>{
    nav.classList.remove("slide");

    setTimeout(()=>{
        menu_icon.classList.remove("icon-move");
    }, 350)
})
