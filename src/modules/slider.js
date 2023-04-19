if (!document.location.href.includes("pets")) {

const sliderContainer = document.querySelector(".slider__container");
const prevButton = document.querySelector(".slider__prev");
const nextButton = document.querySelector(".slider__next");

(async () => {
    const pets = await getData();

    const state = {
        current: [],
        prev: [],
        next: [],
        cardsNumber: 0
    };

    //Посчитаем число карточек для отображения
    let cardsNumber = selectCardsNumber();

    const changeView = () => {
        cardsNumber = selectCardsNumber();
        state.cardsNumber = cardsNumber;

        //Сгенерируем индексы для отображения карточек на текущей странице
        const currentPets = getUniqueIndexes(pets,"current");
        state.current = currentPets;

        //Сгенерируем индексы для отображения карточек на next странице
        const nextPets = getUniqueIndexes(pets,"current");
        state.next = nextPets;

        //Сгенерируем индексы для отображения карточек на prev странице
        const prevPets = getUniqueIndexes(pets,"current");
        state.prev = prevPets;
        
        //Выведем карточки на страницу
        const allCardsIndexes = [...state.prev,...state.current,...state.next];
        renderData(allCardsIndexes,pets);

        //Генерим и отображаем карточки при листании
        prevButton.addEventListener("click", showPrev);
        nextButton.addEventListener("click", showNext);        

        sliderContainer.addEventListener("animationend", doAfterAnimation);        
    }

    changeView();

    window.addEventListener('resize', () => {
        cardsNumber = selectCardsNumber();
        if (cardsNumber !== state.cardsNumber) {
            changeView();
        }
    })

    function selectCardsNumber() {
        const windowWidth = window.innerWidth;
        if (windowWidth>=1279) {
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
    
    function getUniqueIndexes(array,stateName) {
        const currentPets=[];
        while (currentPets.length<cardsNumber) {
            let randomIndex = getRandom(array);
            if (!currentPets.includes(randomIndex) && !state[stateName].includes(randomIndex)) {
                currentPets.push(randomIndex);
            }
        }
        return currentPets;
    }
    
    function renderData(array,json) {
        const template = array.map((element) => `<div class="slider__item" data-id="${element}"><img class="pet__photo" src=${json[element].img} alt="pet"><div class="pet__name">${json[element].name}</div><button class="button button-secondary" type="button">Learn more</button></div>`);
        sliderContainer.innerHTML=``;
        sliderContainer.insertAdjacentHTML("afterbegin",template.join(""));
    }

    function showNext() {
        sliderContainer.classList.add("transition-right");
        // prevButton.removeEventListener("click", showPrev);
        // nextButton.removeEventListener("click", showNext);
    };

    function showPrev() {
        sliderContainer.classList.add("transition-left");
        // prevButton.removeEventListener("click", showPrev);
        // nextButton.removeEventListener("click", showNext);
    };

    function doAfterAnimation(e) {
        let movedItems;
        if (e.animationName === "move-right") {
            sliderContainer.classList.remove("transition-right");
            const nextItems = getUniqueIndexes(pets,"next");
            state.prev = state.current;
            state.current = state.next;
            state.next = nextItems;
            const allCardsIndexes = [...state.prev,...state.current,...state.next];
            renderData(allCardsIndexes,pets);
        } else {
            sliderContainer.classList.remove("transition-left");
            const prevItems = getUniqueIndexes(pets,"prev");
            state.next = state.current;
            state.current = state.prev;
            state.prev = prevItems;
            const allCardsIndexes = [...state.prev,...state.current,...state.next];
            renderData(allCardsIndexes,pets);
        }
    }

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

}


