/* --- CONTACT FORM --- */
const form = document.querySelector(".contact-form");
const thankYou = document.querySelector(".thank-you");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        thankYou.style.display = "block";
        form.reset();

        setTimeout(function() {
            thankYou.style.display = "none";
        }, 4000);
    });
}


/* --- HAMBURGER MENU MOBILE --- */
/* AI assisted for debugging */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
}