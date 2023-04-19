import { Modal } from "./modal";
export const runModal = (data,containerClass,itemClass) => {
    const sliderContainer = document.querySelector(`.${containerClass}`);
    const sliderHandler = (e) => {
        if (e.target.closest(`.${itemClass}`)) {
            const currentIndex = e.target.closest(`.${itemClass}`).getAttribute("data-id");
            const content=`<img src="${data[currentIndex].img}" alt="${data[currentIndex].name}"><div class="modal__info"><div class="modal__title">${data[currentIndex].name}</div><div class="modal__subtitle">${data[currentIndex].type} - ${data[currentIndex].breed}</div><div class="modal__text">${data[currentIndex].description}</div><ul class="modal__list"><li class="modal__item"><span>Age: </span>${data[currentIndex].age}</li><li class="modal__item"><span>Inoculations: </span>${data[currentIndex].inoculations}</li><li class="modal__item"><span>Diseases: </span>${data[currentIndex].diseases}</li><li class="modal__item"><span>Parasites: </span>${data[currentIndex].parasites}</li></ul></div>`;
            
            //Нарисуем модалку
            const modal = new Modal("modal");
            modal.buildModal(content);
        }    
    }
        sliderContainer.addEventListener("click", sliderHandler);
}
