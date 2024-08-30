// Μπάρα προόδου σκρολλαρίσματος
window.onscroll = function() {
    scrollFunction();
    progressBarFunction();
};

function progressBarFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

// Κουμπί "Πίσω στην Κορυφή"
var mybutton = document.getElementById("backToTopBtn");

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // Για Safari
    document.documentElement.scrollTop = 0; // Για Chrome, Firefox, IE και Opera
}