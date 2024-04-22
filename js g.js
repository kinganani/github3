// deter lors qu on scroll
window.onscroll= function() { i() };
// recuperer les elements
let  hearder = document.getElementById('i-hearder');
let gcomportement = hearder.offsetTop;

// faire la fonction
function i() {
    if(window.pageYOffset > gcomportement){
        hearder.classList.add("i");
    }
    else {
        hearder.classList.remove("i");
    }
}