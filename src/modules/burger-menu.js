const burgerIcon = document.querySelector(".burger");
const navigation = document.querySelector(".top-nav");
const navList = document.querySelector(".top-nav__list");
const navItems = document.querySelectorAll(".top-nav__item");
const header = document.querySelector("header");

document.addEventListener("click", burgerHandler);

function burgerHandler(e) {
    const burgerOpened = isBurgerOpen();
    if (e.target.classList.contains("burger") || e.target.closest(".burger")) {
        toggleBurger();
        document.querySelector(".plug") ? makeLight() : makeDark();
    } else if (burgerOpened && (e.target.classList.contains("top-nav") || e.target.closest(".top-nav"))) {
        openBurger();
    } else if (burgerOpened) {
        closeBurger();
        makeLight();
    }
}

function  isBurgerOpen() {
    return burgerIcon.classList.contains("burger-opened");
}

function  openBurger() {
    burgerIcon.classList.add("burger-opened");
    navigation.classList.add("top-nav-opened");
}

function  closeBurger() {
    burgerIcon.classList.remove("burger-opened");
    navigation.classList.remove("top-nav-opened");
}

function toggleBurger() {
    console.log("toggleBurger")
    burgerIcon.classList.toggle("burger-opened");
    navigation.classList.toggle("top-nav-opened");
}

function makeDark() {
    const div = document.createElement("div");
    div.classList.add("plug");
    header.append(div);
    document.body.classList.add("fixed");
}

function makeLight() {
    const plug = document.querySelector(".plug");
    plug.remove();
    document.body.classList.remove("fixed");
}

navList.addEventListener("click", navHandler);

function navHandler(e) {
    console.log(e.target);
    if (e.target.closest(".top-nav__item")) {
        changeSelectedItem(e);
        closeBurger();
        makeLight();
    }
}

function changeSelectedItem(e) {
    [...navItems].forEach(item => item.classList.remove("top-nav__item-active"));
    e.target.closest(".top-nav__item").classList.add("top-nav__item-active");
}

