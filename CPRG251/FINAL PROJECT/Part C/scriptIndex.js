function date() {
    var n = new Date();
    var y = n.getFullYear();
    var m = n.getMonth() + 1;
    var d = n.getDate();
    document.getElementById("date").innerHTML = "Today Date: " + m + "/" + d + "/" + y;
}


var slideIndex = 0;
window.onload=showSlides;

function showSlides() {
    date();
    var i;
    var slides = document.getElementsByClassName("slides fade");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 2500);
}