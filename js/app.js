// ------------------ WOW-animation ------
new WOW().init();
// ---------------- sticky header ------

window.addEventListener('scroll', function () {

    const fixdhead = this.document.getElementById('header');

    if (window.pageYOffset >= 10) {
        fixdhead.classList.add('fixdhead');
    } else {
        fixdhead.classList.remove('fixdhead');
    }
})
// ------------------ game-crad-area --------
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    }
});
// ------------------ counter-animation -------

let valueDisply = document.querySelectorAll(".count");
let speed = 3000;


valueDisply.forEach((valueAni) => {
    let valueStart = 0;
    let valueEnd = parseInt(valueAni.getAttribute("data-con"));
    let duration = Math.floor(speed / valueEnd);
    let counter = setInterval(function () {
        valueStart += 1;
        valueAni.textContent = valueStart / 1 + '+';
        if (valueStart == valueEnd) {
            clearInterval(counter);
        }
    }, duration);
});
// ----------------- email-validation -----------

const a = document.getElementById("email");
const flag = true;

function validateSubscribe() {

    if (email.value == "") {
        document.getElementById("error").innerHTML = "*please enter e-mail address";
        flag = false;
    } else if (email.value.length < 10) {
        document.getElementById("error").innerHTML = "*please enter min 10 char";
        flag = false;
    } else if (email.value.length > 30) {
        document.getElementById("error").innerHTML = "*please enter max 30 char";
        flag = false;
    } else {
        document.getElementById("error").innerHTML = "";
        flag = true;
    }

    if (flag == true) {
        alert("Your Subscribe Successfuly");
    } else {
        alert("*!Your E-Mail is not Submited, Please Try Again")
    }
    return flag;
}