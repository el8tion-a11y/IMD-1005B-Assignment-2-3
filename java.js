/* --- CONTACT FORM SCRIPT --- */
const form = document.querySelector(".contact-form");
const thankyou = document.querySelector(".thank-you");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    thankyou.style.display = "block";
    form.reset();

    // hide message after 4 seconds
    setTimeout(function() {
        thankyou.style.display = "none";
    }, 4000);
});


/* --- HAMBURGER MENU SCRIPT --- */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

};



