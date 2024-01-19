var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    // Move elements
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";

    // Rotate and scale button with delay
    z.style.transition = "transform 0.5s ease-in-out, left 0.5s ease-in-out";
    setTimeout(function () {
        z.style.transform = "rotate(360deg) scale(1.2)";
    }, 100);

    // Fade out login form
    x.style.transition = "opacity 0.5s ease-in-out";
    x.style.opacity = "0";

    // Fade in register form
    y.style.transition = "opacity 0.5s ease-in-out";
    setTimeout(function () {
        y.style.opacity = "1";
    }, 300);
}

function login() {
    // Move elements
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";

    // Rotate and scale button with delay
    z.style.transition = "transform 0.5s ease-in-out, left 0.5s ease-in-out";
    setTimeout(function () {
        z.style.transform = "rotate(0deg) scale(1)";
    }, 100);

    // Fade out register form
    y.style.transition = "opacity 0.5s ease-in-out";
    y.style.opacity = "0";

    // Fade in login form
    x.style.transition = "opacity 0.5s ease-in-out";
    setTimeout(function () {
        x.style.opacity = "1";
    }, 300);
}
