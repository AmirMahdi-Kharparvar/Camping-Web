const navBtn = document.querySelector(".nav__btn");
const navBtns = document.querySelectorAll(".nav__btn");
const navMenu = document.querySelector(".nav-menu");

const placeLike = document.querySelectorAll(".place__like");
const placeLikeIcon = document.querySelectorAll(".place__like-icon");

let navOpen = false;

for (let i = 0; i < navBtns.length; i++)
    navBtns[i].addEventListener("click", function () {
        if (navOpen) {
            // navBtns[0].classList.remove("nav__btn--open");
            navBtns[1].classList.remove("nav__btn--open");
            navMenu.classList.remove("nav-menu--open");
            navOpen = false;
        } else {
            // navBtns[0].classList.add("nav__btn--open");
            navBtns[1].classList.add("nav__btn--open");
            navMenu.classList.add("nav-menu--open");
            navOpen = true;
        }
    });

for (let j = 0; j < placeLike.length; j++)
    placeLike[j].addEventListener("click", function () {
        if (!placeLikeIcon[j].classList.contains("place__like-icon--fill")) {
            placeLikeIcon[j].classList.add("place__like-icon--fill");
            // console.log(j);
        } else {
            placeLikeIcon[j].classList.remove("place__like-icon--fill");
        }
    });
