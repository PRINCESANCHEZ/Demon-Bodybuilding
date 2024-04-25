var slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

var slideInterval = setInterval(function() {
    nextSlide(1);
}, 10000);

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slideshow");
    if(n>slides.length) {slideIndex=1}
    if(n<1) {slideIndex=slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

function goToExercises(){
    window.location.href = "demonExercises.html";
}
function goToAbout(){
    window.location.href = "demonAbout.html";
}

function goToMacro(){
    window.location.href = "demonMacro.html";
}