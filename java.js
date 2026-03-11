/* --- CONTACT FORM SCRIPT --- */
const form = document.querySelector(".contact-form");
const thankyou = document.querySelector(".thank-you");

if (form && thankYou) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        thankYou.style.display = "block";
        form.reset();

        setTimeout(function() {
            thankYou.style.display = "none";
        }, 4000);
    });
}


/* --- HAMBURGER MENU SCRIPT --- */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
}





