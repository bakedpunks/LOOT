// SCROLL FUNCTION FOR NAVBAR
//THE NAVBAR CHANGES FROM HAVING A BACKGROUND TO NOT HAVING A BACKGROUND AS YOU SCROLL DOWN

// jquery selector example (document)
// when this page is ready execute ( $(document).ready(function () )   )


$(document).ready(function () {
    $(window).scroll(function () {
        //ADDS NAVBAR BACKGROUND IF YOU SCROLL DOWN
        // CLASS'S CAN BE CHANGED OR RENAMED
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
            // BACKGROUND IS HIDDEN IF STATEMENT IS NOT MET
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    // TOGGLE SWITCH ON NAVBAR
    $(' .menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
    });
});



/* command set for navbar */
//  link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+0.5}s`;
const navSlide = () => {
    const navToggleBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelectorAll(".menu li");

    //animate links
    navToggleBtn.addEventListener("click", () => {
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + .3
        }s`;
            }
        });
        //Burger Animation
        navToggleBtn.classList.toggle("toggle");
    });
};

//navToggleBtn animation
navSlide();


