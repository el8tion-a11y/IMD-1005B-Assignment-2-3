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

/* --- BACK TO TOP BUTTON --- */
const back2top = document.querySelector(".back2top");

if (back2top) {

    window.addEventListener("scroll", function() {
        if (document.documentElement.scrollTop > 10) {
            back2top.style.display = "block";
        } 
        else {
            back2top.style.display = "none";
        }
    });

    back2top.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

}

/* --- FILTER ON GALLERY ITEMS--- */
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

if (filterButtons.length > 0) {

    filterButtons.forEach(function(button) {
        button.addEventListener("click", function() {

            const filter = button.getAttribute("filter");

            galleryItems.forEach(item => {

                const category = item.getAttribute("category");

                if (filter === "all" || category === filter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
}

/* --- ACCORDION TABS UNDER ABOUT SECTION --- */
const allDetails = document.querySelectorAll("details");

if (allDetails) {
    allDetails.forEach(detail => {
    detail.addEventListener("toggle", () => {
        if (detail.open) {
        allDetails.forEach(other => {
            if (other !== detail) {
            other.removeAttribute("open"); // Close all other details
            }
        });
        }
    });
    });
}