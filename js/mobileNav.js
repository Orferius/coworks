const mobileNavBtnOpen = document.querySelector("#open-mobile-nav");
const mobileNavBtnClose = document.querySelector("#close-mobile-nav");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavLinks = mobileNav.querySelectorAll("a, button");

const openMobileNav = () => {
    mobileNav.classList.add("mobile-nav--open");
    document.body.classList.add("no-scroll");
};

const closeMobileNav = () => {
    mobileNav.classList.remove("mobile-nav--open");
    document.body.classList.remove("no-scroll");
};

mobileNavBtnOpen.addEventListener("click", openMobileNav);
mobileNavBtnClose.addEventListener("click", closeMobileNav);

// Скролл к разделам страницы
mobileNavLinks.forEach(item => item.addEventListener("click", closeMobileNav));
