if (document.location.href.includes("pets")) {
let currentPage = 1;

const container = document.querySelector(".gallery");

const firstButton = document.querySelector(".pagination__first");
const prevButton = document.querySelector(".pagination__prev");
const currentButton = document.querySelector(".pagination__page");
const nextButton = document.querySelector(".pagination__next");
const lastButton = document.querySelector(".pagination__last");

let cards = selectCardsNumber();

(async () => {
    const pets = await getData();

    const allCardsIndexes = getUniqueIndexes(pets,cards.cardsPerPage,cards.pages);

    const changeView = () => {
    cards = selectCardsNumber();

    //Выводим картоки на 1 странице
    renderData(allCardsIndexes,pets);
    }

    const runListeners = () => {
        nextButton.addEventListener("click", showNext);
        function showNext() {
            currentPage += 1;
            changeButtonsStyle();
            renderData(allCardsIndexes,pets);
        }
    
        prevButton.addEventListener("click", showPrev);
        function showPrev() {
            currentPage -= 1;
            changeButtonsStyle();
            renderData(allCardsIndexes,pets);
        }
    
        lastButton.addEventListener("click", showLast);
        function showLast() {
            currentPage = cards.pages;
            changeButtonsStyle();
            renderData(allCardsIndexes,pets);
        }
    
        firstButton.addEventListener("click", showFirst);
        function showFirst() {
            currentPage = 1;
            changeButtonsStyle();
            renderData(allCardsIndexes,pets);
        }
    }

    changeView();
    runListeners();
    window.addEventListener('resize', () => {
        let currentCards = selectCardsNumber();
        if (currentCards.pages !== cards.pages) {
            resetCurrentPage();
            changeView();
        }
    })
    
})()

async function getData() {
    try { 
    const path = "./data/pets.json";
    const res = await fetch(path);
    const data = await res.json();
    return data;
    }
    catch(err) {
        console.error(err);
    }
    
}

function selectCardsNumber() {
    const windowWidth = window.innerWidth;
    if (windowWidth>=1209) {
        return {
            cardsPerPage: 8,
            pages: 6,
        };
    }
    if (windowWidth>=767) {
        return {
            cardsPerPage: 6,
            pages: 8,
        };
    }
    return {
        cardsPerPage: 3,
        pages: 16,
    };
}

function getRandom(array) {
    const min=0;
    const max=array.length-1;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getUniqueIndexes(array,cardsPerPage,pages) {
    // Создаем массив с 48 животными, каждого по 6
    const pets = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < 6; j++) {
        pets.push(i);
        }
    }

    const groups = [];

    let output=[];

    for (let i = 0; i < pages; i++) {
        const group = [];
        for (let j = 0; j < cardsPerPage; j++) {
            const petIndex = i + j * pages;
            group.push(pets[petIndex]);
        }
        shuffle(group);
        groups.push(group);
        output = groups.flat();
    }

    console.log("Массив генерится один раз при обновлении страницы",output);
    return output;
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function renderData(array,json) {
    const petsForPage = cards.cardsPerPage;

    const onePageItems=array.slice((currentPage-1) * petsForPage, (currentPage-1) * petsForPage + cards.cardsPerPage);
    const template = onePageItems.map(element => `<div class="gallery__item" data-id="${element}"><img class="pet__photo" src=${json[element].img} alt="pet"><div class="pet__name">${json[element].name}</div><button class="button button-secondary" type="button">Learn more</button></div>`);

    container.addEventListener("animationend", doAfterAnimation);
    
    container.classList.remove("make-visible");
    container.classList.add("make-hidden");

    function doAfterAnimation(e) {
        if (e.animationName === "make-hidden") {
        container.innerHTML=``;
        container.insertAdjacentHTML("afterbegin",template.join(""));
        container.classList.remove("make-hidden");
        container.classList.add("make-visible");
        }
    }
}

function changeButtonsStyle() {
    currentButton.innerText = currentPage;

    if (currentPage===1) {
        prevButton.classList.remove("state-available");
        prevButton.classList.add("state-disable");

        firstButton.classList.remove("state-available");
        firstButton.classList.add("state-disable");
    }

    if (currentPage>1) {
        prevButton.classList.remove("state-disable");
        prevButton.classList.add("state-available");

        firstButton.classList.remove("state-disable");
        firstButton.classList.add("state-available");
    }

    if (currentPage<cards.pages) {
        nextButton.classList.remove("state-disable");
        nextButton.classList.add("state-available");
        
        lastButton.classList.remove("state-disable");
        lastButton.classList.add("state-available");
    }
    if (currentPage===cards.pages) {
        lastButton.classList.remove("state-available");
        lastButton.classList.add("state-disable");

        nextButton.classList.remove("state-available");
        nextButton.classList.add("state-disable");
    }
}

function resetCurrentPage() {
    currentPage = 1;
    changeButtonsStyle();
}
}
