var wipe = document.getElementById("container");

function hide(){
    document.getElementById("image").style.display = 'none';
}
// get rid of stain image

function lighten(){
    document.getElementById("P1").style.opacity = ".5"
}
// lighten circle of the P
function rotate(){
    document.getElementById("W1").style.transform = "rotate(30deg)"
    document.getElementById("W4").style.transform = "rotate(-30deg)"
}
// make the W act as a wiper
function rotateback(){
    document.getElementById("W1").style.transform = "rotate(-30deg)"
    document.getElementById("W4").style.transform = "rotate(30deg)"
}
wipe.addEventListener("click", hide);
wipe.addEventListener("click", lighten);
wipe.addEventListener("mouseover", rotate);
wipe.addEventListener("mouseout", rotateback);
