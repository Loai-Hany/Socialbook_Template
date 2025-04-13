var menu = document.getElementById("dropdown-menu");
var userIcon = document.getElementById("userIcon");
var modeBtn = document.getElementById("mode-btn");
var btnToUp = document.getElementById("btnToUp");

userIcon.addEventListener("click" , function () {
    menu.classList.toggle("settings-menu-height");
});

modeBtn.addEventListener("click" , function () {
    modeBtn.classList.toggle("theme-btn");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light")
        localStorage.setItem("theme","dark");
    else
        localStorage.setItem("theme","light");

});

function checkTheme() { 
   if(localStorage.getItem("theme") == "light") {
    modeBtn.classList.remove("theme-btn");
    document.body.classList.remove("dark-theme");
  } else if (localStorage.getItem("theme") == "dark") {
    modeBtn.classList.add("theme-btn");
    document.body.classList.add("dark-theme");
  } else {
    localStorage.setItem("theme" , "light");
  }
}

checkTheme();

window.onscroll = function () {
    if (window.scrollY > 600) {
        btnToUp.style.cssText = "display: block";
    } else {
        btnToUp.style.cssText = "display: none";
    }
} 

btnToUp.addEventListener("click" , function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
});