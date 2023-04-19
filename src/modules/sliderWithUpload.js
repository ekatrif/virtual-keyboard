const state = {
    current: [],
    prev: [],
    next: []
};

const sliderContainer = document.querySelector(".slider__container");
const prevButton = document.querySelector(".slider__prev");
const nextButton = document.querySelector(".slider__next");

const cardsNumber = selectCardsNumber();

(async () => {
    const pets = await getData();

    //Сгенерируем индексы для отображения карточек на текущей странице
    const currentPets = getUniqueIndexes(pets);
    state.current = currentPets;
    //Выведем карточки на страницу
    renderData(currentPets,pets);

    //Генерим и отображаем карточки при листании
    nextButton.addEventListener("click", showNext);

    function showNext() {
        const nextItems = (!state.next.length) ? getUniqueIndexes(pets) : state.next;
        state.prev = state.current;
        state.current = nextItems;
        state.next = [];
        renderData(state.current,pets);
    }

    prevButton.addEventListener("click", showPrev);

    function showPrev() {
        const prevItems = (!state.prev.length) ? getUniqueIndexes(pets) : state.prev;
        state.next = state.current;
        state.current = prevItems;
        state.prev = [];
        renderData(state.current,pets);
    }
})()

function selectCardsNumber() {
    const windowWidth = window.innerWidth;
    if (windowWidth>=1280) {
        return 3;
    }
    if (windowWidth>767) {
        return 2;
    }
    return 1;
}

function getRandom(array) {
    const min=0;
    const max=array.length-1;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getUniqueIndexes(array) {
    const currentPets=[];
    while (currentPets.length<cardsNumber) {
        let randomIndex = getRandom(array);
        if (!currentPets.includes(randomIndex) && !state.current.includes(randomIndex)) {
            currentPets.push(randomIndex);
        }
    }
    return currentPets;
}

function renderData(array,json) {
    const template = array.map(element => `<div class="slider__item"><img class="pet__photo" src=${json[element].img} alt="pet"><div class="pet__name">${json[element].name}</div><button class="button button-secondary" type="button">Learn more</button></div>`);
    while (sliderContainer.firstChild) {
        sliderContainer.removeChild(sliderContainer.firstChild);
    }
    sliderContainer.insertAdjacentHTML("afterbegin",template);
}

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