// animation when typing
const stringFunctionHeader = headerTextAnimation();



function headerTextAnimation() {
    return new Typed('.textstyle', {
        strings: ["job titles goes here"],
        typeSpeed: 60,
        backSpeed: 100,
        loop: true,
    });
}

