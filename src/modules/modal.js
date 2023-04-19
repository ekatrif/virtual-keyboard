export class Modal {
    constructor(classes) {
        this.classes = classes;
        this.modal = "";
        this.modalContent = "";
        this.closeButton = "";
        this.overlay = "";
    }

    buildModal(content) {        
        this.overlay = this.createNode(this.overlay,"div","overlay");

        this.modal = this.createNode(this.modal,"div",this.classes);

        this.modalWrapper = this.createNode(this.modalWrapper,"div","modal__wrapper");

        this.modalCloseButton = this.createNode(this.modalCloseButton,"div","modal__button");
        this.modalCloseButton.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/>
        </svg>
        `;
        this.setContent(content);

        this.appendElements();

        this.openModal();

        this.bindEvents();

    }

    createNode(node,element,...classes) {
        node = document.createElement(element);
        node.classList.add(classes);
        return node;
    };

    setContent(content) {
        this.modalWrapper.innerHTML = content;
    }

    appendElements() {
        this.overlay.append(this.modal);
        this.modal.append(this.modalCloseButton);
        this.modal.append(this.modalWrapper);
    }

    bindEvents() {
        this.modalCloseButton.addEventListener("click", this.closeModal);
        this.overlay.addEventListener("click", this.closeModal);
    }

    openModal() {
        //Анимация на плавное появление можалки
        this.modal.classList.add("make-visible");
        this.modal.classList.remove("make-hidden");

        //Присоединяем модалку к DOM
        document.body.append(this.overlay);

        //Фиксируем задник
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = "fixed";
    }

    closeModal(e) {
        if (e.target.classList.contains("overlay") || e.target.closest(".modal__button")) {

            //Останавливаем всплытие события, чтобы closeModal(e) сработл только один раз
            e.stopPropagation();
            //Анимация на плавное исчезновение модалки
            document.querySelector(".modal").classList.remove("make-visible");
            document.querySelector(".modal").classList.add("make-hidden");

            const doAfterAnimation = (e) => {
                if (e.animationName === "make-hidden") {

                //Получаем текущее значение top
                const scrollY = document.body.style.top;

                //Обнуляем стили body
                document.body.style.position = "";
                document.body.style.top = "";

                //Перематываем до нужного значения top
                window.scrollTo(0, parseInt(scrollY || '0') * -1);

                //Убираем overlay и заглушку у body
                document.querySelector(".overlay").remove();
                }
            }
            document.querySelector(".modal").addEventListener("animationend", doAfterAnimation);            
        }      
    }
}